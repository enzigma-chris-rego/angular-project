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
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.configUrl = 'assets/config.json';
        this.apiBaseUrl = 'http://192.168.193.143:3000/api';
    }
    // getConfig() {
    //     return this.http.get(this.configUrl);
    // }
    ApiService.prototype.post = function (action, body) {
        var apiEndPoint = this.apiBaseUrl;
        switch (action.toLowerCase()) {
            case 'login':
                apiEndPoint = apiEndPoint + '/login';
                break;
            case 'register':
                apiEndPoint = apiEndPoint + '/register';
                break;
        }
        return this.http.post(apiEndPoint, body, httpOptions);
    };
    ApiService.prototype.getAll = function () {
        return this.http.get('/api/users');
    };
    ApiService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id);
    };
    ApiService.prototype.create = function (user) {
        return this.http.post('/api/users', user);
    };
    ApiService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.Id, user);
    };
    ApiService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    ApiService.prototype.logout = function () {
        return this.http.get(this.apiBaseUrl + '/logout');
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map