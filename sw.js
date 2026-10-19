const VERSAO = "255-9b658876";
const ARQUIVOS = ["./aluno/index.html","./orientador/index.html","./escolha/index.html","./online.js","./aluno.webmanifest","./orientador.webmanifest","./icon.png"];
// O service worker da versão hospedada (etapa 2, US-031). O `scripts/build-web.mjs` escreve na
// frente deste arquivo as duas constantes que ele lê — `VERSAO` (o carimbo e o resumo do que foi
// construído) e `ARQUIVOS` (a casca: as três páginas, o online.js, os manifestos e o ícone) —, então
// cada build com conteúdo novo é um service worker novo, e o navegador o instala ao lado do antigo.
//
// O que ele faz, e nada além disto:
//   - na instalação, guarda a casca inteira num cache com o nome da versão;
//   - na ativação, apaga os caches de versões anteriores;
//   - num pedido GET desta origem, responde do cache (cache-first) e, sem cópia, vai à rede e guarda
//     a resposta boa. Sem cópia e sem rede o pedido FALHA: não se fabrica página nenhuma (UT-780) —
//     é o erro do próprio navegador, que na primeira visita sem rede é o certo (US-031 EC-2);
//   - pedido de outra origem (o servidor do modo online) passa direto: ele não guarda dado de ninguém;
//   - a versão nova espera. Ela só assume quando a tela manda `skipWaiting` — o "Reiniciar agora" da
//     faixa, que não aparece com formulário aberto (US-031 AC-3) — ou quando todas as abas fecham.
//
// Sem telemetria, sem pedido próprio além da casca (BR-44, princípio 5 do CLAUDE.md).
/* global VERSAO, ARQUIVOS */
const CACHE = "missao-enem-" + VERSAO;

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys()
    .then(names => Promise.all(names.filter(n => n.startsWith("missao-enem-") && n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "skipWaiting") self.skipWaiting();
});

// Cache-first. A página é procurada sem a query (`?v=` de quem colou o link) e `aluno/` vale por
// `aluno/index.html`, que é o nome com que ela foi guardada.
function respond(request) {
  return caches.open(CACHE).then(cache => cache.match(request, { ignoreSearch: true }).then(hit => {
    if (hit) return hit;
    return fetch(request).then(response => {
      if (response && response.ok && response.type === "basic") cache.put(request, response.clone());
      return response;
    });
  }));
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith("/")) {
    const page = new Request(url.origin + url.pathname + "index.html");
    event.respondWith(respond(page));
    return;
  }
  event.respondWith(respond(req));
});
