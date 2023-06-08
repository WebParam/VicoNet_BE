"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfTypeCustomError = exports.instanceOfTypeIUser = void 0;
function instanceOfTypeIUser(object) {
    return object._id;
}
exports.instanceOfTypeIUser = instanceOfTypeIUser;
function instanceOfTypeCustomError(object) {
    return object[0].code;
}
exports.instanceOfTypeCustomError = instanceOfTypeCustomError;
