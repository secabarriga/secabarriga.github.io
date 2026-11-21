# Site — Protocolo 4 Semanas

Landing page em React, TypeScript e Vite criada a partir dos PDFs reais do produto. O projeto é independente do frontend do PRESCRITOR e não altera a aplicação médica existente.

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

Preço, garantia e inventário ficam em `src/siteConfig.ts`. Confirme que esses dados coincidem com a oferta real antes de publicar.

## Conteúdo e assets

As imagens em `public/previews/` são renderizações de páginas dos PDFs fornecidos. Os arquivos completos não são publicados no site. A versão anterior da Parte 1 foi deliberadamente excluída.

## Publicação

O manifesto do Sites está em `.openai/hosting.json` e publica a pasta `dist/`. A primeira versão deve permanecer privada até a conclusão do [checklist da Cakto](./CAKTO-CHECKLIST.md).
