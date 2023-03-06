import '../styles/styles.css'
import Contact from './contact';
import DOMManager from "./dom_manager.js";
import Item from './item';
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
        tradeMark.setSlogan('The Best Meals You Will Ever Have')

        // Render trade MARK
        document.querySelector('main').prepend(manager.createTradeMark(tradeMark))
        
        //import logo images
        import('../images/coffeecup.png').then(({default:logoImg}) =>{
            document.querySelector('#deep-fries-restaurant-logo-1').src = logoImg
            document.querySelector('#deep-fries-restaurant-logo-2').src = logoImg
        }).catch((error)=>{console.error(`Error occured while importing Logo Images: ${error}`)})
    
    //Display meals
    function displayMeals(){
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
    }

    displayMeals()
    
    document.querySelectorAll('button').forEach((button) =>{
        button.addEventListener('click', (e) =>{
            if(e.target.id === 'home-btn'){
                content.innerHTML = ''
                displayMeals()

            } else if(e.target.id === 'menu-btn'){
                content.innerHTML = ''
                const menuContainer = manager.createMenuContainer('Breakfast')

                //Menu Item 1
                const item1 = new Item('Kenyan Breakfast')
                    item1.setPrice('Ksh 890')
                    const menuItem1 = manager.createMenuItem(item1)
                    //Append to container
                    menuContainer.appendChild(menuItem1)
                    
                    //Import image
                    //Item-img
                    import('../images/huge-breakfast.jpg').then(({default: image}) =>{
                        document.querySelector('#kenyan-breakfast-img').src = image
                    }).catch((error)=>console.log(`Error occured while importing menu item image: ${error}`))
                    
                //Menu Item 2
                const item2 = new Item('South African Breakfast')
                    item2.setPrice('Ksh 876')
                    const menuItem2 = manager.createMenuItem(item2)
                    //Append to container
                    menuContainer.appendChild(menuItem2)
                    
                    //Import image
                    //Item-img
                    import('../images/lunch-meals.jpeg').then(({default: image}) =>{
                        document.querySelector('#south-african-breakfast-img').src = image
                    }).catch((error)=>console.log(`Error occured while importing menu item image: ${error}`))

                //Menu Item 3
                const item3 = new Item('English Breakfast')
                    item3.setPrice('Ksh 980')
                    const menuItem3 = manager.createMenuItem(item3)
                    //Append to container
                    menuContainer.appendChild(menuItem3)
                    
                    //Import image
                    //Item-img
                    import('../images/light-breakfast.jpg').then(({default: image}) =>{
                        document.querySelector('#english-breakfast-img').src = image
                    }).catch((error)=>console.log(`Error occured while importing menu item image: ${error}`))
                    
                //render menu container
                manager.render(content, menuContainer)

            }else if(e.target.id === 'contact-btn'){
                content.innerHTML = ''
                const contactContainer = manager.createContactsContainer()

                //Email contact
                const contact = new Contact()
                    //Email
                    contact.setEmail('deepfries@gmail.com')
                    const email = manager.creatContact('Email', contact.getEmail())

                    //Facebook
                    contact.setFacebook('Deep Fries Restaurant')
                    const facebook = manager.creatContact('Facebook', contact.getFacebook())

                    //Instagram
                    contact.setInstagram('@deep_fries_meals')
                    const instagram = manager.creatContact('Instagram', contact.getInstagram())

                    //Location
                    contact.setLocationAddress('Alpha Building 2nd Floor ')
                    const location = manager.creatContact('Location', contact.getLocationAddress())

                    //Messenger
                    contact.setMessenger('4355-SFDF-8903')
                    const messenger = manager.creatContact('Messenger', contact.getMessenger())

                    //Telephone
                    contact.setTelephone('254 79 889 665')
                    const telephone = manager.creatContact('Telephone', contact.getTelephone())

                    //Twitter
                    contact.setTwitter('@deep_fries')
                    const twitter = manager.creatContact('Twitter', contact.getTwitter())

                    const contacts = [email, facebook,telephone,instagram,location,messenger,twitter]

                    contacts.forEach(contact => {
                        contactContainer.appendChild(contact)
                    })
                manager.render(content, contactContainer)

            }
        })
    })
    

    //Create Footer
    document.body.appendChild(manager.createFooter())



    //Events
    window.addEventListener('load', ()=>{
        document.querySelector('#home-btn').addEventListener('click',(e)=>{
        })
        
    })