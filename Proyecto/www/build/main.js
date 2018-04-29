webpackJsonp([11],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the AdministradorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdministradorPage = /** @class */ (function () {
    function AdministradorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.asignacionRepartosRoot = 'AsignacionRepartosPage';
        this.listaRepartidoresRoot = 'ListaRepartidoresPage';
        this.verIncidenciasRoot = 'VerIncidenciasPage';
    }
    AdministradorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administrador',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\administrador\administrador.html"*/'<ion-tabs color="primary" tabsPlacement="top" >\n\n    <ion-tab [root]="asignacionRepartosRoot" tabTitle="Asignar"></ion-tab>\n\n    <ion-tab [root]="listaRepartidoresRoot" tabTitle="Lista repartidores"></ion-tab>\n\n    <ion-tab [root]="verIncidenciasRoot" tabTitle="Incidencias"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\administrador\administrador.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AdministradorPage);
    return AdministradorPage;
}());

//# sourceMappingURL=administrador.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administrador_administrador__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repartidor_repartidor__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_usuario__ = __webpack_require__(226);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, dbFirebase, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.usuario = "";
        this.contrasenya = "";
        //Limpiamos y creamos los usuarios en la BD
        //this.borrarUsuarios();
        //this.crearUsuarios();
    }
    LoginPage.prototype.crearUsuarios = function () {
        //Administradores
        var usuario1 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](1, "Cristian", 45, 612356489, "Automovil", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Administrador, "administrador1.png");
        this.dbFirebase.guardaUsuario(usuario1);
        var usuario2 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](2, "Ivan", 34, 654123658, "Automovil", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Administrador, "administrador2.png");
        this.dbFirebase.guardaUsuario(usuario2);
        //Repartidores
        var usuario3 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](3, "Alberto", 23, 632456987, "Automovil", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor, "repartidor1.png");
        this.dbFirebase.guardaUsuario(usuario3);
        var usuario4 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](4, "Angelo", 22, 654233965, "Moto", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor, "repartidor2.png");
        this.dbFirebase.guardaUsuario(usuario4);
        var usuario5 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](5, "Jefferson", 23, 632112548, "Automovil", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor, "repartidor3.png");
        this.dbFirebase.guardaUsuario(usuario5);
        var usuario6 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](6, "Frank", 36, 654425649, "Moto", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor, "repartidor4.png");
        this.dbFirebase.guardaUsuario(usuario6);
    };
    LoginPage.prototype.borrarUsuarios = function () {
        this.dbFirebase.delUsuario(1);
        this.dbFirebase.delUsuario(2);
        this.dbFirebase.delUsuario(3);
        this.dbFirebase.delUsuario(4);
        this.dbFirebase.delUsuario(5);
        this.dbFirebase.delUsuario(6);
    };
    LoginPage.prototype.login = function () {
        for (var i = 0; i < this.listaUsuarios.length; i++) {
            if (this.usuario === this.listaUsuarios[i].nombre && this.contrasenya === this.listaUsuarios[i].contrasenya &&
                this.listaUsuarios[i].tipo == __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Administrador) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__administrador_administrador__["a" /* AdministradorPage */]);
                break;
            }
            if (this.usuario === this.listaUsuarios[i].nombre && this.contrasenya === this.listaUsuarios[i].contrasenya &&
                this.listaUsuarios[i].tipo == __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__repartidor_repartidor__["a" /* RepartidorPage */], { repartidor: this.usuario });
                break;
            }
            if (this.usuario === this.listaUsuarios[i].nombre && this.contrasenya !== this.listaUsuarios[i].contrasenya) {
                this.loginFailMensaje("Contraseña incorrecta");
                break;
            }
            if (this.usuario !== this.listaUsuarios[i].nombre && i === this.listaUsuarios.length - 1) {
                this.loginFailMensaje("Usuario no registrado");
                break;
            }
        }
    };
    LoginPage.prototype.loginFailMensaje = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
        });
        toast.present();
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getUsuarios().subscribe(function (listaUsuarios) { _this.listaUsuarios = listaUsuarios; });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hide-tabs>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n	<div id="logo">\n\n		<img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="120" height="120"/>\n\n		<h3 id="titulo-aplicacion">Routing Deal</h3>\n\n	</div>\n\n	\n\n	<form (ngSubmit)="login()">\n\n	<ion-list id="cuadrosTexto" >\n\n		<ion-item style="background:#FEE7C0">\n\n			<ion-label color="black"><b>Usuario:</b></ion-label>\n\n			<ion-input type="text" [(ngModel)]="usuario" name="usuario"></ion-input>\n\n		</ion-item>\n\n		<ion-item style="background:#FEEDD0">\n\n			<ion-label color="black"><b>Contraseña:</b></ion-label>\n\n			<ion-input type="password" [(ngModel)]="contrasenya" name="contrasenya"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	<div id="botonAcceder">\n\n		<button ion-button type="submit" style="background:#FECC76">Acceder</button>\n\n	</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepartidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    function RepartidorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listaPaquetesRoot = 'ListaPaquetesPage';
        this.entregaCursoRoot = 'EntregaCursoPage';
        this.repartidorParams = { repartidor: this.navParams.get('repartidor') };
    }
    RepartidorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repartidor',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\repartidor\repartidor.html"*/'<ion-tabs color="primary" tabsPlacement="top">\n\n    <ion-tab [root]="listaPaquetesRoot" [rootParams]="repartidorParams" tabTitle="Lista paquetes"></ion-tab>\n\n    <ion-tab [root]="entregaCursoRoot" [rootParams]="repartidorParams" tabTitle="Entrega curso"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\repartidor\repartidor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RepartidorPage);
    return RepartidorPage;
}());

//# sourceMappingURL=repartidor.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administrador/administrador.module": [
		339,
		10
	],
	"../pages/asignacion-repartos/asignacion-repartos.module": [
		341,
		0
	],
	"../pages/entrega-curso/entrega-curso.module": [
		343,
		4
	],
	"../pages/incidencia/incidencia.module": [
		340,
		9
	],
	"../pages/lista-paquetes/lista-paquetes.module": [
		345,
		3
	],
	"../pages/lista-repartidores/lista-repartidores.module": [
		342,
		2
	],
	"../pages/login/login.module": [
		346,
		8
	],
	"../pages/realizar-entrega/realizar-entrega.module": [
		344,
		7
	],
	"../pages/repartidor-detallado/repartidor-detallado.module": [
		348,
		6
	],
	"../pages/repartidor/repartidor.module": [
		347,
		5
	],
	"../pages/ver-incidencias/ver-incidencias.module": [
		349,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciaPage; });
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
 * Generated class for the IncidenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncidenciaPage = /** @class */ (function () {
    function IncidenciaPage(navCtrl, navParams, app, dbFirebase, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
    }
    IncidenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncidenciaPage');
    };
    IncidenciaPage.prototype.goToLoginPage = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    IncidenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incidencia',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\incidencia\incidencia.html"*/'<!--\n\n  Generated template for the IncidenciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\incidencia\incidencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], IncidenciaPage);
    return IncidenciaPage;
}());

//# sourceMappingURL=incidencia.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepartidorDetalladoPage; });
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
 * Generated class for the RepartidorDetalladoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepartidorDetalladoPage = /** @class */ (function () {
    function RepartidorDetalladoPage(navCtrl, navParams, app, dbFirebase, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.id = '';
        this.id = navParams.get('id');
    }
    RepartidorDetalladoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepartidorDetalladoPage');
    };
    RepartidorDetalladoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getUsuarios().subscribe(function (listaUsuarios) { _this.listaUsuarios = listaUsuarios; });
    };
    RepartidorDetalladoPage.prototype.goToLoginPage = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    RepartidorDetalladoPage.prototype.asignacionAutomaticaMensaje = function () {
        var toast = this.toastCtrl.create({
            message: 'Funcionalidad no implementada',
            duration: 3000
        });
        toast.present();
    };
    RepartidorDetalladoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repartidor-detallado',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\repartidor-detallado\repartidor-detallado.html"*/'<!--\n\n  Generated template for the RepartidorDetalladoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding class ="bg">\n\n	<ion-list *ngFor="let usuario of listaUsuarios">\n\n		<ion-label *ngIf="usuario.id == id">\n\n			<ion-item class="infoEntrega" text-wrap>\n\n					<img class="marco2" src="assets/imgs/{{usuario.ruta_imagen}}" border="4" align="left" width="70" height="70"/>\n\n 					<p>&nbsp;&nbsp;&nbsp;&nbsp;Nombre: {{usuario.nombre}}</p>\n\n					<p>&nbsp;&nbsp;&nbsp;&nbsp;Tlf: {{usuario.telefono}}</p>\n\n					<p>&nbsp;&nbsp;&nbsp;&nbsp;Vehiculo: {{usuario.vehiculo}}</p>\n\n					<button ion-button round outline color="dark" item-end icon-left (click)="asignacionAutomaticaMensaje()">\n\n						<ion-icon name="information-circle"></ion-icon>\n\n					</button>\n\n			</ion-item>\n\n			  <p></p>\n\n			  <img style="width:100%" align="center" src="assets/imgs/Mapa.png" width="100" height="300" />\n\n		</ion-label>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\repartidor-detallado\repartidor-detallado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RepartidorDetalladoPage);
    return RepartidorDetalladoPage;
}());

//# sourceMappingURL=repartidor-detallado.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizarEntregaPage; });
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
 * Generated class for the RealizarEntregaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RealizarEntregaPage = /** @class */ (function () {
    function RealizarEntregaPage(navCtrl, navParams, app, dbFirebase, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dbFirebase = dbFirebase;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.repartidor = navParams.get('repartidor');
    }
    RealizarEntregaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RealizarEntregaPage');
    };
    RealizarEntregaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getEntregas().subscribe(function (listaEntregas) { _this.listaEntregas = listaEntregas; });
    };
    RealizarEntregaPage.prototype.getRepartidorName = function (idEntrega) {
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
    RealizarEntregaPage.prototype.enCurso = function (idEntrega) {
        for (var i = 0; i < this.listaEntregas.length; i++) {
            if (this.listaEntregas[i].id === idEntrega) {
                return this.listaEntregas[i].enCurso;
            }
        }
    };
    RealizarEntregaPage.prototype.goToLoginPage = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    RealizarEntregaPage.prototype.confirmarEntrega = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar entrega',
            message: 'Al confirmar la entrega, el paquete se eliminará de la lista de paquetes. ¿Desea continuar?',
            buttons: [
                {
                    text: 'Realizar Entrega',
                    handler: function () {
                        _this.borrarEntregaEnCurso();
                    }
                },
                {
                    text: 'Volver',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    RealizarEntregaPage.prototype.borrarEntregaEnCurso = function () {
        var fin = false;
        for (var i = 0; i < this.listaEntregas.length && !fin; i++) {
            if (this.listaEntregas[i].repartidor != null) {
                if (this.listaEntregas[i].repartidor.nombre === this.repartidor) {
                    if (this.listaEntregas[i].enCurso) {
                        this.dbFirebase.delEntrega(this.listaEntregas[i].id);
                        fin = true;
                        var toast = this.toastCtrl.create({
                            message: 'Entrega realizada con éxito',
                            duration: 3000
                        });
                        toast.present();
                        this.ponerEnCursoSiguientePaquete();
                    }
                }
            }
        }
    };
    RealizarEntregaPage.prototype.ponerEnCursoSiguientePaquete = function () {
        var fin = false;
        for (var i = 0; i < this.listaEntregas.length && !fin; i++) {
            if (this.listaEntregas[i].repartidor != null) {
                if (this.listaEntregas[i].repartidor.nombre === this.repartidor) {
                    if (!this.listaEntregas[i].enCurso) {
                        this.listaEntregas[i].enCurso = true;
                        fin = true;
                        this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
                    }
                }
            }
        }
    };
    RealizarEntregaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-realizar-entrega',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\realizar-entrega\realizar-entrega.html"*/'<!--\n\n  Generated template for the RealizarEntregaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n		<div id="menuSuperior">\n\n		<table style="width:100%">\n\n		<tr>\n\n		<td style="width:25%"><img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="80" height="80" (click)="goToLoginPage()"/></td>\n\n		<td style="width:50%"><h3 class="tituloMenuSuperior">Routing Deal</h3></td>\n\n		</tr>\n\n		</table>\n\n		</div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n	<ion-list *ngFor="let entrega of listaEntregas">\n\n		<ion-item *ngIf="getRepartidorName(entrega.id) == repartidor && enCurso(entrega.id)" class="infoEntrega" text-wrap>\n\n			<p>Paquete {{entrega.id}}</p>\n\n			<p>Dirección: {{entrega.direccion }}</p>\n\n			<p>Receptor: {{entrega.nombreReceptor}}    Nº de Bultos: {{ entrega.numeroBultos }}</p>   \n\n			<p>Franja Horaria: {{entrega.franjaHoraria}}</p>\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	<ion-list class="camposEntrega">\n\n		<ion-item class="camposEntrega">\n\n			<ion-label stacked>Nombre del receptor</ion-label>\n\n			<ion-input></ion-input>\n\n		</ion-item>\n\n		<ion-item class="camposEntrega">\n\n			<ion-label stacked>Firma del receptor</ion-label>\n\n			<ion-textarea></ion-textarea>\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	<ion-list>\n\n		<ion-item class="botones">\n\n			<button ion-button (click)="confirmarEntrega()">Confirmar entrega</button>\n\n			<button ion-button (click)="incidencia()">Incidencia</button>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\realizar-entrega\realizar-entrega.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RealizarEntregaPage);
    return RealizarEntregaPage;
}());

//# sourceMappingURL=realizar-entrega.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoUsuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Usuario; });
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["Administrador"] = 0] = "Administrador";
    TipoUsuario[TipoUsuario["Repartidor"] = 1] = "Repartidor";
})(TipoUsuario || (TipoUsuario = {}));
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, edad, telefono, vehiculo, contrasenya, tipo, ruta_imagen) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.vehiculo = vehiculo;
        this.contrasenya = contrasenya;
        this.tipo = tipo;
        this.ruta_imagen = ruta_imagen;
    }
    Usuario.prototype.getId = function () {
        return this.id;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.getEdad = function () {
        return this.edad;
    };
    Usuario.prototype.getTelefono = function () {
        return this.telefono;
    };
    Usuario.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Usuario.prototype.getContrasenya = function () {
        return this.contrasenya;
    };
    Usuario.prototype.getTipo = function () {
        return this.tipo;
    };
    Usuario.prototype.getRutaImagen = function () {
        return this.ruta_imagen;
    };
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_repartidor_repartidor__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_repartidor_detallado_repartidor_detallado__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_realizar_entrega_realizar_entrega__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_incidencia_incidencia__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var fireBaseConfig = {
    apiKey: "AIzaSyBXob8b0-5eDc91Jin42BWUshb7wDP76HM",
    authDomain: "routingdeal.firebaseapp.com",
    databaseURL: "https://routingdeal.firebaseio.com",
    projectId: "routingdeal",
    storageBucket: "routingdeal.appspot.com",
    messagingSenderId: "563600903323"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__["a" /* AdministradorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_repartidor_repartidor__["a" /* RepartidorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_repartidor_detallado_repartidor_detallado__["a" /* RepartidorDetalladoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_realizar_entrega_realizar_entrega__["a" /* RealizarEntregaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_incidencia_incidencia__["a" /* IncidenciaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/administrador/administrador.module#AdministradorPageModule', name: 'AdministradorPage', segment: 'administrador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incidencia/incidencia.module#IncidenciaPageModule', name: 'IncidenciaPage', segment: 'incidencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asignacion-repartos/asignacion-repartos.module#AsignacionRepartosPageModule', name: 'AsignacionRepartosPage', segment: 'asignacion-repartos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-repartidores/lista-repartidores.module#ListaRepartidoresPageModule', name: 'ListaRepartidoresPage', segment: 'lista-repartidores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrega-curso/entrega-curso.module#EntregaCursoPageModule', name: 'EntregaCursoPage', segment: 'entrega-curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/realizar-entrega/realizar-entrega.module#RealizarEntregaPageModule', name: 'RealizarEntregaPage', segment: 'realizar-entrega', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-paquetes/lista-paquetes.module#ListaPaquetesPageModule', name: 'ListaPaquetesPage', segment: 'lista-paquetes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repartidor/repartidor.module#RepartidorPageModule', name: 'RepartidorPage', segment: 'repartidor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repartidor-detallado/repartidor-detallado.module#RepartidorDetalladoPageModule', name: 'RepartidorDetalladoPage', segment: 'repartidor-detallado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-incidencias/ver-incidencias.module#VerIncidenciasPageModule', name: 'VerIncidenciasPage', segment: 'ver-incidencias', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__["a" /* AdministradorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_repartidor_repartidor__["a" /* RepartidorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_repartidor_detallado_repartidor_detallado__["a" /* RepartidorDetalladoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_realizar_entrega_realizar_entrega__["a" /* RealizarEntregaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_incidencia_incidencia__["a" /* IncidenciaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseDbProvider = /** @class */ (function () {
    function FirebaseDbProvider(afDB) {
        this.afDB = afDB;
        this.usuariosRef = this.afDB.list('usuarios');
        this.entregasRef = this.afDB.list('entregas');
        console.log('Hello FirebaseDbProvider Provider');
    }
    //Metodos para usuarios
    FirebaseDbProvider.prototype.guardaUsuario = function (usuario) {
        return this.afDB.database.ref('usuarios/' + usuario.getId()).set(usuario);
    };
    FirebaseDbProvider.prototype.delUsuario = function (id) {
        this.afDB.database.ref('usuarios/' + id).remove();
    };
    FirebaseDbProvider.prototype.getUsuarios = function () {
        if (this.usuariosRef != null) {
            return this.usuariosRef.valueChanges();
        }
    };
    //Metodos para entregas
    FirebaseDbProvider.prototype.guardaEntrega = function (entrega) {
        return this.afDB.database.ref('entregas/' + entrega.id).set(entrega);
    };
    FirebaseDbProvider.prototype.delEntrega = function (id) {
        this.afDB.database.ref('entregas/' + id).remove();
    };
    FirebaseDbProvider.prototype.getEntregas = function () {
        if (this.entregasRef != null) {
            return this.entregasRef.valueChanges();
        }
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map