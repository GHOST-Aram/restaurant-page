import '../styles/styles.css'
import { displayDinner, displayHeavyBreakfast, 
    displayLunch, displayLightBreakfast, 
    displayFooter, displayPageHeader,
    displayRestaurantName, displayContacts,
    displayMenu, createMenu, createMenuItem,
    
} from './stage'

document.querySelector('main').className = 'container'
//header
displayPageHeader()
//name and logo
displayRestaurantName()


// Display Meals
displayHeavyBreakfast()
displayLightBreakfast()
displayLunch()
displayDinner()

//footer
displayFooter()

window.addEventListener('load', (e) =>{

    //Display home
    document.querySelector('#home-btn').addEventListener('click',(e)=>{
        document.querySelector('#content').innerHTML = ''
        displayHeavyBreakfast()
        displayLightBreakfast()
        displayLunch()
        displayDinner()
        
    })
    
    //Display Menu
    document.querySelector('#menu-btn').addEventListener('click', (e)=>{
        document.querySelector('#content').innerHTML = ''
        const breakfastMenu = createMenu('Breakfast Menu','breakfast-menu')

        //Item-1 
            let item = createMenuItem('South African', 'Ksh 500')

            //Item-img
            import('../images/huge-breakfast.jpg').then(({default: image}) =>{
                document.querySelector('#SouthAfrican-img').src = image
            }).catch((error)=>console.log(`Error occured while importing item image: ${error}`))
            
            breakfastMenu.appendChild(item)
        
        //Item-2
        item = createMenuItem('English', 'Ksh 600')

            //Item-img
            import('../images/huge-breakfast.jpg').then(({default: image}) =>{
                document.querySelector('#English-img').src = image
            }).catch((error)=>console.log(`Error occured while importing item image: ${error}`))

            //Add item to menu
            breakfastMenu.appendChild(item)
        
        //Item-3
        item = createMenuItem('Kenyan', 'Ksh 800')

            //Item-img
            import('../images/huge-breakfast.jpg').then(({default: image}) =>{
                document.querySelector('#Kenyan-img').src = image
            }).catch((error)=>console.log(`Error occured while importing item image: ${error}`))

            //Add item to menu
            breakfastMenu.appendChild(item)
        //Item-4
        item = createMenuItem('Chinese', 'Ksh 700')

            //Item-img
            import('../images/huge-breakfast.jpg').then(({default: image}) =>{
                document.querySelector('#Chinese-img').src = image
            }).catch((error)=>console.log(`Error occured while importing item image: ${error}`))

            //Add item to menu
            breakfastMenu.appendChild(item)

        displayMenu(breakfastMenu)
        
    })
    
    //Display Contacts
    document.querySelector('#contact-btn').addEventListener('click', (e) =>{
        document.querySelector('#content').innerHTML = ''
        displayContacts()
        
    })

})


    


        