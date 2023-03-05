var heroImg = document.getElementById("hero")
var imgArr = ['hero.jpeg']
var rand;

var menuBody = document.getElementById("headlessui-dialog-1")
var menuBtn = document.getElementById("menu-btn")
var mobileMenuBtn = document.getElementById("mob-menu-btn")
var header = document.querySelector('header')
var html = document.querySelector("html")
var contactBtn = document.getElementById('contact-btn')
var contactForm = document.getElementById('contact-form')
var callBtn = document.querySelector('.call-btn')
var form = document.querySelector('#form')

var formName = document.querySelector('.name')
var formEmail = document.querySelector('.email')
var formMessage = document.querySelector('.message')


form.addEventListener('submit',(e) =>
{
    e.preventDefault()
    localStorage.setItem("user-details",{name:formName.value, email:formEmail.value, message: formMessage.value})
    form.reset();
    window.location.href="/confirmed.html"
})

callBtn.addEventListener("click",() =>
{
    window.location.href = "tel:+254724011155";
})

contactBtn.addEventListener("click",() =>
{
    contactForm.scrollIntoView({behavior:"smooth",block:"nearest"})
})

menuBtn.addEventListener("click",() =>
{
    toggleMenu()
})

mobileMenuBtn.addEventListener("click",() =>
{
    toggleMenu()
})

const toggleMenu = () => {
    header.classList.toggle('!z-max')
    html.classList.toggle("htmlclass")
    menuBody.classList.toggle("hide")
}

setInterval(()=>{
    for (let i = 0; i < 11; i++) 
    {
        imgArr.push(`works${i+1}.jpeg`)
    }
    rand = Math.floor((11-0)*Math.random());
    heroImg.style.backgroundImage = `url(/media/${imgArr[rand]})`
    heroImg.classList.add("hero")
},10000)

const goHome = () =>
{
    heroImg.scrollIntoView({behavior:"smooth",block:"nearest"})
}