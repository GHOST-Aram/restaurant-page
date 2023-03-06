export default class Contact{
//     # Contact class

    //     contact.
    #telephone = ''
    //     contact.
    #email = ''
    //     contact.
    #messenger = ''
    //     contact.
    #twitter = ''
    //     contact.
    #facebook = ''
    //     contact.
    #instagram = ''
    //     contact.
    #location = ''
    constructor(){

    }
    getEmail(){
        return this.#email
    }
    getFacebook(){
        return this.#facebook
    }
    getInstagram(){
        return this.#instagram
    }
    getLocationAddress(){
        return this.#location
    }
    getMessenger(){
        return this.#messenger
    }
    getTelephone(){
        return this.#telephone
    }
    getTwitter(){
        return this.#twitter
    }
    setEmail(email){
        this.#email = email
    }
    setFacebook(facebook){
        this.#facebook = facebook
    }
    setInstagram(instagram){
        this.#instagram = instagram
    }
    setLocationAddress(locationAddress){
        this.#location = locationAddress
    }
    setMessenger(messengerNumber){
        this.#messenger = messengerNumber
    }
    setTelephone(telephone){
        this.#telephone = telephone
    }
    setTwitter(twitter){
        this.#twitter = twitter
    }
    
}