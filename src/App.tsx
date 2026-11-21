import { useEffect, useRef, useState, type ReactNode } from "react";

import {
  buildCheckoutUrl,
  DELIVERY_READY,
  PRODUCT,
  SUPPORT_EMAIL,
  type ProductModule,
} from "./siteConfig";

type CheckoutActionProps = {
  checkoutUrl: string | null;
  onMissingCheckout: () => void;
  children: ReactNode;
  className?: string;
};

type Preview = {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const previews: Preview[] = [
  {
    id: "mapa",
    shortLabel: "Mapa",
    title: "As quatro etapas em uma visão",
    description:
      "Ativação, progressão, pico metabólico e consolidação organizadas para você saber o foco de cada semana.",
    image: "/previews/apresentacao-mapa.jpg",
    alt: "Página do material com o mapa das quatro semanas",
  },
  {
    id: "estrutura",
    shortLabel: "Treino",
    title: "Uma rotina que já vem montada",
    description:
      "A estrutura semanal distribui circuitos, cardio, core e descanso com duração estimada para cada dia.",
    image: "/previews/treino-estrutura.jpg",
    alt: "Página do treino com a estrutura da semana em tabela",
  },
  {
    id: "semana",
    shortLabel: "Sessões",
    title: "Séries, repetições e descanso",
    description:
      "Cada sessão mostra o que executar, quantas rodadas fazer e quanto descansar entre os exercícios.",
    image: "/previews/treino-semana.jpg",
    alt: "Página do treino com exercícios, séries e repetições",
  },
  {
    id: "cardapio",
    shortLabel: "Cardápio",
    title: "Sete dias para sair do improviso",
    description:
      "Os exemplos de refeições vêm organizados por dia, porção e estimativa calórica.",
    image: "/previews/dieta-cardapio.jpg",
    alt: "Página do plano alimentar com um cardápio diário",
  },
  {
    id: "receitas",
    shortLabel: "Receitas",
    title: "Variedade para continuar",
    description:
      "As receitas apresentam ingredientes, modo de preparo, tempo e macronutrientes estimados por porção.",
    image: "/previews/receitas-pagina.jpg",
    alt: "Página do ebook de receitas com preparos de café da manhã",
  },
];

const weeks = [
  {
    number: "01",
    name: "Ativação",
    copy: "Ajuste de técnica, construção de rotina e intensidade moderada para começar com consciência.",
  },
  {
    number: "02",
    name: "Progressão",
    copy: "Aumento gradual de volume e intensidade para dar sequência ao que foi construído.",
  },
  {
    number: "03",
    name: "Pico metabólico",
    copy: "Sessões mais intensas, com protocolos intervalados descritos passo a passo no material.",
  },
  {
    number: "04",
    name: "Consolidação",
    copy: "Fechamento do ciclo com o maior volume do plano e foco em sustentar a execução.",
  },
];

const faqs = [
  {
    question: "Preciso de academia ou equipamento?",
    answer:
      "A base do plano usa exercícios com o peso do corpo e foi pensada para treinar em casa. O material também cita equipamentos como opções para algumas variações, não como exigência para começar.",
  },
  {
    question: "Quanto tempo dura cada treino?",
    answer:
      "As sessões informadas no plano variam, em geral, de 25 a 50 minutos conforme o dia e a etapa da progressão.",
  },
  {
    question: "Quem está começando consegue acompanhar?",
    answer:
      "O ebook apresenta reduções de rodadas, alternativas para exercícios de impacto e ajustes de descanso. Ainda assim, cada pessoa deve respeitar sua condição e buscar avaliação profissional quando necessário.",
  },
  {
    question: "Como vou receber os PDFs?",
    answer: DELIVERY_READY
      ? "Depois que o pagamento for aprovado pela Cakto, as instruções de acesso são enviadas automaticamente para o e-mail usado no checkout."
      : "A entrega automática por e-mail será ativada na Cakto antes do lançamento público desta página.",
  },
  {
    question: "O protocolo garante um resultado específico?",
    answer:
      "Não. Resultados variam de acordo com execução, alimentação, sono, histórico, condição de saúde e outros fatores individuais. A proposta é oferecer organização e orientação educativa, não uma promessa de resultado.",
  },
  {
    question: "Posso usar se tenho uma condição de saúde?",
    answer:
      "O material não substitui médico, nutricionista ou profissional de educação física. Pessoas com lesões, condições pré-existentes, uso de medicamentos ou longo período sem atividade devem buscar orientação antes de começar.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#topo" aria-label="Protocolo 4 Semanas — voltar ao início">
      <span className="brand-mark" aria-hidden="true">
        P4
      </span>
      <span className="brand-copy">
        <strong>Protocolo</strong>
        <span>4 semanas</span>
      </span>
    </a>
  );
}

function CheckoutAction({
  checkoutUrl,
  onMissingCheckout,
  children,
  className = "button button-primary",
}: CheckoutActionProps) {
  if (checkoutUrl) {
    return (
      <a className={className} href={checkoutUrl} target="_blank" rel="noreferrer sponsored">
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onMissingCheckout}>
      {children}
    </button>
  );
}

function CheckoutDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      className="checkout-dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="checkout-dialog-title"
    >
      <div className="checkout-dialog-card">
        <span className="dialog-tag">Pré-lançamento</span>
        <h2 id="checkout-dialog-title">O checkout está em configuração.</h2>
        <p>
          A página está pronta para receber o link da oferta. O botão de compra será liberado
          assim que o produto e a entrega por e-mail forem testados na Cakto.
        </p>
        <button ref={closeButtonRef} className="button button-dark" type="button" onClick={onClose}>
          Entendi
        </button>
      </div>
    </dialog>
  );
}

function ProductStack() {
  return (
    <div className="product-stack" aria-label="Prévia das quatro partes do Protocolo 4 Semanas">
      {PRODUCT.modules.map((module, index) => (
        <figure className={`stack-sheet stack-sheet-${index + 1}`} key={module.id}>
          <img
            src={module.image}
            alt={`Capa de ${module.title}`}
            width="909"
            height="1286"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <figcaption>{module.label}</figcaption>
        </figure>
      ))}
      <span className="stack-note">4 PDFs · {PRODUCT.totalPages} páginas</span>
    </div>
  );
}

function ModuleRow({ module, index }: { module: ProductModule; index: number }) {
  return (
    <article className={`module-row ${index % 2 === 1 ? "module-row-reverse" : ""}`}>
      <div className="module-visual" data-reveal>
        <span className="module-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <img
          src={module.image}
          alt={`Página de abertura de ${module.title}`}
          width="909"
          height="1286"
          loading="lazy"
        />
      </div>
      <div className="module-content" data-reveal>
        <p className="eyebrow">
          {module.label} · {module.pages} páginas
        </p>
        <h3>{module.title}</h3>
        <p>{module.description}</p>
        <ul className="check-list">
          {module.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function App() {
  const [isCheckoutDialogOpen, setCheckoutDialogOpen] = useState(false);
  const [selectedPreviewId, setSelectedPreviewId] = useState(previews[0].id);
  const checkoutUrl = buildCheckoutUrl();
  const selectedPreview =
    previews.find((preview) => preview.id === selectedPreviewId) ?? previews[0];

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.1 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const showMissingCheckout = () => setCheckoutDialogOpen(true);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <div className={`status-bar ${checkoutUrl ? "status-bar-live" : ""}`}>
        <span aria-hidden="true" className="status-dot" />
        {checkoutUrl
          ? "Material digital · pagamento processado pela Cakto"
          : "Prévia privada · checkout e entrega em configuração"}
      </div>

      <header className="site-header" id="topo">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#conteudo-do-pacote">O que inclui</a>
            <a href="#metodo">Como funciona</a>
            <a href="#previa">Prévia real</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <CheckoutAction
            checkoutUrl={checkoutUrl}
            onMissingCheckout={showMissingCheckout}
            className="button button-small button-outline"
          >
            Quero começar
          </CheckoutAction>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid shell">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Treino + alimentação · plano digital</p>
              <h1 id="hero-title">
                Pare de improvisar.
                <span>Comece com um plano.</span>
              </h1>
              <p className="hero-lead">
                Quatro semanas de treino progressivo em casa, cardápio organizado e receitas
                para transformar intenção em rotina — um dia de cada vez.
              </p>
              <div className="hero-actions">
                <CheckoutAction checkoutUrl={checkoutUrl} onMissingCheckout={showMissingCheckout}>
                  Quero o protocolo completo
                </CheckoutAction>
                <a className="text-link" href="#previa">
                  Ver páginas por dentro
                </a>
              </div>
              <p className="microcopy">
                Compra única · 4 PDFs · garantia de {PRODUCT.guaranteeDays} dias
              </p>
            </div>
            <div className="hero-product" data-reveal>
              <ProductStack />
            </div>
          </div>
          <div className="fact-strip" aria-label="Resumo do conteúdo">
            <div className="shell fact-strip-inner">
              <span>
                <strong>{PRODUCT.totalPdfs}</strong> arquivos digitais
              </span>
              <span>
                <strong>{PRODUCT.totalPages}</strong> páginas organizadas
              </span>
              <span>
                <strong>7</strong> dias de cardápio
              </span>
              <span>
                <strong>{PRODUCT.recipeCount}</strong> receitas na expansão
              </span>
            </div>
          </div>
        </section>

        <section className="manifesto section-light" aria-labelledby="manifesto-title">
          <div className="shell manifesto-grid">
            <div className="manifesto-heading" data-reveal>
              <p className="eyebrow eyebrow-dark">O problema não é falta de conteúdo</p>
              <h2 id="manifesto-title">É abrir a semana sem saber o que fazer.</h2>
            </div>
            <div className="manifesto-copy" data-reveal>
              <p>
                Um vídeo aqui, uma dieta ali, um treino salvo que nunca vira rotina. Informação
                solta cansa porque transfere toda a organização para você.
              </p>
              <p>
                O Protocolo 4 Semanas reúne a sequência: o treino do dia, a progressão das
                semanas, um cardápio de referência, compras e opções para variar as refeições.
              </p>
              <p className="manifesto-emphasis">Menos decisão. Mais clareza para executar.</p>
            </div>
          </div>
        </section>

        <section className="modules section-dark" id="conteudo-do-pacote" aria-labelledby="modules-title">
          <div className="shell section-intro" data-reveal>
            <p className="eyebrow">O pacote completo</p>
            <h2 id="modules-title">Quatro materiais que trabalham juntos.</h2>
            <p>
              Nada de um PDF genérico com meia dúzia de páginas. Veja exatamente o que entra no
              pacote e como cada parte ajuda a organizar o processo.
            </p>
          </div>
          <div className="shell module-list">
            {PRODUCT.modules.map((module, index) => (
              <ModuleRow module={module} index={index} key={module.id} />
            ))}
          </div>
        </section>

        <section className="method section-red" id="metodo" aria-labelledby="method-title">
          <div className="shell">
            <div className="method-heading" data-reveal>
              <p className="eyebrow eyebrow-on-red">Uma progressão com começo, meio e fim</p>
              <h2 id="method-title">Você não repete a mesma semana quatro vezes.</h2>
              <p>
                O plano aumenta o estímulo gradualmente. A proposta é construir base antes de
                chegar às etapas mais intensas.
              </p>
            </div>
            <ol className="week-grid">
              {weeks.map((week) => (
                <li key={week.number} data-reveal>
                  <span>{week.number}</span>
                  <h3>{week.name}</h3>
                  <p>{week.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="preview section-paper" id="previa" aria-labelledby="preview-title">
          <div className="shell preview-layout">
            <div className="preview-copy" data-reveal>
              <p className="eyebrow eyebrow-dark">Prévia real dos PDFs</p>
              <h2 id="preview-title">Sem mockup genérico. É isto que você recebe.</h2>
              <p>
                Selecione uma área para ver páginas do material. As imagens abaixo foram geradas
                diretamente dos arquivos incluídos no pacote.
              </p>
              <div className="preview-tabs" role="group" aria-label="Escolher página para visualizar">
                {previews.map((preview) => (
                  <button
                    key={preview.id}
                    type="button"
                    aria-pressed={selectedPreview.id === preview.id}
                    aria-controls="preview-panel"
                    onClick={() => setSelectedPreviewId(preview.id)}
                  >
                    {preview.shortLabel}
                  </button>
                ))}
              </div>
              <div className="preview-description">
                <h3>{selectedPreview.title}</h3>
                <p>{selectedPreview.description}</p>
              </div>
            </div>
            <div className="preview-frame" id="preview-panel" data-reveal aria-live="polite">
              <span className="preview-badge">Página real · prévia</span>
              <img
                key={selectedPreview.id}
                src={selectedPreview.image}
                alt={selectedPreview.alt}
                width="909"
                height="1286"
              />
            </div>
          </div>
        </section>

        <section className="fit section-dark" aria-labelledby="fit-title">
          <div className="shell fit-grid">
            <div className="fit-title" data-reveal>
              <p className="eyebrow">Para quem faz sentido</p>
              <h2 id="fit-title">Um plano direto para quem quer organização.</h2>
            </div>
            <div className="fit-column fit-positive" data-reveal>
              <h3>Este material pode ajudar quem…</h3>
              <ul>
                <li>quer treinar em casa com uma sequência definida;</li>
                <li>precisa de uma rotina que caiba na semana;</li>
                <li>se perde na hora de montar refeições e compras;</li>
                <li>valoriza instruções objetivas em vez de conteúdo solto.</li>
              </ul>
            </div>
            <div className="fit-column fit-negative" data-reveal>
              <h3>Não é a escolha certa para quem…</h3>
              <ul>
                <li>procura promessa de resultado sem consistência;</li>
                <li>precisa de prescrição clínica individualizada;</li>
                <li>tem restrições de saúde e quer substituir avaliação profissional;</li>
                <li>não pretende adaptar o plano aos próprios limites.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="offer section-light" id="oferta" aria-labelledby="offer-title">
          <div className="shell offer-shell">
            <div className="offer-main" data-reveal>
              <p className="eyebrow eyebrow-dark">Acesso ao pacote completo</p>
              <h2 id="offer-title">Comece a semana sabendo o que fazer.</h2>
              <p className="offer-description">
                Receba os quatro PDFs e use o material na ordem: fundamentos, treino,
                alimentação e receitas.
              </p>
              <div className="price-block" aria-label={`Preço: ${PRODUCT.price}`}>
                <span>Pagamento único</span>
                <strong>{PRODUCT.price}</strong>
                <small>Condições de parcelamento aparecem no checkout da Cakto.</small>
              </div>
              <CheckoutAction
                checkoutUrl={checkoutUrl}
                onMissingCheckout={showMissingCheckout}
                className="button button-primary button-wide"
              >
                Quero começar o Protocolo 4 Semanas
              </CheckoutAction>
              <p className="payment-note">
                Pix, cartão e demais opções habilitadas serão exibidos pela Cakto.
              </p>
            </div>
            <aside className="offer-summary" aria-label="Resumo da compra" data-reveal>
              <div className="offer-stamp">
                <span>{PRODUCT.guaranteeDays}</span>
                <strong>dias de garantia</strong>
              </div>
              <h3>Você recebe</h3>
              <ul className="purchase-list">
                {PRODUCT.modules.map((module) => (
                  <li key={module.id}>
                    <span>{module.label}</span>
                    <strong>{module.title}</strong>
                    <small>{module.pages} páginas</small>
                  </li>
                ))}
              </ul>
              <p className={`delivery-state ${DELIVERY_READY ? "delivery-ready" : ""}`}>
                {DELIVERY_READY
                  ? "Entrega automática por e-mail após a aprovação do pagamento."
                  : "Entrega por e-mail em fase de configuração na Cakto."}
              </p>
            </aside>
          </div>
        </section>

        <section className="faq section-paper" id="duvidas" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="faq-heading" data-reveal>
              <p className="eyebrow eyebrow-dark">Antes de decidir</p>
              <h2 id="faq-title">Perguntas sem resposta ensaiada.</h2>
              <p>O que você precisa saber sobre conteúdo, uso e entrega.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} data-reveal>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="health-note" id="aviso" aria-labelledby="health-note-title">
          <div className="shell health-note-inner">
            <span className="health-note-label">Aviso importante</span>
            <div>
              <h2 id="health-note-title">Material educativo, não prescrição individual.</h2>
              <p>
                O Protocolo 4 Semanas não substitui avaliação médica, nutricional ou o
                acompanhamento de profissional de educação física. Valores nutricionais são
                estimativas. Pare em caso de dor aguda, tontura, mal-estar ou falta de ar anormal
                e procure orientação adequada.
              </p>
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="shell final-cta-inner" data-reveal>
            <p className="eyebrow">Seu próximo passo já está organizado</p>
            <h2 id="final-cta-title">Abra o plano. Escolha o dia. Comece.</h2>
            <CheckoutAction checkoutUrl={checkoutUrl} onMissingCheckout={showMissingCheckout}>
              Quero o protocolo completo
            </CheckoutAction>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <Brand />
          <p>
            Protocolo 4 Semanas · material digital educativo.
            <br />
            Resultados variam conforme fatores individuais.
          </p>
          <div className="footer-links">
            <a href="#aviso">Aviso de saúde</a>
            <a href="#duvidas">Perguntas frequentes</a>
            {SUPPORT_EMAIL ? <a href={`mailto:${SUPPORT_EMAIL}`}>Suporte</a> : null}
          </div>
        </div>
      </footer>

      <div className="mobile-offer-bar">
        <div>
          <span>Pacote completo</span>
          <strong>{PRODUCT.price}</strong>
        </div>
        <CheckoutAction
          checkoutUrl={checkoutUrl}
          onMissingCheckout={showMissingCheckout}
          className="button button-primary button-mobile"
        >
          Quero começar
        </CheckoutAction>
      </div>

      <CheckoutDialog open={isCheckoutDialogOpen} onClose={() => setCheckoutDialogOpen(false)} />
    </>
  );
}

export default App;
