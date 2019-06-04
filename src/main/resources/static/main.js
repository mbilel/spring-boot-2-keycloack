(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-dashboard></app-dashboard>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_keycloak_keycloack_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/keycloak/keycloack.interceptor.service */ "./src/app/services/keycloak/keycloack.interceptor.service.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/keycloak/keycloak.service */ "./src/app/services/keycloak/keycloak.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _services_keycloak_keycloack_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["KeycloakInterceptorService"],
                    multi: true
                },
                _services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_9__["KeycloakService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.card {\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <nav class=\"navbar fixed-top navbar-dark bg-primary\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"https://ineat-group.com/assets/images/poulpies/ineat-logo-full.svg\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n          <span  *ngIf=\"keycloakAuth.authenticated\">Bonjour {{ displayUserInfo() }}</span>\n        </a>\n        <button class=\"btn btn-outline-warning my-2 my-sm-0\" (click)=\"logout()\">Logout</button>\n        <button class=\"btn btn-outline-warning my-2 my-sm-0\" (click)=\"login()\">Login</button>\n      </nav>\n      <div class=\"jumbotron\">\n        <h1 class=\"display-4\">Keycloack Angular!</h1>\n        <p class=\"lead\">Securisez vos APIs Spring avec Keycloak : #4 – Utilisation du connecteur Keycloak.js avec Angular 4+.</p>\n        <hr class=\"my-4\">\n        <p>Récupération de la donnée du endpoint non sécurisé</p>\n        <div class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" (click)=\"getUnsecuredData()\" role=\"button\">Data non sécurisé</a>\n          <div class=\"card\" *ngIf=\"unsecuredLoaded\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Response</h5>\n              <p class=\"card-text\" *ngIf=\"!unsecuredError\">{{ unsecureData }}</p>\n              <p class=\"card-text\" *ngIf=\"unsecuredError\">Code retour: {{ unsecuredErrorResponse.status }} - message: {{ unsecuredErrorResponse.message }}</p>\n            </div>\n          </div>\n        </div>\n        <hr class=\"my-4\">\n        <p>Récupération de la donnée du endpoint user sécurisé</p>\n        <div class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" (click)=\"getUserData()\" role=\"button\">Data User</a>\n          <div class=\"card\" *ngIf=\"userLoaded\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Response</h5>\n              <p class=\"card-text\" *ngIf=\"!userError\">{{ userData }}</p>\n              <p class=\"card-text\" *ngIf=\"userError\">Code retour: {{ userErrorResponse.status }} - message: {{ userErrorResponse.message }}</p>\n            </div>\n          </div>\n        </div>\n        <hr class=\"my-4\">\n        <p>Récupération de la donnée du endpoint admin sécurisé</p>\n        <div class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" (click)=\"getAdminData()\" role=\"button\">Data Admin</a>\n          <div class=\"card\" *ngIf=\"adminLoaded\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Response</h5>\n              <p class=\"card-text\" *ngIf=\"!adminError\">{{ adminData }}</p>\n              <p class=\"card-text\" *ngIf=\"adminError\">Code retour: {{ adminErrorResponse.status }} - message: {{ adminErrorResponse.message }}</p>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/keycloak/keycloak.service */ "./src/app/services/keycloak/keycloak.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(data, keycloak) {
        this.data = data;
        this.keycloak = keycloak;
        this.isJsonString = function (str) {
            console.log(JSON.parse(str));
            try {
                JSON.parse(str);
            }
            catch (e) {
                console.log('test');
                return false;
            }
            return true;
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.keycloakAuth = this.keycloak.getKeycloakAuth();
    };
    DashboardComponent.prototype.getUnsecuredData = function () {
        var _this = this;
        this.data.getUnsecureData().subscribe(function (data) {
            _this.unsecuredLoaded = true;
            _this.unsecureData = data;
        }, function (error) {
            _this.unsecuredLoaded = true;
            _this.unsecuredError = true;
            _this.unsecuredErrorResponse = {
                status: error.status,
                message: error.message
            };
        });
    };
    DashboardComponent.prototype.getUserData = function () {
        var _this = this;
        this.data.getUserData().subscribe(function (data) {
            _this.userLoaded = true;
            _this.userData = data;
        }, function (error) {
            _this.userLoaded = true;
            _this.userError = true;
            _this.userErrorResponse = {
                status: error.status,
                message: error.message && _this.isJsonString(error.error) ? JSON.parse(error.error).message : error.message
            };
        });
    };
    DashboardComponent.prototype.getAdminData = function () {
        var _this = this;
        this.data.getAdminData().subscribe(function (data) {
            _this.adminLoaded = true;
            _this.adminData = data;
        }, function (error) {
            console.log(error.error);
            _this.adminLoaded = true;
            _this.adminError = true;
            _this.adminErrorResponse = {
                status: error.status,
                message: error.message && _this.isJsonString(error.error) ? JSON.parse(error.error).message : error.message
            };
        });
    };
    DashboardComponent.prototype.login = function () {
        this.keycloak.login();
    };
    DashboardComponent.prototype.logout = function () {
        this.keycloak.logout();
    };
    DashboardComponent.prototype.displayUserInfo = function () {
        return this.keycloak.getFullName();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <nav class=\"navbar fixed-top navbar-dark bg-primary\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"https://ineat-group.com/assets/images/poulpies/ineat-logo-full.svg\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n          <span  *ngIf=\"keycloakAuth.authenticated\">Bonjour {{ displayUserInfo() }}</span>\n        </a>\n        <button class=\"btn btn-outline-warning my-2 my-sm-0\" (click)=\"logout()\">Logout</button>\n        <button class=\"btn btn-outline-warning my-2 my-sm-0\" (click)=\"login()\">Login</button>\n      </nav>\n      <div class=\"jumbotron\">\n        <h1 class=\"display-4\">Angular 7 - keycloack - Spring boot</h1>\n        <p class=\"lead\">Securisez vos APIs Spring avec Keycloak : #4 – Utilisation du connecteur Keycloak.js avec Angular 4+.</p>\n        <hr class=\"my-4\">\n        <p>Récupération de la donnée du endpoint non sécurisé</p>\n        <div class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" (click)=\"getUnsecuredData()\" role=\"button\">Data non sécurisé</a>\n          <div class=\"card\" *ngIf=\"unsecuredLoaded\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Response</h5>\n              <p class=\"card-text\" *ngIf=\"!unsecuredError\">{{ unsecureData }}</p>\n              <p class=\"card-text\" *ngIf=\"unsecuredError\">Code retour: {{ unsecuredErrorResponse.status }} - message: {{ unsecuredErrorResponse.message }}</p>\n            </div>\n          </div>\n        </div>\n        <hr class=\"my-4\">\n        <p>Récupération de la donnée du endpoint user sécurisé</p>\n        <div class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" (click)=\"getUserData()\" role=\"button\">Data User</a>\n          <div class=\"card\" *ngIf=\"userLoaded\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Response</h5>\n              <p class=\"card-text\" *ngIf=\"!userError\">{{ userData }}</p>\n              <p class=\"card-text\" *ngIf=\"userError\">Code retour: {{ userErrorResponse.status }} - message: {{ userErrorResponse.message }}</p>\n            </div>\n          </div>\n        </div>\n        <hr class=\"my-4\">\n        <p>Récupération de la donnée du endpoint admin sécurisé</p>\n        <div class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" (click)=\"getAdminData()\" role=\"button\">Data Admin</a>\n          <div class=\"card\" *ngIf=\"adminLoaded\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Response</h5>\n              <p class=\"card-text\" *ngIf=\"!adminError\">{{ adminData }}</p>\n              <p class=\"card-text\" *ngIf=\"adminError\">Code retour: {{ adminErrorResponse.status }} - message: {{ adminErrorResponse.message }}</p>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/services/keycloak/keycloack.interceptor.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/keycloak/keycloack.interceptor.service.ts ***!
  \********************************************************************/
/*! exports provided: KeycloakInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeycloakInterceptorService", function() { return KeycloakInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _keycloak_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keycloak.service */ "./src/app/services/keycloak/keycloak.service.ts");





var KeycloakInterceptorService = /** @class */ (function () {
    function KeycloakInterceptorService(keycloakService) {
        this.keycloakService = keycloakService;
    }
    KeycloakInterceptorService.prototype.intercept = function (request, next) {
        if (this.keycloakService.isLoggedIn()) {
            return this.getUserToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (token) {
                if (token) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: "Bearer " + token
                        }
                    });
                }
                return next.handle(request);
            }));
        }
        return next.handle(request);
    };
    KeycloakInterceptorService.prototype.getUserToken = function () {
        var tokenPromise = this.keycloakService.getToken();
        var tokenObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(tokenPromise);
        return tokenObservable;
    };
    KeycloakInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_keycloak_service__WEBPACK_IMPORTED_MODULE_4__["KeycloakService"]])
    ], KeycloakInterceptorService);
    return KeycloakInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/keycloak/keycloak.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/keycloak/keycloak.service.ts ***!
  \*******************************************************/
/*! exports provided: KeycloakService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeycloakService", function() { return KeycloakService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keycloak-js */ "./node_modules/keycloak-js/dist/keycloak.js");
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keycloak_js__WEBPACK_IMPORTED_MODULE_3__);




var KeycloakService = /** @class */ (function () {
    function KeycloakService() {
    }
    KeycloakService_1 = KeycloakService;
    KeycloakService.init = function () {
        /**
         * init KeycloakService with client-id
         * @type {Keycloak.KeycloakInstance}
         */
        var keycloakAuth = keycloak_js__WEBPACK_IMPORTED_MODULE_3__({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].keycloak.url,
            realm: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].keycloak.realm,
            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].keycloak.clientId,
            'ssl-required': 'external',
            'public-client': true
        });
        KeycloakService_1.auth.loggedIn = false;
        return new Promise(function (resolve, reject) {
            keycloakAuth.init({ onLoad: 'check-sso', checkLoginIframe: false })
                .success(function () {
                KeycloakService_1.auth.loggedIn = false;
                KeycloakService_1.auth.authz = keycloakAuth;
                console.log(KeycloakService_1.auth.authz.tokenParsed);
                resolve();
            })
                .error(function () {
                reject();
            });
        });
    };
    KeycloakService.prototype.login = function () {
        KeycloakService_1.auth.authz.login().success(function () {
            KeycloakService_1.auth.loggedIn = true;
        });
    };
    KeycloakService.prototype.getToken = function () {
        return new Promise(function (resolve, reject) {
            if (KeycloakService_1.auth.authz.token) {
                KeycloakService_1.auth.authz
                    .updateToken(5)
                    .success(function () {
                    resolve(KeycloakService_1.auth.authz.token);
                })
                    .error(function () {
                    reject('Failed to refresh token');
                });
            }
            else {
                reject('Not logged in');
            }
        });
    };
    KeycloakService.prototype.isLoggedIn = function () {
        return KeycloakService_1.auth.authz.authenticated;
    };
    KeycloakService.prototype.getFullName = function () {
        return KeycloakService_1.auth.authz.tokenParsed.name;
    };
    KeycloakService.prototype.getKeycloakAuth = function () {
        return KeycloakService_1.auth.authz;
    };
    KeycloakService.prototype.logout = function () {
        KeycloakService_1.auth.authz.logout({ redirectUri: document.baseURI }).success(function () {
            KeycloakService_1.auth.loggedIn = false;
            KeycloakService_1.auth.authz = null;
        });
    };
    var KeycloakService_1;
    KeycloakService.auth = {};
    KeycloakService = KeycloakService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KeycloakService);
    return KeycloakService;
}());



/***/ }),

/***/ "./src/app/services/product/product.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ProductService.prototype.getUnsecureData = function () {
        return this.http.get(this.apiUrl + '/unsecured', { responseType: 'text' });
    };
    ProductService.prototype.getUserData = function () {
        return this.http.get(this.apiUrl + '/resource/12', { responseType: 'text' });
    };
    ProductService.prototype.getAdminData = function () {
        return this.http.get(this.apiUrl + '/resource/1', { responseType: 'text' });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8000/api',
    keycloak: {
        url: 'http://localhost:7080/auth',
        realm: 'first-realm',
        clientId: 'first-application',
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/services/keycloak/keycloak.service */ "./src/app/services/keycloak/keycloak.service.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_app_services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_4__["KeycloakService"].init()
    .then(function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]); })
    .catch(function (e) {
    window.location.reload();
    (function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Travail\front\front-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map