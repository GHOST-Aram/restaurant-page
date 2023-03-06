export default class TradeMark {
    // # TradeMark
    // TradeMark.#businessName
        #businessName = ''
    // TradeMark.#logo = {src:'',id:''}
        #logo = {src:'',id:''}
    // TradeMark.setBusinessName(businessName)
    // TradeMark.setLogo(path/to/img): set logo.src to path and unique logo.id
    // TradeMark.getBusinessName():-return businessName
    // TradeMark.getLogo():-return logo obj

    getBusinessName() {
        return this.#businessName
    }
    getLogo(){
        return this.#logo.src
    }
    setBusinessName(businessName) {
        this.#businessName = businessName
    }
    setLogo(pathToSrc){
        this.#logo.src = pathToSrc
    }

}