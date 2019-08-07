(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/platform-browser", "@angular/core", "./app"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var platform_browser_1 = require("@angular/platform-browser");
    var core_1 = require("@angular/core");
    var app_1 = require("./app");
    // includes the new-cmp component we created
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [
                    app_1.App
                ],
                imports: [
                    platform_browser_1.BrowserModule
                ],
                exports: [app_1.App],
                providers: [],
                bootstrap: [app_1.App] //for bootstrap the AppComponent the main app component is given.
            })
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map