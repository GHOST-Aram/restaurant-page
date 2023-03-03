import Manager from './manager_module'
export default class Meal{
    manager = new Manager()

    //Meal Image
    #image = {
        id:'',
        src:''
    }

    //Meal description text
    #description = {
        text:'',
        id:''
    }

    constructor(name, id){
        //Meal name eg dinner
        this.name = name
        //meal id
        this.id = id
    }

    //Create meal card
    createMealCard(){
        const mealCardContainer = this.manager.creatContainer()

        //Heading
        const heading = this.manager.createHeadingText(this.name, this.id)

        //image
        const mealImg = this.manager.createImage(this.#image.id)
        mealImg.classList.add('meals-img')

        //Description paragraph
        let description = this.manager.createDescriptionParagraph(this.#description.text)

        //Render
        mealCardContainer.appendChild(heading)
        mealCardContainer.appendChild(mealImg)
        mealCardContainer.appendChild(description)

        //Div with details of meal
        return mealCardContainer;
    }

    //get description paragraph
    getDescriptionText(){
        return this.#description.text
    }

    //get Image
    getImage(){
        return this.#image
    }
    //get meal image id
    getImageId(){
        return this.#image.id
    }

    //Set meal image src and image id
    setImageId(id){
        this.#image.id = id
    }

    //set image src
    setImageSrc(src){
        this.#image.src = src
    }

    //set meal description text
    setDescriptionText(text, id){
        this.#description.text = text
        this.#description.id = id
    }
}