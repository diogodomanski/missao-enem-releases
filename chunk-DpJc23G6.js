import{Ba as vo,Di as Gi,Fa as se$1,Ga as za,Ha as w,Ia as te,In as ie$1,K as J,La as tn,Lt as To,Ma as pi,Mr as ve$1,Ni as K,Oa as ne$1,Pn as ia,Ti as Fe,Yi as U,di as A,dr as pe$1,fa as de$1,gi as B,ha as fi,ki as I$1,kr as tu,m as Ce$2,mi as Ae,oa as Zi,pa as ee,si as $,st as Ne,ti as zn,xa as jd,xi as D,ya as h,yi as Ce$1,za as ue$1}from"./main.js";import{t as n}from"./chunk-Bax5iZOM.js";import{n as Le,t as I$2}from"./chunk-BPyWIDKM.js";import{t as d}from"./chunk-0csOi3RF.js";var pe=[`preparar`,`reserva`];var re=o=>pe.includes(o);var ne=`corrigir`;var I=[{titulo:`O caminho do domingo`,modelos:[{id:`preparar`,rotulo:`Preparar o encontro no Claude Code (skill)`,dica:`Cole no Claude Code aberto na pasta do projeto. Ele corrige a redação (ou reaproveita a correção de reserva), lê o briefing, os blocos, os repertórios e a rotina. A resposta volta aqui em Colar o preparo: a ficha se preenche onde estiver vazia, o roteiro ganha as perguntas e o card Parecer da redação ganha o parecer para o aluno.`}]},{titulo:`Antes da chamada, se quiser mais`,modelos:[{id:`briefing`,rotulo:`Gerar perguntas difíceis para o briefing`,dica:`Cole no Claude, no chat, com a busca na web ligada. As perguntas servem no bloco de 25 a 35 minutos; se quiser guardar, cole abaixo em Resposta do Claude.`},{id:`reserva`,rotulo:`Corrigir de reserva no Claude Code (skill)`,dica:`Cole no Claude Code aberto na pasta do projeto. Ele corrige com dois leitores cegos e devolve o bloco da ficha: cole abaixo em Resposta do Claude e lance C1–C5 como nota externa.`},{id:`corrigir`,rotulo:`Avaliar a redação`,dica:`Cole no Claude, no chat. Leia a resposta e, se quiser guardar, cole abaixo em Resposta do Claude; as notas você lança na ficha à mão.`}]},{titulo:`Depois da chamada`,modelos:[{id:`motivador`,rotulo:`Montar a proposta de redação da semana`,dica:`Cole no Claude, no chat. O que voltar é a proposta da próxima redação, pronta para você mandar pelo WhatsApp — ela não fica guardada aqui.`},{id:`coletanea`,rotulo:`Converter a coletânea desta prova no formato do acervo`,dica:`Cole no Claude, no chat, com a prova ao lado (ou o PDF dela anexado) no lugar do marcador. O que voltar é o bloco JSON da coletânea: traga-o para o Acervo de temas, na Coletânea do tema, em Colar uma coletânea.`},{id:`reescrita`,rotulo:`Comparar parágrafo original e reescrito`,dica:`Cole no Claude, no chat, com o parágrafo original e o reescrito no lugar dos marcadores. Se quiser guardar a resposta, cole abaixo em Resposta do Claude.`}]},{titulo:`De vez em quando`,modelos:[{id:`evolucao`,rotulo:`Analisar a evolução entre redações`,dica:`Cole no Claude, no chat. Cole a resposta abaixo em Resposta do Claude: é o histórico que você relê na semana seguinte.`}]}];var me=I.flatMap(o=>o.modelos);var ie=o=>me.find(e=>e.id===o)?.dica??``;function se(o,e){return o===`corrigir`?`${e.ctx}

Avalie a reda\xE7\xE3o abaixo segundo a matriz de refer\xEAncia do ENEM (compet\xEAncias C1 a C5, cada uma de 0 a 200). Avalie apenas os aspectos marcados:
${e.aspectos||`- avaliação geral`}

Formato da resposta:
1. Para cada aspecto marcado, 2 a 4 linhas com exemplos citados do texto.
2. UMA for\xE7a principal (uma frase).
3. UM ajuste principal para a pr\xF3xima reda\xE7\xE3o (uma frase), coerente com o foco da semana.
4. Se eu marquei nota estimada: tabela C1\u2013C5 e total, com uma justificativa curta por compet\xEAncia.
N\xE3o reescreva a reda\xE7\xE3o inteira. N\xE3o liste mais de um ajuste principal.${e.redacao}`:o===`motivador`?`${e.ctx}

Monte uma proposta de reda\xE7\xE3o no formato do ENEM para esse tema: instru\xE7\xE3o padr\xE3o, 3 textos motivadores curtos (at\xE9 120 palavras cada, com fonte plaus\xEDvel e ano), sendo um dado quantitativo, um trecho de lei ou documento oficial e um texto de opini\xE3o ou reflex\xE3o. N\xE3o escreva a reda\xE7\xE3o e n\xE3o d\xEA a tese pronta.`:o===`coletanea`?`Converta a colet\xE2nea de uma proposta de reda\xE7\xE3o do ENEM no formato que o meu painel de orienta\xE7\xE3o importa.

Entrada: os textos de apoio como aparecem na prova, com os r\xF3tulos do Inep (Texto I, Texto II\u2026) e as linhas de fonte. Pode vir colado de um PDF, com a quebra de linha da diagrama\xE7\xE3o.

Sa\xEDda: um bloco JSON e nada mais, nesta forma exata:

{"apoio":[{"rotulo":"Texto I","corpo":"O texto transcrito da prova.","fonte":"Autor, ve\xEDculo, data."}]}

Regras:
- Transcreva, n\xE3o reescreva. O corpo \xE9 o texto da prova palavra por palavra: n\xE3o resuma, n\xE3o atualize dado, n\xE3o corrija o original.
- Desfa\xE7a a diagrama\xE7\xE3o: palavra partida no fim da linha volta inteira, e cada par\xE1grafo volta a ser uma linha s\xF3.
- "rotulo" \xE9 o r\xF3tulo do Inep daquele texto. "fonte" \xE9 a linha de atribui\xE7\xE3o como est\xE1 na prova; sem fonte, use "".
- No m\xE1ximo ${6} textos, que \xE9 o que uma prova do Inep traz. R\xF3tulo at\xE9 ${pe$1.rotulo} caracteres, texto at\xE9 ${pe$1.corpo}, fonte at\xE9 ${pe$1.fonte}. Texto que passe do limite: corte o fim e termine com "[\u2026]".
- Texto que na prova \xE9 imagem (gr\xE1fico, tabela, cartum, foto): escreva no corpo o que ele mostra em palavras \u2014 o t\xEDtulo, os n\xFAmeros e a legenda \u2014, porque aqui s\xF3 entra texto.
- N\xE3o inclua o comando da prova ("A partir da leitura dos textos\u2026"), o tema nem a instru\xE7\xE3o de escrita: nada disso \xE9 texto de apoio.

A PROPOSTA:
"""
[COLE AQUI A COLET\xC2NEA DA PROVA, OU ANEXE O PDF DELA]
"""`:o===`briefing`?`${e.ctx}

O aluno vai apresentar em 3 minutos um briefing oral sobre uma not\xEDcia da semana (${e.brief||`tema livre`}). O aluno j\xE1 domina ingl\xEAs e se interessa por Rela\xE7\xF5es Internacionais e pol\xEDtica. Gere: (a) 3 sugest\xF5es de not\xEDcias recentes que poderiam ser escolhidas (use busca na web); (b) para cada uma, 3 perguntas dif\xEDceis que eu posso fazer para testar se a not\xEDcia foi entendida: quem ganha, quem perde e como o Brasil \xE9 afetado; (c) uma frase indicando para qual fam\xEDlia de temas de reda\xE7\xE3o aquela not\xEDcia serve de repert\xF3rio.`:o===`reescrita`?`${e.ctx}

O ajuste combinado na semana passada foi: "${e.ajuste||`[ajuste]`}". Compare o par\xE1grafo original e o par\xE1grafo reescrito abaixo. Diga em at\xE9 6 linhas se o ajuste foi feito, o que melhorou, o que ainda falta, e d\xEA uma vers\xE3o do par\xE1grafo com apenas as mudan\xE7as m\xEDnimas necess\xE1rias (sem reescrever o estilo do aluno).

ORIGINAL:
"""
[COLE O PAR\xC1GRAFO ORIGINAL]
"""

REESCRITO:
"""
[COLE O PAR\xC1GRAFO REESCRITO]
"""`:`${e.ctx}

Hist\xF3rico das reda\xE7\xF5es at\xE9 agora:
${e.historico||`[sem notas lançadas]`}${e.estudo}

Com base nisso, diga: (1) qual compet\xEAncia \xE9 o gargalo real, (2) se os ajustes combinados est\xE3o sendo incorporados, (3) qual deve ser o \xFAnico foco das pr\xF3ximas duas semanas, (4) uma coisa que eu devo parar de fazer ou come\xE7ar a fazer nos encontros. M\xE1ximo 12 linhas.`}var ue=(o,e)=>e.titulo;var le=(o,e)=>e.id;function ge(o,e){if(o&1&&(B(0,`option`,13),A(1),K()),o&2){let a=e.$implicit,t=w(2);Ae(`value`,a.id)(`selected`,a.id===t.session.modeloPrompt()),D(),U(a.rotulo)}}function Ce(o,e){if(o&1&&(B(0,`optgroup`,4),fi(1,ge,2,3,`option`,13,le),K()),o&2){let a=e.$implicit;Ae(`label`,a.titulo),D(),pi(a.modelos)}}function fe(o,e){if(o&1&&(B(0,`p`,5),A(1),K()),o&2){let a=w();D(),U(a.dica())}}function he(o,e){if(o&1){let a=Ce$1();B(0,`label`)(1,`input`,15),se$1(`change`,function(l){let c=ue$1(a).$implicit,p=w(2);return de$1(p.aspecto(c.id,l.target.checked))}),K(),A(2),K()}if(o&2){let a=e.$implicit,t=w(2);za(`on`,t.marcado(a.id)),D(),Ae(`checked`,t.marcado(a.id)),Fe(`data-a`,a.id),D(),U(a.rotulo)}}function ve(o,e){if(o&1&&(B(0,`div`,6),fi(1,he,3,5,`label`,14,le),K()),o&2){let a=w();D(),pi(a.aspectos)}}function xe(o,e){if(o&1){let a=Ce$1();B(0,`label`,7),A(1,`Instrução extra (opcional) `),B(2,`input`,16),se$1(`input`,function(l){ue$1(a);let c=w();return de$1(c.extra.set(l.target.value))}),K()()}if(o&2){let a=w();D(2),Ae(`value`,a.extra())}}function be(o,e){if(o&1&&(B(0,`p`,11),A(1),K()),o&2){let a=w();D(),U(a.preparoStat())}}var de=class o{rota=h(tn);router=h(vo);code=h(Zi);copiador=h(d);clock=h(n);state=h(Le);session=h(I$2);grupos=I;aspectos=zn.map(e=>({id:e[0],rotulo:e[1]}));extra=I$1(``);n=this.session.current;modelo=this.session.modeloPrompt;comando=$(()=>re(this.modelo()));comAspectos=$(()=>this.modelo()===ne);dica=$(()=>ie(this.modelo()));resposta=$(()=>String(this.state.semana(this.n()).ai??``));preparoStat=$(()=>this.state.semana(this.n()).prep?`O preparo da semana ${this.n()} j\xE1 est\xE1 aplicado: a ficha, o roteiro e o parecer vieram dele.`:``);constructor(){let e=this.rota.snapshot.queryParamMap;e.get(`copiar`)&&(this.session.modeloPrompt.set(`preparar`),queueMicrotask(()=>{this.copia()})),e.get(`colar`)&&queueMicrotask(()=>this.cola())}escolhe(e){this.session.modeloPrompt.set(e)}marcado(e){return this.state.state().aspects.includes(e)}aspecto(e,a){this.state.aspecto(e,a)}guardaResposta(e){this.state.resposta(this.n(),e)}texto(){let e=this.n(),a=this.modelo(),t=Ce$2(this.state.edition,this.state.ciclo,e);if(a===`preparar`)return`/preparar-encontro ${e}
${JSON.stringify(tu(this.state.state(),e,this.state.edition,{agora:this.clock.now().getTime(),cycleId:this.state.ciclo}))}`;if(a===`reserva`){let p=String(this.state.semana(e).redacao??``),O=this.state.dados()?.weeks?.[String(e)]?.limpo??null,x=(O?.linhas??[]).map(b=>String(b??``)),M=x.some(b=>b.trim())&&(!ia(p)||O?.fim===!0)?`FOLHA PASSADA A LIMPO

${x.join(`
`)}${ia(p)?`

RASCUNHO DE APOIO

${p}`:``}`:ia(p)?p:`[COLE A REDAÇÃO AQUI]`;return`/corrigir-redacao ${e}
Tema: ${t.tema}

${M}`}let l=se(a,this.ctx()),c=this.extra().trim();return c?`${l}

Instru\xE7\xE3o extra: ${c}`:l}ctx(){let e=this.n(),a=Ce$2(this.state.edition,this.state.ciclo,e),t=this.state.dados(),[c,p,O]=this.state.edition.datas.prova1.split(`-`),x=String(this.state.semana(e).redacao??``),j=J(this.state.edition,this.state.ciclo).filter(i=>!i.final).map(i=>{let q=this.state.semana(i.n).f??{};if(!q.nota)return null;let g=ce=>q[ce]||`-`;return`Semana ${i.n}: nota ${q.nota} (C1 ${g(`c1`)}, C2 ${g(`c2`)}, C3 ${g(`c3`)}, C4 ${g(`c4`)}, C5 ${g(`c5`)}); for\xE7a: ${g(`forca`)}; ajuste: ${g(`ajuste`)}`}).filter(Boolean).join(`
`),S=t?ie$1(t,e):[],M=i=>`- ${i.dia!==null?ve$1[i.dia]+` · `:``}${Ne(i)}${i.conteudo?` · `+i.conteudo:``}${i.min?` · `+i.min+` min`:``}`,b=`

O que o aluno estudou nesta semana:
`+(S.length?S.map(M).join(`
`)+`
Total: ${To(S)} min`:`Nenhum bloco de estudo registrado nesta semana.`);return{ctx:`Contexto: oriento um aluno de 17 anos, 3\xBA ano do ensino m\xE9dio, que far\xE1 a reda\xE7\xE3o do ENEM em ${Number(O)} de ${ye[Number(p)-1]} de ${c}. Fazemos um encontro semanal por chamada com uma reda\xE7\xE3o por semana. Responda em portugu\xEAs, de forma objetiva, sem elogios gen\xE9ricos.
Tema da semana: "${a.tema}".
Foco de corre\xE7\xE3o desta semana: ${a.foco}
Repert\xF3rio-alvo sugerido: ${a.rep||`livre`}.`,redacao:x?`

REDA\xC7\xC3O DO ALUNO:
"""
${x}
"""`:`

[COLE A REDA\xC7\xC3O AQUI]`,aspectos:zn.filter(i=>this.state.state().aspects.includes(i[0])).map(i=>`- `+i[1]).join(`
`),brief:a.brief,ajuste:e>1?String((this.state.semana(e-1).f??{}).ajuste??``):``,historico:j,estudo:b}}async copia(){let e=this.comando();await this.copiador.copia(this.texto(),{titulo:e?`Comando para o Claude Code`:`Prompt para o Claude`,feito:e?`Comando copiado. Cole no Claude Code, na pasta do projeto.`:`Prompt copiado. Cole no Claude.`}),this.modelo()===`preparar`&&(this.session.cmdCopiado.set(!0),this.router.navigate([`/orientador`]))}cola(){this.code.askCode(`Colar o preparo da semana ${this.n()}`,`Cole o bloco JSON que a skill /preparar-encontro devolveu. Pode colar a resposta inteira: o bloco é achado dentro dela.`,e=>{let a=this.state.aplicarPreparo(e);return a||this.router.navigate([`/orientador`]),a},`Aplicar o preparo`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=ne$1({type:o,selectors:[[`app-ia`]],decls:25,vars:7,consts:[[`tabindex`,`-1`],[1,`muted`],[`data-help`,`oIa`,`aria-label`,`Ajuda: preparar com o Claude`,1,`help`],[3,`change`],[3,`label`],[1,`muted`,`mt`,`dica`],[1,`chk`,`mt`],[1,`mt`],[1,`actions`,`mt`],[`type`,`button`,1,`primary`,3,`click`],[`type`,`button`,3,`click`],[1,`muted`,`mt`],[`placeholder`,`Fica guardada nesta semana, junto com a ficha.`,3,`input`,`value`],[3,`value`,`selected`],[3,`on`],[`type`,`checkbox`,3,`change`,`checked`],[`maxlength`,`300`,`placeholder`,`ex.: “ademais” se repete; foque nisso`,3,`input`,`value`]],template:function(a,t){a&1&&(B(0,`h2`,0),A(1,`Preparar com o Claude `),B(2,`span`,1),A(3),K(),B(4,`button`,2),A(5,`?`),K()(),B(6,`p`,1),A(7,`Antes do encontro: copie um prompt, rode no Claude, cole a resposta.`),K(),B(8,`label`),A(9,`Modelo de prompt `),B(10,`select`,3),se$1(`change`,function(c){return t.escolhe(c.target.value)}),fi(11,Ce,3,1,`optgroup`,4,ue),K()(),ee(13,fe,2,1,`p`,5),ee(14,ve,3,0,`div`,6),ee(15,xe,3,1,`label`,7),B(16,`div`,8)(17,`button`,9),se$1(`click`,function(){return t.copia()}),A(18),K(),B(19,`button`,10),se$1(`click`,function(){return t.cola()}),A(20,`Colar o preparo`),K()(),ee(21,be,2,1,`p`,11),B(22,`label`,7),A(23,`Resposta do Claude (cole aqui) `),B(24,`textarea`,12),se$1(`input`,function(c){return t.guardaResposta(c.target.value)}),K()()),a&2&&(D(3),jd(`semana `,t.n()),D(8),pi(t.grupos),D(2),te(t.dica()?13:-1),D(),te(t.comAspectos()?14:-1),D(),te(t.comando()?-1:15),D(3),U(t.comando()?`Copiar o comando`:`Copiar prompt`),D(3),te(t.preparoStat()?21:-1),D(3),Ae(`value`,t.resposta()))},dependencies:[Gi],styles:[`[_nghost-%COMP%]{display:block;max-width:72ch}label[_ngcontent-%COMP%]{display:grid;gap:4px;font-size:14px;color:var(--%NS%muted)}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font:inherit;color:var(--%NS%ink);background:var(--%NS%field);border:1px solid var(--%NS%field-line);border-radius:10px;padding:10px;min-height:44px}textarea[_ngcontent-%COMP%]{min-height:140px;line-height:1.5;resize:vertical}.chk[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.chk[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;font-size:13px;padding:6px 12px;border-radius:99px;border:1px solid var(--%NS%line);background:var(--%NS%surface);color:var(--%NS%muted);cursor:pointer;min-height:44px}.chk[_ngcontent-%COMP%]   label.on[_ngcontent-%COMP%]{background:var(--%NS%green-soft);color:var(--%NS%green);border-color:transparent}`]})};var ye=[`janeiro`,`fevereiro`,`março`,`abril`,`maio`,`junho`,`julho`,`agosto`,`setembro`,`outubro`,`novembro`,`dezembro`];export{de as PrepararComClaude};