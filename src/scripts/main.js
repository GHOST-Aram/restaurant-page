import '../styles/styles.css'
import DOMManager from "./dom_manager.js";
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