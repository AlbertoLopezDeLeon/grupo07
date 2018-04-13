webpackJsonp([8],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepartidorPageModule", function() { return RepartidorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repartidor__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RepartidorPageModule = /** @class */ (function () {
    function RepartidorPageModule() {
    }
    RepartidorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__repartidor__["a" /* RepartidorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__repartidor__["a" /* RepartidorPage */]),
            ]
        })
    ], RepartidorPageModule);
    return RepartidorPageModule;
}());

//# sourceMappingURL=repartidor.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepartidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
 * Generated class for the RepartidorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepartidorPage = /** @class */ (function () {
    function RepartidorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.listaPaquetesRoot = 'ListaPaquetesPage';
        this.entregaCursoRoot = 'EntregaCursoPage';
    }
    RepartidorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repartidor',template:/*ion-inline-start:"C:\Users\Alberto\Documents\GitHub\grupo07\MyApp\src\pages\repartidor\repartidor.html"*/'<ion-tabs>\n    <ion-tab [root]="listaPaquetesRoot" tabTitle="Lista paquetes" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="entregaCursoRoot" tabTitle="Entrega curso" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Alberto\Documents\GitHub\grupo07\MyApp\src\pages\repartidor\repartidor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RepartidorPage);
    return RepartidorPage;
}());

//# sourceMappingURL=repartidor.js.map

/***/ })

});
//# sourceMappingURL=8.js.map