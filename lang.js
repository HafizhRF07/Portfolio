const translations = {
  ENG: {
    nav: {
      home: "Home",
      about: "About Me",
      education: "My Education",
      portfolio: "Portfolio",
      contact: "Contact Me"
    },
    hero: {
      greeting: "Hi, I'm",
      subtitleTexts: ["Data Science", "Aspiring Data & Visualization Specialist"],
      typingText: "Welcome to my portfolio!\nI'm Hafizh Riyandi Fawwaz, a Fresh Graduate in Data Science eager to turn data into impactful insights and predictive solutions.",
      downloadCV: "Download CV",
      skills: ["Python | SQL", "Excel", "Machine Learning", "Data Visualization"]
    },
    about: {
      title: "About",
      highlight: "Me",
      desc1: `I am a Data Science graduate with practical experience in 
              time-based classification and machine learning projects.
              Skilled in 
              <span class="highlight2">Python</span>, 
              <span class="highlight2">SQL</span>, 
              <span class="highlight2">R</span>, 
              <span class="highlight2">Excel</span>, and visualization tools such as
              <span class="highlight2">Looker Studio</span>,
              <span class="highlight2">Tableau</span>, 
              <span class="highlight2">Power BI</span>, and 
              <span class="highlight2">Streamlit</span>.
              Additionally, experienced in creating visual designs and UI prototypes using 
              <span class="highlight2">Figma</span> and 
              <span class="highlight2">Canva</span>.
              I specialize in developing predictive models, feature engineering, 
              and applying data driven methods to uncover valuable patterns.`,
      desc2: `Passionate about the full data science workflow, I enjoy working 
              with datasets from preprocessing and modeling to evaluation and 
              visualization. Detail oriented and motivated, I aim to apply 
              my expertise to real world challenges, advance machine learning 
              applications, and deliver impactful data driven solutions.`
    },
    education: {
      title: "My",
      highlight: "Education",
      items: [
        { year: "2015 - 2018", school: "SMPN 1 Ciamis", desc: "Junior High School" },
        { year: "2018 - 2021", school: "SMAN 2 Ciamis", desc: "Senior High School – Mathematics & Science" },
        { year: "2021 - 2025", school: "Telkom University", desc: "Bachelor's Degree – Data Science" }
      ]
    },
    portfolio: {
      tabs: {
        certificates: "Certificates",
        projects: "Projects",
        skills: "Skills"
      },
      certificates: [
        { title: "Data Analyst", issuer: "Ditjen Minerba - 2026" },
        { title: "Machine Learning for Beginners", issuer: "Dicoding - 2025" },
        { title: "Getting Started with Python Programming", issuer: "Dicoding - 2025" },
        { title: "Introduction to SQL", issuer: "Dicoding - 2025" },
        { title: "Introduction to Data Science", issuer: "Dicoding - 2025" },
        { title: "Introduction to Artificial Intelligence", issuer: "Dicoding - 2025" },
        { title: "Azure AI-900", issuer: "elevAIte - 2025" },
        { title: "Data Analyst", issuer: "DSDA - 2025" },
        { title: "Python Data Science", issuer: "DQLab - 2021" },
        { title: "R Data Science", issuer: "DQLab - 2021" }
      ],
      viewCert: "View Certificate",
      projects: [
        {
          title: "Budgetin App",
          desc: "A personal finance management application that helps users track income and expenses, create budgets, and gain insights into their financial habits to make smarter money decisions.",
          view: "View Project"
        },
        {
          title: "Rainfall Prediction App",
          desc: "A data-driven application that uses SARIMA-based time-series forecasting with Python and Streamlit to provide accurate rainfall predictions, helping farmers plan planting schedules.",
          view: "View Project"
        },
        {
          title: "DCU Monitoring Dashboard",
          desc: "Built with Power BI to monitor employee health conditions, support preventive measures, and identify health trends using the Daily Check-Up dataset including health status and demographics.",
          view: "View Project"
        },
        {
          title: "Water Discharge Interpolation Dashboard",
          desc: "An interactive dashboard using Python and Streamlit to visualize water discharge data. Features data preprocessing, interpolation, Q80% calculation, and seasonal pattern analysis.",
          view: "View Project"
        },
        {
          title: "Decision Tree for Social Welfare Classification",
          desc: "A classification model using Decision Tree algorithm to identify individuals requiring social welfare services, with time-based feature expansion and spatial analysis using Ordinary Kriging.",
          view: "View Project"
        },
        {
          title: "Dashboard and Mindmap Supply Demand",
          desc: "Building an interactive dashboard and mind map to map supply and demand from production to marketing, by processing over 65,000+ production data records and 25,000+ marketing data records across five commodities: bauxite, tin, nickel, gold, and copper.",
          view: "View Project"
        }

      ],
      showAll: "Show All Projects",
      showLess: "Show Less"
    },
    contact: {
      title: "Contact",
      highlight: "Me",
      getInTouch: "Get In Touch",
      sendMessage: "Send Message",
      emailLabel: "Email",
      waLabel: "WhatsApp",
      waText: "Chat via WhatsApp",
      locationLabel: "Location",
      locationText: "West Java, Depok, Indonesia",
      linkedinLabel: "LinkedIn",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Write your message here...",
      nameLabel: "Your Name",
      emailInputLabel: "Your Email",
      messageLabel: "Message",
      submitBtn: "Send Message",
      ratingTitle: "Leave a Rating & Comment",
      signInText: "Please sign in with Google to leave a rating and comment",
      signInBtn: "Sign in with Google",
      logoutBtn: "Logout",
      selectRating: "Select a rating",
      ratedText: (n) => `You rated ${n} star${n > 1 ? 's' : ''}`,
      commentPlaceholder: "Share your thoughts...",
      submitRating: "Submit Rating",
      recentComments: "Recent Comments",
      noComments: "No comments yet. Be the first to leave a rating!",
      replyPlaceholder: "Write your reply...",
      replyBtn: "Reply",
      cancelBtn: "Cancel"
    },
    footer: {
      bio: "Transforming data into actionable insights through Data Science, Machine Learning, and Data Visualization.",
      navTitle: "Navigation",
      contactTitle: "Get In Touch",
      copyright: (name) => `© 2025 Portfolio by <span class="highlight-text">${name}</span>`
    }
  },

  INA: {
    nav: {
      home: "Beranda",
      about: "Tentang Saya",
      education: "Pendidikan",
      portfolio: "Portofolio",
      contact: "Kontak Saya"
    },
    hero: {
      greeting: "Halo, Saya",
      subtitleTexts: ["Sains Data", "Praktisi Data & Visualisasi"],
      typingText: "Selamat datang di portofolio saya!\nSaya Hafizh Riyandi Fawwaz, Sarjana Sains Data yang siap mengubah data menjadi wawasan bermakna dan solusi prediktif.",
      downloadCV: "Unduh CV",
      skills: ["Python | SQL", "Excel", "Pembelajaran Mesin", "Visualisasi Data"]
    },
    about: {
      title: "Tentang",
      highlight: "Saya",
      desc1: `Saya adalah lulusan Sains Data dengan pengalaman praktis dalam 
              proyek klasifikasi berbasis waktu dan pembelajaran mesin.
              Mahir dalam 
              <span class="highlight2">Python</span>, 
              <span class="highlight2">SQL</span>, 
              <span class="highlight2">R</span>, 
              <span class="highlight2">Excel</span>, dan alat visualisasi seperti
              <span class="highlight2">Looker Studio</span>,
              <span class="highlight2">Tableau</span>, 
              <span class="highlight2">Power BI</span>, dan 
              <span class="highlight2">Streamlit</span>.
              Selain itu, berpengalaman dalam membuat desain visual dan prototipe UI menggunakan 
              <span class="highlight2">Figma</span> dan 
              <span class="highlight2">Canva</span>.
              Saya memfokuskan diri dalam membangun model prediktif, rekayasa fitur, 
              dan menerapkan metode berbasis data untuk menemukan pola yang berharga.`,
      desc2: `Bersemangat dalam seluruh alur kerja data science, saya menikmati 
              bekerja dengan dataset mulai dari preprocessing dan pemodelan hingga evaluasi 
              dan visualisasi. Berorientasi pada detail dan termotivasi, saya bertujuan 
              menerapkan keahlian saya pada tantangan nyata, mengembangkan aplikasi 
              pembelajaran mesin, dan memberikan solusi berbasis data yang berdampak.`
    },
    education: {
      title: "Riwayat",
      highlight: "Pendidikan",
      items: [
        { year: "2015 - 2018", school: "SMPN 1 Ciamis", desc: "Sekolah Menengah Pertama" },
        { year: "2018 - 2021", school: "SMAN 2 Ciamis", desc: "Sekolah Menengah Atas – IPA" },
        { year: "2021 - 2025", school: "Universitas Telkom", desc: "Sarjana – Sains Data" }
      ]
    },
    portfolio: {
      tabs: {
        certificates: "Sertifikat",
        projects: "Proyek",
        skills: "Keahlian"
      },
      certificates: [
        { title: "Data Analyst", issuer: "Ditjen Minerba - 2026" },
        { title: "Belajar ML untuk Pemula", issuer: "Dicoding - 2025" },
        { title: "Mulai Pemrograman Python", issuer: "Dicoding - 2025" },
        { title: "Belajar Dasar SQL", issuer: "Dicoding - 2025" },
        { title: "Belajar Dasar Data Science", issuer: "Dicoding - 2025" },
        { title: "Belajar Dasar AI", issuer: "Dicoding - 2025" },
        { title: "Azure AI-900", issuer: "elevAIte - 2025" },
        { title: "Data Analyst", issuer: "DSDA - 2025" },
        { title: "Python Data Science", issuer: "DQLab - 2021" },
        { title: "R Data Science", issuer: "DQLab - 2021" }
      ],
      viewCert: "Lihat Sertifikat",
      projects: [
        {
          title: "Aplikasi Budgetin",
          desc: "Aplikasi manajemen keuangan pribadi yang membantu pengguna melacak pemasukan dan pengeluaran, membuat anggaran, dan memahami kebiasaan finansial mereka untuk pengambilan keputusan yang lebih cerdas.",
          view: "Lihat Proyek"
        },
        {
          title: "Aplikasi Prediksi Curah Hujan",
          desc: "Aplikasi berbasis data yang menggunakan peramalan time-series berbasis SARIMA dengan Python dan Streamlit untuk prediksi curah hujan yang akurat, membantu petani merencanakan jadwal tanam.",
          view: "Lihat Proyek"
        },
        {
          title: "Dashboard Monitoring DCU",
          desc: "Dibangun dengan Power BI untuk memantau kondisi kesehatan karyawan, mendukung langkah preventif, dan mengidentifikasi tren kesehatan menggunakan dataset Daily Check-Up termasuk status kesehatan dan demografi.",
          view: "Lihat Proyek"
        },
        {
          title: "Dashboard Interpolasi Debit Air",
          desc: "Dashboard interaktif menggunakan Python dan Streamlit untuk memvisualisasikan data debit air. Dilengkapi preprocessing data, interpolasi, perhitungan Q80%, dan analisis pola musiman.",
          view: "Lihat Proyek"
        },
        {
          title: "Decision Tree untuk Klasifikasi Kesejahteraan Sosial",
          desc: "Model klasifikasi menggunakan algoritma Decision Tree untuk mengidentifikasi individu yang membutuhkan layanan kesejahteraan sosial, dengan ekspansi fitur berbasis waktu dan analisis spasial menggunakan Ordinary Kriging.",
          view: "Lihat Proyek"
        },
        {
          title: "Pengembangan Dasboard dan Mindmap Interaktif untuk Analisis Penawaran dan Permintaan ",
          desc: "Membangun dashboard dan mindmap interaktif untuk memetakan supply demand dari produksi hingga pemasaran, dengan mengolah 65.000+ data produksi dan 25.000+ data pemasaran dari 5 komoditas yaitu bauksit, timah, nikel, emas, dan tembaga.",
          view: "Lihat Proyek"
        }
      ],
      showAll: "Tampilkan Semua Proyek",
      showLess: "Tampilkan Lebih Sedikit"
    },
    contact: {
      title: "Hubungi",
      highlight: "Saya",
      getInTouch: "Hubungi Saya",
      sendMessage: "Kirim Pesan",
      emailLabel: "Email",
      waLabel: "WhatsApp",
      waText: "Chat via WhatsApp",
      locationLabel: "Lokasi",
      locationText: "Jawa Barat, Depok, Indonesia",
      linkedinLabel: "LinkedIn",
      namePlaceholder: "Masukkan nama Anda",
      emailPlaceholder: "Masukkan email Anda",
      messagePlaceholder: "Tulis pesan Anda di sini...",
      nameLabel: "Nama Anda",
      emailInputLabel: "Email Anda",
      messageLabel: "Pesan",
      submitBtn: "Kirim Pesan",
      ratingTitle: "Tinggalkan Rating & Komentar",
      signInText: "Silakan masuk dengan Google untuk memberikan rating dan komentar",
      signInBtn: "Masuk dengan Google",
      logoutBtn: "Keluar",
      selectRating: "Pilih rating",
      ratedText: (n) => `Anda memberi ${n} bintang`,
      commentPlaceholder: "Bagikan pendapat Anda...",
      submitRating: "Kirim Rating",
      recentComments: "Komentar Terbaru",
      noComments: "Belum ada komentar. Jadilah yang pertama!",
      replyPlaceholder: "Tulis balasan Anda...",
      replyBtn: "Balas",
      cancelBtn: "Batal"
    },
    footer: {
      bio: "Mengubah data menjadi wawasan yang dapat ditindaklanjuti melalui Sains Data, Pembelajaran Mesin, dan Visualisasi Data.",
      navTitle: "Navigasi",
      contactTitle: "Hubungi Saya",
      copyright: (name) => `© 2025 Portofolio oleh <span class="highlight-text">${name}</span>`
    }
  }
};

let currentLang = localStorage.getItem("portfolioLang") || "ENG";
let typingInterval = null;
let heroTypingTimeout = null;
 
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolioLang", lang);
  const t = translations[lang];
 
  const btn = document.getElementById("langToggleBtn");
  if (btn) {
    btn.querySelector(".lang-active").textContent = lang === "ENG" ? "ENG" : "INA";
    btn.querySelector(".lang-inactive").textContent = lang === "ENG" ? "INA" : "ENG";
  }
 
  // NAV
  const navLinks = document.querySelectorAll(".nav-links li a");
  const navKeys = ["home", "about", "education", "portfolio", "contact"];
  navLinks.forEach((a, i) => { if (navKeys[i]) a.textContent = t.nav[navKeys[i]]; });
 
  // Footer nav
  const footerNavLinks = document.querySelectorAll(".footer-links li a");
  const footerNavKeys = ["home", "about", "education", "portfolio", "contact"];
  footerNavLinks.forEach((a, i) => { if (footerNavKeys[i]) a.textContent = t.nav[footerNavKeys[i]]; });
 
  // HERO greeting
  const h1 = document.querySelector(".hero h1");
  if (h1) {
    const span = h1.querySelector(".nama");
    h1.childNodes[0].textContent = t.hero.greeting + "\n";
    if (span) span.textContent = "Hafizh Riyandi Fawwaz";
  }
 
  // Hero skill chips
  const chips = document.querySelectorAll(".skill-chips .skill-chip");
  chips.forEach((chip, i) => {
    if (t.hero.skills[i]) chip.textContent = t.hero.skills[i];
  });
 
  // Download CV
  const dlBtn = document.querySelector(".download-cv");
  if (dlBtn) {
    const textNode = [...dlBtn.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
    if (textNode) textNode.textContent = " " + t.hero.downloadCV;
    else dlBtn.textContent = t.hero.downloadCV;
  }
 
  // Hero typing text restart
  restartHeroTyping(t.hero.typingText);
 
  // Hero subtitle typing restart
  restartSubtitleTyping(t.hero.subtitleTexts);
 
  // ABOUT
  const aboutH2 = document.querySelector(".about-text h2");
  if (aboutH2) {
    const hl = aboutH2.querySelector(".highlight");
    aboutH2.childNodes[0].textContent = t.about.title + " ";
    if (hl) hl.textContent = t.about.highlight;
  }
 
  const descs = document.querySelectorAll(".about-description");
  if (descs[0]) descs[0].innerHTML = t.about.desc1;
  if (descs[1]) descs[1].innerHTML = t.about.desc2;
 
  // EDUCATION
  const eduH2 = document.querySelector(".education-section h2");
  if (eduH2) {
    const hl = eduH2.querySelector(".highlight");
    eduH2.childNodes[0].textContent = t.education.title + " ";
    if (hl) hl.textContent = t.education.highlight;
  }
 
  const eduItems = document.querySelectorAll(".timeline-item");
  eduItems.forEach((item, i) => {
    const data = t.education.items[i];
    if (!data) return;
    const titleEl = item.querySelector(".education-title");
    const descEl = item.querySelector(".education-description");
    if (titleEl) titleEl.textContent = data.school;
    if (descEl) descEl.textContent = data.desc;
  });
 
  // PORTFOLIO TABS
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    const target = btn.dataset.target;
    const icon = btn.querySelector("i");
    if (target === "certificates") btn.innerHTML = `${icon ? icon.outerHTML : '<i class="fas fa-award"></i>'} ${t.portfolio.tabs.certificates}`;
    if (target === "projects") btn.innerHTML = `${icon ? icon.outerHTML : '<i class="fas fa-laptop-code"></i>'} ${t.portfolio.tabs.projects}`;
    if (target === "skills") btn.innerHTML = `${icon ? icon.outerHTML : '<i class="fas fa-cogs"></i>'} ${t.portfolio.tabs.skills}`;
  });
 
  // CERTIFICATES
  const certCards = document.querySelectorAll("#certificates .certificate-card");
  certCards.forEach((card, i) => {
    const data = t.portfolio.certificates[i];
    if (!data) return;
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    const a = card.querySelector("a");
    if (h3) h3.textContent = data.title;
    if (p) p.textContent = data.issuer;
    if (a) a.textContent = t.portfolio.viewCert;
  });
 
  // PROJECTS
  const projectCards = document.querySelectorAll("#projects .project-card");
  projectCards.forEach((card, i) => {
    const data = t.portfolio.projects[i];
    if (!data) return;
    const title = card.querySelector(".project-title");
    const desc = card.querySelector(".project-description");
    const viewBtn = card.querySelector(".view-btn");
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
    if (viewBtn) viewBtn.childNodes[0].textContent = data.view;
  });
 
  // Show All button
  const showAllBtn = document.getElementById("showAllBtn");
  if (showAllBtn) {
    const isExpanded = showAllBtn.textContent.trim() === translations["ENG"].portfolio.showLess ||
                       showAllBtn.textContent.trim() === translations["INA"].portfolio.showLess;
    showAllBtn.textContent = isExpanded ? t.portfolio.showLess : t.portfolio.showAll;
  }
 
  // CONTACT section title
  const contactTitle = document.querySelector(".section-title");
  if (contactTitle) {
    const hl = contactTitle.querySelector(".highlight");
    contactTitle.childNodes[0].textContent = t.contact.title + " ";
    if (hl) hl.textContent = t.contact.highlight;
  }
 
  // Contact card titles
  const cardTitles = document.querySelectorAll(".contact-card .card-title");
  if (cardTitles[0]) cardTitles[0].textContent = t.contact.getInTouch;
  if (cardTitles[1]) cardTitles[1].textContent = t.contact.sendMessage;
 
  // Contact info items
  const infoContents = document.querySelectorAll(".info-content");
  if (infoContents[0]) { infoContents[0].querySelector("h4").textContent = t.contact.emailLabel; }
  if (infoContents[1]) {
    infoContents[1].querySelector("h4").textContent = t.contact.waLabel;
    const waLink = infoContents[1].querySelector("a");
    if (waLink) waLink.textContent = t.contact.waText;
  }
  if (infoContents[2]) {
    infoContents[2].querySelector("h4").textContent = t.contact.locationLabel;
    const locLink = infoContents[2].querySelector("a");
    if (locLink) locLink.textContent = t.contact.locationText;
  }
  if (infoContents[3]) { infoContents[3].querySelector("h4").textContent = t.contact.linkedinLabel; }
 
  // Form labels & placeholders
  const form = document.getElementById("contactForm");
  if (form) {
    const labels = form.querySelectorAll("label");
    if (labels[0]) labels[0].textContent = t.contact.nameLabel;
    if (labels[1]) labels[1].textContent = t.contact.emailInputLabel;
    if (labels[2]) labels[2].textContent = t.contact.messageLabel;
 
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const msgInput = form.querySelector("textarea");
    if (nameInput) nameInput.placeholder = t.contact.namePlaceholder;
    if (emailInput) emailInput.placeholder = t.contact.emailPlaceholder;
    if (msgInput) msgInput.placeholder = t.contact.messagePlaceholder;
 
    const submitBtn = form.querySelector(".submit-btn");
    if (submitBtn) submitBtn.textContent = t.contact.submitBtn;
  }
 
  // Rating section
  const ratingCardTitles = document.querySelectorAll(".rating-comments-card .card-title");
  if (ratingCardTitles[0]) ratingCardTitles[0].textContent = t.contact.ratingTitle;
 
  const authP = document.querySelector(".auth-section p");
  if (authP) authP.textContent = t.contact.signInText;
 
  const googleBtn = document.getElementById("googleLoginBtn");
  if (googleBtn) {
    const svg = googleBtn.querySelector("svg");
    googleBtn.textContent = t.contact.signInBtn;
    if (svg) googleBtn.prepend(svg);
  }
 
  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) logoutBtn.textContent = t.contact.logoutBtn;
 
  const ratingTextEl = document.getElementById("ratingText");
  if (ratingTextEl && ratingTextEl.textContent.includes("Select") || ratingTextEl && ratingTextEl.textContent.includes("Pilih")) {
    ratingTextEl.textContent = t.contact.selectRating;
  }
 
  const commentInput = document.querySelector("#userComment");
  if (commentInput) commentInput.placeholder = t.contact.commentPlaceholder;
 
  const submitRatingBtn = document.getElementById("submitRating");
  if (submitRatingBtn) submitRatingBtn.textContent = t.contact.submitRating;
 
  const recentCommentsTitle = document.querySelector(".rating-comments-card h4.card-title");
  if (recentCommentsTitle) recentCommentsTitle.textContent = t.contact.recentComments;
 
  const emptyComments = document.querySelector(".empty-comments");
  if (emptyComments) emptyComments.textContent = t.contact.noComments;
 
  // FOOTER
  const footerBio = document.querySelector(".footer-bio");
  if (footerBio) footerBio.textContent = t.footer.bio;
 
  const footerTitles = document.querySelectorAll(".footer-title");
  if (footerTitles[0]) footerTitles[0].textContent = t.footer.navTitle;
  if (footerTitles[1]) footerTitles[1].textContent = t.footer.contactTitle;
 
  const footerContact = document.querySelectorAll(".footer-contact li");
  if (footerContact[1]) {
    const a = footerContact[1].querySelector("a");
  }
 
  const copyright = document.querySelector(".footer-copyright");
  if (copyright) copyright.innerHTML = t.footer.copyright("Hafizh Riyandi Fawwaz");
}
 
function restartHeroTyping(text) {
  const el = document.querySelector(".typing-text");
  if (!el) return;
  if (heroTypingTimeout) clearTimeout(heroTypingTimeout);
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      heroTypingTimeout = setTimeout(type, 50);
    }
  }
  type();
}
 
function restartSubtitleTyping(texts) {
  const textSpan = document.querySelector(".text");
  if (!textSpan) return;
  textSpan.textContent = "";
 
  let index = 0, charIndex = 0, deleting = false;
  if (window._subtitleTimer) clearTimeout(window._subtitleTimer);
 
  function type() {
    const currentText = texts[index];
    if (!deleting) {
      textSpan.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        deleting = true;
        window._subtitleTimer = setTimeout(type, 1000);
        return;
      }
    } else {
      textSpan.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        index = (index + 1) % texts.length;
      }
    }
    window._subtitleTimer = setTimeout(type, 60);
  }
  type();
}
 
document.addEventListener("DOMContentLoaded", () => {
  const dropdownItem = document.querySelector(".lang-dropdown-item");
  const trigger = document.querySelector(".lang-dropdown-trigger");
 
  if (trigger && dropdownItem) {
    // Toggle dropdown on trigger click
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownItem.classList.toggle("open");
    });
 
    // Select language option
    document.querySelectorAll(".lang-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const lang = btn.dataset.lang;
        applyLanguage(lang);
        dropdownItem.classList.remove("open");
      });
    });
 
    // Close dropdown on outside click
    document.addEventListener("click", () => {
      dropdownItem.classList.remove("open");
    });
  }
 
  applyLanguage(currentLang);
});
 
// Update trigger label & active state when language changes
const _origApply = applyLanguage;
applyLanguage = function(lang) {
  _origApply(lang);
 
  // Update trigger display
  const trigger = document.querySelector(".lang-dropdown-trigger");
  if (trigger) {
    const flagEl = trigger.querySelector(".lang-flag");
    const labelEl = trigger.querySelector(".lang-label");
    if (flagEl) flagEl.src = lang === "ENG" ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/id.png";
    if (flagEl) flagEl.alt = lang === "ENG" ? "EN" : "ID";
    if (labelEl) labelEl.textContent = lang === "ENG" ? "ENG" : "INA";
  }
 
  // Update active state on options
  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
};