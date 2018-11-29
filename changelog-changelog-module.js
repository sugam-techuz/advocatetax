(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changelog-changelog-module"],{

/***/ "./src/app/changelog/changelog-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/changelog/changelog-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChangeLogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogRoutingModule", function() { return ChangeLogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changelog.component */ "./src/app/changelog/changelog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _changelog_component__WEBPACK_IMPORTED_MODULE_2__["ChangeLogComponent"],
        data: {
            title: 'ChangeLog'
        },
    }
];
var ChangeLogRoutingModule = /** @class */ (function () {
    function ChangeLogRoutingModule() {
    }
    ChangeLogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ChangeLogRoutingModule);
    return ChangeLogRoutingModule;
}());



/***/ }),

/***/ "./src/app/changelog/changelog.component.html":
/*!****************************************************!*\
  !*** ./src/app/changelog/changelog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 id=\"v60\" class=\"card-title\">Version 6.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">11-07-2018 [6.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular 7 in Apex Angular template and Starter kit </li>\n\t\t\t\t\t\t<li>ArchWizard component in forms section</li>\n\t\t\t\t\t\t<li>Select component in extra component section</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>All packages updated to latest version.</li>\n\t\t\t\t\t\t<li>drag and drop component and switch component have major version upgrade and code changes</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Minor design fixes</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 5.1</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">07-25-2018 [5.1]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>RTL version (Demo available)</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Packages updated to latest version.</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Navbar issue in small devices</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 5.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">06-09-2018 [5.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular 6 Latest version</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular, NgRx, NG-bootstrap and other Packages updated to latest version.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>NoUI Slider while running ng-serve</li>\n\t\t\t\t\t\t<li>HTML template - navbar dropdown z-index issue</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 4.2</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">03-22-2018 [4.2]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Top fix navbar option in Angular Starter kit</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular, NgRx, NG-bootstrap and other Packages updated to latest version.</li>\n\t\t\t\t\t\t<li>Removed Bourbon package and also from Timeline pages</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Radio button issue in forms pages in angular and HTML template</li>\n\t\t\t\t\t\t<li>HTML template - profile page responsive issue</li>\n\t\t\t\t\t\t<li>File upload issue in upload component and forms page in angular template</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 4.1</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">02-22-2018 [4.1]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>HTML Front-end Landing Page</li>\n\t\t\t\t\t\t<li>Top fix navbar option (Demo Available)/li>\n\t\t\t\t\t\t<li>HTML template - All 5 Demos now available in downloadable</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular, NgRx, NG-bootstrap and other Packages updated to latest version.</li>\n\t\t\t\t\t\t<li>Horizontal timeline page now fully converted to typescript version.</li>\n\t\t\t\t\t\t<li>Chat and Inbox page responsive design</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>User Profile page responsive issue.</li>\n\t\t\t\t\t\t<li>IE 11 issue.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 4.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">01-26-2018 [4.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Chat NgRx page in Angular template</li>\n\t\t\t\t\t\t<li>Taskboard NgRx page in Angular template</li>\n\t\t\t\t\t\t<li>Tags input page in angular and html template</li>\n\t\t\t\t\t\t<li>Switch page in angular and html template</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular Template and Starter kit Template Angular version updated to latest versiom (5.2.1)</li>\n\t\t\t\t\t\t<li>Bootstrap updated to latest version (Bootstrap 4 Stable) in Angular Template and Starter kit Template and HTML template</li>\n\t\t\t\t\t\t<li>Sweet alert package updated to latest version.</li>\n\t\t\t\t\t\t<li>NG-Bootstrap package updated to latest version.</li>\n\t\t\t\t\t\t<li>NG-Bootstrap Components</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Taskboard page minor bug in Angular template</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 3.1</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">12-26-2017 [3.1]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Recent Activity, Chat and Settings Sidebar tabbed panel For Angular and HTML Templates</li>\n\t\t\t\t\t\t<li>Image Cropper page For Angular and HTML Templates</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Packages for Angular Template and Starter kit Template updated to latest version</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>IOS scrolling issue</li>\n\t\t\t\t\t\t<li>Menu issue on small screen in starter kit.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 3.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">12-03-2017 [3.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>HTML(non-angular) Version</li>\t\t\t\t\t\t\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 2.1</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">11-21-2017 [2.1]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Search Page</li>\n\t\t\t\t\t\t<li>FAQ Page</li>\n\t\t\t\t\t\t<li>Knowledge Base Page</li>\n\t\t\t\t\t\t<li>Internationalization (i18n) Support</li>\n\t\t\t\t\t\t<li>Authentication Service</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular Version (5.0.2)</li>\n\t\t\t\t\t\t<li>starter kit</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t\t<li>Calendar</li>\n\t\t\t\t\t\t<li>Inbox</li>\n\t\t\t\t\t\t<li>Chat</li>\n\t\t\t\t\t\t<li>NGX Datatable</li>\n\t\t\t\t\t\t<li>NGX Charts</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Minor Bugs</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 2.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">11-10-2017 [2.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Taskboard</li>\n\t\t\t\t\t\t<li>Audio Player</li>\n\t\t\t\t\t\t<li>Video Player</li>\n\t\t\t\t\t\t<li>Chat - Audio & Video</li>\n\t\t\t\t\t\t<li>Drag n Drop</li>\n\t\t\t\t\t\t<li>Tour</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Updated to Angular 5+</li>\n\t\t\t\t\t\t<li>Updated starter kit to Angular 5+</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t\t<li>Calendar</li>\n\t\t\t\t\t\t<li>Sweet Alert</li>\n\t\t\t\t\t\t<li>Data Tables</li>\n\t\t\t\t\t\t<li>Quill Editor</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Minor Bugs & design flaws</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 1.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Initial Release</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/changelog/changelog.component.scss":
/*!****************************************************!*\
  !*** ./src/app/changelog/changelog.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/changelog/changelog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/changelog/changelog.component.ts ***!
  \**************************************************/
/*! exports provided: ChangeLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogComponent", function() { return ChangeLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangeLogComponent = /** @class */ (function () {
    function ChangeLogComponent() {
    }
    ChangeLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changelog',
            template: __webpack_require__(/*! ./changelog.component.html */ "./src/app/changelog/changelog.component.html"),
            styles: [__webpack_require__(/*! ./changelog.component.scss */ "./src/app/changelog/changelog.component.scss")]
        })
    ], ChangeLogComponent);
    return ChangeLogComponent;
}());



/***/ }),

/***/ "./src/app/changelog/changelog.module.ts":
/*!***********************************************!*\
  !*** ./src/app/changelog/changelog.module.ts ***!
  \***********************************************/
/*! exports provided: ChangeLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogModule", function() { return ChangeLogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _changelog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changelog-routing.module */ "./src/app/changelog/changelog-routing.module.ts");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changelog.component */ "./src/app/changelog/changelog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChangeLogModule = /** @class */ (function () {
    function ChangeLogModule() {
    }
    ChangeLogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _changelog_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangeLogRoutingModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_3__["MatchHeightModule"]
            ],
            exports: [],
            declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_4__["ChangeLogComponent"]],
            providers: [],
        })
    ], ChangeLogModule);
    return ChangeLogModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight ]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=changelog-changelog-module.js.map