let toggleButton = document.querySelector('.toggle-button')
let navbarlinks = document.querySelector('.navbar-links')


toggleButton.addEventListener('click' , ()=>{
 navbarlinks.classList.toggle('active');
})
window.onscroll =()=>{
  navbarlinks.classList.remove('active')
}