export default class DOMManager {
    // # DOMManager class depends on Item, Meal, TradeMark and Contact
    //     -DOMManager class decides how objects are displayed
    //     DOMManager.createPageHeader()
    //     DOMManager.createNavigation()
    //     DOMManager.createTradeMark(TradeMark):-create div with styled logo and business name
    //     DOMManager.createMealCard(Meal):-embed meal card object into div element
    //     DOMManager.createContainer():-retuns a div container with heading
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

    //create empty container
    creatContainer(){

        //Empty container
        const container = document.createElement('div')
        container.className = 'm-auto bg-white w-3/5 space-y-4 p-4 rounded-md'
        
        return container
    }
    //Create description paragraph for available meals
    createDescriptionParagraph(descriptionText){
        const paragrapgh = document.createElement('p')
        paragrapgh.className = 'text-slate-600 text-center text-xl py-4'
        paragrapgh.textContent = descriptionText
        
        return paragrapgh
    }
    //create Footer
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
    createHeadingText(text, id){
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
    //return styled Div containing Nav buttons
    createNavigation() {
         //Create div container for Nav buttons
        const container = this.creatContainer()
        container.classList.add('flex', 'flex-row', 'items-center', 'justify-center', 'gap-8')
        container.classList.remove('space-y-4')

        //Create Nav buttons
        const homeBtn = manager.createButton('Home', 'home-btn')
        const menuBtn = manager.createButton('Menu', 'menu-btn')
        const contactBtn = manager.createButton('Contacts', 'contact-btn')
        
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
    createTradeMark(TradeMark){

    }
}