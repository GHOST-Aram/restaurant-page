export default class Item{
    // item.#img
    #img = {src:''}
    // item.#price
    #price = 0
    // Item.#id
    
    
    constructor(name){
        // item.name
        this.name = name
    }
    generateId(){
        //generate id jusing name
        //Name is expected to be unique
        return this.name.toLowercase().replace('','-')
    }
    getImg(){
        //return item Image source
        return this.#img.src
    }
    getPrice(){
        //return item price
        return this.#price
    }
    setImage(src){
        //Set image src
        this.#img.src = src
    }
    setPrice(price){
        //set item Price
        this.#price = price
    }


}