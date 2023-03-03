import '../styles/styles.css'
import { displayDinner, displayHeavyBreakfast, 
    displayLunch, displayLightBreakfast, 
    displayFooter, displayPageHeader,
    displayRestaurantName
} from './stage'

//header
displayPageHeader()
//name and logo
displayRestaurantName()


//Meals
displayHeavyBreakfast()
displayLightBreakfast()
displayLunch()
displayDinner()

//footer
displayFooter()

window.addEventListener('load', (e) =>{
    document.querySelector('#home-btn').addEventListener('click',(e)=>{
        console.log(e.target)
    })

})


    


        