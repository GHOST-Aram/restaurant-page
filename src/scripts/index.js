import '../styles/styles.css'
import logoImg from '../images/coffeecup.png'

const content = document.querySelector('#content')

//Create headeing div
const heading = document.createElement('div')
heading.className = 'bg-white py-4 rounded-md flex flex-row items-center justify-between px-16 w-3/5 m-auto'

//Create logo images
const logo1 = document.createElement('img')
logo1.className = 'logo'
const logo2 = document.createElement('img')
logo2.className = 'logo'

//create heading text
const headingTxt = document.createElement('h1')
headingTxt.className = 'text-bold text-slate-600 text-2xl text-center m-auto' 
headingTxt.textContent = 'Deep Fries Restaurant'

//Appending elements to DOM
heading.appendChild(logo1)
heading.appendChild(headingTxt)
heading.appendChild(logo2)
content.appendChild(heading)

//Adding img src to logos
const logo = document.querySelectorAll('.logo')
logo.forEach(logo => {
    logo.src = logoImg
});