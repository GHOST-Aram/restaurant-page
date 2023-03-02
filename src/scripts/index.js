import '../styles/styles.css'

//Global fields
//Content Container in Main block
const contentContainer = document.querySelector('#content')


//Create container Div

function createContainerDiv(containerTitle){
    //create div
    const div = document.createElement('div')
    div.className = 'm-auto bg-white w-3/5 space-y-4 p-4 rounded-md'

    //Import Manager class
    import('./manager_module')
        .then(({default: Manager}) =>{
            const manager = new Manager()

            //create text-heading for div
            const headingText = manager.createHeadingText(containerTitle)
            headingText.className = 'text-bold text-slate-600 text-2xl py-4 text-center m-auto'

            //Append heading to container div
            div.appendChild(headingText)
            
        })
        //Incase import fails
        .catch((error) => console.error(`Error occured: ${error}`))
        .finally(()=>{
            //return div whether inport is resolved or rejected
        })
        return div
}

//Create description paragrapgh
function createDescription(text){
    const prg = document.createElement('p')
    prg.className = 'text-slate-600 text-center text-xl py-4'
    prg.textContent = text

    return prg
}
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
                    //make btns array
                    const btns = makeButtons(manager)

                    //Add classes
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
                const logos = createLogosImg(manager)
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
                    //Append elements to DOM
                        const [logo1, logo2] = logos//destructure logos
                        const children = [logo1, headingTxt, logo2]
                        manager.appendToParent(heading,children)
                    })
            }).catch((error)=> console.error(error))
            .finally(()=>{
                contentContainer.appendChild(heading)//Append to content div
            })       
}

//Add image source to logo images
function createLogosImg(obj){
    const logo1 = obj.createImage('logo-1')
    const logo2 = obj.createImage('logo-2')

    //Add classnames and src
    return [logo1, logo2]

}

async function createHeavyBreakFastDiv(){
 
    //create empty div with heading only
    const div = createContainerDiv('Delicious Heavy Breakfast')

    //Load img
    import('./manager_module')
        .then(({default: Manager}) =>{
            const manager = new Manager()
            const img = manager.createImage('heavy-breakfast-img')

            import('../images/huge-breakfast.jpg')
                .then(({default: brImg})=>{
                    img.src= brImg
                })
                .catch((error)=> console.error(`Error occured while loading heavy breakfast image ${error}`))
                .finally(()=>{
                    //Append img to div
                    div.appendChild(img)
                })
        })
        .catch((error)=>{console.error(`Error occured While creating breakfast div${error}`)})
    
    //Description paragraph
    const desc = 'We make the healthiest, most delicious and affordable heavy breakfast in town'
    const descPar = createDescription(desc)
    setTimeout(()=>{
        div.appendChild(descPar)

    },3000)
    //Append to container
    contentContainer.appendChild(div)
}
 function loadLogoImages(image, imgElementsArray){
    imgElementsArray.forEach(logo => {
        logo.src = image//imported img
        logo.className = 'logo'
    });
}

//Make buttons for heading
function makeButtons(obj){
    const homeBtn = obj.createButton('homeBtn', 'Home')
    const menuBtn = obj.createButton('menuBtn', 'Menu')
    const contactBtn = obj.createButton('contactBtn', 'Contacts')
    return [homeBtn,menuBtn,contactBtn]
}



createPageHeader()
createHeading()
setTimeout(()=>{
    createHeavyBreakFastDiv()

},3000)





    


        