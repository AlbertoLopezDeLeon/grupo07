webpackJsonp([1],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaRepartidoresPageModule", function() { return ListaRepartidoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_repartidores__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaRepartidoresPageModule = /** @class */ (function () {
    function ListaRepartidoresPageModule() {
    }
    ListaRepartidoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_repartidores__["a" /* ListaRepartidoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_repartidores__["a" /* ListaRepartidoresPage */]),
            ],
        })
    ], ListaRepartidoresPageModule);
    return ListaRepartidoresPageModule;
}());

//# sourceMappingURL=lista-repartidores.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaRepartidoresPage; });
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
 * Generated class for the ListaRepartidoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaRepartidoresPage = /** @class */ (function () {
    function ListaRepartidoresPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    ListaRepartidoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaRepartidoresPage');
    };
    ListaRepartidoresPage.prototype.goToLoginPage = function () {
        //this.navCtrl.setRoot(LoginPage);
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    ListaRepartidoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-repartidores',template:/*ion-inline-start:"C:\Users\criss\Desktop\Trabajos-UC3M\grupo07\Proyecto\src\pages\lista-repartidores\lista-repartidores.html"*/'<!--\n\n  Generated template for the ListaRepartidoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\criss\Desktop\Trabajos-UC3M\grupo07\Proyecto\src\pages\lista-repartidores\lista-repartidores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ListaRepartidoresPage);
    return ListaRepartidoresPage;
}());

//# sourceMappingURL=lista-repartidores.js.map

/***/ })

});
//# sourceMappingURL=1.js.map