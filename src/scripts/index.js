import '../styles/styles.css'
import { displayDinner, displayHeavyBreakfast, 
    displayLunch, displayLightBreakfast, 
    displayFooter, displayPageHeader,
    displayRestaurantName, displayContacts,
    displayMenu
} from './stage'

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
        displayMenu()
        
    })
    
    //Display Contacts
    document.querySelector('#contact-btn').addEventListener('click', (e) =>{
        document.querySelector('#content').innerHTML = ''
        displayContacts()
        
    })

})


    


        