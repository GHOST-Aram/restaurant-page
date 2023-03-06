export default class Meal{
    // # Meal class
    //     Meal.#description
    #description = ''
    //     Meal.#img
    #img = {id}
    
    
    constructor(name){
        //     Meal.name
        this.name = name
    }
    
    generateId(){
        //Meal.#id
        //generate id using name
        //Name is expected to be unique
        return this.name.toLowercase().replace('','-')
    }
    getDescription(){
        //return meal description text 
        return this.#description
    }
    getImgId(){
        //return item Image source
        return this.#img.id
    }
    setImageId(id){
        //Set image id
        this.#img.id = id
    }
    setDescription(description){
        //Set description text for the meal
        this.description = description
    }
}