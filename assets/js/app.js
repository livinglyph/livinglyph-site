const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const heroVideo = document.querySelector("[data-hero-video]");
const revealItems = [...document.querySelectorAll(".reveal")];
const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
const riseTextItems = [
  ...document.querySelectorAll(
    ".story-intro p, .manifesto-heading h2, .manifesto-heading p, .manifesto-copy p, .process-title h2, .process-title p, .process-label, .process-caption, .gallery-title, .site-footer p",
  ),
];
const languageButtons = [...document.querySelectorAll("[data-lang-option]")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const parallaxMedia = window.matchMedia("(min-width: 1025px)");
const preferredLanguageKey = "livinglyph-language";
const samuraiLoopImages = Array.from({ length: 56 }, (_, index) => `loop${index + 1}@2x.png`);

const translations = {
  ja: {
    navStory: "BRAND STORY",
    navStoryCaption: "LIVINGLYPHについて",
    navGallery: "GALLERY",
    navGalleryCaption: "作品を見る",
    navSamurai: "SAMURAI ART",
    navSamuraiCaption: "侍アート",
    navShop: "SHOP",
    navShopCaption: "オンラインストア",
    navContact: "CONTACT",
    navContactCaption: "お問い合わせ",
    storyIntro:
      "LIVINGLYPH（リビングリフ）は、<br />“Living（生命）”と“Glyph（文字・記号）”を組み合わせた造語。<br />情報を伝えるための記号として消費されてきた文字を、<br />意味から解放し、余白を与えることで、<br />再び“生命”を宿らせることをコンセプトとした<br />アートプロジェクト。",
    manifestoTitle: "文字に生命を与える",
    manifestoSub: "BREATHE LIFE INTO GLYPHS",
    manifestoP1: "かつて文字は、命のかたちを写し取った存在でした。",
    manifestoP2: "けれど今は、ただ情報を伝えるための記号になっています。",
    manifestoP3: "あふれる情報の中で、私たちは心の余白を失いかけているのかもしれません。",
    manifestoP4: "だから私は、文字を壊してアートにする。",
    manifestoP5: "「意味を伝える」という役割を手放し、言葉を自由にする。",
    manifestoP6: "生まれた余白に新たな表現を重ねたとき、文字は再び命を宿した存在へと変わる。",
    manifestoP7: "規則からはみ出し、形を変え、動き出す文字たち。",
    manifestoP8: "情報で固められた世界に、風穴を開ける。",
    manifestoP9: "それは、アートだからこそできる挑戦。",
    manifestoP10: "自由になった文字たちが、あなたの心に自由と遊びを届ける。",
    processHeadingEn: "PROCESS",
    processHeadingJa: "制作プロセス",
    processHeadingNote: "（似顔絵の場合）",
    processStep1Title: "言葉と写真を決める",
    processStep2Title: "似顔絵制作",
    processStep2Caption: "顔の骨格に合わせ<br />文字を一文字ずつ構成し、<br />作品として仕上げていく。",
    processStep3Title: "微調整をして完成",
    processStep3Caption: "文字の構成ができたら、<br />微調整をして完成。",
    galleryTitle: "GALLERY",
    samuraiConceptTitle: "SAMURAI × TYPOGRAPHY × ART",
    samuraiConceptP1: "侍の兜は、時代と共に武将たちの威厳や個性を表現する存在へと変化していきました。",
    samuraiConceptP2: "LIVINGLYPHでは、その思想をヒントに、タイポグラフィと日本の侍魂を融合。",
    samuraiConceptP3: "文字を通して自己表現を行い、日本の文化を世界に伝えるサムライアートを発信してゆく。",
    samuraiCraftCaption: "作品名の頭文字を頭の文字で兜や甲冑へ。",
    footerCopy: "© LIVINGLYPH",
  },
  en: {
    navStory: "BRAND STORY",
    navStoryCaption: "About LIVINGLYPH",
    navGallery: "GALLERY",
    navGalleryCaption: "View Works",
    navSamurai: "SAMURAI ART",
    navSamuraiCaption: "Samurai Art",
    navShop: "SHOP",
    navShopCaption: "Online Store",
    navContact: "CONTACT",
    navContactCaption: "Contact",
    storyIntro:
      "LIVINGLYPH is an art project born from the words “Living” and “Glyph.”<br />It reimagines letters not merely as symbols for communication,<br />but as living forms with space, rhythm, and emotion.<br />By releasing typography from fixed meaning,<br />LIVINGLYPH gives letters a new sense of life.",
    manifestoTitle: "Giving Life to Letters",
    manifestoSub: "BREATHE LIFE INTO GLYPHS",
    manifestoP1: "Letters once carried traces of living forms.",
    manifestoP2: "Today, they are often consumed as symbols made only to transmit information.",
    manifestoP3: "In a world overflowing with signals, we may be losing the space to feel.",
    manifestoP4: "So I break letters open and let them become art.",
    manifestoP5: "Released from the duty of meaning, language begins to move freely.",
    manifestoP6: "When new expression enters that space, letters regain a living presence.",
    manifestoP7: "They slip beyond rules, change their forms, and begin to breathe.",
    manifestoP8: "They open a quiet passage through a world hardened by information.",
    manifestoP9: "That is the challenge only art can hold.",
    manifestoP10: "Freed letters bring freedom and play back into the heart.",
    processHeadingEn: "PROCESS",
    processHeadingJa: "Creative Process",
    processHeadingNote: "(Portrait example)",
    processStep1Title: "Choose Words and Photo",
    processStep2Title: "Compose the Portrait",
    processStep2Caption: "Letters are placed one by one,<br />following the structure of the face,<br />until the work begins to take form.",
    processStep3Title: "Refine and Complete",
    processStep3Caption: "Once the glyph structure is formed,<br />the final details are quietly refined.",
    galleryTitle: "GALLERY",
    samuraiConceptTitle: "SAMURAI × TYPOGRAPHY × ART",
    samuraiConceptP1: "Samurai helmets evolved into symbols of a warrior's dignity and individuality.",
    samuraiConceptP2: "Inspired by that spirit, LIVINGLYPH fuses typography with the soul of Japanese samurai.",
    samuraiConceptP3: "Through letters, we create samurai art that expresses identity and shares Japanese culture with the world.",
    samuraiCraftCaption: "Initial letters are shaped into samurai helmets and armor.",
    footerCopy: "© LIVINGLYPH",
  },
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function markHeroVideoReady() {
  heroVideo?.closest(".hero-video")?.classList.add("is-loaded");
}

function setupHeroVideo() {
  if (!heroVideo) {
    return;
  }

  if (heroVideo.readyState >= 2) {
    markHeroVideoReady();
  } else {
    heroVideo.addEventListener("loadeddata", markHeroVideoReady, { once: true });
    heroVideo.addEventListener("canplay", markHeroVideoReady, { once: true });
  }

  heroVideo.play?.().catch(() => {
    // Autoplay can be blocked in some browser modes; the video remains ready for manual playback.
  });
}

function setupContactForm() {
  const contactForm = document.querySelector("[data-contact-form]");

  if (!contactForm) {
    return;
  }

  const status = contactForm.querySelector("[data-contact-status]");
  const submitButton = contactForm.querySelector("[data-submit-button]");
  const defaultButtonText = submitButton?.textContent || "SEND MESSAGE";
  const messages = {
    ja: {
      loading: "送信中です。",
      sending: "SENDING...",
      success: "お問い合わせを送信しました。",
      mismatch: "メールアドレスが一致しません",
      failure: "送信できませんでした。時間をおいて再度お試しください。",
    },
    en: {
      loading: "Sending.",
      sending: "SENDING...",
      success: "Your message has been sent.",
      mismatch: "Email addresses do not match.",
      failure: "Could not send. Please try again later.",
    },
  };

  function getContactMessages() {
    return document.body.dataset.language === "en" ? messages.en : messages.ja;
  }

  function setStatus(message, type = "") {
    if (!status) {
      return;
    }

    status.textContent = message;
    status.dataset.status = type;
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const emailConfirm = String(formData.get("email_confirm") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const messageSet = getContactMessages();

    if (email !== emailConfirm) {
      setStatus(messageSet.mismatch, "error");
      contactForm.querySelector('[name="email_confirm"]')?.focus();
      return;
    }

    const submitData = new FormData();
    submitData.set("_subject", `【LIVINGLYPH CONTACT】${name || "お名前未入力"} / ${subject || "お問い合わせ"}`);
    submitData.set("name", name);
    submitData.set("email", email);
    submitData.set("subject", subject);
    submitData.set("message", message);

    setStatus(messageSet.loading, "loading");
    submitButton?.setAttribute("disabled", "true");

    if (submitButton) {
      submitButton.textContent = messageSet.sending;
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      contactForm.reset();
      setStatus(messageSet.success, "success");
    } catch (error) {
      setStatus(messageSet.failure, "error");
    } finally {
      submitButton?.removeAttribute("disabled");

      if (submitButton) {
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}

function setupSamuraiSlider() {
  const slider = document.querySelector("[data-samurai-slider]");

  if (!slider) {
    return;
  }

  const slides = [...slider.querySelectorAll(".samurai-slide")];
  const prevButton = slider.querySelector("[data-samurai-prev]");
  const nextButton = slider.querySelector("[data-samurai-next]");
  const titleJa = slider.querySelector("[data-samurai-title-ja]");
  const titleEn = slider.querySelector("[data-samurai-title-en]");
  let currentIndex = 0;

  function getCurrentLanguage() {
    return document.body.dataset.language === "en" ? "en" : "ja";
  }

  function updateSlider() {
    const language = getCurrentLanguage();

    slides.forEach((slide, index) => {
      let offset = index - currentIndex;

      if (offset > slides.length / 2) {
        offset -= slides.length;
      }

      if (offset < -slides.length / 2) {
        offset += slides.length;
      }

      slide.style.setProperty("--slide-offset", offset);
      slide.classList.toggle("is-active", index === currentIndex);
      slide.classList.toggle("is-neighbor", Math.abs(offset) === 1);
      slide.setAttribute("aria-hidden", String(index !== currentIndex));
    });

    const currentSlide = slides[currentIndex];

    if (titleJa && currentSlide) {
      titleJa.textContent =
        language === "en"
          ? currentSlide.dataset.titleEn || currentSlide.dataset.titleJa || ""
          : currentSlide.dataset.titleJa || "";
    }

    if (titleEn && currentSlide) {
      titleEn.textContent =
        language === "en"
          ? currentSlide.dataset.titleJa || currentSlide.dataset.titleEn || ""
          : currentSlide.dataset.titleEn || "";
    }
  }

  function moveSlider(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlider();
  }

  prevButton?.addEventListener("click", () => moveSlider(-1));
  nextButton?.addEventListener("click", () => moveSlider(1));
  document.addEventListener("livinglyph:language-change", updateSlider);

  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      moveSlider(-1);
    }

    if (event.key === "ArrowRight") {
      moveSlider(1);
    }
  });

  updateSlider();
}

function shuffleItems(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function setupSamuraiMarquees() {
  const marqueeTracks = [...document.querySelectorAll("[data-samurai-marquee]")];

  if (!marqueeTracks.length) {
    return;
  }

  marqueeTracks.forEach((track, rowIndex) => {
    const shuffled = shuffleItems(samuraiLoopImages);
    const offset = (rowIndex * 13) % shuffled.length;
    const sequence = [...shuffled.slice(offset), ...shuffled.slice(0, offset)];
    const repeatedSequence = [...sequence, ...sequence];
    const fragment = document.createDocumentFragment();

    repeatedSequence.forEach((fileName) => {
      const image = document.createElement("img");
      image.src = `../assets/images/samurai-art/loop/${fileName}`;
      image.alt = "";
      image.decoding = "async";
      image.setAttribute("aria-hidden", "true");
      fragment.appendChild(image);
    });

    track.textContent = "";
    track.appendChild(fragment);
  });
}

function hydrateRiseText() {
  riseTextItems.forEach((item) => {
    const lines = item.innerHTML
      .trim()
      .split(/<br\s*\/?>/i)
      .map((line) => line.trim())
      .filter(Boolean);

    item.innerHTML = lines
      .map(
        (line, index) =>
          `<span class="rise-mask"><span class="rise-content" style="--rise-delay: ${index * 72}ms">${line}</span></span>`,
      )
      .join("");
  });
}

function getSavedLanguage() {
  try {
    return localStorage.getItem(preferredLanguageKey) === "en" ? "en" : "ja";
  } catch (error) {
    return "ja";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(preferredLanguageKey, language);
  } catch (error) {
    // Storage can be unavailable in private browsing contexts.
  }
}

function updateLanguageButtons(language) {
  languageButtons.forEach((button) => {
    const isCurrent = button.dataset.langOption === language;
    button.classList.toggle("is-current", isCurrent);
    button.setAttribute("aria-pressed", String(isCurrent));

    if (isCurrent) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function applyLanguage(language, shouldSave = true) {
  const dictionary = translations[language] || translations.ja;

  document.documentElement.lang = language === "en" ? "en" : "ja";
  document.body.dataset.language = language;

  document.querySelectorAll("[data-i18n]").forEach((item) => {
    const key = item.dataset.i18n;
    if (key && dictionary[key]) {
      item.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((item) => {
    const key = item.dataset.i18nHtml;
    if (key && dictionary[key]) {
      item.innerHTML = dictionary[key];
    }
  });

  hydrateRiseText();
  updateLanguageButtons(language);
  document.dispatchEvent(new CustomEvent("livinglyph:language-change", { detail: { language } }));

  if (shouldSave) {
    saveLanguage(language);
  }
}

function setMenuOpen(isOpen) {
  if (document.body.classList.contains("is-menu-open") === isOpen) {
    return;
  }

  document.body.classList.toggle("is-menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!document.body.classList.contains("is-menu-open"));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    setMenuOpen(false);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.langOption === "en" ? "en" : "ja";
    applyLanguage(language);
  });
});

applyLanguage(getSavedLanguage(), false);
setupHeroVideo();
setupContactForm();
setupSamuraiMarquees();
setupSamuraiSlider();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.12,
    rootMargin: "0px 0px -12% 0px",
  },
);

revealItems.forEach((item) => {
  if (!item.classList.contains("is-visible")) {
    revealObserver.observe(item);
  }
});

let ticking = false;
let headerScrolled = false;

function updateHeader() {
  const shouldBeScrolled = window.scrollY > 24;

  if (shouldBeScrolled !== headerScrolled) {
    headerScrolled = shouldBeScrolled;
    header?.classList.toggle("is-scrolled", shouldBeScrolled);
  }
}

function updateParallax() {
  if (reduceMotion.matches || !parallaxMedia.matches) {
    parallaxItems.forEach((item) => {
      item.style.setProperty("--parallax-y", "0px");
    });
    ticking = false;
    return;
  }

  const viewportHeight = window.innerHeight;
  const viewportMid = viewportHeight / 2;

  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.bottom < -viewportHeight * 0.25 || rect.top > viewportHeight * 1.25) {
      return;
    }

    const speed = Number(item.dataset.speed || 0);
    const itemMid = rect.top + rect.height / 2;
    const distance = itemMid - viewportMid;
    const movement = clamp(distance * speed, -18, 18);

    item.style.setProperty("--parallax-y", `${movement.toFixed(2)}px`);
  });

  ticking = false;
}

function requestParallaxUpdate() {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

function onScroll() {
  updateHeader();

  if (document.body.classList.contains("is-menu-open")) {
    setMenuOpen(false);
  }

  if (parallaxMedia.matches && !reduceMotion.matches) {
    requestParallaxUpdate();
  }
}

function hydrate() {
  updateHeader();
  updateParallax();
  document.body.classList.add("is-ready");
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", requestParallaxUpdate);
window.addEventListener("load", hydrate);
hydrate();
