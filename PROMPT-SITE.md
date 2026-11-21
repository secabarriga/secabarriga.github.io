# Prompt de criação — Protocolo 4 Semanas

Crie uma página de vendas responsiva, rápida e acessível para o produto digital **Protocolo 4 Semanas**. O objetivo é converter visitantes em compradores sem recorrer a estética genérica de infoproduto, depoimentos fictícios, urgência inventada ou promessas garantidas de emagrecimento.

## Produto e fatos verificáveis

O pacote tem 4 PDFs e 79 páginas no total:

1. Parte 1 — Fundamentos e mapa do processo: 9 páginas.
2. Parte 2 — Treino progressivo em casa: 29 páginas, 15 exercícios explicados, sessões informadas de aproximadamente 25 a 50 minutos, circuitos, cardio, core, HIIT, Tabata e adaptações.
3. Parte 3 — Plano alimentar: 19 páginas, organização calórica, macronutrientes, cardápio de 7 dias, substituições, lista de compras e 8 preparos rápidos.
4. Expansão — 50 Receitas Fit: 22 páginas, com cafés, almoços, jantares, lanches, doces, marmitas e molhos; cada receita informa tempo, calorias e macros estimados.

Use apenas a versão escura e mais recente da Parte 1, identificada como `parte-1-apresentacao-protocolo-4-semanas (2).pdf`. A outra Parte 1 é uma versão anterior e não faz parte do pacote.

## Público

Adultos que querem organizar treino e alimentação, preferem treinar em casa e estão cansados de começar a semana sem saber o que fazer. Não presumir idade, condição clínica, gênero ou nível de experiência específico.

## Posicionamento central

“Um plano de quatro semanas para tirar treino e alimentação do improviso — com rotina progressiva em casa, cardápio organizado, lista de compras e 50 receitas para variar sem abandonar o processo.”

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
3. Hero com posicionamento, resumo verificável, CTA principal e pilha visual com as quatro capas reais.
4. Faixa de fatos: 4 PDFs, 79 páginas, 7 dias de cardápio e 50 receitas.
5. Seção de problema: informação solta versus plano organizado.
6. Conteúdo do pacote em quatro blocos editoriais, cada um com página real, quantidade de páginas e itens concretos.
7. Progressão das quatro semanas: ativação, progressão, pico metabólico e consolidação.
8. Galeria interativa de páginas reais dos PDFs.
9. Seção “para quem é / para quem não é”.
10. Oferta clara com preço, conteúdo, garantia e botão para o checkout hospedado na Cakto.
11. FAQ sem respostas evasivas.
12. Aviso de saúde legível.
13. CTA final e rodapé sem links quebrados.

## Copy e integridade

- Falar de organização, clareza, progressão e variedade.
- Não prometer perda de 2 a 4 kg, redução localizada, resultado garantido, preservação garantida de músculo ou mudança corporal em prazo determinado.
- Não inventar depoimentos, alunos, avaliações, selos, credenciais profissionais, estudos, estoque, cronômetros ou escassez.
- Não usar frases culpabilizantes como “sem desculpa” ou “o problema é você”.
- Informar que resultados variam conforme execução e fatores individuais.
- Informar que calorias e macros são estimativas.
- Exibir aviso de que o material é educativo e não substitui médico, nutricionista ou profissional de educação física.

## Oferta e Cakto

- Preço de referência da página fornecida: R$ 97,00, pagamento único.
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
