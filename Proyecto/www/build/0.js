webpackJsonp([0],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionRepartosPageModule", function() { return AsignacionRepartosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacion_repartos__ = __webpack_require__(350);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacion_repartos__["a" /* AsignacionRepartosPage */]),
            ],
        })
    ], AsignacionRepartosPageModule);
    return AsignacionRepartosPageModule;
}());

//# sourceMappingURL=asignacion-repartos.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionRepartosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_entrega__ = __webpack_require__(351);
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
    function AsignacionRepartosPage(navCtrl, navParams, app, dbFirebase, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.asignaciones = [null, null, null, null];
        //Limpiamos y creamos las entregas en la BD
        //this.borrarEntregas();
        //this.crearEntregas();
    }
    AsignacionRepartosPage.prototype.crearEntregas = function () {
        //Entregas
        var entrega1 = new __WEBPACK_IMPORTED_MODULE_4__models_entrega__["a" /* Entrega */](1, "Joan", "687218832", "Calle Mayor 15 2D", 1, "12:00 - 14:00", "5kg", "SinIncidencia");
        this.dbFirebase.guardaEntrega(entrega1);
        var entrega2 = new __WEBPACK_IMPORTED_MODULE_4__models_entrega__["a" /* Entrega */](2, 'Álvaro', '633444567', 'Calle Rio Ebro 5 1D', 3, '15:00 - 17:00', '8kg', "SinIncidencia");
        this.dbFirebase.guardaEntrega(entrega2);
        var entrega3 = new __WEBPACK_IMPORTED_MODULE_4__models_entrega__["a" /* Entrega */](3, 'Ana', '687252129', 'Calle Abedul 24 4A', 1, '11:00 - 13:00', '2kg', "SinIncidencia");
        this.dbFirebase.guardaEntrega(entrega3);
        var entrega4 = new __WEBPACK_IMPORTED_MODULE_4__models_entrega__["a" /* Entrega */](4, 'Bart', '669444012', 'Calle Falsa 123', 2, '12:00 - 15:00', '12kg', "SinIncidencia");
        this.dbFirebase.guardaEntrega(entrega4);
    };
    AsignacionRepartosPage.prototype.borrarEntregas = function () {
        if (this.listaEntregas != null) {
            for (var i = 0; i < this.listaEntregas.length; i++) {
                this.dbFirebase.delEntrega(this.listaEntregas[i].id);
            }
            console.log("habia " + i + "en la base de datos");
        }
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
        this.dbFirebase.getUsuarios().subscribe(function (listaUsuarios) { _this.listaUsuarios = listaUsuarios; });
    };
    AsignacionRepartosPage.prototype.getRepartidorName = function (idEntrega) {
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
    AsignacionRepartosPage.prototype.isRepartidor = function (usuario) {
        if (usuario.tipo === __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* TipoUsuario */].Repartidor) {
            return true;
        }
        else {
            return false;
        }
    };
    AsignacionRepartosPage.prototype.finAsignacionManual = function () {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.asignaciones[i] != null) {
                if (this.verificarSiTieneEntregas(this.listaUsuarios[this.asignaciones[i] - 1].id) == false) {
                    if (this.listaEntregas[i].repartidor == null) {
                        this.listaEntregas[i].enCurso = true;
                    }
                }
                else {
                    if (this.listaEntregas[i].repartidor == null) {
                        this.listaEntregas[i].enCurso = false;
                    }
                }
                this.listaEntregas[i].repartidor = this.listaUsuarios[this.asignaciones[this.listaEntregas[i].id - 1] - 1];
                this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
            }
        }
        this.asignacionManualMensaje();
    };
    AsignacionRepartosPage.prototype.verificarSiTieneEntregas = function (idRepartidor) {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.listaEntregas[i].repartidor != null) {
                if (this.listaEntregas[i].repartidor.id === idRepartidor) {
                    return true;
                }
            }
        }
        return false;
    };
    AsignacionRepartosPage.prototype.sinIncidencia = function (idEntrega) {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.listaEntregas[i].id === idEntrega) {
                return (this.listaEntregas[i].incidencia === "SinIncidencia") && !this.listaEntregas[i].entregado;
            }
        }
    };
    AsignacionRepartosPage.prototype.NoEntregado = function (idEntrega) {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.listaEntregas[i].id === idEntrega) {
                return !this.listaEntregas[i].entregado;
            }
        }
    };
    AsignacionRepartosPage.prototype.asignacionAutomaticaMensaje = function () {
        var toast = this.toastCtrl.create({
            message: 'Asignación automática completada con éxito',
            duration: 3000
        });
        toast.present();
    };
    AsignacionRepartosPage.prototype.asignacionManualMensaje = function () {
        var toast = this.toastCtrl.create({
            message: 'Asignacion manual completada con éxito',
            duration: 3000
        });
        toast.present();
    };
    AsignacionRepartosPage.prototype.asignacionAutomaticaAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Asignación automática?',
            message: 'Al confirmar se realizara una asignación automática de los paquetes a repartidores. ¿Desea continuar?',
            buttons: [
                {
                    text: 'Asignar',
                    handler: function () {
                        _this.asignacionAutomatica();
                    }
                },
                {
                    text: 'Reset',
                    role: 'cancel',
                    handler: function () {
                        _this.borrarEntregas();
                        _this.crearEntregas();
                    }
                }
            ]
        });
        alert.present();
    };
    AsignacionRepartosPage.prototype.asignacionAutomatica = function () {
        this.borrarEntregas();
        this.crearEntregas();
        this.listaEntregas[0].repartidor = this.listaUsuarios[2]; //Alberto
        this.listaEntregas[0].enCurso = true;
        this.listaEntregas[1].repartidor = this.listaUsuarios[2];
        this.listaEntregas[2].repartidor = this.listaUsuarios[3]; //Angelo
        this.listaEntregas[2].enCurso = true;
        this.listaEntregas[3].repartidor = this.listaUsuarios[3];
        for (var i = 0; i < this.listaEntregas.length; i++) {
            this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
        }
        this.asignacionAutomaticaMensaje();
    };
    AsignacionRepartosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asignacion-repartos',template:/*ion-inline-start:"d:\ESTUDIO\tercero 2do cuatrimestre\diseño sistemas interactivos\github\grupo07\Proyecto\src\pages\asignacion-repartos\asignacion-repartos.html"*/'<!--\n\n  Generated template for the AsignacionRepartosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n	\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n	<ion-list>\n\n		<ion-item class="botonesAsignacion">\n\n			<button ion-button (click)="asignacionAutomaticaAlert()">Asignación automática</button>\n\n		</ion-item>\n\n		<ion-item class="asignacionManual">\n\n			ASIGNACIÓN MANUAL\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	<ion-list *ngFor="let entrega of listaEntregas">\n\n		<ion-item *ngIf="sinIncidencia(entrega.id)" class="entregaAsignacion">\n\n			<ion-label *ngIf="getRepartidorName(entrega.id) != \'no asignado\' && sinIncidencia(entrega.id)">\n\n				Paquete {{ entrega.id }} <ion-icon large ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon> {{ getRepartidorName(entrega.id)}}\n\n			</ion-label>\n\n			<ion-label *ngIf="getRepartidorName(entrega.id) == \'no asignado\' && sinIncidencia(entrega.id)">\n\n				Paquete {{ entrega.id }} <ion-icon large ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n\n			</ion-label>\n\n			<ion-select *ngIf="getRepartidorName(entrega.id) == \'no asignado\' && sinIncidencia(entrega.id)" placeholder="no asignado" [(ngModel)]="asignaciones[entrega.id - 1]">\n\n				<ng-container *ngFor="let repartidor of listaUsuarios">\n\n					<ion-option *ngIf="isRepartidor(repartidor)" [value]=repartidor.id>{{ repartidor.nombre }}</ion-option>\n\n				</ng-container>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item *ngIf="sinIncidencia(entrega.id)" class="infoEntrega" text-wrap>\n\n			<p>Dirección: {{entrega.direccion }}</p>\n\n			<p>Receptor: {{entrega.nombreReceptor}}    Nº de Bultos: {{ entrega.numeroBultos }}</p>   \n\n			<p>Franja Horaria: {{entrega.franjaHoraria}}</p>\n\n		</ion-item>	\n\n	</ion-list>\n\n	\n\n	<ion-list>\n\n		<ion-item class="botonesAsignacion">\n\n			<button ion-button (click)="finAsignacionManual()">Finalizar asignación manual</button>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\ESTUDIO\tercero 2do cuatrimestre\diseño sistemas interactivos\github\grupo07\Proyecto\src\pages\asignacion-repartos\asignacion-repartos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AsignacionRepartosPage);
    return AsignacionRepartosPage;
}());

//# sourceMappingURL=asignacion-repartos.js.map

/***/ }),

/***/ 351:
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
    function Entrega(id, nombreReceptor, telefonoReceptor, direccion, numeroBultos, franjaHoraria, pesoTotal, incidencia) {
        this.id = id;
        this.repartidor = null;
        this.nombreReceptor = nombreReceptor;
        this.telefonoReceptor = telefonoReceptor;
        this.direccion = direccion;
        this.numeroBultos = numeroBultos;
        this.franjaHoraria = franjaHoraria;
        this.pesoTotal = pesoTotal;
        this.incidencia = incidencia;
        this.enCurso = false;
        this.descripcionOtra = "";
        this.entregado = false;
    }
    Entrega.prototype.getId = function () {
        return this.id;
    };
    Entrega.prototype.getRepartidorName = function () {
        if (this.repartidor == null) {
            return "no asignado";
        }
        else {
            return this.repartidor.getNombre();
        }
    };
    Entrega.prototype.getIncidencia = function () {
        return this.incidencia;
    };
    return Entrega;
}());

//# sourceMappingURL=entrega.js.map

/***/ })

});
//# sourceMappingURL=0.js.map