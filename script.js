/* Typewriter effect & rotating roles */
const roles = ['AI & Data Enthusiast', 'Full-stack Developer', 'MERN & Cloud Practitioner', 'Problem Solver'];
let i = 0, j = 0, isDeleting = false;
const typeEl = document.getElementById('typewriter');
function type(){
  const current = roles[i % roles.length];
  if(!isDeleting){
    typeEl.textContent = current.substring(0, j+1);
    j++;
    if(j === current.length){ isDeleting = true; setTimeout(type, 1200); return; }
  } else {
    typeEl.textContent = current.substring(0, j-1);
    j--;
    if(j === 0){ isDeleting = false; i++; setTimeout(type, 300); return; }
  }
  setTimeout(type, isDeleting ? 60 : 120);
}
if(typeEl) type();

/* Parallax: slight move of hero background based on mouse */
const hero = document.getElementById('hero');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;
  if(hero) hero.style.transform = `translate3d(${x * 12}px, ${y * 8}px, 0)`;
});

/* Scroll reveal */
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
}, {threshold:0.12});
revealEls.forEach(el => obs.observe(el));

/* contact form -> mailto fallback */
document.getElementById('year').textContent = new Date().getFullYear();
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = `Website message from ${name || 'Visitor'}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:joshiviveksharma@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

/* small accessibility: enable reveal for users who disable JS animations quickly */
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach((el,i)=> setTimeout(()=> el.classList.add('visible'), 200*i));
});