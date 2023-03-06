export default class DOMManager {
    // # DOMManager class depends on Item, Meal, TradeMark and Contact
    //     -DOMManager class decides how objects are displayed
    //     DOMManager.createPageHeader()
    //     DOMManager.createNavigation()
    //     DOMManager.createTradeMark(TradeMark):-create div with styled logo and business name
    //     DOMManager.createMealCard(Meal):-embed meal card object into div element
    //     DOMManager.createContainer():-retuns a styled div container
    //     DOMManager.createMenuItem(Menu):-embed menu items into styled div element
    //     DOMManager.createContactCard(Contact):-put contact object in a div
    //     DOMManager.createFooter()
    //     DOMManager.#createHeading(headingText):-return styled h1 element
    //     DOMManager.render(parent, child):-render elements to DOM

    // all DOMManager methods return styled DOM elements except render() method
    constructor() {

    }
     //Create btn element with id
    #createButton(textContent, id) {
        const button = document.createElement('button')
        button.className = 'py-2 px-8 border-2 border-solid rounded-md bg-white text-slate-600'
        button.id = id
        button.textContent = textContent
        return button
    }
    //Create contact div
    creatContact(contactType, contactDetail) {
        //Contact labels
        const contact = this.createHeading(contactType, `${contactType.replace(' ','')}-line`)
        contact.classList.remove('text-center','py-4')
        contact.classList.add('ml-16')
        
    
        //Contact detail
        const contSpan = document.createElement('span')
        contSpan.className = 'text-orange-500 text-xl'
        contSpan.textContent = `:   ${contactDetail}`
    
        contact.appendChild(contSpan)
    
        return contact
    }
    //Create contacts container
    createContactsContainer() {
        const contactsContainer = this.creatContainer()
        
        //Container heading
        const heading = this.createHeading('Our Contacts','contacts')
        heading.classList.add('w-full', 'bg-orange-300')

        contactsContainer.appendChild(heading)

        return contactsContainer
}
    //create empty container
    creatContainer(){

        //Empty container
        const container = document.createElement('div')
        container.className = 'm-auto bg-white w-3/5 space-y-4 p-4 rounded-md'
        
        return container
    }
    // return styled footer element with textContent
    createFooter(){
        const footer = document.createElement('footer')
        footer.className = 'bg-white'
        
        //Create text paragraph
        const paragrapgh = document.createElement('p')
        paragrapgh.innerHTML = `Copyright <span>&copy;<span> ${new Date().getFullYear()}`
        paragrapgh.className = 'text-slate-600 text-sm text-center m-auto'

        //Add container
        const container = this.creatContainer()
        container.appendChild(paragrapgh)

        footer.appendChild(container)
        //Add paragraph
        
        return footer
    }
    //Return styled h1 with textContent
    createHeading(text, id){
        const heading = document.createElement('h1')
        heading.textContent = text
        heading.id = id
        heading.className = 'text-bold text-slate-600 text-2xl py-4 text-center m-auto'
        return heading
    }
    //Create img element with id
    createImage(id) {
        const img = document.createElement('img')
        img.id = id
        return img
    }
    //create meal cards
    //Create meal card
    createMealCard(Meal){
        // Parent Container
        const mealCardContainer = this.creatContainer()

        //Heading
        const heading = this.createHeading(Meal.name, `${Meal.generateId()}-heading`)

        //image
        const mealImg = this.createImage(`${Meal.generateId()}-image`)
        mealImg.classList.add('meals-img')
        
        //Description paragraph
        const description = this.createParagraph(Meal.getDescription())

        //Append to mealContainer
        mealCardContainer.appendChild(heading)
        mealCardContainer.appendChild(mealImg)
        mealCardContainer.appendChild(description)

        //Div with details of meal
        return mealCardContainer;
    }

    //Create Menu container
    createMenuContainer(menuName) {
        //breakfast menu container
        const container = this.creatContainer()
   
        //Menu title
        const heading = this.createHeading(menuName, `${menuName}-menu`)
        heading.classList.add('w-full', 'bg-orange-300')
        
        //item
        
        container.appendChild(heading)
        
        return container
    }
    //Create menu items div
    createMenuItem(Item) {
        //Menu itself
        const menuItem =this.creatContainer()
        menuItem.classList.add('flex', 'flex-row', 'items-center', 
        'justify-between', 'py-4','border-b-2', 
        'border-solid', 'w-full','border-slate-500')
        //Item Img
        const itemImg =this.createImage(`${Item.generateId()}-img`)
        itemImg.className = 'menu-item-img'
        
        
        //Item Name
        const name =this.createParagraph(Item.name)
        
        //Item Price
        const itemPrice =this.createParagraph(Item.getPrice())
        
        //Add item features
        menuItem.appendChild(itemImg)
        menuItem.appendChild(name)
        menuItem.appendChild(itemPrice)
        
        return menuItem
    }
    //return styled Div containing Nav buttons
    createNavigation() {
        //Create div container for Nav buttons
        const container = this.creatContainer()
        container.classList.add('flex', 'flex-row', 'items-center', 'justify-center', 'gap-8')
        container.classList.remove('space-y-4')
        
        //Create Nav buttons
        const homeBtn = this.#createButton('Home', 'home-btn')
        const menuBtn = this.#createButton('Menu', 'menu-btn')
        const contactBtn = this.#createButton('Contacts', 'contact-btn')
        
        let btns = [homeBtn,menuBtn,contactBtn]
        //Render
        btns.forEach(btn =>{
            container.appendChild(btn)
        })
        return container
    }
    
    // return styled header element
    createPageHeader() {
        //PageHeader
        const header = document.createElement('header')
        header.className = 'bg-white'

        return header
    }
    //Create description paragraph for available meals
    createParagraph(descriptionText){
        const paragrapgh = document.createElement('p')
        paragrapgh.className = 'text-slate-600 text-center text-xl py-4'
        paragrapgh.textContent = descriptionText
        
        return paragrapgh
    }
    createTradeMark(TradeMark){
        //Parent container
        const container = this.creatContainer()
        
        //Make container flex
        container.classList.add('flex', 'flex-row', 'items-center', 'justify-between', 'mt-8', 'w-3/5')
    
        //create first logo image
        const logo1 = this.createImage(`${TradeMark.generateId()}-1`)
        logo1.className = 'logo'
        
        //create 2nd logo img
        const logo2 = this.createImage(`${TradeMark.generateId()}-2`)
        logo2.className = 'logo'

        
        //Add slogan
        const  sloganAndHeadingContainer = this.creatContainer()
        
        //heading
        const heading = this.createHeading(TradeMark.getBusinessName(), 'restaurant-name')

        //slogan
        const slogan = document.createElement('p')
        slogan.className = 'text-orange-600 text-sm text-center m-auto'
        slogan.textContent = TradeMark.getSlogan()
        //Append to div
        sloganAndHeadingContainer.appendChild(heading)
        sloganAndHeadingContainer.appendChild(slogan)

        //Append to container
        container.appendChild(logo1)
        container.appendChild(sloganAndHeadingContainer)
        container.appendChild(logo2)

        //Return trademark container
        return container
    }
    //Rednder to DOM
    render(parent, child){
        parent.appendChild(child)
    }
}