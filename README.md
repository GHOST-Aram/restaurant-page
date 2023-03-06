# restaurant-page
Simple webpack bundled restaurant page

# Display manager class depends on Item, Meal, TradeMark and Contact
    -Display manager class decides how objects are displayed
    DOMManager.createPageHeader()
    DOMManager.createTradeMark(TradeMark):-create div with styled logo and business name
    DOMManager.createMealCard(Meal):-embed meal card object into div element
    DOMManager.createContainer(containerHeading):-retuns a div container with heading
    DOMManager.createMenuItem(Menu):-embed menu items into styled div element
    DOMManager.createContactCard(Contact):-put contact object in a div
    DOMManager.createFooter()
    DOMManager.#createHeading(headingText):-return styled h1 element
    DOMManager.render(parent, child):-render elements to DOM

    all DOMManager methods return styled DOM elements except render() method
# TradeMark
/*
TradeMark class encapsulates all the properties on the trademark including business name, Logos, and solgans
*/
    TradeMark.#businessName
    TradeMark.#logo = {src:'',id:''}
    TradeMark.#slogan

    TradeMark.setBusinessName(businessName)
    TradeMark.setLogo(path/to/img): set logo.src to path and unique logo.id
    TradeMark.setSlogan(slogan)
    TradeMark.getSlogan
    TradeMark.getBusinessName():-return businessName
    TradeMark.getLogo():-return logo obj



    
# Meal class
    /*
    Meal class encapsulate properties of meal object that are used in the hompage of the app to display the meals available at the restaurant
    */
    mealCard object
    meal.name
    meal.#description
    meal.#img
    meal.#id

# Contact class
    /*
    Contact class encapsulates all forms of contacts available in that organization 
    */
    contact.#telephone
    contact.#email
    contact.#messenger
    contact.#Twitter
    contact.#facebook
    contact.#instagram
    contact.#location

    setters and getters methods
# Item class
    /*
    Item class encasuplates the properties of items
    */
    item.name
    item.#img.src
    item.price
    Item.#id

