function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f17eb6975c7e319b982144e2bd8f0ee6999e9eb2e\u241f3799636229807761262:Add to the template and subscribe to a change:"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241fee3535fd7de8923a9860a04ad66f8ca6a6b1816c\u241f1761684921758848298: Import ",":START_TAG_CODE:TuiActiveZoneModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fdbc6ad292bce741b6302c6fc70a32a796734e2fa\u241f8188585896827437796:Composite zone"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fb0461d976f76625f8dc8233134510cf5907e142a\u241f1047788801899995836:",":START_TAG_CODE:tuiActiveZone",":CLOSE_TAG_CODE: allows to track a scope that user interacts with. For example, for closing dropdown on blur "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f12cbb0bfca7aa943e6579cb408b6e5cad88c810b\u241f4573156301401658203:ActiveZone"]);return _templateObject3=function(){return e},e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa18de0931ff43128131c2fcc6058c5f7542df1e0\u241f1484761029469449608:Zone keeps active after browser tab change"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f11519659bbf81c382d923a03160092c5fae703c1\u241f5152176968223483163: You can bind different elements with ",":START_TAG_CODE:[tuiActiveZoneParent]",":CLOSE_TAG_CODE: directive "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{UaWz:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiActiveZoneModule",(function(){return w}));var i,a,o=n("2kYt"),c=n("sEIs"),l=n("SVIu"),r=n("l4xa"),u=n("Qq0t"),p=n("dvRg"),d=n("EM62"),m=n("OZlg"),s=n("e0eB"),v=n("iyc4"),f=n("4hRd"),b=n("zV1d"),h=n("GdrL");i=$localize(_templateObject(),"\ufffd#23\ufffd","\ufffd/#23\ufffd"),a=$localize(_templateObject2());var A,C,_=((A=function(){function e(){_classCallCheck(this,e),this.childActive=!1,this.parentActive=!1,this.items=[1,2,3]}return _createClass(e,[{key:"onParentActiveZone",value:function(e){this.parentActive=e}},{key:"onChildActiveZone",value:function(e){this.childActive=e}},{key:"onClick",value:function(e){var t=e.nativeFocusableElement;t&&Object(r.setNativeFocused)(t)}}]),e}()).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=d["\u0275\u0275defineComponent"]({type:A,selectors:[["tui-active-zone-example-1"]],decls:30,vars:7,consts:[["placeholder","input outside a zone"],[1,"active-zone",3,"tuiActiveZoneChange"],["parent","tuiActiveZone"],["tuiButton","","type","button"],[1,"active-zone",3,"tuiActiveZoneParent","tuiActiveZoneChange"],["input",""],["placeholder","input outside zone"],[3,"click"]],template:function(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"p"),d["\u0275\u0275element"](5,"input",0),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"div",1,2),d["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onParentActiveZone(e)})),d["\u0275\u0275elementStart"](8,"h2"),d["\u0275\u0275text"](9,"Parent zone"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"button",3),d["\u0275\u0275text"](11,"A button inside zone"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"p"),d["\u0275\u0275elementStart"](13,"button"),d["\u0275\u0275text"](14,"A button outside of zone"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"div",4),d["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onChildActiveZone(e)})),d["\u0275\u0275elementStart"](16,"h2"),d["\u0275\u0275text"](17,"Child zone"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"tui-input",null,5),d["\u0275\u0275text"](20,"Input inside zone"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"p"),d["\u0275\u0275i18nStart"](22,i),d["\u0275\u0275element"](23,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"p"),d["\u0275\u0275element"](25,"input",6),d["\u0275\u0275elementStart"](26,"button",7),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=d["\u0275\u0275reference"](19);return t.onClick(e)})),d["\u0275\u0275text"](27,"Focus input in zone"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"p"),d["\u0275\u0275i18n"](29,a),d["\u0275\u0275elementEnd"]()}if(2&e){var o=d["\u0275\u0275reference"](7);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("Parent zone: ",t.parentActive,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("Child zone: ",t.childActive,""),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("active-zone_active",t.parentActive),d["\u0275\u0275advance"](9),d["\u0275\u0275classProp"]("active-zone_active",t.childActive),d["\u0275\u0275property"]("tuiActiveZoneParent",o)}},directives:[f.a,b.a,h.a],styles:[".active-zone[_ngcontent-%COMP%]{padding:1.25rem;border:2px solid}.active-zone_active[_ngcontent-%COMP%]{border-color:var(--tui-primary)}"],changeDetection:0}),A),g=n("u8jZ"),z=["header",$localize(_templateObject3())];C=$localize(_templateObject4(),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var E,O,T=["heading",$localize(_templateObject5())];function x(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,C),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](4,T),d["\u0275\u0275element"](5,"tui-active-zone-example-1"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example1)}}function Z(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",4),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,E),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,O),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",6),d["\u0275\u0275element"](10,"tui-doc-code",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",n.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",n.exampleInsertTemplate),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("code",n.exampleComponent)}}E=$localize(_templateObject6(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),O=$localize(_templateObject7());var S,y,j=((y=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiActiveZoneModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiActiveZoneModule\n    ],\n...\n",this.exampleInsertTemplate='<div (tuiActiveZoneChange)="onActiveZone($event)">\n    <button tuiButton type="button">\n        Button 1\n    </button>\n    <button tuiButton type="button">\n        Button 2\n    </button>\n</div>\n',this.exampleComponent="active = false;\n\nonActiveZone(active: boolean) {\n    this.active = active;\n}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {setNativeFocused} from '@taiga-ui/cdk';\nimport {TuiInputComponent} from '@taiga-ui/kit';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-active-zone-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiActiveZoneExample1 {\n    childActive = false;\n\n    parentActive = false;\n\n    items = [1, 2, 3];\n\n    onParentActiveZone(active: boolean) {\n        this.parentActive = active;\n    }\n\n    onChildActiveZone(active: boolean) {\n        this.childActive = active;\n    }\n\n    onClick({nativeFocusableElement}: TuiInputComponent) {\n        if (nativeFocusableElement) {\n            setNativeFocused(nativeFocusableElement);\n        }\n    }\n}\n",HTML:'<p>Parent zone: {{parentActive}}</p>\n<p>Child zone: {{childActive}}</p>\n<p>\n    <input placeholder="input outside a zone" />\n</p>\n<div\n    #parent="tuiActiveZone"\n    class="active-zone"\n    [class.active-zone_active]="parentActive"\n    (tuiActiveZoneChange)="onParentActiveZone($event)"\n>\n    <h2>Parent zone</h2>\n    <button tuiButton type="button">A button inside zone</button>\n</div>\n<p>\n    <button>A button outside of zone</button>\n</p>\n<div\n    class="active-zone"\n    [class.active-zone_active]="childActive"\n    [tuiActiveZoneParent]="parent"\n    (tuiActiveZoneChange)="onChildActiveZone($event)"\n>\n    <h2>Child zone</h2>\n    <tui-input #input>Input inside zone</tui-input>\n    <p i18n>\n        You can bind different elements with\n        <code>[tuiActiveZoneParent]</code> directive\n    </p>\n</div>\n<p>\n    <input placeholder="input outside zone" />\n    <button (click)="onClick(input)">Focus input in zone</button>\n</p>\n<p i18n>Zone keeps active after browser tab change</p>\n'}}).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=d["\u0275\u0275defineComponent"]({type:y,selectors:[["example-tui-active-zone"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","multiple",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,z),d["\u0275\u0275template"](2,x,6,1,"ng-template",1),d["\u0275\u0275template"](3,Z,11,3,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[m.a,s.a,v.a,_,g.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),y),w=((S=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[o.c,p.TuiInputModule,u.TuiButtonModule,r.TuiActiveZoneModule,l.h,c.f.forChild(Object(l.o)(j))]]}),S)}}]);