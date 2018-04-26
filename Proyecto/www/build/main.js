webpackJsonp([8],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administrador_administrador__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repartidor_repartidor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_usuario__ = __webpack_require__(309);
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
    function LoginPage(navCtrl, navParams, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.usuario = "";
        this.contrasenya = "";
        //Limpiamos y creamos los usuarios en la BD
        //this.borrarUsuarios();
        //this.crearUsuarios();
    }
    LoginPage.prototype.crearUsuarios = function () {
        //Administradores
        var usuario1 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](1, "Cristian", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Administrador);
        this.dbFirebase.guardaUsuario(usuario1);
        var usuario2 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](2, "Ivan", "12345", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Administrador);
        this.dbFirebase.guardaUsuario(usuario2);
        //Repartidores
        var usuario3 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](3, "Alberto", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor);
        this.dbFirebase.guardaUsuario(usuario3);
        var usuario4 = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["b" /* Usuario */](4, "Juan", "1234", __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor);
        this.dbFirebase.guardaUsuario(usuario4);
    };
    LoginPage.prototype.borrarUsuarios = function () {
        this.dbFirebase.delUsuario(1);
        this.dbFirebase.delUsuario(2);
        this.dbFirebase.delUsuario(3);
        this.dbFirebase.delUsuario(4);
    };
    LoginPage.prototype.login = function () {
        for (var i = 0; i < this.listaUsuarios.length; i++) {
            if (this.usuario === this.listaUsuarios[i].nombre && this.contrasenya === this.listaUsuarios[i].contrasenya &&
                this.listaUsuarios[i].tipo == __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Administrador) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__administrador_administrador__["a" /* AdministradorPage */]);
            }
            if (this.usuario === this.listaUsuarios[i].nombre && this.contrasenya === this.listaUsuarios[i].contrasenya &&
                this.listaUsuarios[i].tipo == __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* TipoUsuario */].Repartidor) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__repartidor_repartidor__["a" /* RepartidorPage */]);
            }
        }
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getUsuarios().subscribe(function (listaUsuarios) { _this.listaUsuarios = listaUsuarios; });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hide-tabs>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class ="bg">\n\n	<div id="logo">\n\n		<img class="logo-imagen" src="assets/imgs/LogoApp3.png" width="120" height="120"/>\n\n		<h3 id="titulo-aplicacion">Routing Deal</h3>\n\n	</div>\n\n	\n\n	<form (ngSubmit)="login()">\n\n	<ion-list id="cuadrosTexto" >\n\n		<ion-item style="background:#FEE7C0">\n\n			<ion-label color="black"><b>Usuario:</b></ion-label>\n\n			<ion-input type="text" [(ngModel)]="usuario" name="usuario"></ion-input>\n\n		</ion-item>\n\n		<ion-item style="background:#FEEDD0">\n\n			<ion-label color="black"><b>Contraseña:</b></ion-label>\n\n			<ion-input type="password" [(ngModel)]="contrasenya" name="contrasenya"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	\n\n	<div id="botonAcceder">\n\n		<button ion-button type="submit" style="background:#FECC76">Acceder</button>\n\n	</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorPage; });
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], AdministradorPage);
    return AdministradorPage;
    var _a;
}());

//# sourceMappingURL=administrador.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepartidorPage; });
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
            selector: 'page-repartidor',template:/*ion-inline-start:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\repartidor\repartidor.html"*/'<ion-tabs color="primary" tabsPlacement="top">\n\n    <ion-tab [root]="listaPaquetesRoot" tabTitle="Lista paquetes"></ion-tab>\n\n    <ion-tab [root]="entregaCursoRoot" tabTitle="Entrega curso"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Cristian\Documents\GitHub\grupo07\Proyecto\src\pages\repartidor\repartidor.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], RepartidorPage);
    return RepartidorPage;
    var _a;
}());

//# sourceMappingURL=repartidor.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administrador/administrador.module": [
		343,
		7
	],
	"../pages/asignacion-repartos/asignacion-repartos.module": [
		336,
		4
	],
	"../pages/entrega-curso/entrega-curso.module": [
		337,
		3
	],
	"../pages/lista-paquetes/lista-paquetes.module": [
		338,
		2
	],
	"../pages/lista-repartidores/lista-repartidores.module": [
		341,
		1
	],
	"../pages/login/login.module": [
		339,
		6
	],
	"../pages/repartidor/repartidor.module": [
		340,
		5
	],
	"../pages/ver-incidencias/ver-incidencias.module": [
		342,
		0
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
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
        return this.afDB.database.ref('entregas/' + entrega.getId()).set(entrega);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
    var _a;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_repartidor_repartidor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(222);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_repartidor_repartidor__["a" /* RepartidorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/asignacion-repartos/asignacion-repartos.module#AsignacionRepartosPageModule', name: 'AsignacionRepartosPage', segment: 'asignacion-repartos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrega-curso/entrega-curso.module#EntregaCursoPageModule', name: 'EntregaCursoPage', segment: 'entrega-curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-paquetes/lista-paquetes.module#ListaPaquetesPageModule', name: 'ListaPaquetesPage', segment: 'lista-paquetes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repartidor/repartidor.module#RepartidorPageModule', name: 'RepartidorPage', segment: 'repartidor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-repartidores/lista-repartidores.module#ListaRepartidoresPageModule', name: 'ListaRepartidoresPage', segment: 'lista-repartidores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-incidencias/ver-incidencias.module#VerIncidenciasPageModule', name: 'VerIncidenciasPage', segment: 'ver-incidencias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/administrador/administrador.module#AdministradorPageModule', name: 'AdministradorPage', segment: 'administrador', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__["a" /* AdministradorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_repartidor_repartidor__["a" /* RepartidorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
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
    function Usuario(id, nombre, contrasenya, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.contrasenya = contrasenya;
        this.tipo = tipo;
    }
    Usuario.prototype.getId = function () {
        return this.id;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.getContrasenya = function () {
        return this.contrasenya;
    };
    Usuario.prototype.getTipo = function () {
        return this.tipo;
    };
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map