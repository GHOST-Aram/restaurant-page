import '../styles/styles.css'
import logoImg from '../images/coffeecup.png'
import Manager from './manager_module'

//Global fields
//Content Container in Main block
const content = document.querySelector('#content')

const manager = new Manager()//Manager object



//Create Page Header
    const header = document.createElement('header')
    header.className = 'bg-white'
    
        //Create header div
        const headerDiv = document.createElement('div')//Div within header
        headerDiv.className = 'm-auto py-4 flex flex-row items-center justify-center gap-8'
        
            //Nav Buttons
            const homeBtn = manager.createButton('homeBtn', 'Home')
            const menuBtn = manager.createButton('menuBtn', 'Menu')
            const contactBtn = manager.createButton('contactBtn', 'Contacts')
            
                //Add classes
                const btns = [homeBtn,menuBtn,contactBtn]
                btns.forEach(button =>{
                    button.className = 'py-2 px-8 border-2 border-solid rounded-md bg-white text-slate-600'
                })
        
        //Append to DOM
        btns.forEach(btn =>{
            headerDiv.appendChild(btn)
        })
        header.appendChild(headerDiv)
        
        const main = document.querySelector('main')
        main.prepend(header)//Append header to body



//Create heading div
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

    //Appending to content-div
        content.appendChild(heading)

    //Adding img src to logos
        const logo = document.querySelectorAll('.logo')
        logo.forEach(logo => {
            logo.src = logoImg
        });