# restaurant-page
Simple webpack bundled restaurant page

# Display manager class depends on menu, meals and contacts
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
    TradeMark.businessName
    TradeMark.logo

# Menu class imports item class
    item.name
    item.price
    item.Img
    item.id
    Menu.createMenuItem():- return menu object
    
# Meal class
    mealCard object
    meal.name
    meal.description
    meal.img
    meal.id

# Contact class

    contact.telephone
    contact.email
    contact.messenger
    contact.Twitter
    contact.facebook
    contact.instagram
    contact.location

# Item class
    item.name
    item.img
    item.price
    Item.id

