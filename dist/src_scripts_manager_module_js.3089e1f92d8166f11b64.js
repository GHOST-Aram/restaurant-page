"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_scripts_manager_module_js"],{

/***/ "./src/scripts/manager_module.js":
/*!***************************************!*\
  !*** ./src/scripts/manager_module.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manager)
/* harmony export */ });
class Manager{

    //Add elements to parent
    appendToParent(parent,childrenArray){
        childrenArray.forEach(child => {
            parent.appendChild(child)
        });
    }
    //Create btn element with id
    createButton(id, text) {
        const button = document.createElement('button')
        button.id = id
        button.textContent = text
        return button
    }
    createHeadingText(text, id){
        const heading = document.createElement('h1')
        heading.textContent = text
        heading.id = id
        return heading
    }
    //Create img element with id
    createImage(id) {
        const img = document.createElement('img')
        img.id = id
        return img
    }
    render(parent, child){
        parent.appendChild(child)
    }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfbWFuYWdlcl9tb2R1bGVfanMuMzA4OWUxZjkyZDgxNjZmMTFiNjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9tYW5hZ2VyX21vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2Vye1xyXG5cclxuICAgIC8vQWRkIGVsZW1lbnRzIHRvIHBhcmVudFxyXG4gICAgYXBwZW5kVG9QYXJlbnQocGFyZW50LGNoaWxkcmVuQXJyYXkpe1xyXG4gICAgICAgIGNoaWxkcmVuQXJyYXkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vQ3JlYXRlIGJ0biBlbGVtZW50IHdpdGggaWRcclxuICAgIGNyZWF0ZUJ1dHRvbihpZCwgdGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYnV0dG9uLmlkID0gaWRcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfVxyXG4gICAgY3JlYXRlSGVhZGluZ1RleHQodGV4dCwgaWQpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgICAgICBoZWFkaW5nLmlkID0gaWRcclxuICAgICAgICByZXR1cm4gaGVhZGluZ1xyXG4gICAgfVxyXG4gICAgLy9DcmVhdGUgaW1nIGVsZW1lbnQgd2l0aCBpZFxyXG4gICAgY3JlYXRlSW1hZ2UoaWQpIHtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGltZy5pZCA9IGlkXHJcbiAgICAgICAgcmV0dXJuIGltZ1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHBhcmVudCwgY2hpbGQpe1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==