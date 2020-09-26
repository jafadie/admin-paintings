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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"container-fluid\" style=\"position: relative; top: 10em\" *ngIf=\"isAdmin\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-3 col-lg-3\">\r\n\t\t\t<button type=\"button\" (click)=\"onAcceptChanges()\" class=\"btn btn-md btn-default\">\r\n\t\t\t\tAceptar cambios\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-3 col-lg-3\">\r\n\t\t\t<button type=\"button\" (click)=\"onCancelChanges()\" class=\"btn btn-md btn-default\">\r\n\t\t\t\tCancelar cambios\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-3 col-lg-3\">\r\n\t\t\t<button type=\"button\" [routerLink]=\"['/app-portfolio-preview', selectedIdSerie]\" class=\"btn btn-md btn-default\">\r\n\t\t\t\tVista previa\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-3 col-lg-3\">\r\n\t\t\t<button type=\"button\" (click)=\"onSessionClose()\" [routerLink]=\"['/admin-paintings', 1]\" class=\"btn btn-md btn-default\">\r\n\t\t\t\tCerrar sesión\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t\r\n\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-4 col-lg-4\">\r\n\t\t\t<app-serie-create (selectIdSerie)=\"processSelectedIdSerie($event)\"></app-serie-create>\r\n\r\n\t\t\t<app-serie-list [idSerie]=\"selectedIdSerie\" (selectIdSerie)=\"processSelectedIdSerie($event)\" (selectPainting)=\"processSelectedPainting($event)\" [isAdmin]=\"isAdmin\"></app-serie-list>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-8 col-sm-8 col-xs-8 col-lg-8\">\r\n\t\t\t<app-painting-list [idSerie]=\"selectedIdSerie\" (selectPainting)=\"processSelectedPainting($event)\" [paintingSelected]=\"selectedPainting\" (selectIdSerie)=\"processSelectedIdSerie($event)\" [isAdmin]=\"isAdmin\"></app-painting-list>\r\n\r\n\t\t\t<app-painting-create [idSerie]=\"selectedIdSerie\" [paintingSelected]=\"selectedPainting\" (selectIdSerie)=\"processSelectedIdSerie($event)\" (selectPainting)=\"processSelectedPainting($event)\"></app-painting-create>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid\" style=\"position: relative; top: 15em\" *ngIf=\"!isAdmin\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n\t\t\t<form #formLogin=\"ngForm\" (ngSubmit)=\"onSubmit()\" id=\"form-login\">\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\" >\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"username\" class=\"control-label\">Username</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"\" class=\"input_format\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-8\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"password\" class=\"control-label\">Password</label>\r\n\t\t\t\t\t\t\t\t<input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"\" class=\"input_format\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-8\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default input_format btn_format\" [disabled]=\"!formLogin.valid\">Login</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span *ngIf=\"mostrarError\">Usuario y contraseña incorrectos</span>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-users/admin-users.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top: 100px;\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4\">\n\n\t\t\t<app-notification-fixed (selectTypeNotification)=\"processSelectedTypeNotification($event)\" (selectIdNotification)=\"processSelectedIdNotification($event)\"></app-notification-fixed>\n\n\t\t\t<app-notification-sent-list style=\"display: none;\"></app-notification-sent-list>\n\n\t\t\t<app-notification-scheduled-list [idNotification]=\"selectedIdNotification\" (selectIdNotification)=\"processSelectedIdNotification($event)\" (selectTypeNotification)=\"processSelectedTypeNotification($event)\"></app-notification-scheduled-list>\n\n\t\t</div>\n\n\t\t<div class=\"col-lg-8\">\n\n\t\t\t<app-notification-create [typeNotification]=\"selectedTypeNotification\" [idNotification]=\"selectedIdNotification\" (selectIdNotification)=\"processSelectedIdNotification($event)\" (selectTypeNotification)=\"processSelectedTypeNotification($event)\"></app-notification-create>\n\n\t\t</div>\n\t</div>\n</div>\n\n\n\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"position: relative; top: 8em\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t\t<div id=\"fotoLorena\" class=\"col-md-3 col-sm-3 col-xs-3\" style=\"text-align: center;\">\r\n\t\t\t<img src=\"..\\..\\assets\\images\\lorenaContact.jpg\" width=\"90%;\"  />\r\n\t\t</div>\r\n\r\n\t\t<div id=\"textoPresentacion\" class=\"col-md-7 col-sm-7 col-xs-7\" >\r\n\t\t\t<div id=\"titulo_bio\" class=\"text_space_bio\">\r\n\t\t\t\tAbout the Artist\r\n\t\t\t</div>\r\n\t\t\t<div id=\"texto\" class=\"text_format\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tLorena García Mateu (b. 1983) lives and works in Valencia, Spain. She graduated in\r\n\t\t\t\t\t2008 in Fine Art MA in Art Production from the Polytechnic University of Valencia,\r\n\t\t\t\t\tSpain. Lorena’s interests encompass figurative art and nature interpretation, often\r\n\t\t\t\t\treferring to Art History. Throughout her work — which embraces mainly oil painting —\r\n\t\t\t\t\tthe artist explores the search of colour and its harmony, claiming to arouse\r\n\t\t\t\t\tatmospheres charged by mystery, movement and uncertainty.\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<p>\r\n\t\t\t\t\tGarcía Mateu has participated extensively in solo and group exhibitions across Spain\r\n\t\t\t\t\tand internationally. Her paintings have been selected also in a several national awards.\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<p style=\"margin-top: 7%;\">\r\n\t\t\t\t\tFor more information on purchasing or commissioning a painting, or to just say hello, feel free to get in touch.\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t\r\n\t\t\t\t<div>\r\n\t\t\t\t\tValencia, Spain.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\tTelf: (+34) 630974316\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\tstudio@lorenagarciamateu.es\r\n\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\r\n\t\t\t\t<div id=\"subtitulo_bio\">\r\n\t\t\t\t\tEducation\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2009\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tDegree in Theatre Space and Settings. Polytechnic University of Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2008\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tM.A. in Artistic Production. Polytechnic University of Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2006\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tB.A. in Fine Arts. San Carlos’ College. Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2005\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tErasmus Scholarship. University of Madeira, Portugal.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t<div id=\"subtitulo_bio\">\r\n\t\t\t\t\tSolo Exhibitions\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2020\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tLife is the mystery. Artifact. New York, USA.*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2018\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tLa vida silenciosa. Movart. Art Gallery. Madrid, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2015\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tAhora, Nosotras II. M.AR.CA. León, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2014\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tOnírica. ArtClub. Caro Hotel. Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2013\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tLife in Motion. Las Naves Centro de Creación Contemporánea. Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tOrigen. L’Espai. Delegación de Cultura. Torrent, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2008\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tIl Corpo Evocato. Studio Arte Fuori Centro. Roma, Italy.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2007\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tIl Corpo Evocato. Accademia di Belle Arti. Maceratta, Italy.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t<div id=\"subtitulo_bio\">\r\n\t\t\t\t\tSelected Group Exhibitions\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2020\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tArte Aparte XII. Sala La Carolina, Jaén, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2017\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSummer of art. Galería Cuatro. Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tNuevos Nómadas II. Real Álcazar de Sevilla, Meca. Sevilla, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tNuevos Nómadas I. Museo de Almería. Meca. Sevilla, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2016\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tFestival de les arts Ciutat Vella Oberta. Casa de Velázquez. Madrid, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tPolizontes. Contemporain landscapes. M.ARC.CA. León, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tProject IMAGO MUNDI, MADE IN SPAIN. Fundación Benetton & CAC de Málaga. Spain and International (itinerant).*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2014\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tArs Visibilis III International Art Festival l Miradas de Mujeres. Meca. Almería, Spain.* \r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tAhora, nosotras III International Art Festival Miradas de Mujeres. M.ARC.CA. León, Spain. \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div id=\"subtitulo_bio\">\r\n\t\t\t\t\tAwards / Grants\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2009\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tAntonio Gala Foundation‘s Artistic Scholarship. Córdoba, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2007\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t1st Prize 2007 Artistic creation. University of Zaragoza, Spain. *\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tWork selected for Artemisia II Edizione prize. Ancona, Italy. *\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div id=\"subtitulo_bio\">\r\n\t\t\t\t\tArt Fairs\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2020\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tThe Palm Beach Show. Florida, Miami, USA.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2018\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tAffordable Art Fair. Hampstead, London, UK.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tArt Boca Raton. Florida, USA.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2017\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tThe new red dot. Miami, USA.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tAffordable Art Fair. Hampstead. London, UK.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2015\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tThe Other Art Fair. Victoria House. London, UK.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2014\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tThe Affordable Art Fair. Hampstead. London, UK.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tThe Other Art Fair. Ambika P3, Marylebone. London, UK.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div id=\"subtitulo_bio\">\r\n\t\t\t\t\tInstitutional/Artistic Support\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2019\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for 3th Rotary Club Valencia-Centro National Painting Award. Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2018\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for XXVII Autumn Awards 'Villa de Chiva'. Valencia, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for XXVII Bienas Eusebio Sempere. Onil, Alicante, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for II Competition Painting Rotary Club Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2017\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 58th \"Salón de Otoño Ateneo Mercantil de Valencia\". Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2016\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 57th \"Salón de Otoño Ateneo Mercantil de Valencia\". Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 39th National Competition Painting \"Casimiro Sainz\", Reinosa, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 21st National Competition Painting “Ciutat d’ Algemesí”, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 20th National Competition Painting Castellón, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2015\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 56th “Salón de Otoño Ateneo Mercantil de Valencia”, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 19th Competition painting “Enrique Lite. Premios culturales 2015”. La Laguna Univeristy, Tenerife, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for 5th Salón de las vanidades. El Carpio. Córdoba, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tFestival de les Arts Ciutat Vella Oberta. Valencia, Spain.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2014\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the 19th Annual competition “Ciudad de Algemesí”, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2013\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tSelected for the VI International Art Festival Incubarte. Valencia, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t70th Annual Competition 2013 Work selected and National Art Exhibition \"José Camarón\", Segovia, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t<div class=\"container-fluid space_line\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-1 reset_padding\">\r\n\t\t\t\t\t\t\t2006\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11 reset_padding\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tWork selected for Painting Contest IV Fund. U. P. V. Valencia, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\tWork selected for the 7th Manolo Valdés Collection Art Contest. Castellón, Spain.*\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t<!--<div id=\"subtitulo_bio\">\r\n\t\t\t\t\tPublications\r\n\t\t\t\t</div>-->\r\n\r\n\t\t\t\t<br/>\r\n\r\n\r\n\r\n\t\t\t\t* On catalog\r\n\r\n\t\t\t\t<br/>\r\n\t\t\t\t<br/>\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"position: relative; top: 8em\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\" style=\"text-align: center;\" class=\"img_contact_visible\" >\r\n\t\t\t<img src=\"..\\..\\assets\\images\\thethinker_100x81_72ppx.jpg\" width=\"90%;\"  />\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"col-md-6 col-sm-6 col-xs-6 text_format text_space_contact\">\r\n\t\t\t<div>\r\n\t\t\t\tPlease email me at <u><a href=\"#\" class=\"galleryLink\">studio@lorenagarciamateu.es</a></u> with questions or comments\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"margin-top: 4%;\">\r\n\t\t\t\tJoin my mailing list if you want to receive news\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"margin-top: 2%\">\r\n\t\t\t\t<form #formUser=\"ngForm\" (ngSubmit)=\"onSubmit()\" id=\"form-user\">\r\n\t\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9 col-xs-9\" style=\"padding: 0px;\" >\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- nameUser -->\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"nameUser\" name=\"nameUser\" #nameUser=\"ngModel\" [(ngModel)]=\"user['nameUser']\" placeholder=\"Name\" class=\"input_format\" required>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9 col-xs-9 reset_padding\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Email -->\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user['email']\" placeholder=\"Email Address\" class=\"input_format\" required>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Create Button -->\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default input_format btn_format\" [disabled]=\"!formUser.valid\" >Subscribe</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"margin-top: 6%;\">\r\n\t\t\t\t<a href=\"https://www.facebook.com/lorenagarciamateu/\" target=\"_blank\"><i class=\"fa fa-facebook-f symbol_format\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<!--<a href=\"https://www.youtube.com/watch?v=TfoFRqixf5I\" target=\"_blank\"><i class=\"fa fa-youtube-play symbol_format\"></i>\r\n\t\t\t\t</a>-->\r\n\r\n\t\t\t\t<a href=\"https://www.instagram.com/lorena_garciamateu/\" target=\"_blank\"><i class=\"fa fa-instagram symbol_format\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div>\r\n\t\t\t\t<div class=\"galleryName\" style=\"margin-top: 4em;\">\r\n\t\t\t\t\tKristin Hjellegjerde Gallery\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\tLondon (London Bridge)\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"margin-top: 1.5em;\">\r\n\t\t\t\t\t<a href=\"https://kristinhjellegjerde.com/\" target=\"_blank\" class=\"galleryLink\">https://kristinhjellegjerde.com</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"galleryLight\">\r\n\t\t\t\t\t2 Melior Place\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"galleryLight\">\r\n\t\t\t\t\tLondon SE1 3SZ\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"galleryLight\">\r\n\t\t\t\t\t+44 (0) 20 39046349\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"galleryLight\">\r\n\t\t\t\t\tTuesday–Saturday: 11am–6pm\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"position: relative; top: 8em\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<div class=\"center\" style=\"font-size: 1.6em; font-family: 'roboto-light', sans-serif; margin-top: 2em;\">\r\n\t\t\t\t\tA SPLENDOUR AMONG SHADOWS\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center\" style=\"margin-top: 3em; font-weight: bold; color:#012e67;\">\r\n\t\t\t\t\tRICHARD STONE AND LORENA GARCÍA MATEU\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center\">\r\n\t\t\t\t\tLONDON\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center\">\r\n\t\t\t\t\t26 AUGUST - 19 SEPTEMBER 2020\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center\" style=\"margin-top: 0.5em; font-family: 'roboto-bold', sans-serif; font-weight: bold;\">\r\n\t\t\t\t\tPrivate View: Tuesday 25 August,  6.30-9pm\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center\" style=\"margin-top: 2em; font-family: 'roboto-bold', sans-serif; font-weight: bold;\">\r\n\t\t\t\t\tLondon (LONDON BRIDGE)\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center\" style=\"margin-top: 1em; font-family: 'roboto-bold', sans-serif; font-size: 1.2em;\">\r\n\t\t\t\t\t<a href=\"https://kristinhjellegjerde.com/\" target=\"_blank\" class=\"galleryLink\">https://kristinhjellegjerde.com</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--<div class=\"center\" style=\"margin-top: 2em; margin-bottom: 2em;\">\r\n\t\t\t\t\t<img src=\"..\\..\\assets\\images\\embrance_retocado.jpg\" width=\"20%;\" />\r\n\t\t\t\t</div>-->\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\" style=\"text-align: center; margin-top: 2em; margin-bottom: 2em;\" >\r\n\t\t\t<img src=\"..\\..\\assets\\images\\embrance_retocado.jpg\" width=\"50%;\"  />\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\">\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img class=\"prueba_portada\" src=\"..\\..\\assets\\images\\theinsight_100x150_72ppx.jpg\" width=\"100%;\" style=\"margin-top: 8em;\" />");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-create/notification-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-create/notification-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\n\t\t</div>\n\n\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t<form #formUser=\"ngForm\" (ngSubmit)=\"onSubmit(formUser)\" id=\"form-user\">\n\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\" style=\"display: none;\">\n\t\t\t\t\t\t\t<!-- Nueva exposición unchecked -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t  \t\t<input type=\"radio\" id=\"notificationRadioSubscription\" name=\"notificationRadios\" mdbInput value=\"2\" (change)=\"onChangeNotificationType()\" style=\"opacity: 0;\" #notificationRadioSubscription=\"ngModel\" [(ngModel)]=\"notification['type']\">\n\t\t\t\t\t\t  \t\t<label for=\"notificationRadioSubscription\">Subscribe</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2\" style=\"display: none;\">\n\t\t\t\t\t\t\t<!-- Nueva exposición unchecked -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t  \t\t<input type=\"radio\" id=\"notificationRadioContacting\" name=\"notificationRadios\" mdbInput value=\"3\" (change)=\"onChangeNotificationType()\" style=\"opacity: 0;\" #notificationRadioContacting=\"ngModel\" [(ngModel)]=\"notification['type']\">\n\t\t\t\t\t\t  \t\t<label for=\"notificationRadioContacting\">Contact</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\">\n\t\t\t\t\t\t\t<!-- Nueva exposición unchecked -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t  \t\t<input type=\"radio\" id=\"notificationRadioExpo\" name=\"notificationRadios\" mdbInput value=\"4\" (change)=\"onChangeNotificationType()\" style=\"opacity: 0;\" #notificationRadioExpo=\"ngModel\" [(ngModel)]=\"notification['type']\">\n\t\t\t\t\t\t  \t\t<label for=\"notificationRadioExpo\">Nueva exposición</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\">\n\t\t\t\t\t\t\t<!-- Artículos prensa unchecked -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"notificationRadioPrensa\" name=\"notificationRadios\" mdbInput value=\"1\" (change)=\"onChangeNotificationType()\" style=\"opacity: 0;\" #notificationRadioPrensa=\"ngModel\" [(ngModel)]=\"notification['type']\">\n\t\t\t\t\t\t  \t\t<label for=\"notificationRadioPrensa\">Artículos prensa</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-4\">\n\t\t\t\t\t\t\t<!-- Nueva exposición unchecked -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t  \t\t<input type=\"radio\" id=\"notificationRadioGeneral\" name=\"notificationRadios\" mdbInput value=\"5\" (change)=\"onChangeNotificationType()\" style=\"opacity: 0;\" #notificationRadioGeneral=\"ngModel\" [(ngModel)]=\"notification['type']\">\n\t\t\t\t\t\t  \t\t<label for=\"notificationRadioGeneral\">General</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divEventType\" *ngIf=\"notification['type'] && (notification['type']==1 || notification['type']==4)\">\n\t\t\t\t\t\t\t\t<label for=\"selectEventType\" class=\"control-label\">Event Type</label>\n\t\t\t\t\t\t\t\t<div class=\"select_box\">\n\t\t\t\t\t\t\t\t\t<select  class=\"pruSelect select-selected\" #selectEventType name=\"selectEventType\" id=\"selectEventType\" (change)=\"onOptionEventSelected(selectEventType.value)\">\n\t\t\t     \t\t\t\t\t\t<option *ngFor=\"let eventType of eventTypes\" [value]=\"eventType.idEventType\" [selected]=\"eventType.idEventType == notification['eventType']\">{{eventType.description}}</option>\n\t\t\t     \t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t     \t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divMediaType\" *ngIf=\"notification['type'] && notification['type']==1\">\n\t\t\t\t\t\t\t\t<label for=\"selectMediaType\" class=\"control-label\">Media</label>\n\t\t\t\t\t\t\t\t<div class=\"select_box\">\n\t\t\t\t\t\t\t\t\t<select class=\"pruSelect select-selected\" #selectMediaType name=\"selectMediaType\" id=\"selectMediaType\" (change)=\"onOptionMediaSelected(selectMediaType.value)\">\n\t\t\t     \t\t\t\t\t\t<option *ngFor=\"let mediaType of mediaTypes\" [value]=\"mediaType.idMediaType\" [selected]=\"mediaType.idMediaType == notification['mediaType']\">{{mediaType.description}}</option>\n\t\t\t     \t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t     \t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divTitle\" *ngIf=\"notification['type'] && (notification['type']==4 || notification['type']==5)\"> \n\t\t\t\t\t\t\t\t<label for=\"title\" class=\"control-label\">Características/Título</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"title\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"notification['title']\" placeholder=\"Title\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\n\t     \t\t\t\t\n\t     \t\t\t\t\t<div class=\"form-group\" id=\"divLocalization\" *ngIf=\"notification['type'] && (notification['type']==1 || notification['type']==4 || notification['type']==5)\"> \n\t\t\t\t\t\t\t\t<label for=\"localization\" class=\"control-label\">Localization</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"localization\" name=\"localization\" #localization=\"ngModel\" [(ngModel)]=\"notification['localization']\" placeholder=\"Localization\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divOpeningDate\" *ngIf=\"notification['type'] && notification['type']==4\">\n\t\t\t\t\t\t\t\t<label for=\"openingDate\" class=\"control-label\">Opening date</label>\n\t\t\t\t\t\t\t  \t<input type=\"datetime-local\" class=\"form-control\" name=\"openingDate\" #openingDate=\"ngModel\" id=\"openingDate\" [(ngModel)]=\"notification['openingDate']\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divClosingDate\" *ngIf=\"notification['type'] && notification['type']==4\">\n\t\t\t\t\t\t\t\t<label for=\"closingDate\" class=\"control-label\">Closing date</label>\n\t\t\t\t\t\t\t  \t<input type=\"datetime-local\" class=\"form-control\" name=\"closingDate\" #closingDate=\"ngModel\" id=\"closingDate\" [(ngModel)]=\"notification['closingDate']\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divLink\" *ngIf=\"notification['type'] && notification['type']==1\"> \n\t\t\t\t\t\t\t\t<label for=\"link\" class=\"control-label\">Link</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"link\" name=\"link\" #link=\"ngModel\" [(ngModel)]=\"notification['link']\" placeholder=\"Link\" required>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divImage\" *ngIf=\"notification['type']\"> <!-- Image-->\n\t\t\t\t\t\t\t\t<label for=\"image\" class=\"control-label\">Image</label>\n\t\t\t\t\t\t\t\t<div *ngIf=\"notification['image']\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{baseUri}}/images/{{notification['image']}}\" width=\"30%;\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"image\" name=\"image\" placeholder=\"image001.jpeg\" (change)=\"fileChangeEvent($event)\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!--<div class=\"custom-file\">\n\t\t\t\t\t\t  <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n\t\t\t\t\t\t  <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n\t\t\t\t\t\t</div>-->\n\n\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\n\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divScheduled\" *ngIf=\"notification['type'] && (notification['type']==1 || notification['type']==4 || notification['type']==5)\"> <!-- Scheduled-->\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox scheduledMargin\">\n\t\t\t\t\t\t\t    \t<span><input type=\"checkbox\" name=\"scheduled\" #scheduled=\"ngModel\" id=\"scheduled\" [(ngModel)]=\"notification['scheduled']\" style=\"opacity: 0;\" (change)=\"checkValueScheduled(notification['scheduled'])\"><label for=\"scheduled\">Scheduled</label></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\n\t\t\t\t\t\t\t<div class=\"form-group\" id=\"divDeliveryDate\" *ngIf=\"notification['type'] && notification['scheduled']\">\n\t\t\t\t\t\t\t\t<label for=\"deliveryDate\" class=\"control-label\">Delivery date</label>\n\t\t\t\t\t\t\t  \t<input type=\"datetime-local\" class=\"form-control\" name=\"deliveryDate\" #deliveryDate=\"ngModel\" id=\"deliveryDate\" [(ngModel)]=\"notification['deliveryDate']\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\" style=\"margin-top: 2em;\">\n\n\t\t\t\t\t\t\t<div class=\"form-group\" style=\"margin-bottom: 0;\" id=\"divGlobalCheck\" *ngIf=\"notification['type'] && (notification['type']==1 || notification['type']==4 || notification['type']==5)\"> <!-- Global checkbox -->\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox scheduledMargin\">\n\t\t\t\t\t\t\t    \t<span><input type=\"checkbox\" name=\"globalCheck\" id=\"globalCheck\" #globalCheck=\"ngModel\" [(ngModel)]=\"myGlobalCheck\" style=\"opacity: 0;\" (change)=\"checkValueGlobalCheck(myGlobalCheck)\"><label for=\"globalCheck\">Check all users</label></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\" *ngIf=\"notification['type'] && (notification['type']==1 || notification['type']==4 || notification['type']==5)\">\n\t\t\t\t\t\t\t<div class=\"boxCheckboxList\">\n\t\t\t\t\t\t\t    <div class=\"container-fluid\">\n\t\t\t\t\t\t\t        <div class=\"row\">\n\t\t\t\t\t\t\t            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t                        <div *ngFor=\"let myUser of myUserList; let i= index\">\n\t\t\t\t\t                            <div href=\"#\" style=\"width: 30%; float: left;\">\n\t\t\t\t\t                            \t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"{{'inlineCheckbox' + i}}\" id=\"{{'inlineCheckbox' + i}}\" [(ngModel)]=\"myUser[0]\" style=\"opacity: 0;\">\n\t\t\t\t\t\t\t\t    \t\t\t\t\t<label for=\"{{'inlineCheckbox' + i}}\">{{myUser[1][\"email\"]}}</label>\n\t\t\t\t\t\t\t\t    \t\t\t\t</span>\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t\t<div class=\"container-fluid form-group\" id=\"divBtnSaveNotification\" *ngIf=\"notification['type']\"> <!-- Create Button -->\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-md btn-default\" [disabled]=\"!formUser.valid\">{{buttonName}}</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\" *ngIf=\"typeNotificationAux\">\n\t\t\t\t\t\t\t<div class=\"container-fluid form-group\" id=\"divBtnSaveNotification\" >\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"onPreviewSelectedNotification(typeNotificationAux)\" class=\"btn btn-md btn-default\" [disabled]=\"!formUser.valid\">\n\t\t\t\t\t\t\t\tView notification\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\" *ngIf=\"typeNotificationAux && idNotificationAux\">\n\t\t\t\t\t\t\t<div class=\"container-fluid form-group\" id=\"divBtnSendNotification\" >\n\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"onSendNotification(formUser)\" class=\"btn btn-md btn-default\" [disabled]=\"!formUser.valid\">\n\t\t\t\t\t\t\t\t\tSend notification\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t</form>\n\n\t\t\t\n\t\t</div>\n\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\n\t\t</div>\n\t\t\n\t\t\n\t\t\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-fixed/notification-fixed.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-fixed/notification-fixed.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\t<div class=\"row\">\n\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\n\t\t</div>\n\n\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<i (click)=\"onSelectTypeNotification(2)\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" style=\"margin-left: 1em; font-size: 3em; color:#012e67; cursor:pointer;\"></i>\n\t\t\t\t\t\t<i (click)=\"onPreviewSelectedTypeNotification(2)\" class=\"fa fa-image\" style=\"margin-left: 0.2em; font-size: 3em; color:#012e67; cursor:pointer;\"></i>\n\t\t\t\t\t\t<span style=\"margin-left: 0.2em;\">Subscription</span>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<i (click)=\"onSelectTypeNotification(3)\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" style=\"margin-left: 1em; font-size: 3em; color:#012e67; cursor:pointer;\"></i>\n\t\t\t\t\t\t<i (click)=\"onPreviewSelectedTypeNotification(3)\" class=\"fa fa-image\" style=\"margin-left: 0.2em; font-size: 3em; color:#012e67; cursor:pointer;\"></i>\n\t\t\t\t\t\t<span style=\"margin-left: 0.2em;\">Contact with clients</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\n\t\t</div>\n\n\t\t\n\n\t\t\n\n\t</div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-scheduled-list/notification-scheduled-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-scheduled-list/notification-scheduled-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top: 5em;\" *ngIf=\"notifications\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\n\t\t</div>\n\n\t\t<div class=\"col-md-11 col-sm-11 col-xs-11\">\n\t\t\t<div id=\"myNotifications\">\n\t\t\t\t<div *ngIf=\"!notifications\">\n\t\t\t\t\tCargando listado de notificaciones\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"titleNotifications\">\n\t\t\t\t\tScheduled notifications\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container-fluid notificationsStyle\" *ngIf=\"notifications\">\n\t\t\t\t\t<div *ngFor=\"let notification of notifications\">\n\t\t\t\t\t\t<div class=\"row rowNotificationsStyle\">\n\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\" *ngIf=\"notification['type']==4\">\n\t\t\t\t\t\t\t\t{{eventTypes0[notification.eventType]['description']}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\" *ngIf=\"notification['type']==1\">\n\t\t\t\t\t\t\t\t{{eventTypes1[notification.eventType]['description']}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\" *ngIf=\"notification['type']==5\">\n\t\t\t\t\t\t\t\tGeneral\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t\t\t<div class=\"miTooltip\">{{notification.localization}}\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"notification['type']==4 || notification['type']==5\" class=\"tooltiptext\">{{notification.title}}</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"notification['type']==1\" class=\"tooltiptext\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"linkStyle\" href=\"{{notification.link}}\" target=\"_blank\">{{notification.link}}</a>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t\t\t{{notification.deliveryDate | date:\"dd/MM/yyyy\"}}\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\n\t\t\t\t\t\t\t\t<i (click)=\"onSelectIdNotification(notification.idNotification)\" class=\"fa fa-pencil-square-o\" style=\"font-size: 1.3em; color:#012e67; cursor:pointer;\"></i>\n\t\t\t\t\t\t\t\t<i (click)=\"onPreviewSelectedIdNotification(notification.idNotification)\" class=\"fa fa-image\" style=\"font-size: 1.3em; color:#012e67; margin-left: 0.2em; cursor:pointer;\"></i>\n\t\t\t\t\t\t\t\t<i (click)=\"onDeleteSelectedIdNotification(notification.idNotification)\" class=\"fa fa-trash\" style=\"font-size: 1.3em; color:#012e67; margin-left: 0.2em; cursor:pointer;\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-create/painting-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/painting-create/painting-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"is_visible\" style=\"position: relative; top: 8em\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\r\n\t\t<!--<div class=\"col-md-10 col-sm-10 col-xs-10\" *ngIf=\"is_visible\">-->\r\n\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t<form #formPainting=\"ngForm\" (ngSubmit)=\"onSubmit()\" id=\"form-painting\">\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-7\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Title -->\r\n\t\t\t\t\t\t\t\t<label for=\"title\" class=\"control-label\">Title</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"title\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"painting['title']\" placeholder=\"Mi cuadro\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Year -->\r\n\t\t\t\t\t\t\t\t<label for=\"year\" class=\"control-label\">Year</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"year\" name=\"year\" #year=\"ngModel\" [(ngModel)]=\"painting['year']\" placeholder=\"2020\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Height -->\r\n\t\t\t\t\t\t\t\t<label for=\"height\" class=\"control-label\">Height</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"height\" name=\"height\" #height=\"ngModel\" [(ngModel)]=\"painting['height']\" placeholder=\"110cm\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Width -->\r\n\t\t\t\t\t\t\t\t<label for=\"width\" class=\"control-label\">Width</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"width\" name=\"width\" #width=\"ngModel\" [(ngModel)]=\"painting['width']\" placeholder=\"150cm\" required>\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Technique-->\r\n\t\t\t\t\t\t\t\t<label for=\"technique\" class=\"control-label\">Technique</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"technique\" name=\"technique\" #technique=\"ngModel\" [(ngModel)]=\"painting['technique']\" placeholder=\"Oleo\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Available-->\t\t\t\t\t\t    \t\r\n\t\t\t\t\t\t\t    <span><input type=\"checkbox\" name=\"available\" #available=\"ngModel\" id=\"available\" [(ngModel)]=\"painting['available']\" style=\"opacity: 0;\" checked><label for=\"available\" style=\"\">Available</label></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Image-->\r\n\t\t\t\t\t\t\t\t<label for=\"image\" class=\"control-label\">Image</label>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"is_edit\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"{{baseUri}}/images/{{painting['image']}}\" width=\"60%;\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"image\" name=\"image\" placeholder=\"image001.jpeg\" (change)=\"fileChangeEvent($event)\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Create Button -->\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-md btn-default\" [disabled]=\"!formPainting.valid\">{{nameButton}}</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-list/painting-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/painting-list/painting-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"myPaintings\" class=\"container-fluid\" style=\"position: relative; top: 8em\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t<div *ngIf=\"isVisible\" style=\"margin-bottom: 3em;\">\r\n\t\t\t\t<a (click)=\"onSelectPainting(-1)\">\r\n\t\t\t\t\t<span style=\"font-size: 1.4em; cursor:pointer;\">Add new painting</span> <i class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size: 1.4em; margin-left: 0.2em; color:#012e67; cursor:pointer;\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\r\n\t\r\n\r\n\t\t\t<div *ngIf=\"paintings\">\r\n\t\t\t\t<div class=\"example-container\" *ngIf=\"!paintings[0] && idSerie && idSerie != -1\">\r\n\t\t\t\t\t<span style=\"font-size: 1.8em;\">No paintings in this serie</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"example-container\" cdkDropListGroup *ngIf=\"paintings[0]\">\r\n\t\t\t  \t\t<div cdkDropList [cdkDropListEnterPredicate]=\"enter\" (cdkDropListDropped)=\"drop()\" #placeholder>\r\n\t\t\t  \t\t</div>\r\n\t\t\t\t  \t<div cdkDropList *ngFor=\"let painting of paintings; let i = index;\"\r\n\t\t\t\t       [cdkDropListEnterPredicate]=\"enter\" (cdkDropListDropped)=\"drop()\">\r\n\t\t\t\t    \t<div cdkDrag [cdkDragData]=\"i\" [ngClass]=\"setPaintingClasses(painting)\" >\r\n\t\t\t\t    \t\t<div>\r\n\r\n\t\t\t\t    \t\t\t<div class=\"thumbnail\">\r\n\t\t\t\t    \t\t\t\t<div>\r\n\t\t\t\t    \t\t\t\t\t<img src=\"{{baseUri}}/images/{{painting.image}}\" style=\"width: 70%; margin-top: 0%; margin-bottom: 0.2em;\" />\r\n\t\t\t\t    \t\t\t\t</div>\r\n\t\t\t\t    \t\t\t\t<div >\r\n\t\t\t\t    \t\t\t\t\t<span style=\"font-size: 1.1em; color:#012e67;\">{{painting.title}}</span>\r\n\t\t\t\t    \t\t\t\t\t<!--<p>-->\r\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"onSelectPainting(painting)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" style=\"font-size: 1.5em; margin-left: 0.4em; color:#012e67;\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"onDeletePainting(painting.idPainting)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-size: 1.5em; margin-left: 0.1em; color:#012e67;\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<!--</p>-->\r\n\t\t\t\t    \t\t\t\t</div>\r\n\t\t\t\t    \t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t</div>\r\n\t\t\t\t  \t</div>\r\n\t\t\t\t</div> \r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\t\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-preview/portfolio-preview.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-preview/portfolio-preview.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightgallery@1.6.10/dist/css/lg-transitions.min.css\">\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightgallery@1.6.10/dist/css/lightgallery.min.css\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato:300,400,700\">\n\n\n\n<div *ngIf=\"paintings && serie\">\n    <div class=\"container-fluid\" style=\"position: relative; top: 7em\">\n        <div class=\"row\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n            </div>\n\n            <div class=\"col-md-10 col-sm-10 col-xs-10\">\n                <div class=\"header_painting\">\n                    {{serie['title']}}\n                </div>\n\n                <div id=\"relative-caption\">\n                    <div id=\"lightgallery\">\n                        <a *ngFor=\"let painting of paintings;\" href=\"{{baseUri}}/images/{{painting['image']}}\" data-sub-html=\".caption\" data-html=\".caption\">\n                            \n                            <img [ngClass]=\"setPaintingClasses(painting)\" src=\"{{baseUri}}/images/{{painting['image']}}\" />\n                            \n                            {{onClickImage()}}\n\n                            <div class=\"caption\" style=\"display: none;\">\n                                <h5 class=\"caption_painting\" ><b>{{painting['title']}}</b> | {{painting['year']}} <br/> {{painting.height}}cm x {{painting['width']}}cm <br/> {{painting['technique']}} <br/> <span *ngIf=\"painting.available\">Available</span></h5>\n                            </div>\n\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightgallery@1.6.10/dist/css/lg-transitions.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightgallery@1.6.10/dist/css/lightgallery.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato:300,400,700\">\r\n\r\n\r\n\r\n<div *ngIf=\"paintings && serie\">\r\n    <div class=\"container-fluid\" style=\"position: relative; top: 7em\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n            </div>\r\n\r\n            <div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n                <div class=\"header_painting\">\r\n                    {{serie['title']}}\r\n                </div>\r\n\r\n                <div id=\"relative-caption\">\r\n                    <div id=\"lightgallery\">\r\n                        <a *ngFor=\"let painting of paintings;\" href=\"{{baseUri}}/images/{{painting['image']}}\" data-sub-html=\".caption\" data-html=\".caption\">\r\n                            \r\n                            <img [ngClass]=\"setPaintingClasses(painting)\" src=\"{{baseUri}}/images/{{painting['image']}}\" />\r\n                            \r\n                            {{onClickImage()}}\r\n\r\n                            <div class=\"caption\" style=\"display: none;\">\r\n                                <h5 class=\"caption_painting\" ><b>{{painting['title']}}</b> | {{painting['year']}} <br/> {{painting.height}}cm x {{painting['width']}}cm <br/> {{painting['technique']}} <br/> <span *ngIf=\"painting.available\">Available</span></h5>\r\n                            </div>\r\n\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/serie-create/serie-create.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/serie-create/serie-create.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"position: relative; top: 4em\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t<form #formSerie=\"ngForm\" (ngSubmit)=\"onSubmit()\" id=\"form-serie\">\r\n\t\t\t\t<div class=\"form-group\"> <!-- Serie -->\r\n\t\t\t\t\t<label for=\"serie\" class=\"control-label\">Serie</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"serie\" name=\"serie\" #title=\"ngModel\" [(ngModel)]=\"serie['title']\" placeholder=\"Name serie\" required>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\"> <!-- Create Button -->\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-md btn-default\" [disabled]=\"!formSerie.valid\">Create</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/serie-list/serie-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/serie-list/serie-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top: 8em;\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t<div *ngIf=\"!series\">\r\n\t\t\t\tCargando listado de cuadros\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"series\" style=\"font-size: 1.6em; line-height: 1.5em;\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li *ngFor=\"let serie of series\">\r\n\t\t\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"!idSerie || serie.idSerie != idSerie\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-7\">\r\n\t\t\t\t\t\t\t\t\t<strong>{{serie.title}}</strong>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\r\n\t\t\t\t\t\t\t\t\t<i (click)=\"onSelectIdSerie(serie.idSerie)\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" style=\"margin-left: 1em; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t<i (click)=\"onDeleteSerie(serie.idSerie)\" class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-left: 0.2em; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"serie.order == 0\" (click)=\"onOrderSerieUp(serie)\" class=\"fa fa-arrow-up\"  aria-hidden=\"true\" style=\"margin-left: 0.2em; visibility: hidden; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"serie.order != 0\" (click)=\"onOrderSerieUp(serie)\" class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"margin-left: 0.2em; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"serie.order != series.length - 1\" (click)=\"onOrderSerieDown(serie)\" class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"margin-left: 0.2em; color:#012e67; cursor:pointer;\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"idSerie && serie.idSerie == idSerie\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<form #formEditSerie=\"ngForm\" id=\"form-editSerie\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-7\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"title\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"serieEdition['title']\" placeholder=\"Name serie\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> <!-- Create Button -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i (click)=\"onSaveIdSerie()\" class=\"fa fa-save\" aria-hidden=\"true\" style=\"margin-left: 1em; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i (click)=\"onUnSelectIdSerie()\" class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"margin-left: 0.2em; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"serie.order == 0\" (click)=\"onOrderSerieUp(serieEdition)\" class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"margin-left: 0.2em; visibility: hidden; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"serie.order != 0\" (click)=\"onOrderSerieUp(serieEdition)\" class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"margin-left: 0.2em; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"serie.order != series.length - 1\" (click)=\"onOrderSerieDown(serieEdition)\" class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"margin-left: 0.2em; color:#012e67; cursor:pointer;\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-1 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n<form class=\"col-lg-8\" id=\"form-painting\" style=\"margin-top: 60px;\">\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"technique\" class=\"control-label\">Texto</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"technique\" name=\"technique\" placeholder=\"Mi texto\">\r\n\t</div>\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<button type=\"submit\" class=\"btn btn-primary\">Visita mi sitio</button>\r\n\t</div>\r\n</form>\r\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/texts/texts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/texts/texts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"position: relative; top: 8em\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"col-md-6 col-sm-10 col-xs-10\">\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<div class=\"center text_blue text_title\" style=\"text-justify: none; text-decoration: underline;\">\r\n\t\t\t\t\tSplendour among Shadows\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center text_blue\">\r\n\t\t\t\t\tStatuesque horses appear half hidden in thick swathes of colourful fabric while\r\n\t\t\t\t\tcanvases of painted hands reach through backgrounds of vibrant flora. Bringing\r\n\t\t\t\t\ttogether the sculptural work of London-based artist Richard Stone and Spanish\r\n\t\t\t\t\tartist Lorena García Mateu’s paintings, Kristin Hjellegjerde Gallery presents A\r\n\t\t\t\t\tSplendour Among Shadows, a timely exploration of sensuality and artistic\r\n\t\t\t\t\trepresentation.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"center text_blue\">\r\n\t\t\t\t\tThe exhibition’s title, borrowed from Percy Bysshe Shelley’s sonnet Lift not the\r\n\t\t\t\t\tpainted veil…, makes reference to the romanticism of both artists' work and their\r\n\t\t\t\t\tintertextual inspirations as well as the more abstract concept of life emerging\r\n\t\t\t\t\tfrom darkness. For both artists here, splendour is tied up with materiality and\r\n\t\t\t\t\tperspective. ‘I really think there is a sensuality to the world that we live in, but\r\n\t\t\t\t\tthat we have moved incredibly far from it,’ comments Stone. ‘Materiality through\r\n\t\t\t\t\tsculpture has become a medium for me to reconnect with that sensuality. There\r\n\t\t\t\t\tis a conscious countering with my approach to fluidity and movement that\r\n\t\t\t\t\tresists what we often create for ourselves through the flatness of our phone\r\n\t\t\t\t\tscreens. As much as these screens open space out and connect us, they also\r\n\t\t\t\t\tsimultaneously close it and isolate us.’\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center text_color2\">\r\n\t\t\t\t\tAs such, Stone’s works are highly expressive, employing dualities - such as movement\r\n\t\t\t\t\tand stillness, surrender and resistance, tradition and modernity - to create a palpable\r\n\t\t\t\t\tsense of tension and dynamism. This is perhaps most keenly expressed in only from\r\n\t\t\t\t\tthe ruins will you be free, the next evolution of the artist’s ongoing marble flag series.\r\n\t\t\t\t\tThrough material transformation and the appearance of time suspended, Stone\r\n\t\t\t\t\ttranscends the nationalistic associations of a flag, allowing us to contemplate the object\r\n\t\t\t\t\tanew. Similarly, the artist disrupts the traditional symbolism of a horse. In contrast to\r\n\t\t\t\t\thistoric representations of heroism and masculinity, Stone’s brass and porcelain horses\r\n\t\t\t\t\tare softened and partially concealed by abstracted fabric rendered from clay. The\r\n\t\t\t\t\tillusion of movement combined with a careful use of colour creates narrative intrigue\r\n\t\t\t\t\tand a haunting sense of fragility that also reveals the artist’s critical engagement with\r\n\t\t\t\t\this medium. ‘Historically, sculpture attempted to enshrine heroic icons of power and\r\n\t\t\t\t\tconquest in permanence. Yet, as history has shown, that which is believed permanent,\r\n\t\t\t\t\tbecomes questionable or eventually falls into ruin,’ says Stone.\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center text_blue\">\r\n\t\t\t\t\tIn some paintings, García Mateu provides visual clues, such as arms and\r\n\t\t\t\t\tglimpses of clothing. The Hidden (inspired by Johaan Friedrich Overbeck’s Italy\r\n\t\t\t\t\tand German (Sulamita and Maria)), for example, depicts a moment of intimacy or\r\n\t\t\t\t\tperhaps, condolence as one person’s hands clasps another hand into their lap.\r\n\t\t\t\t\tThe atmosphere of sensuality and warmth is further emphasised through the\r\n\t\t\t\t\tsoft, curved lines of leaves and the harmonious balance of colours. In this way,\r\n\t\t\t\t\t‘the interpretation of the works is focused toward a more poetic, mysterious and\r\n\t\t\t\t\tspiritual sense,’ says García Mateu, registering another commonality between\r\n\t\t\t\t\ther and Stone’s practices as both artists reach towards transcendence.\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center text_blue\">\r\n\t\t\t\t\tThrough their complex and rich materialities both these sculptural and painted\r\n\t\t\t\t\tartworks, invite the viewer to engage in a deeply felt sense of the world that\r\n\t\t\t\t\tcelebrates movement, individuality, texture, ambiguity and romance.\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\r\n\t\t\t\t<div class=\"right text_name\">\r\n\t\t\t\t\t<a href=\"https://kristinhjellegjerde.com/exhibitions/182/overview/\" target=\"_blank\" class=\"galleryLink\">https://kristinhjellegjerde.com/exhibitions/182/overview/</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"right text_otros\">\r\n\t\t\t\t\t2020, August\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t<div class=\"col-md-2 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t\r\n\t\t<div class=\"col-md-6 col-sm-9 col-xs-9\" style=\"margin-top: 4em;\">\r\n\t\t\t<div class=\"center\">\r\n\t\t\t\t<div class=\"center text_blue text_title\" style=\"text-decoration: underline;\">\r\n\t\t\t\t\tLiberarte\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"center text_blue\">\r\n\t\t\t\t\tLa sensualidad en su interpretación de la naturaleza es evidente, con sus formas\r\n\t\t\t\t\tcontoneadas y acariciadas sutilmente, el manejo del color, perfectamente\r\n\t\t\t\t\testudiado en cada cuadro, predominando los tonos azulados sobre otros y el cómo\r\n\t\t\t\t\tintroduce, en algunos, elementos humanos mortecinos e inquietantes que salen de\r\n\t\t\t\t\tla nada y que perturban la psique, pero al final sin saber cómo concluimos en una\r\n\t\t\t\t\tvisión placentera al observar las obras. La visión de esta artista es sin duda\r\n\t\t\t\t\tparticular, magnifica la naturaleza a la que da un carácter, incluso, abstracto y\r\n\t\t\t\t\tsimbólico y con algún punto que recuerda al ecofeminismo, que hace descansar el\r\n\t\t\t\t\trespeto de la naturaleza en lo femenino. Sus cuadros destilan el eterno femenino\r\n\t\t\t\t\tcomo concepto inmutable a través de códigos poco convencionales, que nos\r\n\t\t\t\t\tconvencen y nos hacen desear ver estas obras al natural.\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"right text_name\">\r\n\t\t\t\t\tMarta Torres Vázquez\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"right text_otros\" style=\"margin-bottom: 1.5em;\">\r\n\t\t\t\t\t10 de julio de 2020\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4 col-sm-1 col-xs-1\">\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"position: fixed; z-index: 3; width: 100%;\">\r\n<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #ffffff; color: #000000;\">\r\n  <div id=\"topheader\" class=\"container-fluid\">\r\n    <div class=\"logo logo2 pull-left\">\r\n      <a class=\"nav-item nav-link active\" routerLinkActive=\"active\" routerLink=\"/app-home\"><span class=\"logoGris\">Lorena</span><span class=\"logoGris\">García</span><span class=\"logoIndigo\">Mateu</span></a>\r\n    </div>\r\n\r\n    <div class=\"pull-right\">\r\n      <button class=\"navbar-toggler custom-toggler\" type=\"button\" (click)=\"toggleNavbar();\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    \r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"{ 'show': navbarOpen }\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Portfolio\r\n          </a>\r\n          <div class=\"dropdown-menu\" style=\"width: 15em !important;\" aria-labelledby=\"navbarDropdown1\">\r\n            <a *ngFor=\"let serie of series\" class=\"dropdown-item\" href=\"#\" (click)=\"highlightMenuNav()\" [routerLink]=\"['/app-portfolio', serie.idSerie]\">{{serie.title}}</a>\r\n            <!--<div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\" (click)=\"highlightMenuNav()\" routerLink=\"/app-portfolio\">Vista en exposición</a>-->\r\n          </div>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/app-bio\" (click)=\"unhighlightMenuNav()\" href=\"#\">Bio</a>\r\n        </li>\r\n\r\n        <!--<li class=\"nav-item\" >\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/painting-create\" (click)=\"unhighlightMenuNav()\">Exhibitions</a>\r\n        </li>-->\r\n\r\n        <li class=\"nav-item\" >\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/app-events\" (click)=\"unhighlightMenuNav()\">Events</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" >\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/app-texts\" (click)=\"unhighlightMenuNav()\">Texts</a>\r\n        </li>\r\n\r\n        <!--<li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" (click)=\"unhighlightMenuNav()\">Press</a>\r\n        </li>-->\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/app-contact\" href=\"#\" (click)=\"unhighlightMenuNav()\">Contact</a>\r\n        </li>\r\n\r\n        \r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".input_format {\r\n\tpadding-top: 1.2em;\r\n\tpadding-bottom: 1.2em;\r\n}\r\n\r\n.btn_format {\r\n\tpadding-left: 5em;\r\n\tpadding-right: 5em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFpbnRpbmdzL2FkbWluLXBhaW50aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWludGluZ3MvYWRtaW4tcGFpbnRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRfZm9ybWF0IHtcclxuXHRwYWRkaW5nLXRvcDogMS4yZW07XHJcblx0cGFkZGluZy1ib3R0b206IDEuMmVtO1xyXG59XHJcblxyXG4uYnRuX2Zvcm1hdCB7XHJcblx0cGFkZGluZy1sZWZ0OiA1ZW07XHJcblx0cGFkZGluZy1yaWdodDogNWVtO1xyXG59Il19 */");

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
/* harmony import */ var _services_serie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/serie.service */ "./src/app/services/serie.service.ts");
/* harmony import */ var _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/serie-preview.service */ "./src/app/services/serie-preview.service.ts");
/* harmony import */ var _services_painting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/painting.service */ "./src/app/services/painting.service.ts");
/* harmony import */ var _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/painting-preview.service */ "./src/app/services/painting-preview.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AdminPaintingsComponent = class AdminPaintingsComponent {
    constructor(_route, _router, _serieService, _seriePreviewService, _paintingService, _paintingPreviewService, _userService) {
        this._route = _route;
        this._router = _router;
        this._serieService = _serieService;
        this._seriePreviewService = _seriePreviewService;
        this._paintingService = _paintingService;
        this._paintingPreviewService = _paintingPreviewService;
        this._userService = _userService;
        this.series = [];
        this.paintings = [];
        this.username = '';
        this.password = '';
        this.isAdmin = false;
        this.mostrarError = false;
    }
    ngOnInit() {
        console.log('admin-paintings.component.ts cargado');
        if (this.existeToken()) {
            console.log('admin true');
            this.isAdmin = true;
            //faltaría comprobar que el token se corresponde con el usuario logado
            /*const user = {username: this.username, email: '', password: this.password};
            console.log(user);
            this._userService.verifyTokenUser(this.token).subscribe( data => {
              console.log(data);
              
            });*/
        }
    }
    processSelectedIdSerie(idSerie) {
        this.selectedIdSerie = idSerie;
    }
    processSelectedPainting(painting) {
        this.selectedPainting = painting;
    }
    processSelectedPaintingAux(painting) {
        this.selectedPaintingAux = painting;
    }
    onSubmit() {
        console.log(this.username);
        console.log(this.password);
        if (this.username == 'lgmateu' && this.password == 'mocito_bueno%37') {
            //login
            this.login();
            this.isAdmin = true;
            this.cloneSeriesComplete();
            this.clonePaintingsComplete();
        }
        else {
            this.mostrarError = true;
        }
    }
    onAcceptChanges() {
        console.log('onAcceptChanges');
        //pantalla de confirmación de aceptar cambios
        //remove series y paintings
        //clone SeriesPreview to Series
        //clone PaintingsPreview to Paintings
        console.log('obtengo series');
        this.getSeriesPreview();
        this.getPaintingsPreview();
        setTimeout(() => {
            this.deleteAllSeries();
            this.deleteAllPaintings();
            setTimeout(() => {
                console.log('cloneSeriesPreviewComplete');
                this.cloneSeriesPreviewComplete();
                this.clonePaintingsPreviewComplete();
                setTimeout(() => {
                    console.log('delete series y paintings preview');
                    this.deleteAllSeriesPreview();
                    this.deleteAllPaintingsPreview();
                }, 5000);
            }, 5000);
        }, 5000);
    }
    onCancelChanges() {
        console.log('onCancelChanges');
        //pantalla de confirmación de cancelar cambios
        //delete preview
        //copy series y paintings to preview
        //pintar preview
        this.deleteAllSeriesPreview();
        this.deleteAllPaintingsPreview();
    }
    cloneSeriesComplete() {
        this._serieService.copyAllSeries().subscribe(result => {
            console.log(result);
            console.log('Series copied correctly!');
        }, error => {
            console.log(error);
        });
    }
    cloneSeriesPreviewComplete() {
        this._seriePreviewService.copyAllSeries().subscribe(result => {
            console.log(result);
            console.log('Series copied correctly!');
        }, error => {
            console.log(error);
        });
    }
    clonePaintingsComplete() {
        this._paintingService.copyAllPaintings().subscribe(result => {
            console.log(result);
            console.log('Paintings copied correctly!');
        }, error => {
            console.log(error);
        });
    }
    clonePaintingsPreviewComplete() {
        this._paintingPreviewService.copyAllPaintings().subscribe(result => {
            console.log(result);
            console.log('Paintings copied correctly!');
        }, error => {
            console.log(error);
        });
    }
    deleteAllSeries() {
        this._serieService.deleteAllSeries().subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
    deleteAllSeriesPreview() {
        this._seriePreviewService.deleteAllSeries().subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
    deleteAllPaintings() {
        this._paintingService.deleteAllPaintings().subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
    deleteAllPaintingsPreview() {
        this._paintingPreviewService.deleteAllPaintings().subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
    getSeries() {
        this._serieService.getSeries().subscribe(result => {
            console.log(result);
            this.series = result;
        }, error => {
            console.log(error);
        });
    }
    getSeriesPreview() {
        this._seriePreviewService.getSeries().subscribe(result => {
            this.series = result;
        }, error => {
            console.log(error);
        });
    }
    getPaintings() {
        this._paintingService.getPaintings().subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    getPaintingsPreview() {
        this._paintingPreviewService.getPaintings().subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    login() {
        const user = { username: this.username, email: '', password: this.password };
        this._userService.loginUser(user).subscribe(data => {
            console.log(data);
            this._userService.setToken(data.accessToken);
        });
    }
    existeToken() {
        console.log('existeToken');
        this.token = this._userService.getToken();
        console.log(this.token);
        if (!this.token)
            return false;
        return true;
    }
    onSessionClose() {
        this._userService.deleteToken();
    }
};
AdminPaintingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_serie_service__WEBPACK_IMPORTED_MODULE_2__["SerieService"] },
    { type: _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_3__["SeriePreviewService"] },
    { type: _services_painting_service__WEBPACK_IMPORTED_MODULE_4__["PaintingService"] },
    { type: _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_5__["PaintingPreviewService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
AdminPaintingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-paintings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-paintings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-paintings/admin-paintings.component.html")).default,
        providers: [_services_serie_service__WEBPACK_IMPORTED_MODULE_2__["SerieService"], _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_3__["SeriePreviewService"], _services_painting_service__WEBPACK_IMPORTED_MODULE_4__["PaintingService"], _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_5__["PaintingPreviewService"]],
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
    processSelectedTypeNotification(typeNotification) {
        this.selectedTypeNotification = typeNotification;
    }
    processSelectedIdNotification(idNotification) {
        console.log('process idNotification');
        console.log(idNotification);
        this.selectedIdNotification = idNotification;
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _serie_create_serie_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./serie-create/serie-create.component */ "./src/app/serie-create/serie-create.component.ts");
/* harmony import */ var _serie_list_serie_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serie-list/serie-list.component */ "./src/app/serie-list/serie-list.component.ts");
/* harmony import */ var _admin_paintings_admin_paintings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-paintings/admin-paintings.component */ "./src/app/admin-paintings/admin-paintings.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _texts_texts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./texts/texts.component */ "./src/app/texts/texts.component.ts");
/* harmony import */ var _portfolio_preview_portfolio_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portfolio-preview/portfolio-preview.component */ "./src/app/portfolio-preview/portfolio-preview.component.ts");
















const routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
    { path: 'app-home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'app-portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"] },
    { path: 'app-portfolio/:id', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"] },
    { path: 'app-bio', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__["BioComponent"] },
    { path: 'app-contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'app-events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_13__["EventsComponent"] },
    { path: 'app-texts', component: _texts_texts_component__WEBPACK_IMPORTED_MODULE_14__["TextsComponent"] },
    { path: 'painting-list', component: _painting_list_painting_list_component__WEBPACK_IMPORTED_MODULE_3__["PaintingListComponent"] },
    { path: 'painting-create', component: _painting_create_painting_create_component__WEBPACK_IMPORTED_MODULE_4__["PaintingCreateComponent"] },
    { path: 'serie-create', component: _serie_create_serie_create_component__WEBPACK_IMPORTED_MODULE_9__["SerieCreateComponent"] },
    { path: 'serie-list', component: _serie_list_serie_list_component__WEBPACK_IMPORTED_MODULE_10__["SerieListComponent"] },
    { path: 'admin-paintings', component: _admin_paintings_admin_paintings_component__WEBPACK_IMPORTED_MODULE_11__["AdminPaintingsComponent"] },
    { path: 'admin-paintings/:id', component: _admin_paintings_admin_paintings_component__WEBPACK_IMPORTED_MODULE_11__["AdminPaintingsComponent"] },
    { path: 'admin-users', component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_12__["AdminUsersComponent"] },
    { path: 'app-portfolio-preview', component: _portfolio_preview_portfolio_preview_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioPreviewComponent"] },
    { path: 'app-portfolio-preview/:id', component: _portfolio_preview_portfolio_preview_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioPreviewComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _painting_create_painting_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./painting-create/painting-create.component */ "./src/app/painting-create/painting-create.component.ts");
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
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _notification_fixed_notification_fixed_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./notification-fixed/notification-fixed.component */ "./src/app/notification-fixed/notification-fixed.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _texts_texts_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./texts/texts.component */ "./src/app/texts/texts.component.ts");
/* harmony import */ var _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/serie-preview.service */ "./src/app/services/serie-preview.service.ts");
/* harmony import */ var _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/painting-preview.service */ "./src/app/services/painting-preview.service.ts");
/* harmony import */ var _portfolio_preview_portfolio_preview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./portfolio-preview/portfolio-preview.component */ "./src/app/portfolio-preview/portfolio-preview.component.ts");


































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _painting_create_painting_create_component__WEBPACK_IMPORTED_MODULE_7__["PaintingCreateComponent"],
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
            _notification_fixed_notification_fixed_component__WEBPACK_IMPORTED_MODULE_28__["NotificationFixedComponent"],
            _events_events_component__WEBPACK_IMPORTED_MODULE_29__["EventsComponent"],
            _texts_texts_component__WEBPACK_IMPORTED_MODULE_30__["TextsComponent"],
            _portfolio_preview_portfolio_preview_component__WEBPACK_IMPORTED_MODULE_33__["PortfolioPreviewComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'MyPaintings' }),
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
            _services_notification_service__WEBPACK_IMPORTED_MODULE_27__["NotificationService"],
            _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_31__["SeriePreviewService"],
            _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_32__["PaintingPreviewService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("#titulo_bio {\r\n\tmargin-bottom: 4%;\r\n\tfont-size: 2.4em;\r\n\tcolor: #012e67;\t/*prefiero gris*/\r\n}\r\n\r\n.text_format {\r\n\tfont-size: 1.1em;\r\n}\r\n\r\n#subtitulo_bio {\r\n\tmargin-bottom: 1.5%;\r\n\tmargin-top: 5%;\r\n\tfont-size: 1.6em;\r\n\tcolor: #012e67;\r\n}\r\n\r\n.space_line {\r\n\tmargin-top: 0.6%;\r\n}\r\n\r\n.reset_padding {\r\n\tpadding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixjQUFjLEVBQUUsZ0JBQWdCO0FBQ2pDOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdHVsb19iaW8ge1xyXG5cdG1hcmdpbi1ib3R0b206IDQlO1xyXG5cdGZvbnQtc2l6ZTogMi40ZW07XHJcblx0Y29sb3I6ICMwMTJlNjc7XHQvKnByZWZpZXJvIGdyaXMqL1xyXG59XHJcblxyXG4udGV4dF9mb3JtYXQge1xyXG5cdGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbiNzdWJ0aXR1bG9fYmlvIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjUlO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG5cdGZvbnQtc2l6ZTogMS42ZW07XHJcblx0Y29sb3I6ICMwMTJlNjc7XHJcbn1cclxuXHJcbi5zcGFjZV9saW5lIHtcclxuXHRtYXJnaW4tdG9wOiAwLjYlO1xyXG59XHJcblxyXG4ucmVzZXRfcGFkZGluZyB7XHJcblx0cGFkZGluZzogMHB4O1xyXG59Il19 */");

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


let BioComponent = class BioComponent {
    constructor() {
    }
    ngOnInit() {
        console.log('bio.component.ts cargado');
    }
};
BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html")).default,
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
/* harmony default export */ __webpack_exports__["default"] = (".text_format{\r\n\tmargin-bottom: 4%;\r\n\tfont-size: 1.1em;\r\n}\r\n\r\n.input_format {\r\n\tpadding-top: 1.2em;\r\n\tpadding-bottom: 1.2em;\r\n}\r\n\r\n.btn_format {\r\n\tpadding-left: 5em;\r\n\tpadding-right: 5em;\r\n}\r\n\r\n.reset_padding {\r\n\tpadding: 0px;\r\n}\r\n\r\n.symbol_format {\r\n\tfont-size: 2em;\r\n\tcolor: #012e67;\r\n\tpadding:0.3em;\r\n\tborder: 0.1em solid #012e67;\r\n\tmargin-right: 1%;\r\n}\r\n\r\n.galleryLight {\r\n\tmargin-top: 0.7em;\r\n\tfont-family: 'roboto-light', sans-serif;\r\n}\r\n\r\n.galleryName {\r\n\tfont-size: 1.3em;\r\n\tfont-family: 'roboto-bold', sans-serif;\r\n}\r\n\r\n.galleryLink {\r\n\tcolor:#012e67;\r\n}\r\n\r\n.galleryLink:hover {\r\n\tcolor:#aaa;\r\n}\r\n\r\n.galleryLink:active {\r\n\tcolor:#012e67;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHVDQUF1QztBQUN4Qzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0X2Zvcm1hdHtcclxuXHRtYXJnaW4tYm90dG9tOiA0JTtcclxuXHRmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4uaW5wdXRfZm9ybWF0IHtcclxuXHRwYWRkaW5nLXRvcDogMS4yZW07XHJcblx0cGFkZGluZy1ib3R0b206IDEuMmVtO1xyXG59XHJcblxyXG4uYnRuX2Zvcm1hdCB7XHJcblx0cGFkZGluZy1sZWZ0OiA1ZW07XHJcblx0cGFkZGluZy1yaWdodDogNWVtO1xyXG59XHJcblxyXG4ucmVzZXRfcGFkZGluZyB7XHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc3ltYm9sX2Zvcm1hdCB7XHJcblx0Zm9udC1zaXplOiAyZW07XHJcblx0Y29sb3I6ICMwMTJlNjc7XHJcblx0cGFkZGluZzowLjNlbTtcclxuXHRib3JkZXI6IDAuMWVtIHNvbGlkICMwMTJlNjc7XHJcblx0bWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG5cclxuLmdhbGxlcnlMaWdodCB7XHJcblx0bWFyZ2luLXRvcDogMC43ZW07XHJcblx0Zm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ2FsbGVyeU5hbWUge1xyXG5cdGZvbnQtc2l6ZTogMS4zZW07XHJcblx0Zm9udC1mYW1pbHk6ICdyb2JvdG8tYm9sZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nYWxsZXJ5TGluayB7XHJcblx0Y29sb3I6IzAxMmU2NztcclxufVxyXG5cclxuLmdhbGxlcnlMaW5rOmhvdmVyIHtcclxuXHRjb2xvcjojYWFhO1xyXG59XHJcblxyXG4uZ2FsbGVyeUxpbms6YWN0aXZlIHtcclxuXHRjb2xvcjojMDEyZTY3O1xyXG59Il19 */");

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
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let ContactComponent = class ContactComponent {
    constructor(_route, _router, _userService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._notificationService = _notificationService;
        this.initializeUser();
    }
    ngOnInit() {
        console.log('contact.component.ts cargado');
    }
    initializeUser() {
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '');
    }
    onSubmit() {
        this.createUser();
    }
    createUser() {
        this._userService.createUser(this.user).subscribe(result => {
            console.log('User successfully created!');
            let typeNotification = 2;
            this.sendMailSubscriptionWithNotificationSaved(typeNotification);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Formulario de contacto', 'Se ha subscrito correctamente', 'success');
        }, error => {
            console.log(error);
        });
    }
    sendMailSubscription() {
        this._userService.sendMailAfterSubscription(this.user, this.notification).subscribe(result => {
            this.initializeUser();
            console.log('Mail sent correctly');
        }, error => {
            console.log(error);
        });
    }
    sendMailSubscriptionWithNotificationSaved(type) {
        this._notificationService.getNotificationsByType(type).subscribe(result => {
            console.log(result);
            this.notification = result[0];
            //this.sendMailSubscription();
            //falta cargarla en el control
            this.initializeUser();
        }, error => {
            console.log(error);
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]],
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

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".galleryLink {\r\n\tcolor:#012e67;\r\n}\r\n\r\n.galleryLink:hover {\r\n\tcolor:#aaa;\r\n}\r\n\r\n.galleryLink:active {\r\n\tcolor:#012e67;\r\n}\r\n\r\n.center {\r\n  margin: auto;\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUlBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5TGluayB7XHJcblx0Y29sb3I6IzAxMmU2NztcclxufVxyXG5cclxuLmdhbGxlcnlMaW5rOmhvdmVyIHtcclxuXHRjb2xvcjojYWFhO1xyXG59XHJcblxyXG4uZ2FsbGVyeUxpbms6YWN0aXZlIHtcclxuXHRjb2xvcjojMDEyZTY3O1xyXG59XHJcblxyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")).default]
    })
], EventsComponent);



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
    constructor(idNotification, type, scheduled, eventType, title, localization, openingDate, closingDate, image, deliveryDate, mediaType, link, userList, creationDate, preview) {
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
    constructor(idSerie, title, visible = true, order) {
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
    constructor(username, email, password) {
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
/* harmony default export */ __webpack_exports__["default"] = (".boxCheckboxList {\r\n\tborder: 2px solid black;\r\n\tpadding-top: 1.5em;\r\n\tpadding-bottom: 1.5em;\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uLWNyZWF0ZS9ub3RpZmljYXRpb24tY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2Isa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9uLWNyZWF0ZS9ub3RpZmljYXRpb24tY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94Q2hlY2tib3hMaXN0IHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRwYWRkaW5nLXRvcDogMS41ZW07XHJcblx0cGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xyXG59Il19 */");

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
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/models/notification.model.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");









let NotificationCreateComponent = class NotificationCreateComponent {
    constructor(_route, _router, _userService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._notificationService = _notificationService;
        this.users = [];
        this.myUserList = [];
        this.baseUri = _services_global__WEBPACK_IMPORTED_MODULE_8__["GLOBAL"].baseUri;
        this.selectIdNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectTypeNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_5__["Notification"](0, 0, true, 0, '', '', '', '', '', '', 0, '', [], '', false);
        this.idNotificationAux = -1;
    }
    ngOnInit() {
        console.log('notification-create.component.ts cargado');
    }
    toDateString(date) {
        return (date.getFullYear().toString() + '-'
            + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
            + ("0" + (date.getDate())).slice(-2))
            + 'T' + date.toTimeString().slice(0, 5);
    }
    parseDateString(date) {
        date = date.replace('T', '-');
        var parts = date.split('-');
        var timeParts = parts[3].split(':');
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[0], parts[1] - 1, parts[2], timeParts[0], timeParts[1]); // Note: months are 0-based
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
        this.notification['image'] = this.filesToUpload[0].name;
    }
    cargandoImagen(files) {
        console.log(files);
        this._notificationService.postFileImagen(files[0]).subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    checkValueGlobalCheck(event) {
        for (let myUser of this.myUserList) {
            myUser[0] = event;
        }
    }
    onSubmit(form) {
        console.log('onsubmit');
        this.saveInfoNotification(form);
    }
    fillUsers() {
        this.notification['userList'] = [];
        let i = 0;
        for (let myUser of this.myUserList) {
            if (myUser[0]) {
                this.notification['userList'][i] = myUser[1]['email'];
                i++;
            }
        }
    }
    createNewNotification(form) {
        this._notificationService.getSequenceNumber().subscribe(result => {
            this.notification['idNotification'] = result['seq'];
            console.log('createNewNotification');
            console.log(result);
            console.log(this.notification);
            this.createNotification(form);
        }, error => {
            console.log(error);
        });
    }
    createNotification(form) {
        this._notificationService.createNotification(this.notification).subscribe(result => {
            console.log('Notification successfully created!');
            this.selectIdNotification.emit(result['idNotification']);
            form.resetForm();
        }, error => {
            console.log(error);
        });
    }
    sendPreviewNotification() {
        //correo lorena garcia
        let correoLorena = 'jafadie@gmail.com';
        let nameLorena = 'Lorena';
        let userPreview = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '');
        userPreview['nameUser'] = nameLorena;
        userPreview['email'] = correoLorena;
        this.contactForm(userPreview);
    }
    saveInfoNotification(form) {
        this.notification['creationDate'] = this.toDateString(new Date());
        this.notification['preview'] = false;
        if (this.filesToUpload) {
            this.cargandoImagen(this.filesToUpload);
            this.notification['image'] = this.filesToUpload[0].name;
        }
        this.fillUsers();
        if (this.edition == true)
            this.updateNotification(form);
        else {
            this.createNewNotification(form);
            this.typeNotificationAux = undefined;
            this.idNotificationAux = undefined;
        }
    }
    sendNotification(form) {
        this.saveInfoNotification(form);
        for (let myUser of this.myUserList) {
            if (myUser[0] == true) {
                this.contactForm(myUser[1]);
            }
        }
        //Swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    }
    contactForm(user) {
        console.log('contact form subscription');
        if (this.notification['type'] == 1 || this.notification['type'] == 4) {
            this._userService.sendMailNotifyEvents(user, this.notification).subscribe(() => {
                console.log('Mail sent correctly: sendMailNotifyEvents');
            });
        }
        else if (this.notification['type'] == 5) {
            this._userService.sendMailNotifyGeneralEvents(user, this.notification).subscribe(() => {
                console.log('Mail sent correctly: sendMailNotifyGeneralEvents');
            });
        }
        else if (this.notification['type'] == 2) {
            this._userService.sendMailAfterSubscription(user, this.notification).subscribe(() => {
                console.log('Mail sent correctly: sendMailAfterSubscription');
            });
        }
        else if (this.notification['type'] == 3) {
            this._userService.sendMailAfterCommunication(user, this.notification).subscribe(() => {
                console.log('Mail sent correctly: sendMailAfterCommunication');
            });
        }
    }
    getUsers() {
        this._userService.getUsers().subscribe(result => {
            console.log(result);
            this.users = result;
            let usersNotification = this.notification['userList'];
            console.log(usersNotification);
            let myUser;
            let allSelected = true;
            let exist = false;
            let i = 0;
            for (let user of this.users) {
                if (usersNotification) {
                    exist = false;
                    for (let userNotif of usersNotification) {
                        if (user.email == userNotif) {
                            myUser = [true, user];
                            this.myUserList[i] = myUser;
                            exist = true;
                            i++;
                            break;
                        }
                    }
                    if (!exist) {
                        myUser = [false, user];
                        this.myUserList[i] = myUser;
                        i++;
                        allSelected = false;
                    }
                }
                else {
                    myUser = [false, user];
                    this.myUserList[i] = myUser;
                    i++;
                    allSelected = false;
                }
            }
            this.myGlobalCheck = true;
            if (!allSelected)
                this.myGlobalCheck = false;
            //this.checkValueGlobalCheck(this.myGlobalCheck);		
        }, error => {
            console.log(error);
        });
    }
    initializeUsers() {
        this.getUsers();
    }
    cleanNotification() {
        this.notification['_id'] = undefined;
        this.notification['idNotification'] = undefined;
        this.notification['scheduled'] = false;
        this.notification['eventType'] = 0;
        this.notification['title'] = undefined;
        this.notification['localization'] = undefined;
        this.notification['openingDate'] = undefined;
        this.notification['closingDate'] = undefined;
        this.notification['image'] = undefined;
        this.notification['deliveryDate'] = undefined;
        this.notification['mediaType'] = 0;
        this.notification['link'] = undefined;
        this.notification['userList'] = undefined;
        this.notification['creationDate'] = undefined;
        this.notification['preview'] = false;
    }
    initializeNotification() {
        this.cleanNotification();
        this.edition = false;
        if (this.notification['type'] == 1 || this.notification['type'] == 4 || this.notification['type'] == 5) {
            this.initializeUsers();
            this.notification['scheduled'] = false;
            this.notification['eventType'] = 0;
            this.notification['mediaType'] = 0;
        }
        else {
            this.initializeCreateNotifications();
        }
        this.typeNotificationAux = this.notification['type'];
        this.idNotificationAux = -1;
        this.buttonName = 'Save notification';
        this.initializeDropDownLists(this.notification['type']);
    }
    onChangeNotificationType() {
        this.initializeNotification();
        this.selectIdNotification.emit(-2);
        this.selectTypeNotification.emit(-2);
    }
    initializeDropDownLists(typeNotification) {
        if (this.notification['type'] == 4) {
            this.fillEventTypesNuevaExpo();
        }
        else if (this.notification['type'] == 1) {
            this.fillEventTypesArticulosPrensa();
            this.fillMediaTypes();
        }
    }
    initializeCreateNotifications() {
        this.notification['deliveryDate'] = undefined;
        this.notification['userList'] = undefined;
        this.notification['scheduled'] = undefined;
        this.notification['eventType'] = undefined;
        this.myUserList = [];
        this.users = [];
        this.notification['mediaType'] = undefined;
        this.getNotificationByType(this.notification['type']);
    }
    getNotificationByType(type) {
        console.log('getNotificationByType');
        this._notificationService.getNotificationsByType(type).subscribe(result => {
            console.log(result);
            this.notification = result[0];
        }, error => {
            console.log(error);
        });
    }
    onPreviewSelectedNotification(typeNotification) {
        this.notification['preview'] = true;
        //send mail vista previa
        this.sendPreviewNotification();
    }
    ngOnChanges(changes) {
        this.edition = false;
        if (changes['typeNotification'] && (changes['typeNotification'].currentValue == 2 || changes['typeNotification'].currentValue == 3)) {
            if (changes['typeNotification'] && changes['typeNotification'].previousValue != changes['typeNotification'].currentValue) {
                this.notification['type'] = changes['typeNotification'].currentValue;
                this.typeNotificationAux = this.notification['type'];
                this.idNotificationAux = undefined;
                this.edition = true;
                this.buttonName = 'Save notification';
                this.initializeCreateNotifications();
            }
        }
        else {
            if (changes['idNotification']) {
                if (changes['idNotification'].currentValue == -2) {
                    this.initializeNotification();
                }
                else if (changes['idNotification'].previousValue == -2 && changes['idNotification'].currentValue == -1) {
                    //no hago nada
                }
                else if ((changes['typeNotification'] && changes['typeNotification'].currentValue == -1 &&
                    changes['typeNotification'].previousValue == -2) ||
                    (changes['idNotification'].previousValue != changes['idNotification'].currentValue)) {
                    if (this.notification['type']) {
                        this.idNotificationAux = changes['idNotification'].currentValue;
                        this.edition = true;
                        this.buttonName = 'Save notification';
                        this.getNotificationById(changes['idNotification'].currentValue);
                    }
                }
            }
        }
    }
    updateNotification(form) {
        this._notificationService.updateNotification(this.notification['idNotification'], this.notification).subscribe(result => {
            console.log('Notification successfully updated!');
            this.selectIdNotification.emit(result['idNotification']);
            //mostrar mensaje guardado
        }, error => {
            console.log(error);
        });
    }
    onSendNotification(form) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            text: "Va a enviar la notificación a sus clientes, ¿desea continuar?",
            showCancelButton: true,
            confirmButtonColor: '#012e67',
            cancelButtonColor: '#9B9B9B',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.sendNotification(form);
            }
        });
    }
    onOptionEventSelected(eventType) {
        this.notification['eventType'] = eventType;
    }
    onOptionMediaSelected(mediaType) {
        this.notification['mediaType'] = mediaType;
    }
    checkValueScheduled(event) {
        this.notification['deliveryDate'] = this.toDateString(new Date());
    }
    getNotificationById(idNotification) {
        console.log('getNotificationById');
        this._notificationService.getNotification(idNotification).subscribe(result => {
            console.log(result);
            this.notification = result[0];
            this.typeNotificationAux = this.notification['type'];
            if (this.notification['type'] == 4) {
                this.notification['title'] = result[0]['title'];
                let iniDate = this.parseDateString(result[0]['openingDate']);
                let endDate = this.parseDateString(result[0]['closingDate']);
                this.notification['openingDate'] = this.toDateString(iniDate);
                this.notification['closingDate'] = this.toDateString(endDate);
            }
            if (this.notification['scheduled']) {
                let schedDate = this.parseDateString(result[0]['deliveryDate']);
                this.notification['deliveryDate'] = this.toDateString(schedDate);
            }
            this.notification['preview'] = true;
            this.initializeDropDownLists(this.notification['type']);
            this.initializeUsers();
        }, error => {
            console.log(error);
        });
    }
};
NotificationCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotificationCreateComponent.prototype, "typeNotification", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotificationCreateComponent.prototype, "idNotification", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotificationCreateComponent.prototype, "selectIdNotification", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotificationCreateComponent.prototype, "selectTypeNotification", void 0);
NotificationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-create/notification-create.component.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-create.component.css */ "./src/app/notification-create/notification-create.component.css")).default]
    })
], NotificationCreateComponent);



/***/ }),

/***/ "./src/app/notification-fixed/notification-fixed.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/notification-fixed/notification-fixed.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi1maXhlZC9ub3RpZmljYXRpb24tZml4ZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/notification-fixed/notification-fixed.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/notification-fixed/notification-fixed.component.ts ***!
  \********************************************************************/
/*! exports provided: NotificationFixedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationFixedComponent", function() { return NotificationFixedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/models/notification.model.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");







let NotificationFixedComponent = class NotificationFixedComponent {
    constructor(_route, _router, _notificationService, _userService) {
        this._route = _route;
        this._router = _router;
        this._notificationService = _notificationService;
        this._userService = _userService;
        this.selectTypeNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectIdNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_5__["Notification"](0, 0, true, 0, '', '', '', '', '', '', 0, '', [], '', false);
    }
    ngOnInit() {
        console.log('notification-sent-fixed.component.ts cargado');
    }
    onSelectTypeNotification(typeNotification) {
        this.selectTypeNotification.emit(typeNotification);
        this.selectIdNotification.emit(-2);
    }
    onPreviewSelectedTypeNotification(typeNotification) {
        this.getNotificationByType(typeNotification);
    }
    getNotificationByType(type) {
        console.log('getNotificationByType');
        console.log(type);
        this._notificationService.getNotificationsByType(type).subscribe(result => {
            console.log(result);
            this.notification = result[0];
            //send mail vista previa
            this.sendPreviewSubscriptionNotification();
        }, error => {
            console.log(error);
        });
    }
    sendPreviewSubscriptionNotification() {
        //correo lorena garcia
        let correoLorena = 'jafadie@gmail.com';
        let nameLorena = 'Lorena';
        let userPreview = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]('', '', '');
        userPreview['nameUser'] = nameLorena;
        userPreview['email'] = correoLorena;
        this.contactFormSubscription(userPreview);
    }
    contactFormSubscription(user) {
        console.log('contact form subscription');
        console.log(this.notification['image']);
        console.log(user);
        this._userService.sendMailAfterSubscription(user, this.notification).subscribe(() => {
            console.log('Mail sent correctly');
        });
    }
};
NotificationFixedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotificationFixedComponent.prototype, "typeNotification", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotificationFixedComponent.prototype, "selectTypeNotification", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotificationFixedComponent.prototype, "selectIdNotification", void 0);
NotificationFixedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-fixed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-fixed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-fixed/notification-fixed.component.html")).default,
        providers: [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-fixed.component.css */ "./src/app/notification-fixed/notification-fixed.component.css")).default]
    })
], NotificationFixedComponent);



/***/ }),

/***/ "./src/app/notification-scheduled-list/notification-scheduled-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/notification-scheduled-list/notification-scheduled-list.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notificationsStyle {\r\n\tbackground-color: #f2f2f2;\r\n\ttext-transform:none;\r\n\tfont-family: 'roboto-medium', sans-serif;\r\n\tline-height: 1.2em;\r\n\tfont-size: 1em;\r\n\tfont-style:normal;\r\n\tborder-radius: 0.6em;\t\r\n\tborder: 0.2em solid #242424;\r\n\tpadding-top: 0.6em;\r\n\tpadding-bottom: 0.6em;\r\n\tbox-shadow: 0.2em 0.3em;\r\n}\r\n\r\n.rowNotificationsStyle {\r\n\theight: 3em;\r\n\tmargin-top: 0.5em;\r\n}\r\n\r\n.titleNotifications {\r\n\tfont-family: 'roboto-bold', sans-serif;\r\n\tcolor: #012e67;\r\n\tmargin-left: 0.9em;\r\n\tfont-size: 1.6em;\r\n\ttext-shadow: 0.05em 0.05em;\r\n}\r\n\r\n.miTooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  /*border-bottom: 1px dotted black;*/\r\n  font-family: 'roboto-bold', sans-serif;\r\n  color: #012e67;\r\n  cursor: pointer;\r\n}\r\n\r\n.miTooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 20em;\r\n  background-color: #012e67;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 0.3em;\r\n  padding: 0.4em 0;\r\n\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.miTooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\n.linkStyle {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.linkStyle:visited {\r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uLXNjaGVkdWxlZC1saXN0L25vdGlmaWNhdGlvbi1zY2hlZHVsZWQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQix3Q0FBd0M7Q0FDeEMsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsMEJBQTBCO0FBQzNCOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCOztFQUVoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi1zY2hlZHVsZWQtbGlzdC9ub3RpZmljYXRpb24tc2NoZWR1bGVkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb25zU3R5bGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcblx0dGV4dC10cmFuc2Zvcm06bm9uZTtcclxuXHRmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuXHRmb250LXNpemU6IDFlbTtcclxuXHRmb250LXN0eWxlOm5vcm1hbDtcclxuXHRib3JkZXItcmFkaXVzOiAwLjZlbTtcdFxyXG5cdGJvcmRlcjogMC4yZW0gc29saWQgIzI0MjQyNDtcclxuXHRwYWRkaW5nLXRvcDogMC42ZW07XHJcblx0cGFkZGluZy1ib3R0b206IDAuNmVtO1xyXG5cdGJveC1zaGFkb3c6IDAuMmVtIDAuM2VtO1xyXG59XHJcblxyXG4ucm93Tm90aWZpY2F0aW9uc1N0eWxlIHtcclxuXHRoZWlnaHQ6IDNlbTtcclxuXHRtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG5cclxuLnRpdGxlTm90aWZpY2F0aW9ucyB7XHJcblx0Zm9udC1mYW1pbHk6ICdyb2JvdG8tYm9sZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICMwMTJlNjc7XHJcblx0bWFyZ2luLWxlZnQ6IDAuOWVtO1xyXG5cdGZvbnQtc2l6ZTogMS42ZW07XHJcblx0dGV4dC1zaGFkb3c6IDAuMDVlbSAwLjA1ZW07XHJcbn1cclxuXHJcblxyXG5cclxuLm1pVG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvKmJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7Ki9cclxuICBmb250LWZhbWlseTogJ3JvYm90by1ib2xkJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzAxMmU2NztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5taVRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDIwZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMmU2NztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgcGFkZGluZzogMC40ZW0gMDtcclxuXHJcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1pVG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5saW5rU3R5bGUge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpbmtTdHlsZTp2aXNpdGVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */");

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/models/notification.model.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let NotificationScheduledListComponent = class NotificationScheduledListComponent {
    constructor(_route, _router, _notificationService, _userService) {
        this._route = _route;
        this._router = _router;
        this._notificationService = _notificationService;
        this._userService = _userService;
        this.notifications = [];
        this.selectIdNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectTypeNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_5__["Notification"](0, 0, true, 0, '', '', '', '', '', '', 0, '', [], '', false);
    }
    ngOnInit() {
        console.log('notification-scheduled-list.component.ts cargado');
        this.getScheduledNotifications();
        this.fillNotificationTypes();
        this.fillEventTypesNuevaExpo();
        this.fillEventTypesArticulosPrensa();
        this.fillMediaTypes();
    }
    getScheduledNotifications() {
        this._notificationService.getScheduledNotifications().subscribe(result => {
            console.log(result);
            this.notifications = result;
        }, error => {
            console.log(error);
        });
    }
    fillNotificationTypes() {
        this.notificationTypes = new Map();
        this.notificationTypes.set(4, 'Nueva exposición');
        this.notificationTypes.set(1, 'Artículos prensa');
    }
    fillEventTypesNuevaExpo() {
        this.eventTypes0 = [
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
        this.eventTypes1 = [
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
    onPreviewSelectedIdNotification(idNotification) {
        this.getNotificationById(idNotification);
    }
    onDeleteSelectedIdNotification(idNotification) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            text: "¿Desea eliminar la notificación?",
            showCancelButton: true,
            confirmButtonColor: '#012e67',
            cancelButtonColor: '#9B9B9B',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.onDeleteNotification(idNotification);
            }
        });
    }
    onDeleteNotification(idNotification) {
        this._notificationService.deleteNotification(idNotification).subscribe(result => {
            console.log(result);
            //TODO preguntar con jQuery si estas seguro que quieres eliminar
            this.getScheduledNotifications();
        }, error => {
            console.log(error);
        });
    }
    getNotificationById(idNotification) {
        console.log('getNotificationById');
        this._notificationService.getNotification(idNotification).subscribe(result => {
            console.log(result);
            this.notification = result[0];
            //send mail vista previa
            this.sendPreviewNotification();
        }, error => {
            console.log(error);
        });
    }
    sendPreviewNotification() {
        //correo lorena garcia
        let correoLorena = 'jafadie@gmail.com';
        let nameLorena = 'Lorena';
        let userPreview = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]('', '', '');
        userPreview['nameUser'] = nameLorena;
        userPreview['email'] = correoLorena;
        this.contactForm(userPreview);
    }
    contactForm(user) {
        console.log('contact form notification');
        this.notification['preview'] = true;
        if (this.notification['type'] == 1 || this.notification['type'] == 4) {
            this._userService.sendMailNotifyEvents(user, this.notification).subscribe(() => {
                console.log('Mail sent correctly: sendMailNotifyEvents');
            });
        }
        else if (this.notification['type'] == 5) {
            this._userService.sendMailNotifyGeneralEvents(user, this.notification).subscribe(() => {
                console.log('Mail sent correctly: sendMailNotifyGeneralEvents');
            });
        }
    }
    onSelectIdNotification(idNotification) {
        console.log('idNotification');
        console.log(idNotification);
        this.selectIdNotification.emit(idNotification);
        this.selectTypeNotification.emit(-1);
    }
    ngOnChanges(changes) {
        console.log('ngOnChanges scheduled');
        console.log(changes['idNotification']);
        //si se ha seleccionado una serie diferente
        if (changes['idNotification'] && changes['idNotification'].previousValue != changes['idNotification'].currentValue) {
            this.getScheduledNotifications();
        }
    }
};
NotificationScheduledListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotificationScheduledListComponent.prototype, "idNotification", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotificationScheduledListComponent.prototype, "idNotification2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotificationScheduledListComponent.prototype, "selectIdNotification", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotificationScheduledListComponent.prototype, "selectTypeNotification", void 0);
NotificationScheduledListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-scheduled-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-scheduled-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-scheduled-list/notification-scheduled-list.component.html")).default,
        providers: [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-scheduled-list.component.css */ "./src/app/notification-scheduled-list/notification-scheduled-list.component.css")).default]
    })
], NotificationScheduledListComponent);



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
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");






let PaintingCreateComponent = class PaintingCreateComponent {
    constructor(_route, _router, _paintingService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this.baseUri = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri;
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
        this.painting['available'] = true;
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
        //console.log('ngOnChanges painting create');
        //console.log(changes['paintingSelected']);
        //console.log(changes['idSerie']);
        if (changes['paintingSelected'] && changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue) {
            this.is_visible = true;
            if (changes['paintingSelected'].currentValue != -1 && changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue) {
                this.is_visible = false;
            }
            else if (changes['paintingSelected'] && changes['paintingSelected'].currentValue == -3) {
                this.is_visible = false;
            }
            // si se ha hecho clic en Anyadir nuevo painting
            // llega un -1 de la invocación de ese metodo
            // que es distinto del -2 que se marca cuando se ha hecho savePainting
            if (changes['paintingSelected'].currentValue != this.valorReseteoPainting) {
                this.painting['available'] = true;
                this.painting['visible'] = true;
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

/***/ "./src/app/painting-list/painting-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/painting-list/painting-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.example-list li {\r\n  display: table-cell;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  min-width: 690px;\r\n  max-width: 900px;\r\n  padding: 0;\r\n  margin: 0;\r\n  align-items: center;\r\n  justify-content: left;\r\n}\r\n\r\n.my_box {\r\n  height: 21em;\r\n  border: solid 1px #ccc;\r\n  font-size: 10pt;\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  cursor: move;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n  0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n  0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.box_vertical {\r\n  width: 17em;\r\n}\r\n\r\n.box_horizontal {\r\n  width: 34em;\r\n}\r\n\r\n.box_cuadrado {\r\n  width: 25.5em;\r\n}\r\n\r\n.example-box:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  opacity: .6;\r\n}\r\n\r\n.cdk-drop-list {\r\n  display: flex;\r\n  /*padding-right: 10px;\r\n  padding-bottom: 10px;*/\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: .3;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\nbutton {\r\n  margin-right: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnRpbmctbGlzdC9wYWludGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdURBQXVEO0VBQ3ZEOztpQ0FFK0I7QUFDakM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBS0E7RUFDRTs7b0NBRWtDO0VBQ2xDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYjt3QkFDc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOztvQ0FFa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWludGluZy1saXN0L3BhaW50aW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0IGxpIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1pbi13aWR0aDogNjkwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxufVxyXG5cclxuLm15X2JveCB7XHJcbiAgaGVpZ2h0OiAyMWVtO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmJveF92ZXJ0aWNhbCB7XHJcbiAgd2lkdGg6IDE3ZW07XHJcbn1cclxuXHJcbi5ib3hfaG9yaXpvbnRhbCB7XHJcbiAgd2lkdGg6IDM0ZW07XHJcbn1cclxuXHJcbi5ib3hfY3VhZHJhZG8ge1xyXG4gIHdpZHRoOiAyNS41ZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgb3BhY2l0eTogLjY7XHJcbn1cclxuXHJcbi5jZGstZHJvcC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDsqL1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59Il19 */");

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
/* harmony import */ var _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/painting-preview.service */ "./src/app/services/painting-preview.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");








let PaintingListComponent = class PaintingListComponent {
    constructor(_route, _router, _paintingService, _paintingPreviewService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this._paintingPreviewService = _paintingPreviewService;
        this.baseUri = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri;
        this.selectPainting = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectIdSerie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        this.valorReseteoPainting = -2;
    }
    getPaintings() {
        this._paintingService.getPaintings().subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    getPaintingsPreview() {
        this._paintingPreviewService.getPaintings().subscribe(result => {
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    getPaintingsByIdSerie(idSerie) {
        this.isVisible = false;
        if (idSerie != -1) {
            jQuery("#myPaintings").css('display', 'inline');
            this.isVisible = true;
        }
        this._paintingPreviewService.getPaintingsByIdSerie(idSerie).subscribe(result => {
            console.log(result);
            this.paintings = result;
        }, error => {
            console.log(error);
        });
    }
    onDeletePainting(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            text: "¿Desea eliminar el cuadro?",
            showCancelButton: true,
            confirmButtonColor: '#012e67',
            cancelButtonColor: '#9B9B9B',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.deletePainting(id);
            }
        });
    }
    deletePainting(id) {
        this._paintingPreviewService.deletePainting(id).subscribe(result => {
            console.log(result);
            //TODO preguntar con jQuery si estas seguro que quieres eliminar
            this.getPaintingsByIdSerie(this.idSerie);
        }, error => {
            console.log(error);
        });
    }
    ngOnChanges(changes) {
        //console.log('ngOnChanges paintinglist');
        //console.log(changes['paintingSelected']);
        //console.log(this.idSerie);
        /*if (!changes['paintingSelected']) {
          console.log('ueueueuueueueueueueueueueueueue');
            console.log(changes['paintingSelected']);
            console.log(this.idSerie);
  
            console.log(this.paintings[0]);
            this.isVisible = false;
        } else {*/
        //si se ha seleccionado una serie diferente
        if (changes['idSerie'] && changes['idSerie'].currentValue /*&& changes['idSerie'].previousValue != changes['idSerie'].currentValue*/) {
            jQuery("#myPaintings").css('display', 'inline');
            this.isVisible = true;
            this.getPaintingsByIdSerie(changes['idSerie'].currentValue);
        }
        // si se ha guardado el painting y el selectedPainting = -2 (forzado desde el save)
        else if (changes['paintingSelected']
            && (changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue)
            && changes['paintingSelected'].currentValue == this.valorReseteoPainting) {
            this.getPaintingsByIdSerie(this.idSerie);
        }
        else if (changes['paintingSelected']
            && (changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue)
            && changes['paintingSelected'].currentValue == -3) {
            this.isVisible = true;
            this.getPaintingsByIdSerie(this.idSerie);
        }
        /*}*/
    }
    onSelectPainting(painting) {
        jQuery("#myPaintings").css('display', 'none');
        this.isVisible = false;
        console.log('onSelectPainting');
        console.log(painting);
        this.selectPainting.emit(painting);
        //falta resetear idSerie
        //if (painting == -1)
        //this.selectIdSerie.emit(-1);
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
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.paintings, this.sourceIndex, this.targetIndex);
            this.paintings[this.sourceIndex]['order'] = this.sourceIndex;
            this.paintings[this.targetIndex]['order'] = this.targetIndex;
            this.updateOrderPainting(this.paintings[this.sourceIndex]['idPainting'], this.paintings[this.sourceIndex]);
            this.updateOrderPainting(this.paintings[this.targetIndex]['idPainting'], this.paintings[this.targetIndex]);
        }
    }
    updateOrderPainting(idPainting, painting) {
        this._paintingPreviewService.updateOrderPainting(idPainting, painting).subscribe(result => {
            console.log('Order updated successfully');
        }, error => {
            console.log(error);
        });
    }
    setPaintingClasses(painting) {
        let classes = {
            my_box: true,
            box_vertical: painting.width < painting.height,
            box_horizontal: painting.width > painting.height,
            box_cuadrado: painting.width == painting.height
        };
        return classes;
    }
};
PaintingListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"] },
    { type: _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_4__["PaintingPreviewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDropListGroup"], { static: false })
], PaintingListComponent.prototype, "listGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDropList"], { static: false })
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaintingListComponent.prototype, "selectIdSerie", void 0);
PaintingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-painting-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./painting-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/painting-list/painting-list.component.html")).default,
        providers: [_services_painting_service__WEBPACK_IMPORTED_MODULE_3__["PaintingService"], _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_4__["PaintingPreviewService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./painting-list.component.css */ "./src/app/painting-list/painting-list.component.css")).default]
    })
], PaintingListComponent);

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
;


/***/ }),

/***/ "./src/app/portfolio-preview/portfolio-preview.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/portfolio-preview/portfolio-preview.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img_painting {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    margin-bottom: 1.2em;\r\n    border: 1em solid white;\r\n}\r\n/*\r\n@media (max-width:3000px){\r\n\t.img_vertical {\r\n    width: 30%;\r\n\t}\r\n\r\n\t.img_horizontal {\r\n\t    width: 60%;\r\n\t}\r\n}*/\r\n/*\r\n@media (min-width:820px){\r\n\t.img_vertical {\r\n  \t\tmax-width:33%;\r\n  \t\t\r\n  \t\tmax-height:39em;\r\n  \t\twidth: auto;\r\n  \t\theight: auto;\r\n\t}\r\n\r\n\t.img_horizontal {\r\n\t    max-width: 66%;\r\n\t    \r\n\t    width: auto;\r\n  \t\theight: auto;\r\n\t}\r\n}*/\r\n.img_vertical {\r\n\twidth: 30%;\r\n}\r\n.img_horizontal {\r\n    width: 60%;\r\n}\r\n.img_cuadrado {\r\n\twidth: 45%;\r\n}\r\n.header_painting {\r\n\tborder: 0.5em solid white;\r\n\ttext-align: left;\r\n\tfont-size: 2.1em;\r\n\tfont-family: \"Lato\", sans-serif;\r\n}\r\n.caption_painting {\r\n\tmargin-top:-12%;\r\n\ttext-align:left;\r\n\tmargin-left:6%;\r\n\twidth:20%;\r\n\twhite-space:normal;\r\n\tfont-size: 1.3em;\r\n\tfont-family: \"Lato\", sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLXByZXZpZXcvcG9ydGZvbGlvLXByZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjtBQUNBOzs7Ozs7Ozs7RUFTRTtBQUVGOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBRUY7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBSUE7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQiwrQkFBK0I7QUFDaEM7QUFFQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0NBQ2YsY0FBYztDQUNkLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLCtCQUErQjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1wcmV2aWV3L3BvcnRmb2xpby1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX3BhaW50aW5nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICAgIGJvcmRlcjogMWVtIHNvbGlkIHdoaXRlO1xyXG59XHJcbi8qXHJcbkBtZWRpYSAobWF4LXdpZHRoOjMwMDBweCl7XHJcblx0LmltZ192ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG5cdH1cclxuXHJcblx0LmltZ19ob3Jpem9udGFsIHtcclxuXHQgICAgd2lkdGg6IDYwJTtcclxuXHR9XHJcbn0qL1xyXG5cclxuLypcclxuQG1lZGlhIChtaW4td2lkdGg6ODIwcHgpe1xyXG5cdC5pbWdfdmVydGljYWwge1xyXG4gIFx0XHRtYXgtd2lkdGg6MzMlO1xyXG4gIFx0XHRcclxuICBcdFx0bWF4LWhlaWdodDozOWVtO1xyXG4gIFx0XHR3aWR0aDogYXV0bztcclxuICBcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmltZ19ob3Jpem9udGFsIHtcclxuXHQgICAgbWF4LXdpZHRoOiA2NiU7XHJcblx0ICAgIFxyXG5cdCAgICB3aWR0aDogYXV0bztcclxuICBcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxufSovXHJcblxyXG4uaW1nX3ZlcnRpY2FsIHtcclxuXHR3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uaW1nX2hvcml6b250YWwge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmltZ19jdWFkcmFkbyB7XHJcblx0d2lkdGg6IDQ1JTtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGVyX3BhaW50aW5nIHtcclxuXHRib3JkZXI6IDAuNWVtIHNvbGlkIHdoaXRlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Zm9udC1zaXplOiAyLjFlbTtcclxuXHRmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXB0aW9uX3BhaW50aW5nIHtcclxuXHRtYXJnaW4tdG9wOi0xMiU7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdG1hcmdpbi1sZWZ0OjYlO1xyXG5cdHdpZHRoOjIwJTtcclxuXHR3aGl0ZS1zcGFjZTpub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxLjNlbTtcclxuXHRmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/portfolio-preview/portfolio-preview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-preview/portfolio-preview.component.ts ***!
  \******************************************************************/
/*! exports provided: PortfolioPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPreviewComponent", function() { return PortfolioPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/painting-preview.service */ "./src/app/services/painting-preview.service.ts");
/* harmony import */ var _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/serie-preview.service */ "./src/app/services/serie-preview.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");






let PortfolioPreviewComponent = class PortfolioPreviewComponent {
    constructor(_route, _router, _paintingPreviewService, _seriePreviewService) {
        this._route = _route;
        this._router = _router;
        this._paintingPreviewService = _paintingPreviewService;
        this._seriePreviewService = _seriePreviewService;
        this.paintings = [];
        this.clickExecuted = true; // initialize it to true for the first run
        this.baseUri = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri;
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
        //this.loadScript('../../assets/js/jquery.mousewheel.min.js');
        this.loadScript('../../assets/js/lg-thumbnail.min.js');
        this.loadScript('../../assets/js/lg-fullscreen.min.js');
        this.loadScript('../../assets/js/lg-zoom.min.js');
        this.loadScript('../../assets/js/lg-autoplay.min.js');
        this.loadScript('../../assets/js/lg-hash.min.js');
        this.loadScript('../../assets/js/lg-pager.min.js');
        this.loadScript('../../assets/js/lg-share.min.js');
        this.loadScript('../../assets/js/lg-video.min.js');
    }
    getPaintingsByIdSerie(idSerie) {
        this._paintingPreviewService.getPaintingsByIdSerie(idSerie).subscribe(result => {
            console.log(result);
            this.paintings = result;
            this.clickExecuted = true;
        }, error => {
            console.log(error);
        });
    }
    getSerieById(idSerie) {
        this._seriePreviewService.getSerie(idSerie).subscribe(result => {
            console.log(result);
            this.serie = result[0];
        }, error => {
            console.log(error);
        });
    }
    onClickImage() {
        this.loadLibraries();
        //esperar un tiempo hasta que se carguen
        if (this.clickExecuted) {
            // Do all the things with the stuff
            this.clickExecuted = false; // set it to false until you need to trigger again
            (function ($) {
                $(document).ready(function () {
                    var $customEvents = $('#lightgallery');
                    console.log($customEvents.data('lightGallery'));
                    //para cuando se cambia de serie necesito la carga de la libreria
                    if ($customEvents.data('lightGallery') != undefined) {
                        $customEvents.data('lightGallery').destroy(true);
                    }
                    $customEvents.lightGallery({
                        mode: 'lg-slide',
                        speed: 600,
                        height: '100%',
                        width: '100%',
                        showThumbByDefault: false,
                        thumbnail: false,
                        download: false,
                        zoom: true,
                        loop: false,
                        escKey: true,
                        counter: false,
                        autoplayControls: false,
                        fullScreen: false,
                        share: false,
                        html: false,
                        appendSubHtmlTo: '.lg-html',
                        subHtmlSelectorRelative: true
                    });
                    $customEvents.on('onBeforeSlide.lg', function (event) {
                        $('.lg-item').css('margin-top', '5em');
                        $('.lg-item').css('max-width', '100%');
                        $('.lg-item').css('max-height', '100%');
                        $('.lg-item').css('height', '90%');
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
                });
            })(jQuery);
        }
    }
    setPaintingClasses(painting) {
        let classes = {
            img_vertical: painting.width < painting.height,
            img_horizontal: painting.width > painting.height,
            img_cuadrado: painting.width == painting.height,
            img_painting: true
        };
        return classes;
    }
};
PortfolioPreviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_painting_preview_service__WEBPACK_IMPORTED_MODULE_3__["PaintingPreviewService"] },
    { type: _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_4__["SeriePreviewService"] }
];
PortfolioPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-preview/portfolio-preview.component.html")).default,
        providers: [_services_painting_preview_service__WEBPACK_IMPORTED_MODULE_3__["PaintingPreviewService"], _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_4__["SeriePreviewService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio-preview.component.css */ "./src/app/portfolio-preview/portfolio-preview.component.css")).default]
    })
], PortfolioPreviewComponent);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img_painting {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    margin-bottom: 1.2em;\r\n    border: 1em solid white;\r\n}\r\n/*\r\n@media (max-width:3000px){\r\n\t.img_vertical {\r\n    width: 30%;\r\n\t}\r\n\r\n\t.img_horizontal {\r\n\t    width: 60%;\r\n\t}\r\n}*/\r\n/*\r\n@media (min-width:820px){\r\n\t.img_vertical {\r\n  \t\tmax-width:33%;\r\n  \t\t\r\n  \t\tmax-height:39em;\r\n  \t\twidth: auto;\r\n  \t\theight: auto;\r\n\t}\r\n\r\n\t.img_horizontal {\r\n\t    max-width: 66%;\r\n\t    \r\n\t    width: auto;\r\n  \t\theight: auto;\r\n\t}\r\n}*/\r\n.img_vertical {\r\n\twidth: 30%;\r\n}\r\n.img_horizontal {\r\n    width: 60%;\r\n}\r\n.img_cuadrado {\r\n\twidth: 45%;\r\n}\r\n.header_painting {\r\n\tborder: 0.5em solid white;\r\n\ttext-align: left;\r\n\tfont-size: 2.1em;\r\n\tfont-family: \"Lato\", sans-serif;\r\n}\r\n.caption_painting {\r\n\tmargin-top:-12%;\r\n\ttext-align:left;\r\n\tmargin-left:6%;\r\n\twidth:20%;\r\n\twhite-space:normal;\r\n\tfont-size: 1.3em;\r\n\tfont-family: \"Lato\", sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCO0FBQ0E7Ozs7Ozs7OztFQVNFO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFFRjtDQUNDLFVBQVU7QUFDWDtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFJQTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLCtCQUErQjtBQUNoQztBQUVBO0NBQ0MsZUFBZTtDQUNmLGVBQWU7Q0FDZixjQUFjO0NBQ2QsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsK0JBQStCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ19wYWludGluZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbiAgICBib3JkZXI6IDFlbSBzb2xpZCB3aGl0ZTtcclxufVxyXG4vKlxyXG5AbWVkaWEgKG1heC13aWR0aDozMDAwcHgpe1xyXG5cdC5pbWdfdmVydGljYWwge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuXHR9XHJcblxyXG5cdC5pbWdfaG9yaXpvbnRhbCB7XHJcblx0ICAgIHdpZHRoOiA2MCU7XHJcblx0fVxyXG59Ki9cclxuXHJcbi8qXHJcbkBtZWRpYSAobWluLXdpZHRoOjgyMHB4KXtcclxuXHQuaW1nX3ZlcnRpY2FsIHtcclxuICBcdFx0bWF4LXdpZHRoOjMzJTtcclxuICBcdFx0XHJcbiAgXHRcdG1heC1oZWlnaHQ6MzllbTtcclxuICBcdFx0d2lkdGg6IGF1dG87XHJcbiAgXHRcdGhlaWdodDogYXV0bztcclxuXHR9XHJcblxyXG5cdC5pbWdfaG9yaXpvbnRhbCB7XHJcblx0ICAgIG1heC13aWR0aDogNjYlO1xyXG5cdCAgICBcclxuXHQgICAgd2lkdGg6IGF1dG87XHJcbiAgXHRcdGhlaWdodDogYXV0bztcclxuXHR9XHJcbn0qL1xyXG5cclxuLmltZ192ZXJ0aWNhbCB7XHJcblx0d2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmltZ19ob3Jpem9udGFsIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5pbWdfY3VhZHJhZG8ge1xyXG5cdHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcblxyXG5cclxuLmhlYWRlcl9wYWludGluZyB7XHJcblx0Ym9yZGVyOiAwLjVlbSBzb2xpZCB3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogMi4xZW07XHJcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FwdGlvbl9wYWludGluZyB7XHJcblx0bWFyZ2luLXRvcDotMTIlO1xyXG5cdHRleHQtYWxpZ246bGVmdDtcclxuXHRtYXJnaW4tbGVmdDo2JTtcclxuXHR3aWR0aDoyMCU7XHJcblx0d2hpdGUtc3BhY2U6bm9ybWFsO1xyXG5cdGZvbnQtc2l6ZTogMS4zZW07XHJcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59Il19 */");

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
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");






let PortfolioComponent = class PortfolioComponent {
    constructor(_route, _router, _paintingService, _serieService) {
        this._route = _route;
        this._router = _router;
        this._paintingService = _paintingService;
        this._serieService = _serieService;
        this.paintings = [];
        this.clickExecuted = true; // initialize it to true for the first run
        this.baseUri = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri;
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
        //this.loadScript('../../assets/js/jquery.mousewheel.min.js');
        this.loadScript('../../assets/js/lg-thumbnail.min.js');
        this.loadScript('../../assets/js/lg-fullscreen.min.js');
        this.loadScript('../../assets/js/lg-zoom.min.js');
        this.loadScript('../../assets/js/lg-autoplay.min.js');
        this.loadScript('../../assets/js/lg-hash.min.js');
        this.loadScript('../../assets/js/lg-pager.min.js');
        this.loadScript('../../assets/js/lg-share.min.js');
        this.loadScript('../../assets/js/lg-video.min.js');
    }
    getPaintingsByIdSerie(idSerie) {
        this._paintingService.getPaintingsByIdSerie(idSerie).subscribe(result => {
            console.log(result);
            this.paintings = result;
            this.clickExecuted = true;
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
        //esperar un tiempo hasta que se carguen
        if (this.clickExecuted) {
            // Do all the things with the stuff
            this.clickExecuted = false; // set it to false until you need to trigger again
            (function ($) {
                $(document).ready(function () {
                    var $customEvents = $('#lightgallery');
                    console.log($customEvents.data('lightGallery'));
                    //para cuando se cambia de serie necesito la carga de la libreria
                    if ($customEvents.data('lightGallery') != undefined) {
                        $customEvents.data('lightGallery').destroy(true);
                    }
                    $customEvents.lightGallery({
                        mode: 'lg-slide',
                        speed: 600,
                        height: '100%',
                        width: '100%',
                        showThumbByDefault: false,
                        thumbnail: false,
                        download: false,
                        zoom: true,
                        loop: false,
                        escKey: true,
                        counter: false,
                        autoplayControls: false,
                        fullScreen: false,
                        share: false,
                        html: false,
                        appendSubHtmlTo: '.lg-html',
                        subHtmlSelectorRelative: true
                    });
                    $customEvents.on('onBeforeSlide.lg', function (event) {
                        $('.lg-item').css('margin-top', '5em');
                        $('.lg-item').css('max-width', '100%');
                        $('.lg-item').css('max-height', '100%');
                        $('.lg-item').css('height', '90%');
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
                });
            })(jQuery);
        }
    }
    setPaintingClasses(painting) {
        let classes = {
            img_vertical: painting.width < painting.height,
            img_horizontal: painting.width > painting.height,
            img_cuadrado: painting.width == painting.height,
            img_painting: true
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
        this.series = [];
        this.selectIdSerie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initializeSerie();
    }
    ngOnInit() {
        console.log('serie-create.component.ts cargado');
    }
    initializeSerie() {
        this.serie = new _models_serie_model__WEBPACK_IMPORTED_MODULE_4__["Serie"](0, '', true, 0);
    }
    onSubmit() {
        this.createNewOrderSerie();
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
            //this.selectIdSerie.emit(result['idSerie']);
            this.selectIdSerie.emit(-3);
        }, error => {
            console.log(error);
        });
    }
    getOrderLastSerie() {
        this._serieService.getSeries().subscribe(result => {
            console.log(result);
            this.series = result;
            this.serie['order'] = 0;
            if (this.series.length > 0) {
                this.lastOrder = this.series[this.series.length - 1]['order'];
                //llamar a create con el order actualizado (order + 1)
                this.serie['order'] = this.lastOrder + 1;
            }
            this.createNewSerie();
        }, error => {
            console.log(error);
        });
    }
    createNewOrderSerie() {
        this.getOrderLastSerie();
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
/* harmony import */ var _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/serie-preview.service */ "./src/app/services/serie-preview.service.ts");
/* harmony import */ var _models_serie_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/serie.model */ "./src/app/models/serie.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let SerieListComponent = class SerieListComponent {
    constructor(_route, _router, _serieService, _seriePreviewService) {
        this._route = _route;
        this._router = _router;
        this._serieService = _serieService;
        this._seriePreviewService = _seriePreviewService;
        this.series = [];
        this.selectIdSerie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectPainting = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('serie-list.component.ts cargado');
        this.initialize();
    }
    initialize() {
        this.serieEdition = new _models_serie_model__WEBPACK_IMPORTED_MODULE_5__["Serie"](0, '', true, 0);
        this.serieEdition['idSerie'] = 0;
        this.serieEdition['title'] = '';
        this.serieEdition['visible'] = true;
        this.serieEdition['order'] = 0;
    }
    getSeries() {
        this._serieService.getSeries().subscribe(result => {
            console.log(result);
            this.series = result;
        }, error => {
            console.log(error);
        });
    }
    getSeriesPreview() {
        this._seriePreviewService.getSeries().subscribe(result => {
            this.series = result;
        }, error => {
            console.log(error);
        });
    }
    onSelectIdSerie(idSerie) {
        this.selectionIdSerie(idSerie);
    }
    onUnSelectIdSerie() {
        this.selectionIdSerie(-1);
    }
    selectionIdSerie(idSerie) {
        this.selectIdSerie.emit(idSerie);
        //al cambiar de serie reseteo el valor de paintingSelected
        this.selectPainting.emit(-3);
    }
    onDeleteSerie(idSerie) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            text: "¿Desea eliminar la serie?",
            showCancelButton: true,
            confirmButtonColor: '#012e67',
            cancelButtonColor: '#9B9B9B',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.deleteSerie(idSerie);
            }
        });
    }
    deleteSerie(idSerie) {
        this._serieService.deleteSerie(idSerie).subscribe(result => {
            console.log(result);
            //TODO preguntar con jQuery si estas seguro que quieres eliminar
            this.getSeries();
        }, error => {
            console.log(error);
        });
    }
    ngOnChanges(changes) {
        if (changes['isAdmin'] && changes['isAdmin'].firstChange) {
            setTimeout(() => {
                this.getSeriesPreview();
            }, 1000);
        }
        else 
        //si se ha seleccionado una serie diferente
        if (changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue) {
            this.getSeriesPreview();
            for (var serieAux of this.series) {
                if (serieAux['idSerie'] == changes['idSerie'].currentValue) {
                    this.serieEdition['idSerie'] = changes['idSerie'].currentValue;
                    this.serieEdition['title'] = serieAux['title'];
                    this.serieEdition['visible'] = serieAux['visible'];
                    this.serieEdition['order'] = serieAux['order'];
                }
            }
        }
    }
    onSaveIdSerie() {
        //this.selectIdSerie.emit(idSerie);
        console.log('onSaveIdSerie');
        console.log(this.idSerie);
        console.log(this.serieEdition['idSerie']);
        console.log(this.serieEdition['title']);
        this.updateSerieWithSubmit();
        //al cambiar de serie reseteo el valor de paintingSelected
        //this.selectPainting.emit(-3);
    }
    updateSerieWithSubmit() {
        this._serieService.updateSerie(this.serieEdition['idSerie'], this.serieEdition).subscribe(result => {
            console.log('Serie successfully updated!');
            //this.onSelectIdSerie(this.serieEdition['idSerie']);
            this.onSelectIdSerie(-1);
            //comprobar si sirve para algo cuando le doy al botón guardar
        }, error => {
            console.log(error);
        });
    }
    updateSerie() {
        this._serieService.updateSerie(this.serieEdition['idSerie'], this.serieEdition).subscribe(result => {
            console.log('Serie successfully updated!');
            //this.onSelectIdSerie(this.serieEdition['idSerie']);
            //this.onSelectIdSerie(-1);
            //comprobar si sirve para algo cuando le doy al botón guardar
        }, error => {
            console.log(error);
        });
    }
    onOrderSerieUp(serie) {
        //buscar serie order superior para restar 1 a order
        //sumar 1 a order de esta serie
        let serieSubirOrden = 0;
        let serieSuperior = 0;
        for (var serieAux of this.series) {
            if (serieAux['idSerie'] == serie['idSerie']) {
                serieSubirOrden = serieAux;
                break;
            }
            serieSuperior = serieAux;
        }
        this.serieEdition = serieSuperior;
        this.serieEdition['order'] = serieSuperior['order'] + 1;
        this.updateSerie();
        this.serieEdition = serieSubirOrden;
        this.serieEdition['order'] = serieSubirOrden['order'] - 1;
        this.updateSerie();
        this.initialize();
    }
    onOrderSerieDown(serie) {
        //buscar serie inferior para sumar 1 a order
        //restar 1 a order de esta serie
        let serieBajarOrden = 0;
        let serieInferior = 0;
        let encontrada = false;
        for (var serieAux of this.series) {
            if (encontrada) {
                serieInferior = serieAux;
                break;
            }
            if (serieAux['idSerie'] == serie['idSerie']) {
                serieBajarOrden = serieAux;
                encontrada = true;
                continue;
            }
        }
        this.serieEdition = serieInferior;
        this.serieEdition['order'] = serieInferior['order'] - 1;
        this.updateSerie();
        this.serieEdition = serieBajarOrden;
        this.serieEdition['order'] = serieBajarOrden['order'] + 1;
        this.updateSerie();
        this.initialize();
    }
};
SerieListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"] },
    { type: _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_4__["SeriePreviewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SerieListComponent.prototype, "idSerie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SerieListComponent.prototype, "isAdmin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SerieListComponent.prototype, "selectIdSerie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SerieListComponent.prototype, "selectPainting", void 0);
SerieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-serie-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./serie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/serie-list/serie-list.component.html")).default,
        providers: [_services_serie_service__WEBPACK_IMPORTED_MODULE_3__["SerieService"], _services_serie_preview_service__WEBPACK_IMPORTED_MODULE_4__["SeriePreviewService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./serie-list.component.css */ "./src/app/serie-list/serie-list.component.css")).default]
    })
], SerieListComponent);



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var GLOBAL = {
    //baseUri: 'https://api-paintings.herokuapp.com',
    baseUri: 'http://localhost:4000',
    header_color: '#E03137'
};


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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");






let NotificationService = class NotificationService {
    constructor(http) {
        this.http = http;
        this.baseUri = _global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri + '/api/notification';
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

/***/ "./src/app/services/painting-preview.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/painting-preview.service.ts ***!
  \******************************************************/
/*! exports provided: PaintingPreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingPreviewService", function() { return PaintingPreviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");






let PaintingPreviewService = class PaintingPreviewService {
    constructor(http) {
        this.http = http;
        this.baseUri = _global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri + '/api/paintingPreview';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create paintingPreview
    createPainting(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all paintingsPreview
    getPaintings() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get paintingsPreview of a seriePreview
    getPaintingsByIdSerie(idSerie) {
        let url = `${this.baseUri}/readSerie/${idSerie}`;
        return this.http.get(url);
    }
    // Get paintingPreview
    getPainting(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get order of the last paintingPreview in a seriePreview
    getOrderPainting(idSerie) {
        let url = `${this.baseUri}/readOrder/${idSerie}`;
        return this.http.get(url);
    }
    // Update order of a paintingPreview
    updateOrderPainting(id, data) {
        let url = `${this.baseUri}/updateOrder/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getSequenceNumber() {
        let url = `${this.baseUri}/sequencePaintings`;
        return this.http.get(url);
    }
    // Update paintingPreview
    updatePainting(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    //Copy PaintingPreview to Painting
    copyPainting(id, data) {
        let url = `${this.baseUri}/paintingCopy/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete paintingPreview
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
    deleteAllPaintings() {
        return this.getPaintings()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(painting => this.deletePainting(painting['idPainting'])))));
    }
    copyAllPaintings() {
        return this.getPaintings()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(painting => this.copyPainting(painting['idPainting'], painting)))));
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
PaintingPreviewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PaintingPreviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaintingPreviewService);



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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");






let PaintingService = class PaintingService {
    constructor(http) {
        this.http = http;
        this.baseUri = _global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri + '/api/painting';
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
    //Copy Painting to PaintingPreview
    copyPainting(id, data) {
        let url = `${this.baseUri}/paintingCopy/${id}`;
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
    deleteAllPaintings() {
        return this.getPaintings()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(painting => this.deletePainting(painting['idPainting'])))));
    }
    copyAllPaintings() {
        return this.getPaintings()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(painting => this.copyPainting(painting['idPainting'], painting)))));
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

/***/ "./src/app/services/serie-preview.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/serie-preview.service.ts ***!
  \***************************************************/
/*! exports provided: SeriePreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriePreviewService", function() { return SeriePreviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");






let SeriePreviewService = class SeriePreviewService {
    constructor(http) {
        this.http = http;
        this.baseUri = _global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri + '/api/seriePreview';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create seriePreview
    createSerie(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all seriesPreview
    getSeries() {
        console.log('Get all seriesPreview');
        return this.http.get(`${this.baseUri}`);
    }
    // Get seriePreview
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
    // Update seriePreview
    updateSerie(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    //Copy SeriePreview to Serie
    copySerie(id, data) {
        let url = `${this.baseUri}/serieCopy/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete SeriePreview
    deleteSerie(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    deleteAllSeries() {
        return this.getSeries()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(serie => this.deleteSerie(serie['idSerie'])))));
    }
    copyAllSeries() {
        return this.getSeries()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(serie => this.copySerie(serie['idSerie'], serie)))));
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
SeriePreviewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
SeriePreviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SeriePreviewService);



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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");






let SerieService = class SerieService {
    constructor(http) {
        this.http = http;
        this.baseUri = _global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].baseUri + '/api/serie';
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
    //Copy Serie to SeriePreview
    copySerie(id, data) {
        let url = `${this.baseUri}/serieCopy/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete Serie
    deleteSerie(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    deleteAllSeries() {
        return this.getSeries()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(serie => this.deleteSerie(serie['idSerie'])))));
    }
    copyAllSeries() {
        return this.getSeries()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((result) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(serie => this.copySerie(serie['idSerie'], serie)))));
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");







let UserService = class UserService {
    constructor(http, cookies) {
        this.http = http;
        this.cookies = cookies;
        this.baseUri = _global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].baseUri + '/api/user';
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
    sendMailAfterSubscription(user, data) {
        let url = `${this.baseUri}/sendMailAfterSubscription/${user.email}`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // 2: Send mail after communication
    sendMailAfterCommunication(user, data) {
        let url = `${this.baseUri}/sendMailAfterCommunication/${user.email}`;
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
    sendMailNotifyEvents(user, data) {
        let url = `${this.baseUri}/sendMailNotifyEvents/${user.email}`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // 5: Send mail notify events
    sendMailNotifyGeneralEvents(user, data) {
        let url = `${this.baseUri}/sendMailNotifyGeneralEvents/${user.email}`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    loginUser(data) {
        let url = `${this.baseUri}/login`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    verifyTokenUser(data) {
        let url = `${this.baseUri}/verify`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    setToken(token) {
        this.cookies.set("token", token);
    }
    getToken() {
        return this.cookies.get("token");
    }
    deleteToken() {
        this.cookies.delete("token");
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/texts/texts.component.css":
/*!*******************************************!*\
  !*** ./src/app/texts/texts.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n  line-height : 2em;\r\n}\r\n\r\n\r\n.text_color {\r\n\tfont-size: 1.6em; \r\n\tfont-family: 'roboto-light', sans-serif;\r\n\tmargin-top: 4em;\r\n}\r\n\r\n\r\n.text_name {\r\n\tmargin-top: 3em; \r\n\tfont-weight: bold; \r\n\tcolor:#012e67;\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n\r\n.text_otros {\r\n\tfont-size: 1.2em; \r\n\tfont-family: 'roboto-light', sans-serif;\r\n}\r\n\r\n\r\n.text_blue {\r\n\tfont-size: 1.6em; \r\n\tfont-family: 'roboto-light', sans-serif;\r\n\tmargin-top: 1.7em;\r\n\tcolor:#012e67;\r\n}\r\n\r\n\r\n.text_title {\r\n\tfont-size: 2.6em;\r\n\tfont-family: 'roboto-medium', sans-serif;\r\n}\r\n\r\n\r\n.text_color2 {\r\n\tfont-size: 1.6em; \r\n\tfont-family: 'roboto-light', sans-serif;\r\n\tmargin-top: 1.7em;\r\n}\r\n\r\n\r\n.galleryLink {\r\n\tcolor:#012e67;\r\n}\r\n\r\n\r\n.galleryLink:hover {\r\n\tcolor:#aaa;\r\n}\r\n\r\n\r\n.galleryLink:active {\r\n\tcolor:#012e67;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dHMvdGV4dHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COzs7QUFHQTtDQUNDLGdCQUFnQjtDQUNoQix1Q0FBdUM7Q0FDdkMsZUFBZTtBQUNoQjs7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7OztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHVDQUF1QztBQUN4Qzs7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQixhQUFhO0FBQ2Q7OztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHdDQUF3QztBQUN6Qzs7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtBQUNsQjs7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7OztBQUVBO0NBQ0MsVUFBVTtBQUNYOzs7QUFFQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RleHRzL3RleHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuICBsaW5lLWhlaWdodCA6IDJlbTtcclxufVxyXG5cclxuXHJcbi50ZXh0X2NvbG9yIHtcclxuXHRmb250LXNpemU6IDEuNmVtOyBcclxuXHRmb250LWZhbWlseTogJ3JvYm90by1saWdodCcsIHNhbnMtc2VyaWY7XHJcblx0bWFyZ2luLXRvcDogNGVtO1xyXG59XHJcblxyXG4udGV4dF9uYW1lIHtcclxuXHRtYXJnaW4tdG9wOiAzZW07IFxyXG5cdGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuXHRjb2xvcjojMDEyZTY3O1xyXG5cdGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi50ZXh0X290cm9zIHtcclxuXHRmb250LXNpemU6IDEuMmVtOyBcclxuXHRmb250LWZhbWlseTogJ3JvYm90by1saWdodCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50ZXh0X2JsdWUge1xyXG5cdGZvbnQtc2l6ZTogMS42ZW07IFxyXG5cdGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0Jywgc2Fucy1zZXJpZjtcclxuXHRtYXJnaW4tdG9wOiAxLjdlbTtcclxuXHRjb2xvcjojMDEyZTY3O1xyXG59XHJcblxyXG4udGV4dF90aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyLjZlbTtcclxuXHRmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGV4dF9jb2xvcjIge1xyXG5cdGZvbnQtc2l6ZTogMS42ZW07IFxyXG5cdGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0Jywgc2Fucy1zZXJpZjtcclxuXHRtYXJnaW4tdG9wOiAxLjdlbTtcclxufVxyXG5cclxuLmdhbGxlcnlMaW5rIHtcclxuXHRjb2xvcjojMDEyZTY3O1xyXG59XHJcblxyXG4uZ2FsbGVyeUxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiNhYWE7XHJcbn1cclxuXHJcbi5nYWxsZXJ5TGluazphY3RpdmUge1xyXG5cdGNvbG9yOiMwMTJlNjc7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/texts/texts.component.ts":
/*!******************************************!*\
  !*** ./src/app/texts/texts.component.ts ***!
  \******************************************/
/*! exports provided: TextsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextsComponent", function() { return TextsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextsComponent = class TextsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TextsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-texts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./texts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/texts/texts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./texts.component.css */ "./src/app/texts/texts.component.css")).default]
    })
], TextsComponent);



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
/* harmony default export */ __webpack_exports__["default"] = ("/* __________ Menu __________ */\r\n.navbar-collapse {\r\n  margin-right: 10%;\r\n}\r\n.navbarSupportedContent .nav-item {\r\n  font-size: 1.1em;\r\n}\r\n.navbar-nav a {\r\n  font-size: 110%;\r\n  margin-right: 1.5em;\r\n  color: #012e67;\r\n}\r\n.navbar-nav a:hover,\r\n.navbar-nav li > a.active {\r\n  font-size: 1.2em;\r\n  /*color:#000;*/\r\n  /*font-weight:600;*/\r\n  /*text-decoration: underline;*/\r\n}\r\n.dropdown-menu {\r\n  font-size: 110%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjtBQUMvQjtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBfX19fX19fX19fIE1lbnUgX19fX19fX19fXyAqL1xyXG4ubmF2YmFyLWNvbGxhcHNlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLm5hdmJhclN1cHBvcnRlZENvbnRlbnQgLm5hdi1pdGVtIHtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiBhIHtcclxuICBmb250LXNpemU6IDExMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcclxuICBjb2xvcjogIzAxMmU2NztcclxufVxyXG5cclxuLm5hdmJhci1uYXYgYTpob3ZlcixcclxuLm5hdmJhci1uYXYgbGkgPiBhLmFjdGl2ZSB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICAvKmNvbG9yOiMwMDA7Ki9cclxuICAvKmZvbnQtd2VpZ2h0OjYwMDsqL1xyXG4gIC8qdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ki9cclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxufVxyXG4iXX0= */");

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
        this.navbarOpen = false;
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
        this.navbarOpen = false;
        (function ($) {
            $(document).ready(function () {
                $('#navbarDropdown1').addClass('active');
            });
        })(jQuery);
    }
    unhighlightMenuNav() {
        this.navbarOpen = false;
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
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
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
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


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
//# sourceMappingURL=main.js.map