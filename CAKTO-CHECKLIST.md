# Checklist de lançamento na Cakto

O site está preparado para enviar a compra ao checkout hospedado da Cakto. Ele não processa pagamentos e não envia os PDFs por conta própria.

Página de vendas definitiva: <https://secabarriga.github.io/>.

## Produto e entrega

1. Cadastre um produto digital chamado “Protocolo 4 Semanas”.
2. Configure a oferta principal por **R$ 19,90** e confirme a política de garantia. O site apresenta **R$ 99,90** como preço normal da campanha.
3. Escolha **Acesso por e-mail** como forma de entrega, ou use a área de membros da Cakto caso prefira centralizar os downloads.
4. Na entrega do produto principal, inclua somente estes três arquivos:
   - `parte-1-apresentacao-protocolo-4-semanas (2).pdf`;
   - `parte-2-treino-protocolo-4-semanas (1).pdf`;
   - `parte-3-dieta-protocolo-4-semanas (1).pdf`.
5. Não inclua `parte-1-apresentacao-protocolo-4-semanas.pdf`: é a versão anterior.
6. Cadastre o ebook **50 Receitas Fit** como adicional/order bump de **R$ 4,90** e associe somente o arquivo `50-receitas-fit-expansao-oficial-do-protocolo-4-semanas.pdf` à entrega desse adicional.
7. Confirme que o ebook só é liberado quando o comprador marca o adicional no checkout.
8. Personalize o checkout com a mesma paleta e confirme o resultado em desktop e celular.
9. Copie o link exato da oferta principal em **Produtos → Ver links**. O site usa esse link; o adicional aparece dentro do checkout.

> **Atenção antes de publicar:** a Central de Ajuda da Cakto informa atualmente valor mínimo de **R$ 5,00** para cadastrar um produto. Como o ebook foi definido em **R$ 4,90**, confirme no seu painel se esse valor é aceito para a oferta usada como order bump. Se a plataforma bloquear, não ative o checkout até decidir entre solicitar orientação ao suporte ou ajustar o adicional para R$ 5,00 também no site.

## Conectar o site

Crie `.env.production` a partir de `.env.example`:

```dotenv
VITE_CAKTO_CHECKOUT_URL=https://pay.cakto.com.br/SEU-LINK
VITE_DELIVERY_READY=false
VITE_SUPPORT_EMAIL=seu-email-de-suporte@dominio.com
```

Na publicação do GitHub Pages, cadastre os mesmos três valores como **Repository variables** em **Settings → Secrets and variables → Actions → Variables** e execute novamente o workflow `Deploy GitHub Pages`.

Depois, execute uma compra de teste e verifique:

- compra sem adicional: total de R$ 19,90 e acesso somente aos três PDFs principais;
- compra com adicional: total de R$ 24,80 e acesso aos três PDFs mais o ebook de receitas;
- valor e formas de pagamento nos dois cenários;
- página de confirmação;
- e-mail “Pagamento Confirmado”;
- arquivos ou links de acesso corretos em cada cenário;
- funcionamento do download em celular e computador;
- remetente e canal de suporte;
- procedimento de reembolso.

Somente após a entrega funcionar, altere `VITE_DELIVERY_READY=true`, gere um novo build e remova o `noindex` do `index.html` e o bloqueio de `public/robots.txt` quando o site for realmente aberto ao público.

## Referências oficiais

- Configurar order bump: <https://ajuda.cakto.com.br/pt-br/articles/16-como-funcionam-os-order-bumps-na-cakto>
- Cadastro e formas de entrega: <https://ajuda.cakto.com.br/pt-br/articles/86-como-cadastrar-o-meu-produto-na-cakto>
- Localizar o link do checkout: <https://ajuda.cakto.com.br/pt-br/articles/79-como-pegar-o-link-de-checkout-do-meu-produto-na-cakto>
- Como o comprador acessa o produto: <https://ajuda.cakto.com.br/pt-br/articles/49-como-acessar-o-produto-que-comprei>
