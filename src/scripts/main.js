import '../styles/styles.css'
import DOMManager from "./dom_manager.js";
const content = document.querySelector('#content')
//DOMMananger Object
const manager = new DOMManager()

//Header
const header = manager.createPageHeader()

// Navigation btns
const navDiv = manager.createNavigation()

header.appendChild(navDiv)//Append btns to header
document.body.prepend(header)//Append header to body