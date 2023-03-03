export default class Manager{


    // async getImageSource(path){
    //     return await import(path)
    // }
    //Add elements to parent
    appendToParent(parent,childrenArray){
        childrenArray.forEach(child => {
            parent.appendChild(child)
        });
    }
    //Create btn element with id
    createButton(id, text) {
        const button = document.createElement('button')
        button.id = id
        button.textContent = text
        return button
    }

    //creat container with heading
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
    render(parent, child){
        parent.appendChild(child)
    }
}