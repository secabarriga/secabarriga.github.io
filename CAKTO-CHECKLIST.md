# Checklist de lançamento na Cakto

O site está preparado para enviar a compra ao checkout hospedado da Cakto. Ele não processa pagamentos e não envia os PDFs por conta própria.

## Produto e entrega

1. Cadastre um produto digital chamado “Protocolo 4 Semanas”.
2. Confirme o preço final e a política de garantia.
3. Escolha **Acesso por e-mail** como forma de entrega, ou use a área de membros da Cakto caso prefira centralizar os downloads.
4. Inclua somente estes quatro arquivos:
   - `parte-1-apresentacao-protocolo-4-semanas (2).pdf`;
   - `parte-2-treino-protocolo-4-semanas (1).pdf`;
   - `parte-3-dieta-protocolo-4-semanas (1).pdf`;
   - `50-receitas-fit-expansao-oficial-do-protocolo-4-semanas.pdf`.
5. Não inclua `parte-1-apresentacao-protocolo-4-semanas.pdf`: é a versão anterior.
6. Personalize o checkout com a mesma paleta e confirme o resultado em desktop e celular.
7. Copie o link exato da oferta em **Produtos → Ver links**.

## Conectar o site

Crie `.env.production` a partir de `.env.example`:

```dotenv
VITE_CAKTO_CHECKOUT_URL=https://pay.cakto.com.br/SEU-LINK
VITE_DELIVERY_READY=false
VITE_SUPPORT_EMAIL=seu-email-de-suporte@dominio.com
```

Depois, execute uma compra de teste e verifique:

- valor e formas de pagamento;
- página de confirmação;
- e-mail “Pagamento Confirmado”;
- presença dos quatro PDFs ou do link de acesso;
- funcionamento do download em celular e computador;
- remetente e canal de suporte;
- procedimento de reembolso.

Somente após a entrega funcionar, altere `VITE_DELIVERY_READY=true`, gere um novo build e remova o `noindex` do `index.html` e o bloqueio de `public/robots.txt` quando o site for realmente aberto ao público.

## Referências oficiais

- Cadastro e formas de entrega: <https://ajuda.cakto.com.br/pt-br/articles/86-como-cadastrar-o-meu-produto-na-cakto>
- Localizar o link do checkout: <https://ajuda.cakto.com.br/pt-br/articles/79-como-pegar-o-link-de-checkout-do-meu-produto-na-cakto>
- Como o comprador acessa o produto: <https://ajuda.cakto.com.br/pt-br/articles/49-como-acessar-o-produto-que-comprei>
