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
var chat_service_1 = require("./chat.service");
var message_object_1 = require("./message.object");
var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.messageList = new Array();
    }
    ChatComponent.prototype.sendQuery = function (query) {
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getResponse("").subscribe(function (res) {
            _this.outputMessage = res;
            var msg = new message_object_1.Message(res, false);
            _this.messageList.push(msg);
        });
    };
    ;
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        var msg = new message_object_1.Message(this.inputMessage, true);
        this.messageList.push(msg);
        this.chatService.getResponse(this.inputMessage).subscribe(function (res) {
            msg = new message_object_1.Message(res[0].toString(), false);
            _this.messageList.push(msg);
            _this.inputMessage = "";
        });
    };
    return ChatComponent;
}());
__decorate([
    core_1.ViewChild('scrollMe'),
    __metadata("design:type", core_1.ElementRef)
], ChatComponent.prototype, "myScrollContainer", void 0);
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat-box',
        templateUrl: "./chat.html",
        styleUrls: ["./styles/chat.css"],
        providers: [chat_service_1.ChatService]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map