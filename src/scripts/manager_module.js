export default class Manager{

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
    createHeadingText(text, id){
        const heading = document.createElement('h1')
        heading.textContent = text
        heading.id = id
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