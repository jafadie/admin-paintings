(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-paintings/admin-paintings.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-paintings/admin-paintings.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4\">\n\t\t\t<app-serie-create (selectIdSerie)=\"processSelectedIdSerie($event)\"></app-serie-create>\n\n\t\t\t<app-serie-list [idSerie]=\"selectedIdSerie\" (selectIdSerie)=\"processSelectedIdSerie($event)\"></app-serie-list>\n\t\t</div>\n\n\t\t<div class=\"col-lg-8\">\n\t\t\t<app-painting-list [idSerie]=\"selectedIdSerie\" (selectPainting)=\"processSelectedPainting($event)\" [paintingSelected]=\"selectedPainting\"></app-painting-list>\n\n\t\t\t<app-painting-create [idSerie]=\"selectedIdSerie\" [paintingSelected]=\"selectedPainting\" (selectIdSerie)=\"processSelectedIdSerie($event)\" (selectPainting)=\"processSelectedPainting($event)\"></app-painting-create>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 100px;\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4\">\n\n\t\t\t<app-notification-sent-list></app-notification-sent-list>\n\n\t\t\t<app-notification-scheduled-list></app-notification-scheduled-list>\n\n\t\t</div>\n\n\t\t<div class=\"col-lg-8\">\n\n\t\t\t<app-notification-create></app-notification-create>\n\n\t\t</div>\n\t</div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout></app-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"position: relative; top: 60px\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\n\t\t</div>\n\t\t<div id=\"fotoLorena\" class=\"col-md-3 col-sm-3 col-xs-3\" style=\"text-align: center;\">\n\t\t\t<img src=\"..\\..\\assets\\images\\lorenaContact.jpg\" width=\"90%;\"  />\n\t\t</div>\n\n\t\t<div id=\"textoPresentacion\" class=\"col-md-7 col-sm-7 col-xs-7\" >\n\t\t\t<div id=\"titulo\" style=\"margin-bottom: 4%; margin-top: 1%; font-size: 28px;\">\n\t\t\t\tAbout the Artist\n\t\t\t</div>\n\t\t\t<div id=\"texto\" style=\"font-size: 15px;\">\n\t\t\t\t<p>\n\t\t\t\t\tWho I was as a child has shaped who I am as an artist today. Every painting and every idea encompasses nostalgia. All of my inspiration comes from those real world experiences and personal stories.\n\t\t\t\t</p>\n\n\t\t\t\t<p>\n\t\t\t\t\tNon-traditional portraits painted in traditional ways are my greatest passion.  I paint people in my life that I'm trying to make a connection with, telling a story that's personal and individual to each piece.  Each piece seeks to go beyond realism and capture the essence of the subject. With each painting, my goal is to create as much honesty about that individual, allowing to capture the spirit of the person I’m painting.\n\t\t\t\t</p>\n\n\t\t\t\t<p>\n\t\t\t\t\tI completed my master's from the Academy of Art University in May 2015 and am currently teaching adult in my studio as well as workshops all over the world.\n\t\t\t\t</p>\n\n\t\t\t\t<p style=\"margin-top: 7%;\">\n\t\t\t\t\tFor more information on purchasing or commissioning a painting, or to just say hello, feel free to get in touch.\n\t\t\t\t</p>\n\n\t\t\t\t\n\t\t\t\t<div>\n\t\t\t\t\tValencia, Spain\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\tTelf: (+34) 630974316\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\tstudio@lorenagarciamateu.es\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\n\n\t\t\t\t<div id=\"titulo\" style=\"margin-bottom: 3%; margin-top: 5%; font-size: 28px;\">\n\t\t\t\t\tEducation\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2009\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tDegree in Theatre Space and Settings. Polytechnic University of Valencia, Spain\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2008\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tM.A. in Artistic Production. Polytechnic University of Valencia, Spain\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2006\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tB.A. in Fine Arts. San Carlos’ College. Valencia, Spain\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2005\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tErasmus Scholarship. University of Madeira, Portugal\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\n\n\n\n\t\t\t\t<div id=\"titulo\" style=\"margin-bottom: 3%; margin-top: 5%; font-size: 28px;\">\n\t\t\t\t\tSolo Exhibitions\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2018\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tLa vida silenciosa. Movart. Art Gallery. Madrid, Spain\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2015\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tAhora, Nosotras II. M.AR.CA. León, Spain\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2014\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tOnírica. ArtClub. Caro Hotel. Valencia, Spain\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2013\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tLife in Motion. Las Naves Centro de Creación Contemporánea. Valencia, Spain\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tOrigen. L’Espai. Delegación de Cultura. Torrent, Spain\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2008\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tIl Corpo Evocato. Studio Arte Fuori Centro. Roma, Italy\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2007\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tIl Corpo Evocato. Accademia di Belle Arti. Maceratta, Italy\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t<div id=\"titulo\" style=\"margin-bottom: 3%; margin-top: 5%; font-size: 28px;\">\n\t\t\t\t\tSelected Group Exhibitions\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2018\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tPlex. Museo de Castellón. Spain *\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2017\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tSummer of art. Galería Cuatro. Valencia. Spain\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tNuevos Nómadas II. Real Álcazar de Sevilla. Comisariado por Meca\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tNuevos Nómadas I. Museo de Almería. Comisariado por Meca\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2016\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tFestival de les arts Ciutat Vella Oberta. Casa de Velázquez. Madrid. Spain.\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tPOLI_ZONTES. Contemporain landscapes. M.ARC.CA. León. Spain.*\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tANIMALAYA. M.AR.CA. León. Spain.* \n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tProject IMAGO MUNDI, MADE IN SPAIN. Fundación Benetton & CAC de Málaga. Spain and International (itinerant).*\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2014\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tArs Visibilis III International Art Festival l Miradas de Mujeres. MECA. Almería, Spain* \n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tAhora, nosotras III International Art Festival Miradas de Mujeres. Museo de Cacabelos. León, Spain \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid\" style=\"margin-top: 1%;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t2013\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tArs Visibilis. II Festival Miradas de Mujeres. Museo de Almería, Spain* \n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tAhora , nosotras. II Festival Miradas de Mujeres. Museo Arqueológico Cacabelos. León. Spain* \n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tOverlapping Memories. Quart Jove, Valencia. Spain | Space. Pittsburgh, Pennsylvania. U.S.A.\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tArte Gira Moving. Centro del Mediterráneo de Almería. Almería, Spain* \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div id=\"titulo\" style=\"margin-bottom: 4%; margin-top: 5%; font-size: 28px;\">\n\t\t\t\t\tAwards\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"titulo\" style=\"margin-bottom: 4%; margin-top: 5%; font-size: 28px;\">\n\t\t\t\t\tArt Fairs\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"titulo\" style=\"margin-bottom: 4%; margin-top: 5%; font-size: 28px;\">\n\t\t\t\t\tInstitutional/Artistic Support\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"titulo\" style=\"margin-bottom: 4%; margin-top: 5%; font-size: 28px;\">\n\t\t\t\t\tPublications\n\t\t\t\t</div>\n\n\n\n\n\t\t\t\t* On catalog\n\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"position: relative; top: 60px\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\" style=\"text-align: center;\">\r\n\t\t\t<img src=\"..\\..\\assets\\images\\IMG_20180602_191434.jpg\" width=\"80%;\"  />\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\" style=\"margin-bottom: 4%; margin-top: 1%; font-size: 15px;\">\r\n\t\t\t<div>\r\n\t\t\t\tPlease email me at <u><a href=\"#\">studio@lorenagarciamateu.es</a></u> with questions or comments\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"margin-top: 4%\">\r\n\t\t\t\tJoin my mailing list if you want to receive news\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"margin-top: 2%\">\r\n\t\t\t\t<form #formUser=\"ngForm\" (ngSubmit)=\"onSubmit()\" id=\"form-user\">\r\n\t\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9 col-xs-9\" style=\"padding: 0px;\" >\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- nameUser -->\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"nameUser\" name=\"nameUser\" #nameUser=\"ngModel\" [(ngModel)]=\"user.nameUser\" placeholder=\"Name\" style=\"padding-top: 14px; padding-bottom: 12px;\" required>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9 col-xs-9\" style=\"padding: 0px;\" >\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Email -->\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"Email Address\" style=\"padding-top: 14px; padding-bottom: 12px;\" required>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Create Button -->\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" style=\"padding-top: 14px; padding-bottom: 12px; padding-left: 45%; padding-right: 45%;\" [disabled]=\"!formUser.valid\">Subscribe</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"margin-top: 20%;\">\r\n\t\t\t\t<a href=\"https://www.facebook.com/lorenagarciamateu/\" target=\"_blank\"><i class=\"fa fa-facebook-f\" style=\"font-size: 24px; color: black; padding:8px; border: 2px solid black; margin-right: 1%;\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a href=\"https://www.youtube.com/watch?v=TfoFRqixf5I\" target=\"_blank\"><i class=\"fa fa-youtube-play\" style=\"font-size: 24px; color: black; padding:8px; border: 2px solid black; margin-right: 1%;\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a href=\"https://www.instagram.com/lorena_garciamateu/\" target=\"_blank\"><i class=\"fa fa-instagram\" style=\"font-size: 24px; color: black; padding:8px; border: 2px solid black;\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drag-drop/drag-drop.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drag-drop/drag-drop.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Drag&Drop with a flex-wrap</h1>\n\n<button (click)=\"add()\">Add</button> <button (click)=\"shuffle()\">Shuffle</button><br/>\n<ul class=\"example-list\"><li *ngFor=\"let item of items\">{{ item }}</li></ul>\n\n<div class=\"example-container\" cdkDropListGroup>\n  <div cdkDropList [cdkDropListEnterPredicate]=\"enter\" (cdkDropListDropped)=\"drop()\" #placeholder></div>\n  <div cdkDropList *ngFor=\"let item of items\"\n       [cdkDropListEnterPredicate]=\"enter\" (cdkDropListDropped)=\"drop()\">\n    <div cdkDrag class=\"example-box\">{{item}}</div>\n  </div>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<img src=\"..\\..\\assets\\images\\PHOTO-2018-10-10-20-15-34_3.jpg\"  />\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-create/notification-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-create/notification-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t\n\t\t<form #formUser=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-8\" id=\"form-user\">\n\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-6\">\n\t\t\t\t\t\t<!-- Nueva exposición unchecked -->\n\t\t\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t  \t\t<input type=\"radio\" class=\"custom-control-input\" id=\"notificationRadioExpo\" name=\"notificationRadios\" mdbInput value=\"0\" (change)=\"onChangeNotificationType($event)\">\n\t\t\t\t\t  \t\t<label class=\"custom-control-label\" for=\"notificationRadioExpo\">Nueva exposición</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-6\">\n\t\t\t\t\t\t<!-- Artículos prensa unchecked -->\n\t\t\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t\t\t<input type=\"radio\" class=\"custom-control-input\" id=\"notificationRadioPrensa\" name=\"notificationRadios\" mdbInput value=\"1\" (change)=\"onChangeNotificationType($event)\">\n\t\t\t\t\t  \t\t<label class=\"custom-control-label\" for=\"notificationRadioPrensa\">Artículos prensa</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divEventType\" *ngIf=\"notification.type\">\n\t\t\t\t\t\t\t<!--<label for=\"selectEventType\" class=\"control-label\">Event Type</label>-->\n\t\t\t\t\t\t\t<select  class=\"form-control\" #selectEventType name=\"selectEventType\" id=\"selectEventType\" (change)=\"onOptionEventSelected(selectEventType.value)\">\n\t\t     \t\t\t\t\t<option *ngFor=\"let eventType of eventTypes\" [value]=\"eventType.idEventType\">{{eventType.description}}</option>\n\t\t     \t\t\t\t</select>\n     \t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divMediaType\" *ngIf=\"notification.type && notification.type==1\">\n\t\t\t\t\t\t\t<!--<label for=\"selectMediaType\" class=\"control-label\">Media</label>-->\n\t\t\t\t\t\t\t<select  class=\"form-control\" #selectMediaType name=\"selectMediaType\" id=\"selectMediaType\" (change)=\"onOptionMediaSelected(selectMediaType.value)\">\n\t\t     \t\t\t\t\t<option *ngFor=\"let mediaType of mediaTypes\" [value]=\"mediaType.idMediaType\">{{mediaType.description}}</option>\n\t\t     \t\t\t\t</select>\n     \t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divTitle\" *ngIf=\"notification.type && notification.type==0\"> \n\t\t\t\t\t\t\t<label for=\"title\" class=\"control-label\">Características/Título</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"notification.title\" placeholder=\"Title\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t    \t\t\t\t\n     \t\t\t\t\n     \t\t\t\t\t<div class=\"form-group\" id=\"divLocalization\" *ngIf=\"notification.type\"> \n\t\t\t\t\t\t\t<label for=\"localization\" class=\"control-label\">Localization</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"localization\" name=\"localization\" #localization=\"ngModel\" [(ngModel)]=\"notification.localization\" placeholder=\"Localization\" required>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divOpeningDate\" *ngIf=\"notification.type && notification.type==0\">\n\t\t\t\t\t\t\t<label for=\"openingDate\" class=\"control-label\">Opening date</label>\n\t\t\t\t\t\t  \t<input type=\"datetime-local\" class=\"form-control\" name=\"openingDate\" #openingDate=\"ngModel\" id=\"openingDate\" [(ngModel)]=\"notification.openingDate\" required>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divClosingDate\" *ngIf=\"notification.type && notification.type==0\">\n\t\t\t\t\t\t\t<label for=\"closingDate\" class=\"control-label\">Closing date</label>\n\t\t\t\t\t\t  \t<input type=\"datetime-local\" class=\"form-control\" name=\"closingDate\" #closingDate=\"ngModel\" id=\"closingDate\" [(ngModel)]=\"notification.closingDate\" required>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divLink\" *ngIf=\"notification.type && notification.type==1\"> \n\t\t\t\t\t\t\t<label for=\"link\" class=\"control-label\">Link</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"link\" name=\"link\" #link=\"ngModel\" [(ngModel)]=\"notification.link\" placeholder=\"Link\" required>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divImage\" *ngIf=\"notification.type && notification.type==0\"> <!-- Image-->\n\t\t\t\t\t\t\t<label for=\"image\" class=\"control-label\">Image</label>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<img src=\"\" width=\"60%;\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"image\" name=\"image\" placeholder=\"image001.jpeg\" (change)=\"fileChangeEvent($event)\">\n\t\t\t\t\t\t</div>\n     \t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divScheduled\" *ngIf=\"notification.type\"> <!-- Scheduled-->\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\"> \n\t\t\t\t    \t\t\t<input type=\"checkbox\" class=\"custom-control-input\" name=\"scheduled\" #scheduled=\"ngModel\" id=\"scheduled\" [(ngModel)]=\"notification.scheduled\" (change)=\"checkValueScheduled(notification.scheduled)\">\n\t\t\t\t    \t\t\t<label class=\"custom-control-label\" for=\"scheduled\">Scheduled</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divDeliveryDate\" *ngIf=\"notification.type && notification.scheduled\">\n\t\t\t\t\t\t\t<label for=\"deliveryDate\" class=\"control-label\">Delivery date</label>\n\t\t\t\t\t\t  \t<input type=\"datetime-local\" class=\"form-control\" name=\"deliveryDate\" #deliveryDate=\"ngModel\" id=\"deliveryDate\" [(ngModel)]=\"notification.deliveryDate\" required>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"form-group\" id=\"divUserList\" *ngIf=\"notification.type\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\" *ngFor=\"let myUser of myUserList; let i= index\"> \n\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" name=\"{{'inlineCheckbox' + i}}\" id=\"{{'inlineCheckbox' + i}}\" [(ngModel)]=\"myUser[0]\">\n\t\t\t\t    \t\t\t<label class=\"custom-control-label\" for=\"{{'inlineCheckbox' + i}}\">{{myUser[1][\"email\"]}}</label>\n\n\t\t\t\t    \t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"form-group\" id=\"divBtnSaveNotification\" *ngIf=\"notification.type\"> <!-- Create Button -->\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!formUser.valid\">{{buttonName}}</button>\n\t\t\t</div>\n\n\t\t</form>\n\t\t\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-scheduled-list/notification-scheduled-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-scheduled-list/notification-scheduled-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"myNotifications\" style=\"margin-top: 70px;\">\n\t<div *ngIf=\"!notifications\">\n\t\tCargando listado de notificaciones\n\t</div>\n\n\t<div class=\"container-fluid\" *ngIf=\"notifications\">\n\t\t<div *ngFor=\"let notification of notifications\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t{{notification.type}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t{{notification.eventType}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-8\">\n\t\t\t\t\t{{notification.deliveryDate}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-sent-list/notification-sent-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-sent-list/notification-sent-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"myNotificationsSent\" style=\"margin-top: 0px;\">\n\t<div *ngIf=\"!notificationsSent\">\n\t\tCargando listado de notificaciones enviadas\n\t</div>\n\n\t<div class=\"container-fluid\" *ngIf=\"notificationsSent\">\n\t\t<div *ngFor=\"let notificationSent of notificationsSent\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t{{notificationSent.type}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t{{notificationSent.eventType}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-8\">\n\t\t\t\t\t{{notificationSent.deliveryDate}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-create/painting-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/painting-create/painting-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"is_visible\" class=\"container-fluid\" style=\"margin-top: 50px;\">\n\t<div class=\"row\">\n\t\t\n\t\t<form #formPainting=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-8\" id=\"form-painting\">\n\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-9 col-sm-9 col-xs-9\">\n\t\t\t\t\t\t<div class=\"form-group\"> <!-- Title -->\n\t\t\t\t\t\t\t<label for=\"title\" class=\"control-label\">Title</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"painting.title\" placeholder=\"Mi cuadro\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t<div class=\"form-group\"> <!-- Year -->\n\t\t\t\t\t\t\t<label for=\"year\" class=\"control-label\">Year</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"year\" name=\"year\" #year=\"ngModel\" [(ngModel)]=\"painting.year\" placeholder=\"2020\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t<div class=\"form-group\"> <!-- Height -->\n\t\t\t\t\t\t\t<label for=\"height\" class=\"control-label\">Height</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"height\" name=\"height\" #height=\"ngModel\" [(ngModel)]=\"painting.height\" placeholder=\"110cm\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t<div class=\"form-group\"> <!-- Width -->\n\t\t\t\t\t\t\t<label for=\"width\" class=\"control-label\">Width</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"width\" name=\"width\" #width=\"ngModel\" [(ngModel)]=\"painting.width\" placeholder=\"150cm\">\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t\n\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t<div class=\"form-group\"> <!-- Technique-->\n\t\t\t\t<label for=\"technique\" class=\"control-label\">Technique</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"technique\" name=\"technique\" #technique=\"ngModel\" [(ngModel)]=\"painting.technique\" placeholder=\"Oleo\">\n\t\t\t</div>\n\n\n\t\t\t<div class=\"form-group\"> <!-- Available-->\n\t\t\t\t<div class=\"custom-control custom-checkbox\"> \n\t\t\t    \t<input type=\"checkbox\" class=\"custom-control-input\" name=\"available\" #available=\"ngModel\" id=\"available\" [(ngModel)]=\"painting.available\">\n\t\t\t    \t<label class=\"custom-control-label\" for=\"available\">Available</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t<div class=\"form-group\"> <!-- Image-->\n\t\t\t\t<label for=\"image\" class=\"control-label\">Image</label>\n\t\t\t\t<div *ngIf=\"is_edit\">\n\t\t\t\t\t<img src=\"http://localhost:4000/images/{{painting.image}}\" width=\"60%;\" />\n\t\t\t\t</div>\n\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"image\" name=\"image\" placeholder=\"image001.jpeg\" (change)=\"fileChangeEvent($event)\">\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"form-group\"> <!-- Create Button -->\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">{{nameButton}}</button>\n\t\t\t</div>\n\t\t</form>\n\t\t\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-list/painting-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/painting-list/painting-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"myPaintings\" style=\"margin-top: 200px;\">\r\n\t<div *ngIf=\"!paintings\">\r\n\t\tCargando listado de cuadros\r\n\t</div>\r\n\r\n\t<div *ngIf=\"isVisible\" style=\"margin-top: 50px; margin-bottom: 30px;\">\r\n\t\t<a (click)=\"onSelectPainting(-1)\">\r\n\t\t\tAdd new painting <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"example-container\" cdkDropListGroup>\r\n\t  <div cdkDropList [cdkDropListEnterPredicate]=\"enter\" (cdkDropListDropped)=\"drop()\" #placeholder></div>\r\n\t  <div cdkDropList *ngFor=\"let painting of paintings; let i = index;\"\r\n\t       [cdkDropListEnterPredicate]=\"enter\" (cdkDropListDropped)=\"drop()\">\r\n\t    <div cdkDrag [cdkDragData]=\"i\" [ngClass]=\"setPaintingClasses(painting)\" >\r\n\t    \t<div>\r\n\r\n\t    \t\t<div class=\"thumbnail\">\r\n\t    \t\t\t<div>\r\n\t    \t\t\t\t<img src=\"http://localhost:4000/images/{{painting.image}}\" style=\"width: 60%; margin-top: 10%;\" />\r\n\t    \t\t\t</div>\r\n\t    \t\t\t<div class=\"caption\">\r\n\t    \t\t\t\t<span style=\"font-size: 14px;\">{{painting.title}}</span>\r\n\t    \t\t\t\t<p>\r\n\t\t\t\t\t\t\t<a (click)=\"onSelectPainting(painting)\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" style=\"font-size: 15px;\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a (click)=\"onDeletePainting(painting.idPainting)\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-size: 15px;\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</p>\r\n\t    \t\t\t</div>\r\n\t    \t\t\r\n\t    \t\t</div>\r\n\t    \t</div>\r\n\r\n\t    </div>\r\n\t  </div>\r\n\t</div> \r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightgallery@1.6.10/dist/css/lg-transitions.min.css\">\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightgallery@1.6.10/dist/css/lightgallery.min.css\">\n\n\n<style type=\"text/css\">\n    div a {\n        /*margin-bottom: 30px;*/\n    }\n\n    .img_vertical {\n        width: 33%;\n        max-width: 100%;\n        margin-bottom: 15px;\n        border: 10px solid white;\n\n    }\n\n    .img_horizontal {\n        width: 66%;\n        max-width: 100%;\n        margin-bottom: 15px;\n        border: 10px solid white;\n    }\n\n\n</style>\n\n\n\n<div *ngIf=\"paintings && serie\">\n    <div class=\"container\">\n        <h2>{{serie.title}}</h2>\n        <div id=\"relative-caption\">\n        <div id=\"lightgallery\">\n            <a *ngFor=\"let painting of paintings;\" href=\"http://localhost:4000/images/{{painting.image}}\" data-sub-html=\".caption\" data-html=\".caption\">\n                \n                <img [ngClass]=\"setPaintingClasses(painting)\" src=\"http://localhost:4000/images/{{painting.image}}\" />\n                \n                {{onClickImage()}}\n\n                <div class=\"caption\" style=\"display: none;\">\n                    <h5 style='margin-top:-260px; text-align:left; margin-left:20px; height:200px; width:20%; white-space:normal;'><b>{{painting.title}}</b> | {{painting.year}} <br/> {{painting.height}}cm x {{painting.width}}cm <br/> {{painting.technique}} <br/> <span *ngIf=\"painting.available\">Available</span></h5>\n                </div>\n\n            </a>\n        </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/serie-create/serie-create.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/serie-create/serie-create.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container-fluid\" style=\"margin-top: 50px;\">\n\t<div class=\"row\">\n\t\t\n\t\t<form #formSerie=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12\" id=\"form-serie\">\n\t\t\t<div class=\"form-group\"> <!-- Serie -->\n\t\t\t\t<label for=\"serie\" class=\"control-label\">Serie</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"serie\" name=\"serie\" #title=\"ngModel\" [(ngModel)]=\"serie.title\" placeholder=\"Name serie\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\"> <!-- Create Button -->\n\t\t\t\t<button type=\"submit\" class=\"btn btn-sm btn-primary\">Create</button>\n\t\t\t</div>\n\t\t</form>\n\n\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/serie-list/serie-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/serie-list/serie-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!series\">\n\tCargando listado de cuadros\n</div>\n\n<div *ngIf=\"series\" style=\"margin-top: 60px; font-size: 20px; line-height: 1.5em;\">\n\t<ul>\n\t\t<li *ngFor=\"let serie of series\">\n\t\t\t<strong>{{serie.title}}</strong>\n\t\t\t\n\t\t\t\t<i (click)=\"onSelectIdSerie(serie.idSerie)\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\n\t\t\t\t<i (click)=\"onDeleteSerie(serie.idSerie)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t</li>\n\t</ul>\n</div>\n\n\n<form (ngSubmit)=\"onSubmit()\" class=\"col-lg-8\" id=\"form-painting\" style=\"margin-top: 60px;\">\n\n\t<div class=\"form-group\"> <!-- Technique-->\n\t\t<label for=\"technique\" class=\"control-label\">Texto</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"technique\" name=\"technique\" placeholder=\"Mi texto\">\n\t</div>\n\n\t<div class=\"form-group\"> <!-- Create Button -->\n\t\t<button type=\"submit\" class=\"btn btn-primary\">Visita mi sitio</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- HEADER -->\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato:300,400,700\">\n\n<style>\n  .logo {\n    margin-left: 130px;\n  }\n\n  .navbar-collapse {\n    margin-right: 140px;\n  }\n\n  .navbarSupportedContent .nav-item {\n    font-size: 15px;\n  }\n\n  .navbar-nav a {\n    font-size: 14px;\n    font-weight: 600;\n    margin-right: 18px;\n    color: #012e67;\n  }\n\n  .navbar-nav a:hover,\n  .navbar-nav li > a.active {\n    font-size: 14px;\n    color:#000;\n    font-weight:900;\n  }\n\n</style>\n\n\n<header>\n  \n  <!-- MENU BLOCK -->\n  <div class=\"menu_block\">\n  \n    <!-- CONTAINER -->\n    \n    <nav class=\"navbar navbar-expand-lg\" style=\"background-color: #ffffff; color: #000000\">\n      <div id=\"topheader\" class=\"container-fluid\">\n        <div class=\"logo pull-left\">\n          <a class=\"nav-item nav-link active\" routerLinkActive=\"active\" routerLink=\"/app-home\" (click)=\"normalMenuNav()\"><span class=\"b5\">Lorena</span><span class=\"b5\">García</span><span class=\"b1\">Mateu</span></a>\n        </div>\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Portfolio\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown1\">\n                <a *ngFor=\"let serie of series\" class=\"dropdown-item\" href=\"#\" (click)=\"highlightMenuNav()\" [routerLink]=\"['/app-portfolio', serie.idSerie]\">{{serie.title}}</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\" (click)=\"highlightMenuNav()\" routerLink=\"/app-portfolio\">Vista en exposición</a>\n              </div>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/app-bio\" (click)=\"unhighlightMenuNav()\" href=\"#\">Bio</a>\n            </li>\n\n            <li class=\"nav-item\" >\n              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/painting-create\" (click)=\"unhighlightMenuNav()\">Exhibitions</a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" (click)=\"unhighlightMenuNav()\">Catalog</a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" (click)=\"unhighlightMenuNav()\">Privacy</a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/app-contact\" href=\"#\" (click)=\"unhighlightMenuNav()\">Contact</a>\n            </li>\n\n            \n          </ul>\n        </div>\n      </div>\n    </nav>\n      \n    \n  </div><!-- //CONTAINER -->\n</header><!-- //HEADER -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/layout/layout.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/layout/layout.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n  \n<router-outlet></router-outlet>\n  \n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin-paintings/admin-paintings.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-paintings/admin-paintings.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhaW50aW5ncy9hZG1pbi1wYWludGluZ3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin-paintings/admin-paintings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-paintings/admin-paintings.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminPaintingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPaintingsComponent", function() { return AdminPaintingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPaintingsComponent = class AdminPaintingsComponent {
    constructor() {
    }
    ngOnInit() {
        console.log('admin-paintings.component.ts cargado');
    }
    processSelectedIdSerie(idSerie) {
        this.selectedIdSerie = idSerie;
    }
    processSelectedPainting(painting) {
        this.selectedPainting = painting;
    }
};
AdminPaintingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-paintings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-paintings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-paintings/admin-paintings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-paintings.component.css */ "./src/app/admin-paintings/admin-paintings.component.css")).default]
    })
], AdminPaintingsComponent);



/***/ }),

/***/ "./src/app/admin-users/admin-users.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.ts ***!
  \******************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminUsersComponent = class AdminUsersComponent {
    constructor() {
    }
    ngOnInit() {
        console.log('admin-users.component.ts cargado');
    }
};
AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin-users/admin-users.component.css")).default]
    })
], AdminUsersComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _painting_list_painting_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painting-list/painting-list.component */ "./src/app/painting-list/painting-list.component.ts");
/* harmony import */ var _painting_create_painting_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./painting-create/painting-create.component */ "./src/app/painting-create/painting-create.component.ts");
/* harmony import */ var _painting_edit_painting_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painting-edit/painting-edit.component */ "./src/app/painting-edit/painting-edit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _serie_create_serie_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serie-create/serie-create.component */ "./src/app/serie-create/serie-create.component.ts");
/* harmony import */ var _serie_list_serie_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./serie-list/serie-list.component */ "./src/app/serie-list/serie-list.component.ts");
/* harmony import */ var _admin_paintings_admin_paintings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-paintings/admin-paintings.component */ "./src/app/admin-paintings/admin-paintings.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");














const routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
    { path: 'app-home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'app-portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"] },
    { path: 'app-portfolio/:id', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"] },
    { path: 'app-bio', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_8__["BioComponent"] },
    { path: 'app-contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
    { path: 'painting-list', component: _painting_list_painting_list_component__WEBPACK_IMPORTED_MODULE_3__["PaintingListComponent"] },
    { path: 'painting-create', component: _painting_create_painting_create_component__WEBPACK_IMPORTED_MODULE_4__["PaintingCreateComponent"] },
    { path: 'painting-edit/:id', component: _painting_edit_painting_edit_component__WEBPACK_IMPORTED_MODULE_5__["PaintingEditComponent"] },
    { path: 'serie-create', component: _serie_create_serie_create_component__WEBPACK_IMPORTED_MODULE_10__["SerieCreateComponent"] },
    { path: 'serie-list', component: _serie_list_serie_list_component__WEBPACK_IMPORTED_MODULE_11__["SerieListComponent"] },
    { path: 'admin-paintings', component: _admin_paintings_admin_paintings_component__WEBPACK_IMPORTED_MODULE_12__["AdminPaintingsComponent"] },
    { path: 'admin-users', component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_13__["AdminUsersComponent"] }
    //,{path: '**', component: ErrorComponent}
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
        ],
        exports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MyPaintings';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _painting_create_painting_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painting-create/painting-create.component */ "./src/app/painting-create/painting-create.component.ts");
/* harmony import */ var _painting_edit_painting_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./painting-edit/painting-edit.component */ "./src/app/painting-edit/painting-edit.component.ts");
/* harmony import */ var _painting_list_painting_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./painting-list/painting-list.component */ "./src/app/painting-list/painting-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_painting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/painting.service */ "./src/app/services/painting.service.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _serie_create_serie_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./serie-create/serie-create.component */ "./src/app/serie-create/serie-create.component.ts");
/* harmony import */ var _serie_list_serie_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./serie-list/serie-list.component */ "./src/app/serie-list/serie-list.component.ts");
/* harmony import */ var _services_serie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/serie.service */ "./src/app/services/serie.service.ts");
/* harmony import */ var _admin_paintings_admin_paintings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-paintings/admin-paintings.component */ "./src/app/admin-paintings/admin-paintings.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ "./src/app/drag-drop/drag-drop.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var _notification_create_notification_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./notification-create/notification-create.component */ "./src/app/notification-create/notification-create.component.ts");
/* harmony import */ var _notification_scheduled_list_notification_scheduled_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./notification-scheduled-list/notification-scheduled-list.component */ "./src/app/notification-scheduled-list/notification-scheduled-list.component.ts");
/* harmony import */ var _notification_sent_list_notification_sent_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./notification-sent-list/notification-sent-list.component */ "./src/app/notification-sent-list/notification-sent-list.component.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_notificationSent_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/notificationSent.service */ "./src/app/services/notificationSent.service.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _painting_create_painting_create_component__WEBPACK_IMPORTED_MODULE_6__["PaintingCreateComponent"],
            _painting_edit_painting_edit_component__WEBPACK_IMPORTED_MODULE_7__["PaintingEditComponent"],
            _painting_list_painting_list_component__WEBPACK_IMPORTED_MODULE_8__["PaintingListComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"],
            _bio_bio_component__WEBPACK_IMPORTED_MODULE_14__["BioComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
            _serie_create_serie_create_component__WEBPACK_IMPORTED_MODULE_16__["SerieCreateComponent"],
            _serie_list_serie_list_component__WEBPACK_IMPORTED_MODULE_17__["SerieListComponent"],
            _admin_paintings_admin_paintings_component__WEBPACK_IMPORTED_MODULE_19__["AdminPaintingsComponent"],
            _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_22__["DragDropComponent"],
            _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_24__["AdminUsersComponent"],
            _notification_create_notification_create_component__WEBPACK_IMPORTED_MODULE_25__["NotificationCreateComponent"],
            _notification_scheduled_list_notification_scheduled_list_component__WEBPACK_IMPORTED_MODULE_26__["NotificationScheduledListComponent"],
            _notification_sent_list_notification_sent_list_component__WEBPACK_IMPORTED_MODULE_27__["NotificationSentListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_11__["UiModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__["DragDropModule"]
        ],
        providers: [
            _services_painting_service__WEBPACK_IMPORTED_MODULE_10__["PaintingService"],
            _services_serie_service__WEBPACK_IMPORTED_MODULE_18__["SerieService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_28__["NotificationService"],
            _services_notificationSent_service__WEBPACK_IMPORTED_MODULE_29__["NotificationSentService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bio/bio.component.css":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jpby9iaW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_painting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/painting.service */ "./src/app/services/painting.service.ts");




let BioComponent = class BioComponent {
    constructor(_route, _router, _paintingService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this.paintings = [];
    }
    ngOnInit() {
        console.log('bio.component.ts cargado');
    }
};
BioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"] }
];
BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html")).default,
        providers: [_services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bio.component.css */ "./src/app/bio/bio.component.css")).default]
    })
], BioComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let ContactComponent = class ContactComponent {
    constructor(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.initializeUser();
    }
    ngOnInit() {
        console.log('contact.component.ts cargado');
    }
    initializeUser() {
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]('', '');
    }
    onSubmit() {
        this.createUser();
    }
    createUser() {
        this._userService.createUser(this.user).subscribe(result => {
            console.log('User successfully created!');
            this.sendMailSubscription();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Formulario de contacto', 'Se ha subscrito correctamente', 'success');
            this.initializeUser();
        }, error => {
            console.log(error);
        });
    }
    sendMailSubscription() {
        let date = new Date();
        console.log(date);
        this._userService.sendMailAfterSubscription(this.user, date).subscribe(result => {
            console.log('Mail sent correctly');
        }, error => {
            console.log(error);
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/drag-drop/drag-drop.component.css":
/*!***************************************************!*\
  !*** ./src/app/drag-drop/drag-drop.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.example-list li {\r\n  display: table-cell;\r\n  padding: 4px;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  min-width: 600px;\r\n  max-width: 900px;\r\n}\r\n\r\n.example-box {\r\n  width: 200px;\r\n  height: 200px;\r\n  border: solid 1px #ccc;\r\n  font-size: 30pt;\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  cursor: move;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n  0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n  0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-box:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  opacity: .6;\r\n}\r\n\r\n.cdk-drop-list {\r\n  display: flex;\r\n  padding-right: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: .3;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\nbutton {\r\n  margin-right: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1REFBdUQ7RUFDdkQ7O2lDQUUrQjtBQUNqQzs7QUFFQTtFQUNFOztvQ0FFa0M7RUFDbEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOztvQ0FFa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kcmFnLWRyb3AvZHJhZy1kcm9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCBsaSB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgZm9udC1zaXplOiAzMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94OmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBvcGFjaXR5OiAuNjtcclxufVxyXG5cclxuLmNkay1kcm9wLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/drag-drop/drag-drop.component.ts":
/*!**************************************************!*\
  !*** ./src/app/drag-drop/drag-drop.component.ts ***!
  \**************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");



let DragDropComponent = class DragDropComponent {
    constructor() {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.enter = (drag, drop) => {
            if (drop == this.placeholder)
                return true;
            let phElement = this.placeholder.element.nativeElement;
            let dropElement = drop.element.nativeElement;
            let dragIndex = __indexOf(dropElement.parentNode.children, drag.dropContainer.element.nativeElement);
            let dropIndex = __indexOf(dropElement.parentNode.children, dropElement);
            if (!this.source) {
                this.sourceIndex = dragIndex;
                this.source = drag.dropContainer;
                let sourceElement = this.source.element.nativeElement;
                phElement.style.width = sourceElement.clientWidth + 'px';
                phElement.style.height = sourceElement.clientHeight + 'px';
                sourceElement.parentNode.removeChild(sourceElement);
            }
            this.targetIndex = dropIndex;
            this.target = drop;
            phElement.style.display = '';
            dropElement.parentNode.insertBefore(phElement, (dragIndex < dropIndex)
                ? dropElement.nextSibling : dropElement);
            this.source.start();
            this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
            return false;
        };
        this.target = null;
        this.source = null;
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        console.log(this.placeholder);
        let phElement = this.placeholder.element.nativeElement;
        phElement.style.display = 'none';
        phElement.parentNode.removeChild(phElement);
    }
    add() {
        this.items.push(this.items.length + 1);
    }
    shuffle() {
        this.items.sort(function () {
            return .5 - Math.random();
        });
    }
    drop() {
        if (!this.target)
            return;
        console.log('droppp');
        console.log(this.placeholder);
        let phElement = this.placeholder.element.nativeElement;
        let parent = phElement.parentNode;
        console.log(phElement);
        console.log(parent);
        console.log(this.sourceIndex);
        console.log(this.source.element.nativeElement);
        console.log(this.targetIndex);
        phElement.style.display = 'none';
        parent.removeChild(phElement);
        parent.appendChild(phElement);
        parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
        this.target = null;
        this.source = null;
        if (this.sourceIndex != this.targetIndex)
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.items, this.sourceIndex, this.targetIndex);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropListGroup"], { static: false })
], DragDropComponent.prototype, "listGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], { static: false })
], DragDropComponent.prototype, "placeholder", void 0);
DragDropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drag-drop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drag-drop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drag-drop/drag-drop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drag-drop.component.css */ "./src/app/drag-drop/drag-drop.component.css")).default]
    })
], DragDropComponent);

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
;


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    loadScript(url) {
        const body = document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
    ngOnInit() {
        //no tengo muy claro porque, pero necesito precargar esto de esta manera
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/js/lightgallery.min.js');
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/models/notification.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/notification.model.ts ***!
  \**********************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Notification {
    constructor(idNotification, type, scheduled, eventType, title, localization, openingDate, closingDate, image, deliveryDate, mediaType, link, userList) {
    }
}


/***/ }),

/***/ "./src/app/models/notificationSent.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/notificationSent.model.ts ***!
  \**************************************************/
/*! exports provided: NotificationSent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSent", function() { return NotificationSent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NotificationSent {
    constructor(idNotificationSent, idNotification, type, scheduled, eventType, title, localization, openingDate, closingDate, image, deliveryDate, mediaType, link, userList) {
    }
}


/***/ }),

/***/ "./src/app/models/painting.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/painting.model.ts ***!
  \******************************************/
/*! exports provided: Painting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Painting", function() { return Painting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Painting {
    constructor(idPainting, title, year, height, width, technique, image, idSerie, visible, available, order) {
    }
}


/***/ }),

/***/ "./src/app/models/serie.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/serie.model.ts ***!
  \***************************************/
/*! exports provided: Serie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Serie", function() { return Serie; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Serie {
    constructor(idSerie, title, visible = true) {
    }
}


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(nameUser, email) {
    }
}


/***/ }),

/***/ "./src/app/notification-create/notification-create.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/notification-create/notification-create.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi1jcmVhdGUvbm90aWZpY2F0aW9uLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/notification-create/notification-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/notification-create/notification-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCreateComponent", function() { return NotificationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_notificationSent_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notificationSent.service */ "./src/app/services/notificationSent.service.ts");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/models/notification.model.ts");
/* harmony import */ var _models_notificationSent_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/notificationSent.model */ "./src/app/models/notificationSent.model.ts");








let NotificationCreateComponent = class NotificationCreateComponent {
    constructor(_route, _router, _userService, _notificationService, _notificationSentService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._notificationService = _notificationService;
        this._notificationSentService = _notificationSentService;
        this.users = [];
        this.myUserList = [];
        this.notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_6__["Notification"](0, 0, true, 0, '', '', '', '', '', '', 0, '', []);
        this.notificationSent = new _models_notificationSent_model__WEBPACK_IMPORTED_MODULE_7__["NotificationSent"](0, 0, 0, true, 0, '', '', '', '', '', '', 0, '', []);
    }
    ngOnInit() {
        console.log('notification-create.component.ts cargado');
    }
    fillEventTypesNuevaExpo() {
        this.eventTypes = [
            {
                idEventType: 0,
                description: 'Exposición individual'
            },
            {
                idEventType: 1,
                description: 'Exposición colectiva'
            },
            {
                idEventType: 2,
                description: 'Premio/Concurso'
            },
        ];
    }
    fillEventTypesArticulosPrensa() {
        this.eventTypes = [
            {
                idEventType: 0,
                description: 'Artículo'
            },
            {
                idEventType: 1,
                description: 'Entrevista'
            },
            {
                idEventType: 2,
                description: 'Reportaje'
            },
        ];
    }
    fillMediaTypes() {
        this.mediaTypes = [
            {
                idMediaType: 0,
                description: 'Impreso'
            },
            {
                idMediaType: 1,
                description: 'Online'
            },
            {
                idMediaType: 2,
                description: 'Vídeo'
            },
        ];
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    cargandoImagen(files) {
        console.log(files);
        this._notificationService.postFileImagen(files[0]).subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    onSubmit() {
        if (this.filesToUpload) {
            this.cargandoImagen(this.filesToUpload);
            this.notification['image'] = this.filesToUpload[0].name;
        }
        this.notification['userList'] = [];
        let i = 0;
        for (let myUser of this.myUserList) {
            if (myUser[0]) {
                this.notification['userList'][i] = myUser[1]['email'];
                i++;
            }
        }
        this.createAndSendNewNotification();
    }
    createAndSendNewNotification() {
        this._notificationService.getSequenceNumber().subscribe(result => {
            this.notification['idNotification'] = result['seq'];
            this.createAndSendNotification();
        }, error => {
            console.log(error);
        });
    }
    createAndSendNotification() {
        this._notificationService.createNotification(this.notification).subscribe(result => {
            console.log('Notification successfully created!');
            //if (!this.notification['scheduled'])
            //{
            this.notificationSent['idNotification'] = this.notification['idNotification'];
            this.notificationSent['type'] = this.notification['type'];
            this.notificationSent['scheduled'] = this.notification['scheduled'];
            this.notificationSent['eventType'] = this.notification['eventType'];
            this.notificationSent['title'] = this.notification['title'];
            this.notificationSent['localization'] = this.notification['localization'];
            this.notificationSent['openingDate'] = this.notification['openingDate'];
            this.notificationSent['closingDate'] = this.notification['closingDate'];
            this.notificationSent['image'] = this.notification['image'];
            this.notificationSent['deliveryDate'] = new Date();
            this.notificationSent['mediaType'] = this.notification['mediaType'];
            this.notificationSent['link'] = this.notification['link'];
            this.notificationSent['userList'] = this.notification['userList'];
            this.createNewNotificationSent();
            //}
        }, error => {
            console.log(error);
        });
    }
    createNewNotificationSent() {
        this._notificationSentService.getSequenceNumber().subscribe(result => {
            this.notificationSent['idNotificationSent'] = result['seq'];
            this.createNotificationSent();
        }, error => {
            console.log(error);
        });
    }
    createNotificationSent() {
        this._notificationSentService.createNotificationSent(this.notificationSent).subscribe(result => {
            console.log('NotificationSent successfully created!');
            this.sendNotification(); //to all users selected
        }, error => {
            console.log(error);
        });
    }
    sendNotification() {
        for (let myUser of this.myUserList) {
            if (myUser[0] == true) {
                this.contactForm(myUser[1]);
            }
        }
        //Swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    }
    contactForm(user) {
        this._userService.sendMailNotifyEvents(user, this.notification['deliveryDate']).subscribe(() => {
            console.log('Mail sent correctly');
        });
    }
    getUsers() {
        this._userService.getUsers().subscribe(result => {
            console.log(result);
            this.users = result;
            let i = 0;
            for (let user of this.users) {
                let myUser = [false, user];
                this.myUserList[i] = myUser;
                i++;
            }
        }, error => {
            console.log(error);
        });
    }
    onChangeNotificationType(e) {
        this.getUsers();
        //inicializar notificacion
        this.notification['type'] = e.target.value;
        this.notification['scheduled'] = false;
        this.buttonName = 'Send notification';
        this.notification['eventType'] = 0;
        if (e.target.value == 0) {
            this.fillEventTypesNuevaExpo();
        }
        else if (e.target.value == 1) {
            this.notification['mediaType'] = 0;
            this.fillEventTypesArticulosPrensa();
            this.fillMediaTypes();
        }
    }
    onOptionEventSelected(eventType) {
        this.notification['eventType'] = eventType;
    }
    onOptionMediaSelected(mediaType) {
        this.notification['mediaType'] = mediaType;
    }
    checkValueScheduled(event) {
        if (event) {
            this.buttonName = 'Save notification';
        }
        else {
            this.buttonName = 'Send notification';
        }
    }
};
NotificationCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _services_notificationSent_service__WEBPACK_IMPORTED_MODULE_5__["NotificationSentService"] }
];
NotificationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-create/notification-create.component.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _services_notificationSent_service__WEBPACK_IMPORTED_MODULE_5__["NotificationSentService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-create.component.css */ "./src/app/notification-create/notification-create.component.css")).default]
    })
], NotificationCreateComponent);



/***/ }),

/***/ "./src/app/notification-scheduled-list/notification-scheduled-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/notification-scheduled-list/notification-scheduled-list.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi1zY2hlZHVsZWQtbGlzdC9ub3RpZmljYXRpb24tc2NoZWR1bGVkLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/notification-scheduled-list/notification-scheduled-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/notification-scheduled-list/notification-scheduled-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationScheduledListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationScheduledListComponent", function() { return NotificationScheduledListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");




let NotificationScheduledListComponent = class NotificationScheduledListComponent {
    constructor(_route, _router, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._notificationService = _notificationService;
        this.notifications = [];
    }
    ngOnInit() {
        console.log('notification-scheduled-list.component.ts cargado');
        this.getScheduledNotifications();
    }
    getScheduledNotifications() {
        this._notificationService.getScheduledNotifications().subscribe(result => {
            console.log(result);
            this.notifications = result;
        }, error => {
            console.log(error);
        });
    }
};
NotificationScheduledListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
];
NotificationScheduledListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-scheduled-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-scheduled-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-scheduled-list/notification-scheduled-list.component.html")).default,
        providers: [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-scheduled-list.component.css */ "./src/app/notification-scheduled-list/notification-scheduled-list.component.css")).default]
    })
], NotificationScheduledListComponent);



/***/ }),

/***/ "./src/app/notification-sent-list/notification-sent-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/notification-sent-list/notification-sent-list.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi1zZW50LWxpc3Qvbm90aWZpY2F0aW9uLXNlbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/notification-sent-list/notification-sent-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/notification-sent-list/notification-sent-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationSentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSentListComponent", function() { return NotificationSentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_notificationSent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notificationSent.service */ "./src/app/services/notificationSent.service.ts");




let NotificationSentListComponent = class NotificationSentListComponent {
    constructor(_route, _router, _notificationSentService) {
        this._route = _route;
        this._router = _router;
        this._notificationSentService = _notificationSentService;
        this.notificationsSent = [];
    }
    ngOnInit() {
        console.log('notification-sent-list.component.ts cargado');
        this.getSentLastFiveNotifications();
    }
    getSentLastFiveNotifications() {
        this._notificationSentService.getLastSentNotifications().subscribe(result => {
            console.log(result);
            this.notificationsSent = result;
        }, error => {
            console.log(error);
        });
    }
};
NotificationSentListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notificationSent_service__WEBPACK_IMPORTED_MODULE_3__["NotificationSentService"] }
];
NotificationSentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-sent-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-sent-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-sent-list/notification-sent-list.component.html")).default,
        providers: [_services_notificationSent_service__WEBPACK_IMPORTED_MODULE_3__["NotificationSentService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-sent-list.component.css */ "./src/app/notification-sent-list/notification-sent-list.component.css")).default]
    })
], NotificationSentListComponent);



/***/ }),

/***/ "./src/app/painting-create/painting-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/painting-create/painting-create.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW50aW5nLWNyZWF0ZS9wYWludGluZy1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/painting-create/painting-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/painting-create/painting-create.component.ts ***!
  \**************************************************************/
/*! exports provided: PaintingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingCreateComponent", function() { return PaintingCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_painting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/painting.service */ "./src/app/services/painting.service.ts");
/* harmony import */ var _models_painting_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/painting.model */ "./src/app/models/painting.model.ts");





let PaintingCreateComponent = class PaintingCreateComponent {
    constructor(_route, _router, _paintingService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this.valorReseteoPainting = -2;
        this.selectIdSerie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectPainting = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.painting = this.initializePainting();
        this.nameButton = 'Create painting';
        this.is_edit = false;
        this.is_visible = false;
    }
    initializePainting() {
        return new _models_painting_model__WEBPACK_IMPORTED_MODULE_4__["Painting"](0, '', 0, 0, 0, '', '', 0, true, true, 0);
    }
    ngOnInit() {
        console.log('painting-create.component.ts cargado');
        this.painting = this.initializePainting();
    }
    onSubmit() {
        if (this.filesToUpload) {
            this.cargandoImagen(this.filesToUpload);
            this.painting['image'] = this.filesToUpload[0].name;
        }
        if (this.is_edit) {
            this.updatePainting();
            console.log('Existing painting saved');
        }
        else {
            this.createNewPaintingWithOrderInSerie();
            console.log('New painting saved');
        }
    }
    createNewPaintingWithOrderInSerie() {
        this._paintingService.getOrderPainting(this.idSerie).subscribe(result => {
            console.log('Order calculated from database');
            if (typeof result !== 'undefined' && result.length > 0) {
                this.painting['order'] = result[0]['order'] + 1;
            }
            else {
                this.painting['order'] = 0;
            }
            this.createNewPainting();
        }, error => {
            console.log(error);
        });
    }
    createNewPainting() {
        this._paintingService.getSequenceNumber().subscribe(result => {
            this.painting['idPainting'] = result['seq'];
            this.painting['idSerie'] = this.idSerie;
            if (!this.painting['available'])
                this.painting['available'] = false;
            this.createPainting();
            this.is_visible = false;
        }, error => {
            console.log(error);
        });
    }
    createPainting() {
        this._paintingService.createPainting(this.painting).subscribe(result => {
            console.log('Painting successfully created!');
            this.onSelectIdSerie(this.painting['idSerie']);
            this.onSelectPainting(this.painting);
        }, error => {
            console.log(error);
        });
    }
    updatePainting() {
        this._paintingService.updatePainting(this.painting['idPainting'], this.painting).subscribe(result => {
            console.log('Painting successfully updated!');
            this.is_visible = false;
            this.onSelectIdSerie(this.painting['idSerie']);
            this.onSelectPainting(this.painting);
        }, error => {
            console.log(error);
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    cargandoImagen(files) {
        console.log(files);
        this._paintingService.postFileImagen(files[0]).subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    ngOnChanges(changes) {
        this.is_edit = false;
        this.nameButton = 'Create painting';
        if (changes['paintingSelected'] && changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue) {
            // si se ha hecho clic en Anyadir nuevo painting
            // llega un -1 de la invocación de ese metodo
            // que es distinto del -2 que se marca cuando se ha hecho savePainting
            if (changes['paintingSelected'].currentValue != this.valorReseteoPainting) {
                this.painting['available'] = true;
                this.painting['visible'] = true;
                this.is_visible = true;
                // si se ha seleccionado para editar un painting
                if (this.paintingSelected && this.paintingSelected['idPainting']) {
                    this.painting = this.paintingSelected;
                    this.is_edit = true;
                    this.nameButton = 'Save changes';
                }
            }
            else {
                this.is_visible = false;
            }
        }
    }
    onSelectIdSerie(idSerie) {
        this.selectIdSerie.emit(idSerie);
    }
    onSelectPainting(painting) {
        this.painting = this.initializePainting(); //vacio el formulario
        this.selectPainting.emit(this.valorReseteoPainting);
    }
};
PaintingCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaintingCreateComponent.prototype, "paintingSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaintingCreateComponent.prototype, "idSerie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaintingCreateComponent.prototype, "selectIdSerie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaintingCreateComponent.prototype, "selectPainting", void 0);
PaintingCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-painting-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./painting-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-create/painting-create.component.html")).default,
        providers: [_services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./painting-create.component.css */ "./src/app/painting-create/painting-create.component.css")).default]
    })
], PaintingCreateComponent);



/***/ }),

/***/ "./src/app/painting-edit/painting-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/painting-edit/painting-edit.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW50aW5nLWVkaXQvcGFpbnRpbmctZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/painting-edit/painting-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/painting-edit/painting-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: PaintingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingEditComponent", function() { return PaintingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_painting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/painting.service */ "./src/app/services/painting.service.ts");
/* harmony import */ var _models_painting_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/painting.model */ "./src/app/models/painting.model.ts");





let PaintingEditComponent = class PaintingEditComponent {
    //public valorReseteoPainting = -2;
    /*@Input()
    paintingSelected: Painting;

    @Input()
    idSerie: Number;

    @Output()
    selectIdSerie = new EventEmitter<Number>();

    @Output()
    selectPainting = new EventEmitter<Painting>();*/
    constructor(_route, _router, _paintingService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this.painting = this.initializePainting();
        this.nameButton = 'Save changes';
        this.is_edit = true;
        this.is_visible = false;
    }
    initializePainting() {
        return new _models_painting_model__WEBPACK_IMPORTED_MODULE_4__["Painting"](0, '', 0, 0, 0, '', '', 0, true, true, 0);
    }
    ngOnInit() {
        console.log('painting-edit.component.ts cargado');
        //this.getPainting();
    }
    getPainting() {
        this._route.params.forEach((params) => {
            let id = params['id'];
            console.log('mi id');
            console.log(id);
            this._paintingService.getPainting(id).subscribe(result => {
                this.painting = result[0];
            }, error => {
                console.log(error);
            });
        });
    }
    onSubmit() {
        this.updatePainting();
    }
    updatePainting() {
        /*this._paintingService.updatePainting(this.painting['idPainting'] ,this.painting).subscribe(
          result => {
            console.log('Painting successfully updated!');
            this.is_visible = false;
          },
          error => {
            console.log(<any>error);
          }
        );*/
    }
};
PaintingEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"] }
];
PaintingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-painting-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../painting-create/painting-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-create/painting-create.component.html")).default,
        providers: [_services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./painting-edit.component.css */ "./src/app/painting-edit/painting-edit.component.css")).default]
    })
], PaintingEditComponent);



/***/ }),

/***/ "./src/app/painting-list/painting-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/painting-list/painting-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.example-list li {\r\n  display: table-cell;\r\n  padding: 4px;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  min-width: 690px;\r\n  max-width: 900px;\r\n}\r\n\r\n.my_box {\r\n  height: 230px;\r\n  border: solid 1px #ccc;\r\n  font-size: 10pt;\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  cursor: move;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n  0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n  0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.box_vertical {\r\n  width: 230px;\r\n  \r\n}\r\n\r\n.box_horizontal {\r\n  width: 460px;\r\n}\r\n\r\n/*\r\n.img_vertical {\r\n        width: 33%;\r\n        max-width: 100%;\r\n        margin-bottom: 15px;\r\n        border: 10px solid white;\r\n\r\n    }\r\n\r\n    .img_horizontal {\r\n        width: 66%;\r\n        max-width: 100%;\r\n        margin-bottom: 15px;\r\n        border: 10px solid white;\r\n    }\r\n*/\r\n\r\n.example-box:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  opacity: .6;\r\n}\r\n\r\n.cdk-drop-list {\r\n  display: flex;\r\n  padding-right: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: .3;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\nbutton {\r\n  margin-right: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnRpbmctbGlzdC9wYWludGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdURBQXVEO0VBQ3ZEOztpQ0FFK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQzs7QUFJRDtFQUNFOztvQ0FFa0M7RUFDbEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOztvQ0FFa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWludGluZy1saXN0L3BhaW50aW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0IGxpIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtaW4td2lkdGg6IDY5MHB4O1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5teV9ib3gge1xyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uYm94X3ZlcnRpY2FsIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5ib3hfaG9yaXpvbnRhbCB7XHJcbiAgd2lkdGg6IDQ2MHB4O1xyXG59XHJcblxyXG5cclxuLypcclxuLmltZ192ZXJ0aWNhbCB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBib3JkZXI6IDEwcHggc29saWQgd2hpdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbWdfaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgd2lkdGg6IDY2JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBib3JkZXI6IDEwcHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbiovXHJcblxyXG5cclxuXHJcbi5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgb3BhY2l0eTogLjY7XHJcbn1cclxuXHJcbi5jZGstZHJvcC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/painting-list/painting-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/painting-list/painting-list.component.ts ***!
  \**********************************************************/
/*! exports provided: PaintingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingListComponent", function() { return PaintingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_painting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/painting.service */ "./src/app/services/painting.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");





let PaintingListComponent = class PaintingListComponent {
    constructor(_route, _router, _paintingService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this.paintings = [];
        this.valorReseteoPainting = -2;
        this.selectPainting = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enter = (drag, drop) => {
            if (drop == this.placeholder)
                return true;
            let phElement = this.placeholder.element.nativeElement;
            let dropElement = drop.element.nativeElement;
            let dragIndex = __indexOf(dropElement.parentNode.children, drag.dropContainer.element.nativeElement);
            let dropIndex = __indexOf(dropElement.parentNode.children, dropElement);
            if (!this.source) {
                this.sourceIndex = dragIndex;
                this.source = drag.dropContainer;
                let sourceElement = this.source.element.nativeElement;
                phElement.style.width = sourceElement.clientWidth + 'px';
                phElement.style.height = sourceElement.clientHeight + 'px';
                sourceElement.parentNode.removeChild(sourceElement);
            }
            this.targetIndex = dropIndex;
            this.target = drop;
            phElement.style.display = '';
            dropElement.parentNode.insertBefore(phElement, (dragIndex < dropIndex)
                ? dropElement.nextSibling : dropElement);
            this.source.start();
            this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
            return false;
        };
        this.target = null;
        this.source = null;
    }
    ngOnInit() {
        console.log('painting-list.component.ts cargado');
        this.isVisible = false;
        this.getPaintingsByIdSerie(-1);
    }
    getPaintings() {
        this._paintingService.getPaintings().subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    getPaintingsByIdSerie(idSerie) {
        if (idSerie != -1) {
            jQuery("#myPaintings").css('display', 'inline');
            this.isVisible = true;
        }
        this._paintingService.getPaintingsByIdSerie(idSerie).subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    onDeletePainting(id) {
        this._paintingService.deletePainting(id).subscribe(result => {
            console.log(result);
            //TODO preguntar con jQuery si estas seguro que quieres eliminar
            this.getPaintingsByIdSerie(this.idSerie);
        }, error => {
            console.log(error);
        });
    }
    ngOnChanges(changes) {
        //si se ha seleccionado una serie diferente
        if (changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue) {
            console.log('ngOnChanges');
            jQuery("#myPaintings").css('display', 'inline');
            this.isVisible = true;
            this.getPaintingsByIdSerie(this.idSerie);
        }
        // si se ha guardado el painting y el selectedPainting = -2 (forzado desde el save)
        else if (changes['paintingSelected']
            && changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue
            && changes['paintingSelected'].currentValue == this.valorReseteoPainting) {
            this.getPaintingsByIdSerie(this.idSerie);
        }
    }
    onSelectPainting(painting) {
        jQuery("#myPaintings").css('display', 'none');
        this.isVisible = false;
        this.selectPainting.emit(painting);
    }
    ngAfterViewInit() {
        if (this.placeholder) {
            let phElement = this.placeholder.element.nativeElement;
            phElement.style.display = 'none';
            phElement.parentNode.removeChild(phElement);
        }
    }
    drop() {
        if (!this.target)
            return;
        let phElement = this.placeholder.element.nativeElement;
        let parent = phElement.parentNode;
        phElement.style.display = 'none';
        parent.removeChild(phElement);
        parent.appendChild(phElement);
        parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
        this.target = null;
        this.source = null;
        if (this.sourceIndex != this.targetIndex) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.paintings, this.sourceIndex, this.targetIndex);
            this.paintings[this.sourceIndex]['order'] = this.sourceIndex;
            this.paintings[this.targetIndex]['order'] = this.targetIndex;
            this.updateOrderPainting(this.paintings[this.sourceIndex]['idPainting'], this.paintings[this.sourceIndex]);
            this.updateOrderPainting(this.paintings[this.targetIndex]['idPainting'], this.paintings[this.targetIndex]);
        }
    }
    updateOrderPainting(idPainting, painting) {
        this._paintingService.updateOrderPainting(idPainting, painting).subscribe(result => {
            console.log('Order updated successfully');
        }, error => {
            console.log(error);
        });
    }
    setPaintingClasses(painting) {
        let classes = {
            my_box: true,
            box_vertical: painting.width <= painting.height,
            box_horizontal: painting.width > painting.height
        };
        return classes;
    }
};
PaintingListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDropListGroup"], { static: false })
], PaintingListComponent.prototype, "listGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDropList"], { static: false })
], PaintingListComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaintingListComponent.prototype, "idSerie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaintingListComponent.prototype, "paintingSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaintingListComponent.prototype, "selectPainting", void 0);
PaintingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-painting-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./painting-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-list/painting-list.component.html")).default,
        providers: [_services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./painting-list.component.css */ "./src/app/painting-list/painting-list.component.css")).default]
    })
], PaintingListComponent);

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
;


/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_painting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/painting.service */ "./src/app/services/painting.service.ts");
/* harmony import */ var _services_serie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/serie.service */ "./src/app/services/serie.service.ts");





let PortfolioComponent = class PortfolioComponent {
    constructor(_route, _router, _paintingService, _serieService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this._serieService = _serieService;
        this.paintings = [];
        this.clickExecuted = true; // initialize it to true for the first run
    }
    loadScript(url) {
        const body = document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
    ngOnInit() {
        console.log('painting-list.component.ts cargado');
        this.loadLibraries();
        this._route.params.subscribe(params => {
            let id = params['id'];
            this.getPaintingsByIdSerie(id);
            this.getSerieById(id);
        });
    }
    loadLibraries() {
        this.loadScript('https://cdn.jsdelivr.net/picturefill/2.3.1/picturefill.min.js');
        this.loadScript('../../assets/js/lightgallery-all.min.js');
        this.loadScript('../../assets/js/jquery.mousewheel.min.js');
        this.loadScript('../../assets/js/lg-thumbnail.min.js');
        this.loadScript('../../assets/js/lg-fullscreen.min.js');
        this.loadScript('../../assets/js/lg-zoom.min.js');
        this.loadScript('../../assets/js/lg-autoplay.min.js');
        this.loadScript('../../assets/js/lg-hash.min.js');
        this.loadScript('../../assets/js/lg-pager.min.js');
        this.loadScript('../../assets/js/lg-share.min.js');
        this.loadScript('../../assets/js/lg-video.min.js');
    }
    getPaintings() {
        this._paintingService.getPaintings().subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    getPaintingsByIdSerie(idSerie) {
        this._paintingService.getPaintingsByIdSerie(idSerie).subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    getSerieById(idSerie) {
        this._serieService.getSerie(idSerie).subscribe(result => {
            console.log(result);
            this.serie = result[0];
        }, error => {
            console.log(error);
        });
    }
    onClickImage() {
        this.loadLibraries();
        if (this.clickExecuted) {
            // Do all the things with the stuff
            this.clickExecuted = false; // set it to false until you need to trigger again
            (function ($) {
                $(document).ready(function () {
                    var $customEvents = $('#lightgallery');
                    $customEvents.lightGallery({
                        mode: 'lg-slide',
                        speed: 600,
                        height: '600px',
                        width: '100%',
                        showThumbByDefault: false,
                        thumbnail: false,
                        download: false,
                        zoom: true,
                        loop: false,
                        escKey: true,
                        counter: false,
                        autoplayControls: false,
                        fullScreen: true,
                        share: false,
                        html: false,
                        appendSubHtmlTo: '.lg-html',
                        subHtmlSelectorRelative: true
                    });
                    $customEvents.on('onBeforeSlide.lg', function (event) {
                        $('.lg-toolbar').css('background-color', '#ffffff');
                        $('.lg-next').css('background-color', '#ffffff');
                        $('.lg-prev').css('background-color', '#ffffff');
                        $('.lg-backdrop').css('background-color', '#ffffff');
                        $('.lg-sub-html').css('background-color', '#ffffff');
                        $('.lg-sub-html').css('color', '#000000');
                        $('.lg-sub-html').css('text-align', 'left');
                        $('.lg-html').css('background-color', '#ffffff');
                        $('.lg-html').css('color', '#000000');
                        $('.lg-html').css('text-align', 'left');
                        $('.lg-sub-html').css('border', '2px solid #717D85');
                    });
                    console.log("Hello from jQuery!");
                });
            })(jQuery);
        }
    }
    onDeletePainting(id) {
        this._paintingService.deletePainting(id).subscribe(result => {
            console.log(result);
            this.getPaintings();
        }, error => {
            console.log(error);
        });
    }
    setPaintingClasses(painting) {
        let classes = {
            img_vertical: painting.width <= painting.height,
            img_horizontal: painting.width > painting.height
        };
        return classes;
    }
};
PortfolioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"] },
    { type: _services_serie_service__WEBPACK_IMPORTED_MODULE_4__["SerieService"] }
];
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html")).default,
        providers: [_services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"], _services_serie_service__WEBPACK_IMPORTED_MODULE_4__["SerieService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")).default]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/app/serie-create/serie-create.component.css":
/*!*********************************************************!*\
  !*** ./src/app/serie-create/serie-create.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcmllLWNyZWF0ZS9zZXJpZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/serie-create/serie-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/serie-create/serie-create.component.ts ***!
  \********************************************************/
/*! exports provided: SerieCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerieCreateComponent", function() { return SerieCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_serie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/serie.service */ "./src/app/services/serie.service.ts");
/* harmony import */ var _models_serie_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/serie.model */ "./src/app/models/serie.model.ts");





let SerieCreateComponent = class SerieCreateComponent {
    constructor(_route, _router, _serieService) {
        this._route = _route;
        this._router = _router;
        this._serieService = _serieService;
        this.selectIdSerie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initializeSerie();
    }
    ngOnInit() {
        console.log('serie-create.component.ts cargado');
    }
    initializeSerie() {
        this.serie = new _models_serie_model__WEBPACK_IMPORTED_MODULE_4__["Serie"](0, '', true);
    }
    onSubmit() {
        this.createNewSerie();
        console.log('New serie saved');
    }
    createNewSerie() {
        this._serieService.getSequenceNumber().subscribe(result => {
            this.serie['idSerie'] = result['seq'];
            this.createSerie();
        }, error => {
            console.log(error);
        });
    }
    createSerie() {
        this._serieService.createSerie(this.serie).subscribe(result => {
            console.log('Serie successfully created!');
            this.initializeSerie();
            this.selectIdSerie.emit(result['idSerie']);
        }, error => {
            console.log(error);
        });
    }
};
SerieCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SerieCreateComponent.prototype, "selectIdSerie", void 0);
SerieCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-serie-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./serie-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/serie-create/serie-create.component.html")).default,
        providers: [_services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./serie-create.component.css */ "./src/app/serie-create/serie-create.component.css")).default]
    })
], SerieCreateComponent);



/***/ }),

/***/ "./src/app/serie-list/serie-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/serie-list/serie-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcmllLWxpc3Qvc2VyaWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/serie-list/serie-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/serie-list/serie-list.component.ts ***!
  \****************************************************/
/*! exports provided: SerieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerieListComponent", function() { return SerieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_serie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/serie.service */ "./src/app/services/serie.service.ts");




let SerieListComponent = class SerieListComponent {
    constructor(_route, _router, _serieService) {
        this._route = _route;
        this._router = _router;
        this._serieService = _serieService;
        this.series = [];
        this.selectIdSerie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('serie-list.component.ts cargado');
        this.getSeries();
    }
    getSeries() {
        this._serieService.getSeries().subscribe(result => {
            console.log(result);
            this.series = result;
        }, error => {
            console.log(error);
        });
    }
    onSelectIdSerie(idSerie) {
        this.selectIdSerie.emit(idSerie);
    }
    onDeleteSerie(idSerie) {
        this._serieService.deleteSerie(idSerie).subscribe(result => {
            console.log(result);
            //TODO preguntar con jQuery si estas seguro que quieres eliminar
            this.getSeries();
        }, error => {
            console.log(error);
        });
    }
    ngOnChanges(changes) {
        //si se ha seleccionado una serie diferente
        if (changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue) {
            this.getSeries();
        }
    }
};
SerieListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SerieListComponent.prototype, "idSerie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SerieListComponent.prototype, "selectIdSerie", void 0);
SerieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-serie-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./serie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/serie-list/serie-list.component.html")).default,
        providers: [_services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./serie-list.component.css */ "./src/app/serie-list/serie-list.component.css")).default]
    })
], SerieListComponent);



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let NotificationService = class NotificationService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api/notification';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create notification
    createNotification(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all notifications
    getNotifications() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get scheduled notifications
    getScheduledNotifications() {
        return this.http.get(`${this.baseUri}/scheduled`);
    }
    // Get notifications of a type
    getNotificationsByType(type) {
        let url = `${this.baseUri}/readNotification/${type}`;
        return this.http.get(url);
    }
    // Get notification
    getNotification(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getSequenceNumber() {
        let url = `${this.baseUri}/sequenceNotifications`;
        return this.http.get(url);
    }
    // Update notification
    updateNotification(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete notification
    deleteNotification(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    postFileImagen(imagenParaSubir) {
        let url = `${this.baseUri}/uploadFile`;
        let formData = new FormData();
        formData.append('image', imagenParaSubir, imagenParaSubir.name);
        return this.http.post(url, formData);
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/services/notificationSent.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/notificationSent.service.ts ***!
  \******************************************************/
/*! exports provided: NotificationSentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSentService", function() { return NotificationSentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let NotificationSentService = class NotificationSentService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api/notificationSent';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create notificationSent
    createNotificationSent(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all notificationsSent
    getNotificationsSent() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get last notificationsSent
    getLastSentNotifications() {
        let url = `${this.baseUri}/readLastNotificationSent`;
        return this.http.get(url);
    }
    // Get notificationSent
    getNotificationSent(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getSequenceNumber() {
        let url = `${this.baseUri}/sequenceNotificationsSent`;
        return this.http.get(url);
    }
    postFileImagen(imagenParaSubir) {
        let url = `${this.baseUri}/uploadFile`;
        let formData = new FormData();
        formData.append('image', imagenParaSubir, imagenParaSubir.name);
        return this.http.post(url, formData);
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
NotificationSentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NotificationSentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationSentService);



/***/ }),

/***/ "./src/app/services/painting.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/painting.service.ts ***!
  \**********************************************/
/*! exports provided: PaintingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingService", function() { return PaintingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let PaintingService = class PaintingService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api/painting';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create painting
    createPainting(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all paintings
    getPaintings() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get paintings of a serie
    getPaintingsByIdSerie(idSerie) {
        let url = `${this.baseUri}/readSerie/${idSerie}`;
        return this.http.get(url);
    }
    // Get painting
    getPainting(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get order of the last painting in a serie
    getOrderPainting(idSerie) {
        let url = `${this.baseUri}/readOrder/${idSerie}`;
        return this.http.get(url);
    }
    // Update order of a painting
    updateOrderPainting(id, data) {
        let url = `${this.baseUri}/updateOrder/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getSequenceNumber() {
        let url = `${this.baseUri}/sequencePaintings`;
        return this.http.get(url);
    }
    // Update painting
    updatePainting(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete painting
    deletePainting(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    postFileImagen(imagenParaSubir) {
        let url = `${this.baseUri}/uploadFile`;
        let formData = new FormData();
        formData.append('image', imagenParaSubir, imagenParaSubir.name);
        return this.http.post(url, formData);
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
PaintingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PaintingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaintingService);



/***/ }),

/***/ "./src/app/services/serie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/serie.service.ts ***!
  \*******************************************/
/*! exports provided: SerieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerieService", function() { return SerieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let SerieService = class SerieService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api/serie';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create serie
    createSerie(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all series
    getSeries() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get serie
    getSerie(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getSequenceNumber() {
        let url = `${this.baseUri}/sequenceSeries`;
        return this.http.get(url);
    }
    // Update serie
    updateSerie(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete serie
    deleteSerie(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
SerieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
SerieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SerieService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api/user';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create user
    createUser(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all users
    getUsers() {
        return this.http.get(`${this.baseUri}`);
    }
    // 1: Send mail after subscription
    sendMailAfterSubscription(data, date) {
        let url = `${this.baseUri}/sendMailAfterSubscription/${date}`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // 2: Send mail after communication
    sendMailAfterCommunication(data, date) {
        let url = `${this.baseUri}/sendMailAfterCommunication/${date}`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // 3: Send mail notify changes
    sendMailNotifyChanges(data, date) {
        let url = `${this.baseUri}/sendMailNotifyChanges/${date}`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // 4: Send mail notify events
    sendMailNotifyEvents(data, date) {
        let url = `${this.baseUri}/sendMailNotifyEvents/${date}`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_serie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/serie.service */ "./src/app/services/serie.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(_route, _router, _serieService) {
        this._route = _route;
        this._router = _router;
        this._serieService = _serieService;
        this.series = [];
    }
    loadScript(url) {
        const body = document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
    ngOnInit() {
        this.getSeries();
        this.loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
        (function ($) {
            $(document).ready(function () {
                const $dropdown = $(".dropdown");
                const $dropdownToggle = $(".dropdown-toggle");
                const $dropdownMenu = $(".dropdown-menu");
                const showClass = "show";
                $(window).on("load resize", function () {
                    //if (this.matchMedia("(min-width: 768px)").matches) {
                    $dropdown.hover(function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    }, function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    });
                    //} else {
                    //  $dropdown.off("mouseenter mouseleave");
                    //}
                });
                console.log("Hello from jQuery!");
            });
        })(jQuery);
    }
    getSeries() {
        this._serieService.getSeries().subscribe(result => {
            console.log(result);
            this.series = result;
        }, error => {
            console.log(error);
        });
    }
    highlightMenuNav() {
        (function ($) {
            $(document).ready(function () {
                $('#navbarDropdown1').addClass('active');
            });
        })(jQuery);
    }
    unhighlightMenuNav() {
        (function ($) {
            $(document).ready(function () {
                $('#navbarDropdown1').removeClass('active');
            });
        })(jQuery);
    }
    initialMenuNav() {
        (function ($) {
            $(document).ready(function () {
                $('#navbarDropdown1').removeClass('active');
            });
        })(jQuery);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/header/header.component.html")).default,
        providers: [_services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");








let UiModule = class UiModule {
};
UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([]),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]
        ],
        exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]]
    })
], UiModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp\www\AdminPaintingsGithub\frontend\admin-paintings\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map