"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var api_service_1 = require("./service/api.service");
//import { LoginComponent } from './login/login.component';
var AppComponent = /** @class */ (function () {
    //  @ViewChild(LoginComponent) 
    //  private loginComponent : LoginComponent;
    //  isUserLoggedIn: boolean;
    // strFirstname: string;
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.title = 'Demo Angular 5 Application';
        console.log(core_2.isDevMode());
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        //this.isUserLoggedIn = this.loginComponent.isUserLoggedIn;
    };
    AppComponent.prototype.onLogout = function () {
        this.apiService.logout().subscribe(function (response) {
            if (response.success) {
                window.location.href = '/login';
            }
        }, function (error) {
            console.log(JSON.stringify(error.message));
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map