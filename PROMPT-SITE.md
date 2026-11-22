# Prompt de criação — Protocolo 4 Semanas

Crie uma página de vendas responsiva, rápida e acessível para o produto digital **Protocolo 4 Semanas**. O objetivo é converter visitantes em compradores sem recorrer a estética genérica de infoproduto, depoimentos fictícios, urgência inventada ou promessas garantidas de emagrecimento.

## Produto e fatos verificáveis

O protocolo principal tem 3 PDFs e 57 páginas no total:

1. Parte 1 — Fundamentos e mapa do processo: 9 páginas.
2. Parte 2 — Treino progressivo em casa: 29 páginas, 15 exercícios explicados, sessões informadas de aproximadamente 25 a 50 minutos, circuitos, cardio, core, HIIT, Tabata e adaptações.
3. Parte 3 — Plano alimentar: 19 páginas, organização calórica, macronutrientes, cardápio de 7 dias, substituições, lista de compras e 8 preparos rápidos.

O ebook **50 Receitas Fit** não faz parte do protocolo principal. Ele é um adicional opcional de R$ 4,90 oferecido no checkout da Cakto. Tem 22 páginas, com cafés, almoços, jantares, lanches, doces, marmitas e molhos; cada receita informa tempo, calorias e macros estimados. O total da compra com o adicional é R$ 24,80.

Use apenas a versão escura e mais recente da Parte 1, identificada como `parte-1-apresentacao-protocolo-4-semanas (2).pdf`. A outra Parte 1 é uma versão anterior e não faz parte do pacote.

## Público

Adultos que querem organizar treino e alimentação, preferem treinar em casa e estão cansados de começar a semana sem saber o que fazer. Não presumir idade, condição clínica, gênero ou nível de experiência específico.

## Posicionamento central

“Um plano de quatro semanas para tirar treino e alimentação do improviso — com rotina progressiva em casa, cardápio organizado e lista de compras.”

Headline sugerida: **“Pare de improvisar. Comece com um plano.”**

## Direção visual

- Linguagem editorial, direta e humana; parecer um produto real, não um template gerado por IA.
- Paleta derivada dos próprios PDFs: preto carvão, vermelho profundo, âmbar, azul-ardósia e branco papel.
- Usar imagens reais renderizadas dos PDFs como principal prova visual.
- Composição assimétrica, tipografia forte, respiro e divisões editoriais.
- Evitar excesso de gradientes, glow, emojis, cards idênticos, ícones decorativos genéricos e animações gratuitas.
- Não usar fotos genéricas de academia, corpos, antes/depois ou imagens de banco que não representem o material.

## Estrutura de conversão

1. Barra discreta de estado da compra/entrega.
2. Cabeçalho com marca, navegação curta e CTA.
3. Hero com posicionamento, preço normal de R$ 99,90, preço promocional de R$ 19,90, CTA principal e pilha visual com as três capas incluídas.
4. Faixa de fatos: 3 PDFs, 57 páginas, 7 dias de cardápio e ebook opcional por mais R$ 4,90.
5. Seção de problema: informação solta versus plano organizado.
6. Conteúdo do protocolo principal em três blocos editoriais, cada um com página real, quantidade de páginas e itens concretos.
7. Progressão das quatro semanas: ativação, progressão, pico metabólico e consolidação.
8. Galeria interativa somente com páginas reais dos três PDFs incluídos.
9. Seção própria para o adicional opcional, usando capa e página real do ebook e informando R$ 4,90 e total de R$ 24,80.
10. Seção “para quem é / para quem não é”.
11. Oferta clara com preço normal riscado, preço promocional, conteúdo incluído, garantia e botão para o checkout hospedado na Cakto.
12. FAQ sem respostas evasivas, incluindo a diferença entre o protocolo e o ebook opcional.
13. Aviso de saúde legível.
14. CTA final e rodapé sem links quebrados.

## Copy e integridade

- Falar de organização, clareza, progressão e variedade.
- Não prometer perda de 2 a 4 kg, redução localizada, resultado garantido, preservação garantida de músculo ou mudança corporal em prazo determinado.
- Não inventar depoimentos, alunos, avaliações, selos, credenciais profissionais, estudos, estoque, cronômetros ou escassez.
- Não usar frases culpabilizantes como “sem desculpa” ou “o problema é você”.
- Informar que resultados variam conforme execução e fatores individuais.
- Informar que calorias e macros são estimativas.
- Exibir aviso de que o material é educativo e não substitui médico, nutricionista ou profissional de educação física.

## Oferta e Cakto

- Preço normal do protocolo principal: R$ 99,90.
- Preço promocional da Black Friday de fim de ano: R$ 19,90, pagamento único.
- Economia exibida: R$ 80,00.
- Adicional opcional no checkout: ebook 50 Receitas Fit por R$ 4,90.
- Total com o adicional: R$ 24,80.
- Não inventar data final, contador, estoque ou urgência. A campanha só permanece anunciada enquanto a oferta correspondente estiver ativa na Cakto.
- O checkout principal entrega somente os três PDFs do protocolo. O ebook deve ser liberado apenas quando o comprador aceitar o adicional.
- Garantia de referência: 7 dias. Deve coincidir com a política configurada no checkout.
- Todos os CTAs devem usar uma única variável/configuração para o link do checkout Cakto.
- O site nunca coleta cartão, CPF, telefone ou dados de pagamento; a compra ocorre no checkout hospedado da Cakto.
- Preservar apenas parâmetros de campanha permitidos ao abrir o checkout.
- Se o link ainda não estiver configurado, abrir um aviso honesto de pré-lançamento em vez de usar link quebrado.
- A entrega por e-mail só pode ser anunciada como ativa depois de uma compra de teste confirmar o recebimento.

## Implementação

- React, TypeScript e Vite.
- HTML semântico, navegação por teclado, foco visível, contraste adequado e suporte a `prefers-reduced-motion`.
- Layout testado em desktop e mobile.
- SEO básico completo; manter `noindex` enquanto o checkout e a entrega não estiverem homologados.
- Não carregar scripts de terceiros desnecessários, pixels ou analytics sem aprovação.
- Imagens otimizadas e carregamento adiado fora do hero.
- Centralizar preço, URL da Cakto, estado da entrega e e-mail de suporte.
- Incluir testes para inventário de páginas, validação HTTPS do checkout e passagem segura de parâmetros de campanha.

## Critério de conclusão

Entregar uma página visualmente autoral, sem conteúdo fictício, sem links quebrados, com build, verificação de tipos e testes aprovados. Publicar inicialmente em acesso privado e só liberar ao público após configurar e testar a oferta, o checkout, a entrega por e-mail, o suporte e os textos jurídicos.
