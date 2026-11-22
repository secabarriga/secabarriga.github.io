# Site — Protocolo 4 Semanas

Landing page em React, TypeScript e Vite criada a partir dos PDFs reais do produto. O projeto é independente do frontend do PRESCRITOR e não altera a aplicação médica existente.

A oferta principal reúne 3 PDFs e 57 páginas, com preço normal de R$ 99,90 e preço promocional de R$ 19,90 na campanha de fim de ano. O ebook **50 Receitas Fit** é um adicional opcional de R$ 4,90 oferecido no checkout da Cakto; com ele, o total é R$ 24,80.

## Rodar localmente

```powershell
pnpm install
pnpm dev
```

O servidor local usa `http://127.0.0.1:4183`.

## Validar

```powershell
pnpm typecheck
pnpm test
pnpm build
```

## Configurar a oferta

Copie `.env.example` para `.env.production` e preencha:

- `VITE_CAKTO_CHECKOUT_URL`: link HTTPS da oferta na Cakto;
- `VITE_DELIVERY_READY`: `true` somente depois de testar o e-mail de entrega;
- `VITE_SUPPORT_EMAIL`: e-mail público de suporte.

Preços, garantia, inventário do protocolo e dados do ebook opcional ficam em `src/siteConfig.ts`. Confirme que esses dados coincidem com a oferta real antes de publicar. O link deve apontar para a oferta principal; a seleção do ebook acontece como adicional no próprio checkout.

## Conteúdo e assets

As imagens em `public/previews/` são renderizações de páginas dos PDFs fornecidos. Os arquivos completos não são publicados no site. A versão anterior da Parte 1 foi deliberadamente excluída.

## Publicação

O manifesto do Sites está em `.openai/hosting.json` e publica a pasta `dist/`. A primeira versão deve permanecer privada até a conclusão do [checklist da Cakto](./CAKTO-CHECKLIST.md).
