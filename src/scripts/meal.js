export default class Meal{
    // # Meal class
    //     Meal.#description
    #description = ''
    //     Meal.#img
    #img = {src:''}
    
    
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
    getImg(){
        //return item Image source
        return this.#img.src
    }
    setImage(src){
        //Set image src
        this.#img.src = src
    }
    setDescription(description){
        //Set description text for the meal
        this.description = description
    }
}