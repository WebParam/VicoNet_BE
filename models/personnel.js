"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var personnelSchema = new mongoose_1.default.Schema({
    searchKeys: {
        type: String,
        required: true
    }
});
personnelSchema.statics.build = function (attr) {
    return new User(attr);
};
var User = mongoose_1.default.model('personnel', personnelSchema, "personnel");
exports.User = User;
