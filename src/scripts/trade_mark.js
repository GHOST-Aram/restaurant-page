export default class TradeMark {
    // # TradeMark
    // TradeMark.#businessName
        #businessName = ''
    // TradeMark.#logo = {src:'',id:''}
        #logo = {src:'',id:''}
        
    // TradeMark.#slogan
        #slogan = ''

    // TradeMark.setBusinessName(businessName)
    // TradeMark.setLogo(path/to/img): set logo.src to path and unique logo.id
    // TradeMark.setSlogan(slogan)
    // TradeMark.getSlogan
    // TradeMark.getBusinessName():-return businessName
    // TradeMark.getLogo():-return logo obj

    getBusinessName() {
        return this.#businessName
    }
    getLogo() {
        return this.#logo.src
    }
    getSlogan() {
        return this.#slogan
    }
    setBusinessName(businessName) {
        this.#businessName = businessName
    }
    setLogo(pathToSrc) {
        this.#logo.src = pathToSrc
    }
    setSlogan(slogan) {
        this.#slogan = slogan
    }

}