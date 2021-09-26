function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fd904032ec7cbd3e61941f6929b1c472bea849960\u241f734140032111794013: Use pipe in template with function and its arguments: "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f65c395d64edd4d33377f2d79f0ad80c133161295\u241f9195543244788770916: Import ",":START_TAG_CODE:TuiFilterPipeModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f94367b4a97b8f508723bb7e666f107af5f89034d\u241f1365788925292352994: Pipe for filtering an array ",":START_TAG_TUI_DOC_EXAMPLE:",":START_TAG_TUI_FILTER_EXAMPLE1:",":CLOSE_TAG_TUI_FILTER_EXAMPLE1:",":CLOSE_TAG_TUI_DOC_EXAMPLE:"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{kqSD:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilterModule",(function(){return M}));var a=n("2kYt"),l=n("sEIs"),i=n("T8fS"),r=n("SVIu"),c=n("l4xa"),m=n("Qq0t"),o=n("EM62"),p=n("OZlg"),d=n("e0eB"),u=n("iyc4"),s=n("DzXc");function f(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td",4),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td",5),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.name),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.price)}}var _,b,h,g,T=((_=function e(){_classCallCheck(this,e),this.items=[{name:"Sword",price:1e3},{name:"Axe",price:100},{name:"Spear",price:500}],this.matcher=function(e,t){return e.price>t}}).\u0275fac=function(e){return new(e||_)},_.\u0275cmp=o["\u0275\u0275defineComponent"]({type:_,selectors:[["tui-filter-example1"]],decls:9,vars:5,consts:[[1,"tui-table","table"],[1,"tui-table__th","cell_name"],[1,"tui-table__th","cell_sum"],[4,"ngFor","ngForOf"],[1,"tui-table__td","cell_name"],[1,"tui-table__td","cell_sum"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"table",0),o["\u0275\u0275elementStart"](1,"thead"),o["\u0275\u0275elementStart"](2,"tr"),o["\u0275\u0275elementStart"](3,"th",1),o["\u0275\u0275text"](4,"Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"th",2),o["\u0275\u0275text"](6,"Sum, $"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](7,f,5,2,"tr",3),o["\u0275\u0275pipe"](8,"tuiFilter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("ngForOf",o["\u0275\u0275pipeBind3"](8,1,t.items,t.matcher,300)))},directives:[a.s],pipes:[s.a],encapsulation:2,changeDetection:0}),_),E=n("u8jZ"),S=["heading",$localize(_templateObject())];function x(e,t){if(1&e&&(o["\u0275\u0275i18nStart"](0,b),o["\u0275\u0275elementStart"](1,"tui-doc-example",3),o["\u0275\u0275i18nAttributes"](2,S),o["\u0275\u0275element"](3,"tui-filter-example1"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275i18nEnd"]()),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("content",n.example1)}}function C(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"ol",4),o["\u0275\u0275elementStart"](1,"li"),o["\u0275\u0275elementStart"](2,"p"),o["\u0275\u0275i18nStart"](3,h),o["\u0275\u0275element"](4,"code"),o["\u0275\u0275i18nEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](5,"tui-doc-code",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"li"),o["\u0275\u0275elementStart"](7,"p"),o["\u0275\u0275i18n"](8,g),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](9,"tui-doc-code",6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("code",n.exampleImportModule),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}b=$localize(_templateObject2(),"\ufffd#1\ufffd","\ufffd#3\ufffd","\ufffd/#3\ufffd","\ufffd/#1\ufffd"),h=$localize(_templateObject3(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),g=$localize(_templateObject4());var O,v,y=((v=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiFilterPipeModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiFilterPipeModule\n    ],\n...\n",this.exampleInsertTemplate='<div *ngFor="let item of items | tuiFilter: matcher: someArg">\n    {{item}}\n</div>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nexport interface Item {\n    readonly name: string;\n    readonly price: number;\n}\n\n@Component({\n    selector: 'tui-filter-example1',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample1 {\n    readonly items: ReadonlyArray<Item> = [\n        {\n            name: 'Sword',\n            price: 1000,\n        },\n        {\n            name: 'Axe',\n            price: 100,\n        },\n        {\n            name: 'Spear',\n            price: 500,\n        },\n    ];\n\n    readonly matcher = (item: Item, search: number) => item.price > search;\n}\n",HTML:'<table class="tui-table table">\n    <thead>\n        <tr>\n            <th class="tui-table__th cell_name">Name</th>\n            <th class="tui-table__th cell_sum">Sum, $</th>\n        </tr>\n        <tr *ngFor="let item of items | tuiFilter: matcher: 300">\n            <td class="tui-table__td cell_name">{{item.name}}</td>\n            <td class="tui-table__td cell_sum">{{item.price}}</td>\n        </tr>\n    </thead>\n</table>\n'}}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=o["\u0275\u0275defineComponent"]({type:v,selectors:[["example-tui-filter"]],decls:3,vars:0,consts:[["header","Filter","package","CDK","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"tui-doc-page",0),o["\u0275\u0275template"](1,x,4,1,"ng-template",1),o["\u0275\u0275template"](2,C,10,2,"ng-template",2),o["\u0275\u0275elementEnd"]())},directives:[p.a,d.a,u.a,T,E.a],styles:[".cell[_ngcontent-%COMP%]{font-size:1rem;padding:1rem}.row[_ngcontent-%COMP%]:nth-child(odd){background:var(--tui-secondary)}.table[_ngcontent-%COMP%]{width:31.25rem;border:1px solid var(--tui-base-03)}"],changeDetection:0}),v),M=((O=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||O)},imports:[[c.TuiFilterPipeModule,i.TuiMoneyModule,a.c,r.h,m.TuiTableModeModule,l.f.forChild(Object(r.o)(y))]]}),O)}}]);