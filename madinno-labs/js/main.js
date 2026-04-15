// ===== Portfolio Data =====
const projects = [
  {
    id:1, cat:'web', title:'GrabMedia — Video Downloader',
    desc:'A sleek video downloader web app supporting multiple social media platforms for digital creators. Download from YouTube, Facebook, Instagram, and TikTok — fast, safe, and watermark-free in up to 4K quality.',
    client:'GrabMedia', duration:'2 Weeks', tech:'Web App, API Integration',
    tags:['Web App','Video','Downloader','Multi-Platform'],
    color:'var(--sky)',
    img:'images/project-grabmedia.jpg',
    link:'https://grabmedia.app/'
  },
  {
    id:2, cat:'app', title:'Fitness Tracking App',
    desc:'Cross-platform mobile app for a local gym chain. Workout logging, progress charts, class booking, and push notifications — all in one sleek interface.',
    client:'GymPro PH', duration:'5 Weeks', tech:'React Native, Firebase',
    tags:['Mobile','Cross-Platform','Firebase'],
    color:'var(--lime)'
  },
  {
    id:3, cat:'creative', title:'Business Class — SMM Design',
    desc:'Full social media management and content creation for Business-Class Philippines, a top-tier business travel agency. Designed branded carousel posts, hiring graphics, company culture visuals, and produced engaging reels that consistently hit thousands of views.',
    client:'Business-Class', duration:'Ongoing', tech:'Photoshop, Premiere Pro, Canva',
    tags:['Social Media','Reels','Graphics','Branding'],
    color:'var(--gold)',
    img:'images/project-businessclass.jpg',
    link:'https://www.facebook.com/businessclassphilippines'
  },
  {
    id:4, cat:'software', title:'Inventory Management System',
    desc:'Custom internal tool for tracking stock, automating reorder alerts, and generating reports. Reduced manual work by 70%.',
    client:'Retail Chain PH', duration:'4 Weeks', tech:'Next.js, PostgreSQL',
    tags:['Dashboard','Automation','SaaS'],
    color:'var(--teal)'
  },
  {
    id:5, cat:'web', title:'Restaurant Website & Ordering',
    desc:'Beautiful restaurant website with online menu, table reservations, and food ordering system. Mobile-first design with instant loading.',
    client:'Kusina Cebu', duration:'2 Weeks', tech:'HTML/CSS, Node.js',
    tags:['Restaurant','Ordering','Responsive'],
    color:'var(--sky)'
  },
  {
    id:6, cat:'creative', title:'Social Media Campaign',
    desc:'30-day content package including video reels, carousel graphics, story templates, and engagement strategy for a product launch.',
    client:'Beauty Brand PH', duration:'Ongoing', tech:'Premiere Pro, Photoshop',
    tags:['Video','Social Media','Campaign'],
    color:'var(--coral)'
  }
];

// ===== Render Portfolio =====
function renderPortfolio(filter='all'){
  const grid = document.getElementById('portfolioGrid');
  const filtered = filter==='all' ? projects : projects.filter(p=>p.cat===filter);
  grid.innerHTML = '';
  filtered.forEach((p,i)=>{
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.style.animationDelay = (i*0.08)+'s';
    item.onclick = ()=>openModal(p);
    const imgContent = p.img
      ? `<img src="${p.img}" alt="${p.title}" class="portfolio-img">`
      : `<div class="portfolio-placeholder">
          <div class="portfolio-placeholder-bg" style="background:${p.color};"></div>
          <svg viewBox="0 0 100 60" fill="none"><defs><linearGradient id="pp${p.id}" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FF7A45"/><stop offset="20%" stop-color="#FFD447"/><stop offset="45%" stop-color="#A6E064"/><stop offset="70%" stop-color="#2ED9C3"/><stop offset="100%" stop-color="#4DA6FF"/></linearGradient></defs><path d="M50,30 C38,8 8,8 8,30 C8,52 38,52 50,30 C62,8 92,8 92,30 C92,52 62,52 50,30" stroke="url(#pp${p.id})" stroke-width="7" stroke-linecap="round" fill="none"/></svg>
          <span>${p.cat}</span>
        </div>`;
    item.innerHTML = `
      <div class="portfolio-img-wrap">${imgContent}</div>
      <div class="portfolio-info">
        <h3>${p.title}</h3>
        <p>${p.client}</p>
        <div class="portfolio-meta">${p.tags.map(t=>'<span>'+t+'</span>').join('')}</div>
      </div>
      <div class="portfolio-overlay">
        <div class="portfolio-overlay-btn">View Project →</div>
      </div>
    `;
    grid.appendChild(item);
  });
}

function filterPortfolio(cat,btn){
  document.querySelectorAll('.portfolio-nav button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderPortfolio(cat);
}

// ===== Modal =====
function openModal(p){
  const overlay = document.getElementById('modalOverlay');
  const heroContent = p.img
    ? `<img src="${p.img}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;display:block">`
    : `<div class="portfolio-placeholder" style="border-radius:0">
        <div class="portfolio-placeholder-bg" style="background:${p.color};opacity:0.15"></div>
        <svg viewBox="0 0 100 60" fill="none" style="width:80px;height:50px"><defs><linearGradient id="mg" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FF7A45"/><stop offset="20%" stop-color="#FFD447"/><stop offset="45%" stop-color="#A6E064"/><stop offset="70%" stop-color="#2ED9C3"/><stop offset="100%" stop-color="#4DA6FF"/></linearGradient></defs><path d="M50,30 C38,8 8,8 8,30 C8,52 38,52 50,30 C62,8 92,8 92,30 C92,52 62,52 50,30" stroke="url(#mg)" stroke-width="7" stroke-linecap="round" fill="none"/></svg>
        <span style="font-size:0.7rem">${p.cat.toUpperCase()}</span>
      </div>`;
  document.getElementById('modalHero').innerHTML = heroContent;
  const visitLink = p.link
    ? `<a href="${p.link}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.7rem 1.5rem;background:var(--grad-accent);color:var(--dark);font-weight:600;font-size:0.85rem;border-radius:10px;margin-top:1.5rem;transition:all 0.3s;text-decoration:none">Visit Live Project <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>`
    : '';
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-cat">${p.cat.toUpperCase()} PROJECT</div>
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <div class="portfolio-meta" style="margin-bottom:0">${p.tags.map(t=>'<span>'+t+'</span>').join('')}</div>
    ${visitLink}
    <div class="modal-details">
      <div class="modal-detail"><span class="label">Client</span><span class="value">${p.client}</span></div>
      <div class="modal-detail"><span class="label">Duration</span><span class="value">${p.duration}</span></div>
      <div class="modal-detail"><span class="label">Tech Stack</span><span class="value">${p.tech}</span></div>
    </div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(e){
  if(e && e.target!==document.getElementById('modalOverlay') && !e.target.classList.contains('modal-close')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// ===== Nav Scroll =====
let lastScroll = 0;
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('scrolled', window.scrollY > 60);

  // Active link
  const sections = ['hero','about','services','portfolio','process','values','founder','contact'];
  const scrollPos = window.scrollY + 200;
  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if(link){
      if(scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight){
        document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
  closeMobile();
  return false;
}

// ===== Mobile Menu =====
function toggleMobile(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile(){
  document.getElementById('mobileMenu').classList.remove('open');
}

// ===== Scroll Reveal =====
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('vis')});
},{threshold:0.08, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ===== Init =====
renderPortfolio();