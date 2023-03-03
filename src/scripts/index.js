import '../styles/styles.css'
import Manager from './manager_module'
import Meal from './meals'

//Global fields
//Content Container in Main block
const contentContainer = document.querySelector('#content')
const manager = new Manager()
let container
let heading
let mealDescriptionText

//Ceate Page header
const header = manager.createPageHeader()

//Create div container for Nav buttons
container = manager.creatContainer()
container.classList.add('flex', 'flex-row', 'items-center', 'justify-center', 'gap-8')

//Create Nav buttons
const homeBtn = manager.createButton('Home', 'home-btn')
    const menuBtn = manager.createButton('Menu', 'menu-btn')
    const contactBtn = manager.createButton('Contacts', 'contact-btn')
    
    let btns = [menuBtn,homeBtn,contactBtn]
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
    const heavyBreakfast = new Meal('Heavy Breakfast', 'heavy-breakfast')
        heavyBreakfast.setImageId('heavy-breakfast-img')
        mealDescriptionText = 'We make the healthiest, most delicious and affordable heavy breakfast in town'
        heavyBreakfast.setDescriptionText(mealDescriptionText)

        contentContainer.appendChild(heavyBreakfast.createMealCard())
        
        //import heavy breakfast image
        import('../images/huge-breakfast.jpg').then(({default: image}) =>{
            document.querySelector('#heavy-breakfast-img').src = image
        }).catch((error)=>console.error(`Error occured while importing image ${error}`))
        

// //Light Breakfast
const lightBreakfast = new Meal('Hot and Sweet Light-BreakFast', 'light-breakfast')
        lightBreakfast.setImageId('light-breakfast-img')
        mealDescriptionText = 'The Best light breakfasts are made in Deep Fries Restaurant. You won\'t want to miss it.'
        lightBreakfast.setDescriptionText(mealDescriptionText)
        
        contentContainer.appendChild(lightBreakfast.createMealCard())
        
        //import light breakfast image
        import('../images/light-breakfast.jpg').then(({default: image}) =>{
            document.querySelector('#light-breakfast-img').src = image
        }).catch((error)=>console.error(`Error occured while importing image ${error}`))

//Lunch Meals        
const lunchMeal = new Meal('Mouth Watering Lunch', 'lunch-meal')
        lunchMeal.setImageId('lunch-meal-img')
        mealDescriptionText = 'The Best Lunch you will ever have'
        lunchMeal.setDescriptionText(mealDescriptionText)
        
        contentContainer.appendChild(lunchMeal.createMealCard())
        
        //import light breakfast image
        import('../images/lunch-meals.jpeg').then(({default: image}) =>{
            document.querySelector('#lunch-meal-img').src = image
        }).catch((error)=>console.error(`Error occured while importing image ${error}`))

//Dinner meals
const dinnerMeal = new Meal('Sweetest Dinners', 'dinner')
        dinnerMeal.setImageId('dinners-img')
        mealDescriptionText = 'We Know Just what you need in the evening'
        dinnerMeal.setDescriptionText(mealDescriptionText)
        
        contentContainer.appendChild(dinnerMeal.createMealCard())
        
        //import light breakfast image
        import('../images/lunch-meals.jpeg').then(({default: image}) =>{
            document.querySelector('#dinners-img').src = image
        }).catch((error)=>console.error(`Error occured while importing image ${error}`))


//footer
const footer = manager.createFooter()
document.body.appendChild(footer)



    


        