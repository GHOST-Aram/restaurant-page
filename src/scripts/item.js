export default class Item{
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
        return `${this.name.toLocaleLowerCase().replaceAll(' ','-')}`
    }
   
    getPrice(){
        //return item price
        return this.#price
    }
   
    setPrice(price){
        //set item Price
        this.#price = price
    }


}