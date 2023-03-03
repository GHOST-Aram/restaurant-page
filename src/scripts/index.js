import '../styles/styles.css'
import { displayDinner, displayHeavyBreakfast, 
    displayLunch, displayLightBreakfast, 
    displayFooter, displayPageHeader,
    displayRestaurantName,
    displayMenu
} from './stage'

//header
displayPageHeader()
//name and logo
displayRestaurantName()


Meals
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
    
    

})


    


        