webpackJsonp([1],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerIncidenciasPageModule", function() { return VerIncidenciasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_incidencias__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerIncidenciasPageModule = /** @class */ (function () {
    function VerIncidenciasPageModule() {
    }
    VerIncidenciasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ver_incidencias__["a" /* VerIncidenciasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ver_incidencias__["a" /* VerIncidenciasPage */]),
            ],
        })
    ], VerIncidenciasPageModule);
    return VerIncidenciasPageModule;
}());

//# sourceMappingURL=ver-incidencias.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerIncidenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(33);
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
 * Generated class for the VerIncidenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerIncidenciasPage = /** @class */ (function () {
    function VerIncidenciasPage(navCtrl, navParams, app, dbFirebase, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
    }
    VerIncidenciasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerIncidenciasPage');
    };
    VerIncidenciasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getEntregas().subscribe(function (listaEntregas) { _this.listaEntregas = listaEntregas; });
    };
    VerIncidenciasPage.prototype.goToLoginPage = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    VerIncidenciasPage.prototype.asignacionAutomaticaMensaje = function () {
        var toast = this.toastCtrl.create({
            message: 'Funcionalidad no implementada',
            duration: 3000
        });
        toast.present();
    };
    VerIncidenciasPage.prototype.getRepartidorName = function (idEntrega) {
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
    VerIncidenciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-incidencias',template:/*ion-inline-start:"d:\ESTUDIO\tercero 2do cuatrimestre\diseño sistemas interactivos\github\grupo07\Proyecto\src\pages\ver-incidencias\ver-incidencias.html"*/'<!--\n\n  Generated template for the VerIncidenciasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n	<ion-list *ngFor="let entrega of listaEntregas">\n\n		<ion-label *ngIf="entrega.incidencia != \'SinIncidencia\'">\n\n			<ion-item class="infoEntrega">\n\n						<p><b><font color="black">Paquete: {{entrega.id}} </font></b></p> \n\n						<p><font color="black">Repartidor:</font> {{getRepartidorName(entrega.id)}}\n\n						<button ion-button round outline color="dark" item-end icon-left (click)="asignacionAutomaticaMensaje()">\n\n						<ion-icon name="call"></ion-icon>\n\n						</button></p>\n\n						<p><font color="black">Tipo incidencia:</font> {{entrega.incidencia}}</p>\n\n						<p><font color="black">Cliente:</font> {{entrega.nombreReceptor}}\n\n						<button ion-button round outline color="dark" item-end icon-left (click)="asignacionAutomaticaMensaje()">\n\n						<ion-icon name="call"></ion-icon>\n\n						</button>\n\n						<button ion-button round outline color="dark" item-end icon-left (click)="asignacionAutomaticaMensaje()">\n\n						<ion-icon name="mail"></ion-icon>\n\n						</button></p>\n\n			</ion-item>\n\n		</ion-label>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\ESTUDIO\tercero 2do cuatrimestre\diseño sistemas interactivos\github\grupo07\Proyecto\src\pages\ver-incidencias\ver-incidencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], VerIncidenciasPage);
    return VerIncidenciasPage;
}());

//# sourceMappingURL=ver-incidencias.js.map

/***/ })

});
//# sourceMappingURL=1.js.map