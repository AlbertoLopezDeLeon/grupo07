webpackJsonp([4],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaCursoPageModule", function() { return EntregaCursoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrega_curso__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntregaCursoPageModule = /** @class */ (function () {
    function EntregaCursoPageModule() {
    }
    EntregaCursoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrega_curso__["a" /* EntregaCursoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrega_curso__["a" /* EntregaCursoPage */]),
            ],
        })
    ], EntregaCursoPageModule);
    return EntregaCursoPageModule;
}());

//# sourceMappingURL=entrega-curso.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregaCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_realizar_entrega_realizar_entrega__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_incidencia_incidencia__ = __webpack_require__(106);
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
 * Generated class for the EntregaCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntregaCursoPage = /** @class */ (function () {
    function EntregaCursoPage(navCtrl, navParams, app, dbFirebase, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.repartidor = navParams.get('repartidor');
    }
    EntregaCursoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntregaCursoPage');
    };
    EntregaCursoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getEntregas().subscribe(function (listaEntregas) { _this.listaEntregas = listaEntregas; });
    };
    EntregaCursoPage.prototype.getRepartidorName = function (idEntrega) {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.listaEntregas[i].id === idEntrega) {
                if (this.listaEntregas[i].repartidor == null) {
                    return "no asignado";
                }
                else {
                    return this.listaEntregas[i].repartidor.nombre;
                }
            }
        }
    };
    EntregaCursoPage.prototype.enCurso = function (idEntrega) {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.listaEntregas[i].id === idEntrega) {
                return this.listaEntregas[i].enCurso;
            }
        }
    };
    EntregaCursoPage.prototype.goToLoginPage = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    EntregaCursoPage.prototype.realizarEntrega = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_realizar_entrega_realizar_entrega__["a" /* RealizarEntregaPage */], { repartidor: this.repartidor });
    };
    EntregaCursoPage.prototype.incidencia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_incidencia_incidencia__["a" /* IncidenciaPage */], { repartidor: this.repartidor });
    };
    EntregaCursoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrega-curso',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\entrega-curso\entrega-curso.html"*/'<!--\n\n  Generated template for the EntregaCursoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n	<ion-list *ngFor="let entrega of listaEntregas">\n\n		<ion-item *ngIf="getRepartidorName(entrega.id) == repartidor && enCurso(entrega.id)" class="infoEntrega" text-wrap>\n\n			<p>Paquete {{entrega.id}}</p>\n\n			<p>Dirección: {{entrega.direccion }}</p>\n\n			<p>Receptor: {{entrega.nombreReceptor}}    Nº de Bultos: {{ entrega.numeroBultos }}</p>   \n\n			<p>Franja Horaria: {{entrega.franjaHoraria}}</p>\n\n		</ion-item>\n\n	</ion-list>\n\n	    <p></p>\n\n        <img style="width:100%" align="center" src="assets/imgs/MapaRepartidor.png" width="100" height="300" />\n\n	<ion-list>\n\n		<ion-item class="botones">\n\n			<button ion-button (click)="realizarEntrega()">Realizar entrega</button>\n\n			<button ion-button (click)="incidencia()">Incidencia</button>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\entrega-curso\entrega-curso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], EntregaCursoPage);
    return EntregaCursoPage;
}());

//# sourceMappingURL=entrega-curso.js.map

/***/ })

});
//# sourceMappingURL=4.js.map