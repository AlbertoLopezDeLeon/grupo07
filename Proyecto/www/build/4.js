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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_entrega__ = __webpack_require__(349);
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
    function AsignacionRepartosPage(navCtrl, navParams, app, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dbFirebase = dbFirebase;
        //Limpiamos y creamos las entregas en la BD
        //this.borrarEntregas();
        //this.crearEntregas();
    }
    AsignacionRepartosPage.prototype.crearEntregas = function () {
        //Entregas
        var entrega1 = new __WEBPACK_IMPORTED_MODULE_3__models_entrega__["a" /* Entrega */](1, "Joan", "687218832", "Calle Mayor 15 2D", 1, "12:00 - 14:00", "5kg");
        this.dbFirebase.guardaEntrega(entrega1);
        var entrega2 = new __WEBPACK_IMPORTED_MODULE_3__models_entrega__["a" /* Entrega */](2, 'Álvaro', '633444567', 'Calle Rio Ebro 5 1D', 3, '15:00 - 17:00', '8kg');
        this.dbFirebase.guardaEntrega(entrega2);
        var entrega3 = new __WEBPACK_IMPORTED_MODULE_3__models_entrega__["a" /* Entrega */](3, 'Ana', '687252129', 'Calle Abedul 24 4A', 1, '11:00 - 14:00', '2kg');
        this.dbFirebase.guardaEntrega(entrega3);
        var entrega4 = new __WEBPACK_IMPORTED_MODULE_3__models_entrega__["a" /* Entrega */](4, 'Bart', '669444012', 'Calle Falsa 123', 2, '11:00 - 13:00', '12kg');
        this.dbFirebase.guardaEntrega(entrega4);
    };
    AsignacionRepartosPage.prototype.borrarEntregas = function () {
        this.dbFirebase.delEntrega(1);
        this.dbFirebase.delEntrega(2);
        this.dbFirebase.delEntrega(3);
        this.dbFirebase.delEntrega(4);
    };
    AsignacionRepartosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsignacionRepartosPage');
    };
    AsignacionRepartosPage.prototype.goToLoginPage = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    AsignacionRepartosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getEntregas().subscribe(function (listaEntregas) { _this.listaEntregas = listaEntregas; });
    };
    AsignacionRepartosPage.prototype.getRepartidorName = function (idEntrega) {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.listaEntregas[i].id === idEntrega) {
                if (this.listaEntregas[i].repartidor == null) {
                    return "no asignado";
                }
                else {
                    return this.listaEntregas[i].repartidor.getNombre();
                }
            }
        }
    };
    AsignacionRepartosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asignacion-repartos',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\asignacion-repartos\asignacion-repartos.html"*/'<!--\n\n  Generated template for the AsignacionRepartosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n	\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n	<ion-list>\n\n		<ion-item class="botonesAsignacion">\n\n			<button ion-button>Asignación automática</button>\n\n		</ion-item>\n\n		<ion-item class="asignacionManual">\n\n			ASIGNACIÓN MANUAL\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	<ion-list *ngFor="let entrega of listaEntregas">\n\n		<ion-item class="entregaAsignacion">\n\n			Paquete {{ entrega.id }} <ion-icon large ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon> {{ getRepartidorName(entrega.id)}}\n\n		</ion-item>\n\n		<ion-item class="infoEntrega" text-wrap>\n\n			<p>Dirección: {{entrega. direccion }}</p>\n\n			<p>Receptor: {{entrega.nombreReceptor}}    Nº de Bultos: {{ entrega.numeroBultos }}</p>   \n\n			<p>Franja Horaria: {{entrega.franjaHoraria}}</p>\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	<ion-list>\n\n		<ion-item class="botonesAsignacion">\n\n			<button ion-button>Finalizar asignación manual</button>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\asignacion-repartos\asignacion-repartos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]) === "function" && _d || Object])
    ], AsignacionRepartosPage);
    return AsignacionRepartosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=asignacion-repartos.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TipoIncidencia */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entrega; });
var TipoIncidencia;
(function (TipoIncidencia) {
    TipoIncidencia[TipoIncidencia["DireccionErronea"] = 0] = "DireccionErronea";
    TipoIncidencia[TipoIncidencia["ClienteAusente"] = 1] = "ClienteAusente";
    TipoIncidencia[TipoIncidencia["PaqueteMalasCondiciones"] = 2] = "PaqueteMalasCondiciones";
    TipoIncidencia[TipoIncidencia["EntregaRehusada"] = 3] = "EntregaRehusada";
    TipoIncidencia[TipoIncidencia["OtraIncidencia"] = 4] = "OtraIncidencia";
    TipoIncidencia[TipoIncidencia["SinIncidencia"] = 5] = "SinIncidencia";
})(TipoIncidencia || (TipoIncidencia = {}));
var Entrega = /** @class */ (function () {
    function Entrega(id, nombreReceptor, telefonoReceptor, direccion, numeroBultos, franjaHoraria, pesoTotal) {
        this.id = id;
        this.repartidor = null;
        this.nombreReceptor = nombreReceptor;
        this.telefonoReceptor = telefonoReceptor;
        this.direccion = direccion;
        this.numeroBultos = numeroBultos;
        this.franjaHoraria = franjaHoraria;
        this.pesoTotal = pesoTotal;
        this.incidencia = TipoIncidencia.SinIncidencia;
    }
    Entrega.prototype.getId = function () {
        return this.id;
    };
    Entrega.prototype.getRepartidorName = function () {
        if (repartidor == null) {
            return "no asignado";
        }
        else {
            return this.repartidor.getNombre();
        }
    };
    return Entrega;
}());

//# sourceMappingURL=entrega.js.map

/***/ })

});
//# sourceMappingURL=4.js.map