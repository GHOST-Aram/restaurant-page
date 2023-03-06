export default class TradeMark {
    // # TradeMark
    // TradeMark.#businessName
        #businessName = ''
    // TradeMark.#logo = {src:'',id:''}
    
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
    generateId() {
        return `${this.#businessName.toLocaleLowerCase().replaceAll(' ', '-')}-logo`
    }
    getSlogan() {
        return this.#slogan
    }
    setBusinessName(businessName) {
        this.#businessName = businessName
    }
    setSlogan(slogan) {
        this.#slogan = slogan
    }

}