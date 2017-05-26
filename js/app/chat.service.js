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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var ChatService = (function () {
    function ChatService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
    ChatService.prototype.getResponse = function (text) {
        return this.http.get("https://iot-training-dwarika.mybluemix.net/chats", { params: { inputText: text } }).map(function (response) { return response.json(); });
    };
    ChatService.prototype.postQuery = function (data) {
        var options = new http_1.URLSearchParams();
        options.append('input', "turn on");
        return this.http.post("https://iot-training-dwarika.mybluemix.net/chats", "").map(function (response) { return response.json(); });
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map