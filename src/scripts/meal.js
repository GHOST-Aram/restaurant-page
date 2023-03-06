export default class Meal{
    // # Meal class
    //     Meal.#description
    #description = ''
    //     Meal.#img
    
    
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
    
    setDescription(description){
        //Set description text for the meal
        this.description = description
    }
}