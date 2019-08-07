(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/core", "rxjs", "jquery"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var core_1 = require("@angular/core");
    require("rxjs");
    var jquery_1 = require("jquery");
    var App = /** @class */ (function () {
        function App() {
            this.elements = [];
            this.components = [{ type: 'textelem', contenteditable: true, style: 'border: 1px solid black;' }];
            this.currentChosen = '';
            this.dialogShown = -1;
            this.rectShown = false;
            this.circleShown = false;
            this.lineParams = {
                selectedLength: 0,
                selectedAngle: 0
            };
            this.circleParams = {
                selectedRadius: 0
            };
            this.rectParams = {
                selectedHeight: 0,
                selectedWidth: 0
            };
            this.chartParams = {
                type: '',
                points: [{}],
                numpoints: 0,
                title: '',
                x_title: ''
            };
            this.numbers = 30;
        }
        App.prototype.ngOnInit = function () {
        };
        ;
        App.prototype.createCircle = function () {
            this.createImage({ 'action': 'circle', 'radius': this.circleParams.selectedRadius });
        };
        App.prototype.createRect = function () {
            this.createImage({ 'action': 'rect', 'width': this.rectParams.selectedWidth, 'height': this.rectParams.selectedHeight });
        };
        App.prototype.createChart = function () {
            this.createImage({ 'action': 'chart', 'type': this.chartParams.type, 'title': this.chartParams.title, 'x_title': this.chartParams.x_title, 'points': JSON.stringify(this.chartParams.points) });
        };
        App.prototype.showpoints = function () {
            for (var i = 0; i < this.chartParams.numpoints; i++) {
                this.chartParams.points.push({ 'x': 0, 'y': 0 });
            }
        };
        App.prototype.createLine = function () {
            this.createImage({ 'action': 'line', 'angle': this.lineParams.selectedAngle, 'length': this.lineParams.selectedLength });
        };
        App.prototype.createImage = function (data) {
            jquery_1.default.get('./apis/ImageCreator.php', data, function (res) {
                this.components.push({ 'type': 'pict', 'src': res });
                this.components.push({ type: 'textelem', contenteditable: true, style: 'border: 1px solid black;' });
                this.dialogShown = -1;
            });
        };
        App = tslib_1.__decorate([
            core_1.Component({
                selector: 'app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            })
        ], App);
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map