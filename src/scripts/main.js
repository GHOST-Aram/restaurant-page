import '../styles/styles.css'
import DOMManager from "./dom_manager.js";
import Meal from './meal';
import TradeMark from './trade_mark';
const content = document.querySelector('#content')
//DOMMananger Object
const manager = new DOMManager()

    //Header
    const header = manager.createPageHeader()

        // Navigation btns
        const navDiv = manager.createNavigation()

        header.appendChild(navDiv)//Append btns to header
        document.body.prepend(header)//Append header to body


    //Create Trade Mark
    const tradeMark = new TradeMark()
        tradeMark.setBusinessName('Deep Fries Restaurant')
        tradeMark.setSlogan('The Best Food You Will Ever Have')

        // Render trade MARK
        manager.render(content, manager.createTradeMark(tradeMark))
        
        //import logo images
        import('../images/coffeecup.png').then(({default:logoImg}) =>{
            document.querySelector('#deep-fries-restaurant-logo-1').src = logoImg
            document.querySelector('#deep-fries-restaurant-logo-2').src = logoImg
        }).catch((error)=>{console.error(`Error occured while importing Logo Images: ${error}`)})

    
    //Create and display Meals
    //Heavy breakfast
    const heavyBreakfast = new Meal('Heavy Breakfast')
        heavyBreakfast.setDescription('Healthiest and Most Delicious Heavy Breakfasts in Town')
        manager.render(content,manager.createMealCard(heavyBreakfast))

        //Import image
        import('../images/huge-breakfast.jpg').then(({default:breakfastImg}) =>{
            document.querySelector('#heavy-breakfast-image').src = breakfastImg
        }).catch((error)=>{console.error(`Error occured while importing Heavy Breakfast Image: ${error}`)})

        
    //Light breakfast
    const lightBreakfast = new Meal('Light Breakfast')
        lightBreakfast.setDescription('Sweetest Light Breakfasts in the whole East and Central Africa')
        manager.render(content,manager.createMealCard(lightBreakfast))

        //Import image
        import('../images/light-breakfast.jpg').then(({default:breakfastImg}) =>{
            document.querySelector('#light-breakfast-image').src = breakfastImg
        }).catch((error)=>{console.error(`Error occured while importing Light Breakfast Image: ${error}`)})
        
    //Lunch Meals
    const lunch = new Meal('Lunch Time Stuff')
        lunch.setDescription('Take Your Most Favourite Lunch Meals Here, In a very relaxed atmosphere.')
        manager.render(content,manager.createMealCard(lunch))

        //Import image
        import('../images/lunch-meals.jpeg').then(({default:luchImg}) =>{
            document.querySelector('#lunch-time-stuff-image').src = luchImg
        }).catch((error)=>{console.error(`Error occured while importing Lunch Image: ${error}`)})

    //Dinner Meals
    const dinner = new Meal('Dine Dinners')
        dinner.setDescription('We also have your best interests in the evenining. We Know Just what you need.')
        manager.render(content,manager.createMealCard(dinner))

        //Import image
        import('../images/huge-breakfast.jpg').then(({default:dinnerImg}) =>{
            document.querySelector('#dine-dinners-image').src = dinnerImg
        }).catch((error)=>{console.error(`Error occured while importing Dinner Image: ${error}`)})
