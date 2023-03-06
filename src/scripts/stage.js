import Meal from './meals'
import Manager from './manager_module'

//Global Fields
export const contentContainer = document.querySelector('#content')
const manager = new Manager()
let container
let heading
let mealDescriptionText

export function creatContact(contactType, contactDetail) {
    //Contact labels
    const contact = manager.createHeadingText(contactType, `${contactType.replace(' ','')}-line`)
    contact.classList.remove('text-center','py-4')
    contact.classList.add('ml-16')
    

    //Contact detail
    const contSpan = document.createElement('span')
    contSpan.className = 'text-orange-500 text-xl'
    contSpan.textContent = contactDetail

    contact.appendChild(contSpan)

    return contact

}

export function createMenuItem(itemName, price) {
    //Menu itself
    const item = manager.creatContainer()
    item.classList.add('flex', 'flex-row', 'items-center', 
                        'justify-between', 'py-4','border-b-2', 
                        'border-solid', 'w-full','border-slate-500')
    //Item Img
    const itemImg = manager.createImage(`${itemName.replace(' ', '')}-img`)
    itemImg.className = 'logo'

    
    //Item Name
    const name = manager.createDescriptionParagraph(itemName)

    //Item Price
    const itemPrice = manager.createDescriptionParagraph(price)

    //Add item features
    item.appendChild(itemImg)
    item.appendChild(name)
    item.appendChild(itemPrice)

    return item
}

//function create menu slot
export function createMenu(menuName, menuId) {
     //breakfast menu container
     container = manager.creatContainer()

     //Menu title
     heading = manager.createHeadingText(menuName, menuId)
     heading.classList.add('w-full', 'bg-orange-300')
     
     //item
     
     container.appendChild(heading)
     
     return container
    }
    //Contacts
    export function createContactsContainer() {
        const contactsContainer = manager.creatContainer()
        
        //Container heading
        heading = manager.createHeadingText('Our Contacts','contacts')
        heading.classList.add('w-full', 'bg-orange-300')

        // //Contact labels
        // const enquiry = manager.createHeadingText('Enquiries:', 'enquiries-line')
        // enquiry.classList.remove('text-center')
        

        contactsContainer.appendChild(heading)
        // contactsContainer.appendChild(enquiry)
        return contactsContainer
}
//Dinner meals
export function displayDinner() {
    const dinnerMeal = new Meal('Sweetest Dinners', 'dinner')
    dinnerMeal.setImageId('dinners-img')
    mealDescriptionText = 'We Know Just what you need in the evening'
    dinnerMeal.setDescriptionText(mealDescriptionText)
    
    contentContainer.appendChild(dinnerMeal.createMealCard())
    
    //import light breakfast image
    import('../images/lunch-meals.jpeg').then(({default: image}) =>{
        document.querySelector('#dinners-img').src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))
}

export function displayFooter() {
    //footer
    const footer = manager.createFooter()
    document.body.appendChild(footer)

}
//Heavy breakfast
export function displayHeavyBreakfast() {
    const heavyBreakfast = new Meal('Heavy Breakfast', 'heavy-breakfast')
    heavyBreakfast.setImageId('heavy-breakfast-img')
    mealDescriptionText = 'We make the healthiest, most delicious and affordable heavy breakfast in town'
    heavyBreakfast.setDescriptionText(mealDescriptionText)

    contentContainer.appendChild(heavyBreakfast.createMealCard())
    
    //import heavy breakfast image
    import('../images/huge-breakfast.jpg').then(({default: image}) =>{
        document.querySelector('#heavy-breakfast-img').src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))
    
}


// //Light Breakfast
export function displayLightBreakfast() {
    const lightBreakfast = new Meal('Hot and Sweet Light-BreakFast', 'light-breakfast')
    lightBreakfast.setImageId('light-breakfast-img')
    mealDescriptionText = 'The Best light breakfasts are made in Deep Fries Restaurant. You won\'t want to miss it.'
    lightBreakfast.setDescriptionText(mealDescriptionText)
    
    contentContainer.appendChild(lightBreakfast.createMealCard())
    
    //import light breakfast image
    import('../images/light-breakfast.jpg').then(({default: image}) =>{
        document.querySelector('#light-breakfast-img').src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))
}

//Lunch Meals        
export function displayLunch() {
    const lunchMeal = new Meal('Mouth Watering Lunch', 'lunch-meal')
    lunchMeal.setImageId('lunch-meal-img')
    mealDescriptionText = 'The Best Lunch you will ever have'
    lunchMeal.setDescriptionText(mealDescriptionText)
    
    contentContainer.appendChild(lunchMeal.createMealCard())
    
    //import light breakfast image
    import('../images/lunch-meals.jpeg').then(({default: image}) =>{
        document.querySelector('#lunch-meal-img').src = image
    }).catch((error)=>console.error(`Error occured while importing image ${error}`))
}

//DisplayMenu
export function displayMenu(container) {

    contentContainer.appendChild(container)
}
// export function displayPageHeader() {
//     //Ceate Page header
//     const header = manager.createPageHeader()

//     //Create div container for Nav buttons
//     container = manager.creatContainer()
//     container.classList.add('flex', 'flex-row', 'items-center', 'justify-center', 'gap-8')
//     container.classList.remove('space-y-4')

//     //Create Nav buttons
//     const homeBtn = manager.createButton('Home', 'home-btn')
//     const menuBtn = manager.createButton('Menu', 'menu-btn')
//     const contactBtn = manager.createButton('Contacts', 'contact-btn')
    
//     let btns = [homeBtn,menuBtn,contactBtn]
//     //Render
//     btns.forEach(btn =>{
//         container.appendChild(btn)
//     })
//     header.appendChild(container)
//     document.body.prepend(header)

// }

//Display page heading
export function displayRestaurantName() {
        //PageHeading with business name
        container = manager.creatContainer()

        //Make container flex
        container.classList.add('flex', 'flex-row', 'items-center', 'justify-between', 'mt-8', 'w-3/5')
    
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
        
        document.querySelector('main').prepend(container)
}