export default class TradeMark {
    // # TradeMark
    // TradeMark.#businessName
        #businessName = ''
    // TradeMark.#logo = {src:'',id:''}
        #logo = {id:''}
        
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
    getLogoId() {
        return this.#logo.id
    }
    getSlogan() {
        return this.#slogan
    }
    setBusinessName(businessName) {
        this.#businessName = businessName
    }
    setLogoId(id) {
        this.#logo.id = id
    }
    setSlogan(slogan) {
        this.#slogan = slogan
    }

}