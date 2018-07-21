"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var login_component_1 = require("./login/login.component");
var TestAppModule = /** @class */ (function () {
    function TestAppModule() {
    }
    TestAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
            ],
            providers: [],
            bootstrap: [login_component_1.LoginComponent]
        })
    ], TestAppModule);
    return TestAppModule;
}());
exports.TestAppModule = TestAppModule;
//# sourceMappingURL=testapp.module.js.map