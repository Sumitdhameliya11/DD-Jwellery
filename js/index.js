const m_nav = document.querySelector('.icon');
const h_nav=document.querySelector('.header');

const toggelenav =() =>{
    h_nav.classList.toggle('active');
};

m_nav.addEventListener('click',() => toggelenav());