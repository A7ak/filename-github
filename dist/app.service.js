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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const operators_1 = require("rxjs/operators");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getGithubRepo() {
        const url = 'https://api.github.com/repos/A7ak/filename-github/contents/src/app.service.ts';
        const token = `token`;
        const headers = {
            Authorization: token,
            Accept: 'application/vnd.github.v3.raw',
        };
        console.log("data");
        return this.httpService.get(url, { headers }).pipe((0, operators_1.map)((response) => {
            const data = response.data.split('\n');
            for (let i = 0; i < data.length; i++) {
                if (data[i].includes('console.log')) {
                    return data[i];
                }
            }
        }));
    }
    getHello() {
        return 'First nestjs project!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], AppService);
//# sourceMappingURL=app.service.js.map