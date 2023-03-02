import '../styles/styles.css'
import logoImg from '../images/coffeecup.png'

//Global fields
//Content Container in Main block
const contentContainer = document.querySelector('#content')




//Create Page Header
function createPageHeader(){

    const header = document.createElement('header')
    header.className = 'bg-white'
    
        //Create header div
        const headerDiv = document.createElement('div')//Div within header
        headerDiv.className = 'm-auto py-4 flex flex-row items-center justify-center gap-8'
        
            //Nav Buttons
            import('./manager_module')
                .then(({default: Manager}) =>{
                    const manager = new Manager()//Manager object
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
                })
                .catch((error)=>console.error(error))
                .finally(() =>{
                    header.appendChild(headerDiv)
            
                    const main = document.querySelector('main')
                    main.prepend(header)//Append header to body

                })
}

function createHeading(){

    //Create heading div
        const heading = document.createElement('div')
        heading.className = 'bg-white py-4 rounded-md flex flex-row items-center justify-between px-16 w-3/5 m-auto'
    
        //Create logo images
            import('./manager_module').then(({default: Manager}) =>{
                const manager = new Manager()
                const logo1 = manager.createImage('logo-1')
                const logo2 = manager.createImage('logo-2')
        
                //Add classnames and src
                const logos = [logo1, logo2]

                //create heading text
                const headingTxt = manager.createHeadingText('Deep Fries Restaurant', 'restaurant-name')
                headingTxt.className = 'text-bold text-slate-600 text-2xl text-center m-auto' 
                
                //Add image src
                import('../images/coffeecup.png')
                    .then(({default: logoImg}) =>{
                       loadLogoImages(logoImg, logos)
                    })
                    .catch((error) => console.error(`Error occured while importing image ${error}`))
                    .finally(()=>{
                        //Appending elements to DOM
                        const children = [logo1, headingTxt, logo2]
                        manager.appendToParent(heading,children)
                    })
            
            
            }).catch((error)=> console.error(error))
            .finally(()=>{
                contentContainer.appendChild(heading)//Append to content div
            })       
}

 function loadLogoImages(image, imgElementsArray){
    imgElementsArray.forEach(logo => {
        logo.src = image//imported img
        logo.className = 'logo'
    });
}
createPageHeader()
createHeading()



    


        