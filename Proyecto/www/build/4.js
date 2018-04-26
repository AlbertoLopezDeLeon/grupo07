webpackJsonp([4],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionRepartosPageModule", function() { return AsignacionRepartosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacion_repartos__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AsignacionRepartosPageModule = /** @class */ (function () {
    function AsignacionRepartosPageModule() {
    }
    AsignacionRepartosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacion_repartos__["a" /* AsignacionRepartosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacion_repartos__["a" /* AsignacionRepartosPage */]),
            ],
        })
    ], AsignacionRepartosPageModule);
    return AsignacionRepartosPageModule;
}());

//# sourceMappingURL=asignacion-repartos.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionRepartosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AsignacionRepartosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AsignacionRepartosPage = /** @class */ (function () {
    function AsignacionRepartosPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    AsignacionRepartosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsignacionRepartosPage');
    };
    AsignacionRepartosPage.prototype.goToLoginPage = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    AsignacionRepartosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asignacion-repartos',template:/*ion-inline-start:"C:\Users\criss\Desktop\Trabajos-UC3M\grupo07\Proyecto\src\pages\asignacion-repartos\asignacion-repartos.html"*/'<!--\n\n  Generated template for the AsignacionRepartosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n	\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\criss\Desktop\Trabajos-UC3M\grupo07\Proyecto\src\pages\asignacion-repartos\asignacion-repartos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _c || Object])
    ], AsignacionRepartosPage);
    return AsignacionRepartosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=asignacion-repartos.js.map

/***/ })

});
//# sourceMappingURL=4.js.map