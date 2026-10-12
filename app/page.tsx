"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X, Play, Phone, MessageCircle, MapPin, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const BRAND = process.env.NEXT_PUBLIC_BRAND_NAME || "Kenchic";
const WHATSAPP = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254703056056").replace(/\D/g, "");
const PHONE = process.env.NEXT_PUBLIC_CALL_NUMBER || "+254 703 056 056";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "pcservice@kenchic.com";
const YOUTUBE_VIDEO = "https://youtu.be/8Um_zHRFIFA";
const slides = [
  { kicker: "GOOD FOOD. HEALTHY LIVING.", title: "From our farm\nto your family.", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=2200&q=90", position: "center 52%" },
  { kicker: "CARE AT EVERY STAGE", title: "Healthy flocks\nstart here.", image: "https://images.unsplash.com/photo-1516467508483-a7212f958d2a?auto=format&fit=crop&w=2200&q=90", position: "center 48%" },
  { kicker: "POULTRY PRODUCTS & SUPPORT", title: "Growing better,\ntogether.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90", position: "center 55%" },
];
const productItems = [
  { name: "Mayai", desc: "Eggs for homes, shops and businesses.", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85", order: "Mayai / eggs" },
  { name: "Day-old chicks", desc: "Start your poultry journey with the right chicks.", image: "https://images.unsplash.com/photo-1555852095-64e7428df0fa?auto=format&fit=crop&w=900&q=85", order: "Day-old chicks" },
  { name: "Feeds", desc: "Poultry nutrition for every stage of growth.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85", order: "Poultry feeds" },
  { name: "Drinkers", desc: "Practical equipment for everyday poultry care.", image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=900&q=85", order: "Poultry drinkers" },
];
const socialFoods = [
  { name: "Twitter", href: "https://twitter.com/KenchicKenya", icon: Twitter },
  { name: "Facebook", href: "https://web.facebook.com/KukuAboutChicken/?_rdc=1&_rdr", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/kenchic_limited/", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@kenchickukumfalme4184", icon: Youtube },
  { name: "TikTok", href: "https://www.tiktok.com/@kenchic.limited?is_from_webapp=1&sender_device=pc", icon: MessageCircle },
];
const socialChicks = [
  { name: "Twitter", href: "https://twitter.com/Kenchic_Chicks", icon: Twitter },
  { name: "Facebook", href: "https://web.facebook.com/KenchicDOC?_rdc=1&_rdr", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/kenchic_chicks_/", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@kenchicdayoldchicks5195", icon: Youtube },
];
function wa(message: string) { return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`; }

type NavItem = { label: string; href?: string; children?: NavItem[] };
const navItems: NavItem[] = [
  { label: "Corporate", href: "#company", children: [
    { label: "About Us", href: "#about" },
    { label: "The Kenchic Way", href: "#testimonials" },
    { label: "Foods", href: "#products", children: [ { label: "Products", href: "#product-range" }, { label: "Shop Now", href: "#product-range" }, { label: "Recipes", href: "https://www.kenchic.com/recipes/" } ] },
  ]},
  { label: "Day Old Chicks", href: "#products", children: [
    { label: "Products", href: "#product-range", children: [ { label: "Broilers", href: "#product-range" }, { label: "Layers", href: "#product-range" }, { label: "Kenbro", href: "#product-range" } ] },
    { label: "Poultry Centres", href: "#contact" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Talk to Us", href: "#contact" },
  ]},
  { label: "Contact", href: "#contact" },
];

function Dropdown({ item, close }: { item: NavItem; close: () => void }) {
  const [open, setOpen] = useState(false);
  return <div className={`nav-item has-dropdown ${open ? "dropdown-open" : ""}`}>
    <div className="nav-parent-row">
      <a className="nav-link" href={item.href} onClick={close}>{item.label}</a>
      <button className="dropdown-toggle" onClick={() => setOpen(!open)} aria-label={`Toggle ${item.label} menu`} aria-expanded={open}><ChevronDown size={13} /></button>
    </div>
    {open && <div className="dropdown-panel">{item.children?.map((child) => child.children ? <NestedDropdown key={child.label} item={child} close={close} /> : <a key={child.label} href={child.href} onClick={() => { setOpen(false); close(); }}>{child.label}</a>)}</div>}
  </div>;
}
function NestedDropdown({ item, close }: { item: NavItem; close: () => void }) {
  const [open, setOpen] = useState(false);
  return <div className="nested-item"><div className="nested-parent-row"><a href={item.href} onClick={close}>{item.label}</a><button className="nested-toggle" onClick={() => setOpen(!open)} aria-label={`Toggle ${item.label} submenu`} aria-expanded={open}><ChevronDown size={13} /></button></div>{open && <div className="nested-panel">{item.children?.map((child) => <a key={child.label} href={child.href} onClick={close}>{child.label}</a>)}</div>}</div>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const timer = window.setInterval(() => setActive(v => (v + 1) % slides.length), 6000); return () => window.clearInterval(timer); }, []);
  const closeMenu = () => setMobileOpen(false);
  return <main>
    <div className="topline"><div className="wrap topline-inner"><span>Quality poultry products for Kenyan homes and farms</span><div><a href={`tel:${PHONE.replace(/\s/g, "")}`}><Phone size={13} /> {PHONE}</a><a href={wa(`Hello ${BRAND}, I would like to make an enquiry.`)} target="_blank" rel="noreferrer"><MessageCircle size={13} /> WhatsApp</a></div></div></div>
    <header className="header"><div className="wrap nav-wrap">
      <a className="logo" href="#home" aria-label={`${BRAND} home`}><span className="logo-wordmark"><strong>{BRAND}</strong><small>KUKU MFALME</small></span></a>
      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
      <nav className={mobileOpen ? "navigation nav-visible" : "navigation"} aria-label="Main navigation">
        <a className="nav-link home-link" href="#home" onClick={closeMenu}>Home</a>
        {navItems.map(item => item.children ? <Dropdown key={item.label} item={item} close={closeMenu} /> : <a key={item.label} className="nav-link" href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a className="nav-button" href={wa(`Hello ${BRAND}, I would like to book or enquire about your products.`)} target="_blank" rel="noreferrer">Book Now</a>
        <a className="nav-button" href="#products">Shop Now</a>
      </nav>
    </div></header>

    <section className="hero" id="home" aria-label="Featured stories">
      {slides.map((s, i) => <div key={s.kicker} className={`hero-slide ${active === i ? "hero-slide-active" : ""}`} style={{ backgroundImage: `url('${s.image}')`, backgroundPosition: s.position }} />)}
      <div className="hero-overlay" /><div className="wrap hero-inner"><div className="hero-text" key={active}><span className="hero-kicker">{slides[active].kicker}</span><h1>{slides[active].title.split("\n").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h1><p>From day-old chicks to eggs and everyday poultry essentials, we are here to help you grow with confidence.</p><div className="hero-buttons"><a className="yellow-button" href="#products">Discover our products <ArrowRight size={17} /></a><a className="white-outline-button" href={`tel:${PHONE.replace(/\s/g, "")}`}><Phone size={16} /> Call us</a></div></div></div>
      <div className="hero-dots" aria-label="Carousel slide selection">{slides.map((s, i) => <button key={s.kicker} className={i === active ? "active" : ""} onClick={() => setActive(i)} aria-label={`Show slide ${i + 1}`} aria-current={i === active ? "true" : undefined} />)}</div>
    </section>

    <section className="about-intro section" id="about"><div className="wrap about-grid">
      <div className="about-visual"><img src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1300&q=90" alt="Healthy poultry and fresh eggs" /><a className="video-play" href={YOUTUBE_VIDEO} target="_blank" rel="noreferrer" aria-label="Watch our story on YouTube"><span><Play fill="currentColor" size={22} /></span><strong>Watch our story</strong></a><div className="image-caption">From farm to family</div></div>
      <div className="about-copy"><span className="section-kicker">ABOUT US</span><h2>Enable Shared Prosperity Through Sustainable Food Production</h2><p>We believe in using our products and services to help people live healthier, happier, and more fulfilling lives. We work to provide opportunities to create more wealth for everyone by producing food in a way that is safe, sustainable, and good for the environment.</p><p>Through the business we operate, and how we create and share the value we generate, we want to make sure that everyone has access to good, healthy food now, and in the future. And we work together to do this in a way that is fair and benefits everyone, including generations to come.</p><a className="simple-link" href="#company">More about us <ArrowRight size={17} /></a></div>
    </div></section>

    <section className="trace-section" id="traceability"><div className="wrap"><div className="center-heading"><span className="section-kicker">OUR JOURNEY</span><h2>Trace the process from day one</h2></div><div className="trace-grid">
      <article className="trace-card"><img src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1200&q=85" alt="Fresh food prepared for families" loading="lazy" /><div className="trace-copy"><span>01 / FARM TO FAMILY</span><h3>Farm to Family</h3><p>Bringing quality food from our farms to the people and families who enjoy it every day.</p><a href="#products" className="simple-link">Discover more <ArrowRight size={16} /></a></div></article>
      <article className="trace-card trace-reverse"><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Green fields at a poultry farm" loading="lazy" /><div className="trace-copy"><span>02 / FARM TO FARM</span><h3>Farm to Farm</h3><p>Careful farming, responsible practices and attention to quality at every stage of the process.</p><a href="#company" className="simple-link">Discover more <ArrowRight size={16} /></a></div></article>
    </div></div></section>

    <section className="company-banner" id="company"><div className="company-backdrop"/><div className="company-content"><span className="section-kicker">WHO WE ARE</span><h2>About the company</h2><p>Committed to quality, responsible food production and helping our communities thrive.</p><a className="yellow-button" href="#contact">Learn more <ArrowRight size={17} /></a></div></section>

    <section className="kuku-section" id="products"><div className="wrap"><div className="center-heading"><span className="section-kicker">OUR PRODUCTS</span><h2>The Kuku for You</h2></div><div className="kuku-grid"><article className="kuku-feature"><div className="kuku-image"><img src={productItems[1].image} alt="Day-old chicks" loading="lazy" /></div><div className="kuku-text"><span>DAY OLD CHICKS</span><h3>Start your flock strong</h3><p>Explore our day-old chicks and find a suitable starting point for your poultry project.</p><a className="simple-link" href={wa("Hello, I would like to enquire about day-old chicks, breeds, availability and prices.")} target="_blank" rel="noreferrer">See our products <ArrowRight size={17} /></a></div></article><article className="kuku-feature"><div className="kuku-image"><img src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1200&q=85" alt="Eggs and food products" loading="lazy" /></div><div className="kuku-text"><span>FOOD & FARM ESSENTIALS</span><h3>Good food for every day</h3><p>Browse our everyday range of mayai, poultry feeds and drinkers for your home or farm.</p><a className="simple-link" href="#product-range">See our products <ArrowRight size={17} /></a></div></article></div>
      <div className="product-range" id="product-range">{productItems.map(p => <a className="range-card" href={wa(`Hello ${BRAND}, I would like to enquire about ${p.order}. Please share prices and availability.`)} target="_blank" rel="noreferrer" key={p.name}><img src={p.image} alt={p.name} loading="lazy"/><span>{p.name}</span><ArrowRight size={17}/></a>)}</div>
    </div></section>

    <section className="truth-section" id="testimonials"><div className="truth-video"><iframe title="The Naked Truth Behind Your Kenchic Brand" src="https://www.youtube-nocookie.com/embed/8Um_zHRFIFA?autoplay=1&mute=1&controls=0&loop=1&playlist=8Um_zHRFIFA&playsinline=1&modestbranding=1" allow="autoplay; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" /></div><div className="truth-shade"/><div className="wrap truth-content"><div><span className="section-kicker">QUALITY YOU CAN TRACE</span><h2>The Kenchic Way</h2><p>We take pride in knowing each of our birds; from hatching eggs to cuts on your plate. We’re committed to traceability, care and quality at every step — this is the Kenchic Way.</p></div><a className="yellow-button" href="#company">Learn more <ArrowRight size={17}/></a></div></section>

    <section className="product-contact-strip"><div className="wrap product-contact-inner"><div><span className="section-kicker">READY TO ORDER?</span><h2>Let’s talk poultry.</h2><p>Ask us about prices, product availability and how to order.</p></div><div className="contact-ctas"><a className="yellow-button" href={wa(`Hello ${BRAND}, I would like to enquire about Mayai, day-old chicks, feeds and drinkers.`)} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Order on WhatsApp</a><a className="dark-outline-button" href={`tel:${PHONE.replace(/\s/g, "")}`}><Phone size={17}/> Call us</a></div></div></section>

    <footer id="contact"><div className="wrap footer-columns"><section><h3>Our Location</h3><p><MapPin size={17}/> Nairobi, Kenya</p><p className="footer-muted">Contact us for our business location and collection arrangements.</p></section><section><h3>Customer Support</h3><p><Phone size={16}/> {PHONE}</p><p><MessageCircle size={16}/> WhatsApp: available for orders</p><p><Mail size={16}/> {EMAIL}</p><a className="footer-link" href={wa(`Hello ${BRAND}, I need customer support.`)} target="_blank" rel="noreferrer">Talk to our team <ArrowRight size={15}/></a></section><section className="social-section"><h3>Our Socials</h3><strong>Follow {BRAND}</strong><div className="social-row">{socialFoods.slice(0,4).map(s => {const Icon = s.icon; return <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}><Icon size={19}/></a>;})}</div><strong>Follow our poultry updates</strong><div className="social-row">{socialChicks.slice(0,4).map(s => {const Icon = s.icon; return <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}><Icon size={19}/></a>;})}</div></section></div>
      <div className="footer-bottom"><div className="wrap footer-bottom-inner"><span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span><div><a href="#contact">Terms & Conditions</a><a href="#contact">Privacy Policy</a><a href="#contact">Cookie Policy</a></div></div></div>
    </footer>
    <a className="floating-whatsapp" href={wa(`Hello ${BRAND}, I would like to make an enquiry.`)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={23}/><span>WhatsApp us</span></a>
  </main>;
}
