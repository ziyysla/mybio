/* ============================================================
   DATA PROFIL: semua yang tampil di halaman dibuat dari objek ini.
   Ubah isinya di sini bila ada yang ingin diganti.
   ============================================================ */
const PROFIL = {
  nama: "Ameida Irsaliyatun Zaina",
  peran: "Pelajar",
  status: "Pelajar SMP",
  ringkas: "Suka menulis, sedang belajar membuat web, dan bercita-cita menjadi pengacara.",
  tentang: [
    "Halo, perkenalkan nama saya Ameida Irsaliyatun Zaina. Saya seorang pelajar sekolah menengah pertama— yah terlalu kaku ah.. Pokoknya aku lagi belajar bikin web sih, isinya tentang diri aku semua :)",
    "Hobi aku menulis, entah itu nulis apapun aku suka dan cita cita aku jadi seorang Lawyer/Pengacara. Kalau ditanya kenapa mau jadi pengacara, simple nya selain karena mau bantu orang, aku pasti jawab ‘karena aku ingin orang lain mendapatkan satu keadilan yang tak pernah aku dapatkan’ hehe.. udah ya segitu aja"
  ],
  keahlian: ["Design grafis", "Menulis naskah", "Menulis sastra", "Debat", "Kreativitas", "Photography (sedang dalam pengembangan)"],
  pengalaman: [
    { judul: "Anggota organisasi bidang Teknologi", tempat: "Sekolah", ket: "Projek: membuat design grafis dan menjadi dokumentator acara." },
    { judul: "Jambore On The Air dan Jambore On The Internet", ket: "Projek: mengenali sinyal radio secara internasional, ketangkasan, dan bijak berkomunikasi." },
    { judul: "LDK Kedinasan", tempat: "Dodik Bela Negara Rindam III Siliwangi", ket: "Projek: melatih kemampuan kepemimpinan, bersosialisasi, komunikasi, dan keaktifan." }
  ],
  visi: "Menjadikan OSIS dan sekolah sebagai tempat berkreasi, berinspirasi, serta berekspresi dalam kontribusi nyata dan membentuk karakter siswa menjadi pribadi yang jujur dan bertanggung jawab tanpa takut untuk menyuarakan.",
  misi: [
    "Menumbuhkan rasa semangat siswa untuk berkegiatan di sekolah.",
    "Mengadakan program kerja yang meningkatkan kreativitas dan membangun motivasi para siswa.",
    "Membuat lingkung siswa bercerita.",
    "Dapat menyuarakan aspirasi dan inspirasi dari siswa untuk OSIS dan sekolah.",
    "Membentuk sebuah hal baru, mengerti dan memahami dari suara para siswa."
  ],
  program: [
    { judul: "Lingkung Siswa Bercerita", jenis: "Situs web", tag: ["Digital"],
      ringkas: "Situs tempat siswa bercerita tentang harinya di sekolah.",
      detail: "Web di mana siswa/i sekolah dapat bercerita tentang harinya di sekolah.",
      tujuan: "Mengurangi potensi ketidaknyamanan di sekolah." },
    { judul: "Pss – Podcast Sekolah Satu", jenis: "Podcast sekolah", tag: ["Digital"],
      ringkas: "Siaran saat jam istirahat tentang perundungan, sampah, keluarga, dan musik.",
      detail: "Jam istirahat dipakai oleh siswa untuk menyiarkan podcast mengenai perundungan, sampah, keluarga, atau memutar playlist musik.",
      tujuan: "Menumbuhkan rasa ingin tahu, keterbukaan siswa untuk berbagi cerita, dan keaktifan siswa." },
    { judul: "PORbEL – Pekan OlahRaga berbanding ELektronik", jenis: "Pekan olahraga", tag: ["Lomba"],
      ringkas: "Pekan olahraga sesuai minat siswa, dari e-sport sampai permainan tradisional.",
      detail: "Mengadakan pekan olahraga yang mengikuti minat para siswa seperti E-sport ML, FF, dan permainan tradisional atau permainan seru yang menumbuhkan rasa semangat berkegiatan di sekolah.",
      tujuan: "Menumbuhkan semangat siswa, bersaing secara kompetitif dan sportif, mengurangi perkataan kasar." },
    { judul: "KE3dUA – Keaktifan, Kekompakan, Kerjasama dan Untuk Anak", jenis: "Lomba", tag: ["Lomba"],
      ringkas: "Lomba pada Hari Anak Nasional yang melatih keaktifan, kekompakan, dan kerja sama.",
      detail: "Mengadakan lomba yang melatih KE3, pada Hari Anak Nasional.",
      tujuan: "Mengembangkan pola pikir dan edukasi pengelolaan emosi." }
  ],
  kontak: [
    { label: "Instagram", nilai: "@ameiirslyy", url: "https://instagram.com/ameiirslyy" },
    { label: "GitHub", nilai: "@ziyysla", url: "https://github.com/ziyysla" },
    { label: "Email", nilai: "rhnylszr@gmail.com" }
  ]
};

/* ---------- Kode di bawah ini tidak perlu diubah ---------- */
const P = PROFIL;
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const IKON = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1-4 4-6 8-6s7 2 8 6"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  chev: '<path d="M9 6l6 6-6 6"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  out: '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
};
const ik = (n, s = 22) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IKON[n]}</svg>`;

const TABS = [
  { id: "beranda", nama: "Beranda", ikon: "home", judul: "Profil" },
  { id: "tentang", nama: "Tentang", ikon: "user", judul: "Tentang saya" },
  { id: "visi", nama: "Visi & Misi", ikon: "eye", judul: "Visi dan Misi" },
  { id: "program", nama: "Program", ikon: "list", judul: "Program Kerja" },
  { id: "kontak", nama: "Kontak", ikon: "mail", judul: "Kontak" }
];

/* ----- Beranda ----- */
function renderBeranda() {
  const kata = P.nama.trim().split(/\s+/);
  const inisial = (kata[0][0] + (kata.length > 1 ? kata[kata.length - 1][0] : "")).toUpperCase();
  const baris = (go, ikon, judul, ket) => `
    <button type="button" class="row" data-go="${go}">
      <span class="box">${ik(ikon)}</span>
      <span class="txt"><strong>${esc(judul)}</strong><small>${esc(ket)}</small></span>
      <span class="chev">${ik("chev", 20)}</span>
    </button>`;
  $("#v-beranda").innerHTML = `
    <div class="hero-card">
      <div class="hero">
        <div class="avatar" aria-hidden="true">${esc(inisial)}</div>
        <div class="hero-text">
          <h2>${esc(P.nama)}</h2>
          <p class="role">${esc(P.peran)}</p>
        </div>
      </div>
      <div class="meta"><span class="pill">${esc(P.status)}</span></div>
      <p class="lead">${esc(P.ringkas)}</p>
    </div>
    <div class="menu">
      ${baris("tentang", "user", "Tentang saya", "Cerita singkat, keahlian, pengalaman")}
      ${baris("visi", "eye", "Visi dan Misi", "Arah dan tujuan untuk OSIS dan sekolah")}
      ${baris("program", "list", "Program Kerja", P.program.length + " program")}
      ${baris("kontak", "mail", "Hubungi saya", "Instagram, GitHub, email")}
    </div>`;
}

/* ----- Tentang ----- */
function renderTentang() {
  $("#v-tentang").innerHTML = `
    <h2 class="sec-title first">Halo!</h2>
    <div class="prose">${P.tentang.map(t => `<p>${esc(t)}</p>`).join("")}</div>
    <h2 class="sec-title">Keahlian</h2>
    <div class="chips">${P.keahlian.map(k => `<span class="chip">${esc(k)}</span>`).join("")}</div>
    <h2 class="sec-title">Pengalaman</h2>
    <ul class="exp">${P.pengalaman.map(p => `
      <li>
        <h3>${esc(p.judul)}</h3>
        ${p.tempat ? `<div class="at">${esc(p.tempat)}</div>` : ""}
        <p>${esc(p.ket)}</p>
      </li>`).join("")}</ul>`;
}

/* ----- Visi dan Misi ----- */
function renderVisi() {
  $("#v-visi").innerHTML = `
    <div class="visi-card">
      <p class="eyebrow">Visi</p>
      <p>${esc(P.visi)}</p>
    </div>
    <h2 class="sec-title">Misi</h2>
    <ol class="misi">${P.misi.map(m => `<li><span>${esc(m)}</span></li>`).join("")}</ol>`;
}

/* ----- Program kerja ----- */
let saring = "Semua";
function daftarProgram() {
  const isi = P.program.map((k, i) => ({ k, i })).filter(x => saring === "Semua" || x.k.tag.includes(saring));
  $("#proj-list").innerHTML = isi.map(({ k, i }) => `
    <li>
      <button type="button" class="proj" data-proj="${i}">
        <span class="eyebrow">${esc(k.jenis)}</span>
        <h3>${esc(k.judul)}</h3>
        <p>${esc(k.ringkas)}</p>
        <div class="tags">${k.tag.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </button>
    </li>`).join("");
}
function renderProgram() {
  const semuaTag = ["Semua", ...new Set(P.program.flatMap(k => k.tag))];
  $("#v-program").innerHTML = `
    <h2 class="sec-title first">Program Kerja</h2>
    <div class="chips" role="group" aria-label="Saring program">
      ${semuaTag.map(t => `<button type="button" class="chip" data-tag="${esc(t)}" aria-pressed="${t === saring}">${esc(t)}</button>`).join("")}
    </div>
    <ul class="projects" id="proj-list"></ul>`;
  daftarProgram();
}

/* ----- Kontak ----- */
function renderKontak() {
  $("#v-kontak").innerHTML = `
    <h2 class="sec-title first">Mari bicara</h2>
    <p>Ketuk Salin untuk menyalin kontak, lalu tempel di aplikasi yang Anda pakai.</p>
    <ul class="contacts">${P.kontak.map((c, i) => `
      <li class="contact">
        <div class="info"><div class="lbl">${esc(c.label)}</div><div class="val" id="kv-${i}">${esc(c.nilai)}</div></div>
        <div class="acts">
          ${c.url ? `<a class="btn sq" href="${esc(c.url)}" target="_blank" rel="noopener" aria-label="Buka ${esc(c.label)}">${ik("out", 18)}</a>` : ""}
          <button type="button" class="btn" data-salin="${i}">${ik("copy", 16)}<span>Salin</span></button>
        </div>
      </li>`).join("")}</ul>
    <p class="foot">© ${new Date().getFullYear()} ${esc(P.nama)}</p>`;
}

/* ----- Navigasi tab ----- */
function pasangTab() {
  $("#tabs").innerHTML = TABS.map(t => `
    <button type="button" class="tab" data-tab="${t.id}">
      <span class="ico">${ik(t.ikon)}</span><span>${esc(t.nama)}</span>
    </button>`).join("");
}
function tampil(id) {
  const tab = TABS.find(t => t.id === id) || TABS[0];
  TABS.forEach(t => { $("#v-" + t.id).hidden = t.id !== tab.id; });
  document.querySelectorAll(".tab").forEach(b => {
    if (b.dataset.tab === tab.id) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
  });
  $("#judul").textContent = tab.judul;
  document.title = tab.id === "beranda" ? "Profil Ameida" : tab.judul + " · Profil Ameida";
  $("#main").scrollTop = 0;
  try { history.replaceState(null, "", "#" + tab.id); } catch (e) {}
}

/* ----- Panel detail program ----- */
let fokusSebelum = null;
function bukaPanel(i) {
  const k = P.program[i];
  fokusSebelum = document.activeElement;
  $("#sheet-meta").textContent = k.jenis;
  $("#sheet-title").textContent = k.judul;
  $("#sheet-body").innerHTML = `
    <p>${esc(k.detail)}</p>
    <h3 class="sub">Tujuan</h3>
    <p>${esc(k.tujuan)}</p>
    <div class="tags" style="margin-top:16px">${k.tag.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
  $("#sheet-bg").hidden = false;
  $("#sheet-close").focus();
}
function tutupPanel() {
  $("#sheet-bg").hidden = true;
  if (fokusSebelum && fokusSebelum.focus) fokusSebelum.focus();
}

/* ----- Salin & toast ----- */
let waktuToast;
function toast(teks) {
  const el = $("#toast");
  el.textContent = teks;
  el.hidden = false;
  clearTimeout(waktuToast);
  waktuToast = setTimeout(() => { el.hidden = true; }, 2200);
}
async function salin(i) {
  const c = P.kontak[i];
  try {
    await navigator.clipboard.writeText(c.nilai);
    toast(c.label + " disalin");
  } catch (e) {
    const sel = window.getSelection();
    const r = document.createRange();
    r.selectNodeContents($("#kv-" + i));
    sel.removeAllRanges();
    sel.addRange(r);
    toast("Teks dipilih. Salin dengan menekan lama.");
  }
}

/* ----- Tema ----- */
function temaAktif() {
  return document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function perbaruiIkonTema() {
  const gelap = temaAktif() === "dark";
  $("#tema").innerHTML = ik(gelap ? "sun" : "moon", 20);
  $("#tema").setAttribute("aria-label", gelap ? "Ganti ke tema terang" : "Ganti ke tema gelap");
}

/* ----- Mulai ----- */
renderBeranda(); renderTentang(); renderVisi(); renderProgram(); renderKontak(); pasangTab();
$("#sheet-close").innerHTML = ik("close", 20);
try { const t = localStorage.getItem("tema"); if (t === "dark" || t === "light") document.documentElement.dataset.theme = t; } catch (e) {}
perbaruiIkonTema();

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) return tampil(go.dataset.go);
  const tab = e.target.closest("[data-tab]");
  if (tab) return tampil(tab.dataset.tab);
  const tag = e.target.closest("[data-tag]");
  if (tag) {
    saring = tag.dataset.tag;
    document.querySelectorAll("[data-tag]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.tag === saring)));
    return daftarProgram();
  }
  const pr = e.target.closest("[data-proj]");
  if (pr) return bukaPanel(Number(pr.dataset.proj));
  const sl = e.target.closest("[data-salin]");
  if (sl) return salin(Number(sl.dataset.salin));
  if (e.target === $("#sheet-bg") || e.target.closest("#sheet-close")) return tutupPanel();
  if (e.target.closest("#tema")) {
    const baru = temaAktif() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = baru;
    try { localStorage.setItem("tema", baru); } catch (err) {}
    perbaruiIkonTema();
  }
});
document.addEventListener("keydown", e => {
  if ($("#sheet-bg").hidden) return;
  if (e.key === "Escape") tutupPanel();
  if (e.key === "Tab") { e.preventDefault(); $("#sheet-close").focus(); }
});

tampil(location.hash.slice(1));
