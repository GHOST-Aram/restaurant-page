export default class Manager{

    createButton(id, text){
        const button = document.createElement('button')
        button.id = id
        button.textContent = text
    
        return button
    }
}