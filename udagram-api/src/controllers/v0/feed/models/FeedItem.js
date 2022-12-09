"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedItem = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var FeedItem = /** @class */ (function (_super) {
    __extends(FeedItem, _super);
    function FeedItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createdAt = new Date();
        _this.updatedAt = new Date();
        return _this;
    }
    __decorate([
        sequelize_typescript_1.Column
    ], FeedItem.prototype, "caption", void 0);
    __decorate([
        sequelize_typescript_1.Column
    ], FeedItem.prototype, "url", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        sequelize_typescript_1.CreatedAt
    ], FeedItem.prototype, "createdAt", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        sequelize_typescript_1.UpdatedAt
    ], FeedItem.prototype, "updatedAt", void 0);
    FeedItem = __decorate([
        sequelize_typescript_1.Table
    ], FeedItem);
    return FeedItem;
}(sequelize_typescript_1.Model));
exports.FeedItem = FeedItem;
//# sourceMappingURL=FeedItem.js.map