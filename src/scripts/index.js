import '../styles/styles.css'
import Manager from './manager_module'

//Global fields
//Content Container in Main block
const contentContainer = document.querySelector('#content')
let container
let heading
const manager = new Manager()

//Ceate Page header
const header = manager.createPageHeader()

    //Create div container for Nav buttons
    container = manager.creatContainer()
    container.classList.add('flex', 'flex-row', 'items-center', 'justify-center', 'gap-8')

    //Create Nav buttons
    const homeBtn = manager.createButton('Home', 'home-btn')
    const menuBtn = manager.createButton('Menu', 'menu-btn')
    const contactBtn = manager.createButton('Contacts', 'contact-btn')
    
    let btns = [homeBtn,menuBtn,contactBtn]
    //Render
    btns.forEach(btn =>{
        container.appendChild(btn)
    })
    header.appendChild(container)
    document.querySelector('main').prepend(header)


//PageHeading with business name
container = manager.creatContainer()

    //Make container flex
    container.classList.add('flex', 'flex-row', 'items-center', 'justify-between', 'px-16')
    
    //first logo image
    const logo1 = manager.createImage('logo-1')
    logo1.className = 'logo'
    
    //2nd logo img
    const logo2 = manager.createImage('logo-2')
    logo2.className = 'logo'

    //Lazy import images
    import('../images/coffeecup.png').then(({default:logo})=>{
        logo2.src = logo1.src = logo
    }).catch((error)=>console.error(`Error occured during import ${error}`))

    //heading
    heading = manager.createHeadingText('Deep Fries Restaurant', 'restaurant-name')

    //Render
    container.appendChild(logo1)
    container.appendChild(heading)
    container.appendChild(logo2)

    contentContainer.appendChild(container)

//Heavy breakfast
container = manager.creatContainer()

    //Heading
    heading = manager.createHeadingText('Delicious Heavy BreakFast', 'heavy-breakfast')

    //image
    const heavyBreakfastImg = manager.createImage('heavy-breakfast-img')
    heavyBreakfastImg.classList.add('meals-img')

    //import image
    import('../images/huge-breakfast.jpg').then(({default: image}) =>{
        heavyBreakfastImg.src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))

    //Description paragraph
    let text = 'We make the healthiest, most delicious and affordable heavy breakfast in town'
    let descPar = manager.createDescriptionParagraph(text)

    //Render
    container.appendChild(heading)
    container.appendChild(heavyBreakfastImg)
    container.appendChild(descPar)
    contentContainer.appendChild(container)


//Light Breakfast
container = manager.creatContainer()

    //Heading
    heading = manager.createHeadingText('Hot and Sweet Light-BreakFast', 'light-breakfast')

    //image
    const lightBreakfastImg = manager.createImage('light-breakfast-img')
    lightBreakfastImg.classList.add('meals-img')


    //import image
    import('../images/light-breakfast.jpg').then(({default: image}) =>{
        lightBreakfastImg.src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))

    //Description paragraph
    text = 'The Best light breakfasts are made in Deep Fries Restaurant. You won\'t want to miss it.'
    descPar = manager.createDescriptionParagraph(text)

    //Render
    container.appendChild(heading)
    container.appendChild(lightBreakfastImg)
    container.appendChild(descPar)
    contentContainer.appendChild(container)

//Light Breakfast
container = manager.creatContainer()

    //Heading
    heading = manager.createHeadingText('Mouth Watering Lunch', 'lunch-meal')

    //image
    const lunchMealsImg = manager.createImage('lunch-meal-img')
    lunchMealsImg.classList.add('meals-img')


    //import image
    import('../images/lunch-meals.jpeg').then(({default: image}) =>{
        lunchMealsImg.src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))

    //Description paragraph
    text = 'The Best Lunch you will ever have.'
    descPar = manager.createDescriptionParagraph(text)

    //Render
    container.appendChild(heading)
    container.appendChild(lunchMealsImg)
    container.appendChild(descPar)
    contentContainer.appendChild(container)

//Dinners
container = manager.creatContainer()

    //Heading
    heading = manager.createHeadingText('Sweetest Dinners', 'dinner')

    //image
    const dinnersImg = manager.createImage('dinners-img')
    dinnersImg.classList.add('meals-img')


    //import image
    import('../images/lunch-meals.jpeg').then(({default: image}) =>{
        dinnersImg.src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))

    //Description paragraph
    text = 'We Know Just what you need in the evening'
    descPar = manager.createDescriptionParagraph(text)

    //Render
    container.appendChild(heading)
    container.appendChild(dinnersImg)
    container.appendChild(descPar)
    contentContainer.appendChild(container)





    


        