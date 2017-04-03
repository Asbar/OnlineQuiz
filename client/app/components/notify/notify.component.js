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
var core_1 = require('@angular/core');
var lang_service_1 = require('../../services/lang.service');
var notifyComponent = (function () {
    function notifyComponent(langService) {
        var _this = this;
        this.langService = langService;
        this.langItem = [];
        this.langService.getAllLangs().subscribe(function (data) { _this.langItem = data; }, function (err) { return _this.logError(err); }, function () { return _this.langItem.forEach(function (element) {
        }); });
    }
    notifyComponent.prototype.startQuiz = function (event) {
        alertify.alert('Normal message');
        alertify.error("Error");
    };
    notifyComponent.prototype.clicked = function (event) {
        event.preventDefault();
    };
    notifyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notify',
            templateUrl: 'notify.component.html'
        }), 
        __metadata('design:paramtypes', [lang_service_1.LangService])
    ], notifyComponent);
    return notifyComponent;
}());
exports.notifyComponent = notifyComponent;
//# sourceMappingURL=notify.component.js.map