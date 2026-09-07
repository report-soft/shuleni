
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>{
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>navLinks?.classList.remove('open'));
});
const year = document.querySelector('[data-year]');
if(year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contactForm');
if(contactForm){
  contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.querySelector('#name')?.value || '';
    const school = document.querySelector('#school')?.value || '';
    const msg = document.querySelector('#message')?.value || '';
    const text = encodeURIComponent(`Hello SENA, my name is ${name}. School: ${school}. ${msg}`);
    window.location.href = `https://wa.me/256755120413?text=${text}`;
  });
}
