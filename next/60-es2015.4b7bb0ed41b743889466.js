(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{uU2g:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateModule",(function(){return le}));var o,a=n("2kYt"),r=n("nIj0"),i=n("sEIs"),l=n("SVIu"),u=n("hLNI"),m=n("Qq0t"),d=n("dvRg"),p=n("Piem"),s=n("EM62"),c=n("l4xa"),f=n("LusI"),y=n("K/iL"),T=n("OZlg"),h=n("e0eB"),C=n("iyc4"),x=n("eB8V"),g=n("XFXp"),b=n("KG37"),D=n("kNZY");o=$localize`:␟ea0633f6d0c9ee8d7a1c6d08fe4d447c34494256␟54715030600255886: If a field is optional, but unfinished field should be marked as invalid, use ${"\ufffd#3\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: directive `;let V=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(new c.TuiDay(2017,0,15))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-1"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup","tuiTextfieldCleaner"],["tuiUnfinishedValidator","Finish filling the field","formControlName","testValue"],["formControlName","testValue"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"p"),s["\u0275\u0275i18nStart"](2,o),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-input-date",1),s["\u0275\u0275text"](5," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](6,"tui-field-error",2),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("formGroup",t.testForm)("tuiTextfieldCleaner",!0)},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.b,g.a,b.a,r.NgControlStatus,r.FormControlName,D.a],encapsulation:2,changeDetection:0}),e})();var S=n("2wTY"),E=n("gEyt");let F=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(new c.TuiDay(2017,2,15))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-2"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4",3,"tuiTextfieldLabelOutside"],["formControlName","testValue"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"tui-input-date",1),s["\u0275\u0275text"](2," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-input-date",2),s["\u0275\u0275text"](4," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-input-date",3),s["\u0275\u0275text"](6," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,g.a,r.NgControlStatus,r.FormControlName,S.b,E.b],encapsulation:2,changeDetection:0}),e})(),_=(()=>{class e{constructor(){this.from=null,this.to=null,this.min=new c.TuiDay(2017,9,4),this.max=c.TuiDay.currentLocal(),this.items=[new d.TuiNamedDay(c.TUI_LAST_DAY.append({year:-1}),"Until today",c.TuiDay.currentLocal())]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-3"]],decls:8,vars:6,consts:[[1,"tui-text_h4"],[1,"b-form"],[3,"min","max","ngModel","ngModelChange"],[3,"min","items","ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h2",0),s["\u0275\u0275text"](1,"Taiga UI usage experience"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p",1),s["\u0275\u0275elementStart"](3,"tui-input-date",2),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.from=e})),s["\u0275\u0275text"](4," Start "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p",1),s["\u0275\u0275elementStart"](6,"tui-input-date",3),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.to=e})),s["\u0275\u0275text"](7," Finish "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("min",t.min)("max",t.max)("ngModel",t.from),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("min",t.from||t.min)("items",t.items)("ngModel",t.to))},directives:[g.a,r.NgControlStatus,r.NgModel],encapsulation:2,changeDetection:0}),e})();var v,P=n("EPR0"),w=n("yHor"),M=n("zGJC"),I=n("FSyC"),A=n("CDxv"),N=n("RlDx"),G=n("u8jZ");v=$localize`:␟ddd09b0dc90b14d703c812c7556a93889bc7fe02␟8216643466856387288:Input with a calendar`;const H=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],L=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`],O=["heading",$localize`:␟eb73759f9121c31958ef3331f1a481a509877cb5␟6714747026286972804:With named dates`];function k(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",2),s["\u0275\u0275i18n"](1,v),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](3,H),s["\u0275\u0275element"](4,"tui-input-date-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](6,L),s["\u0275\u0275element"](7,"tui-input-date-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](9,O),s["\u0275\u0275element"](10,"tui-input-date-example-3"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3)}}function $(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-date",14),s["\u0275\u0275text"](1," Choose a date "),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("min",e.min)("max",e.max)("markerHandler",e.markerHandler)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("disabledItemHandler",e.disabledItemHandler)("items",e.items)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}var z,U,R,Y,j,B,K,J;function Z(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,z),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function q(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,U),s["\u0275\u0275element"](1,"div"),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"]())}function W(e,t){1&e&&s["\u0275\u0275i18n"](0,R)}function X(e,t){1&e&&s["\u0275\u0275i18n"](0,Y)}function Q(e,t){1&e&&s["\u0275\u0275i18n"](0,j)}function ee(e,t){1&e&&s["\u0275\u0275i18n"](0,B)}function te(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",6),s["\u0275\u0275template"](1,$,2,18,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,Z,2,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](4,q,3,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabledItemHandler=t})),s["\u0275\u0275template"](5,W,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().items=t})),s["\u0275\u0275template"](6,X,1,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().markerHandler=t})),s["\u0275\u0275template"](7,Q,1,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().min=t})),s["\u0275\u0275template"](8,ee,1,0,"ng-template",12),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().max=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"inherited-documentation",13)}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("dropdown",!0)}}function ne(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",15),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,K),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18nStart"](8,J),s["\u0275\u0275element"](9,"code"),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-doc-code",17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"li"),s["\u0275\u0275text"](13," Use "),s["\u0275\u0275elementStart"](14,"code"),s["\u0275\u0275text"](15,"TuiInputDate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](16," in template: "),s["\u0275\u0275element"](17,"tui-doc-code",18),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleDeclareForm),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}z=$localize`:␟31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35␟472633322147615044: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,U=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,R=$localize`:␟537796d614601f54059199b6f42a55fd283fa400␟6619372356871511006: A list of preset dates for dropdown `,Y=$localize`:␟f8f45d3aaac30e82d76043430e84bc125f1317f4␟7803518593552218835: A handler that gets date and returns null or a tuple with circled marker colors `,j=$localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `,B=$localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `,K=$localize`:␟d6e31f4f06b4d40014f6119f093c205acd552f9c␟5134111589952919605: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputDateModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,J=$localize`:␟24bd9acf98b087a0155b1bc8707249be28559a1e␟3960939324467592851: Declare a form (${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:) or a control (${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:) in your component: `,J=s["\u0275\u0275i18nPostprocess"](J);const oe=["primary","secondary"],ae=["success"];let re=(()=>{class e extends f.a{constructor(){super(...arguments),this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl(),\n    });\n}\n",this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputDateModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputDateModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-date formControlName="testValue">\n        Choose a date\n    </tui-input-date>\n</form>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-date-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiDay(2017, 0, 15)),\n    });\n}\n",HTML:'<form class="b-form" [formGroup]="testForm" [tuiTextfieldCleaner]="true">\n    <p i18n>\n        If a field is optional, but unfinished field should be marked as\n        invalid, use\n        <code>tuiUnfinishedValidator</code> directive\n    </p>\n    <tui-input-date\n        tuiUnfinishedValidator="Finish filling the field"\n        formControlName="testValue"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-field-error formControlName="testValue"></tui-field-error>\n</form>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-date-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiDay(2017, 2, 15)),\n    });\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <tui-input-date formControlName="testValue" tuiTextfieldSize="s">\n        Choose a date\n    </tui-input-date>\n    <tui-input-date\n        class="tui-space_vertical-4"\n        formControlName="testValue"\n        tuiTextfieldSize="m"\n        [tuiTextfieldLabelOutside]="true"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-input-date formControlName="testValue"> Choose a date </tui-input-date>\n</form>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';\nimport {TuiNamedDay} from '@taiga-ui/kit';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-date-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample3 {\n    from: TuiDay | null = null;\n    to: TuiDay | null = null;\n    min = new TuiDay(2017, 9, 4);\n    max = TuiDay.currentLocal();\n    items = [\n        new TuiNamedDay(\n            TUI_LAST_DAY.append({year: -1}),\n            'Until today',\n            TuiDay.currentLocal(),\n        ),\n    ];\n}\n",HTML:'<h2 class="tui-text_h4">Taiga UI usage experience</h2>\n<p class="b-form">\n    <tui-input-date [min]="min" [max]="max" [(ngModel)]="from">\n        Start\n    </tui-input-date>\n</p>\n<p class="b-form">\n    <tui-input-date [min]="from || min" [items]="items" [(ngModel)]="to">\n        Finish\n    </tui-input-date>\n</p>\n'},this.minVariants=[c.TUI_FIRST_DAY,new c.TuiDay(2017,2,5),new c.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[c.TUI_LAST_DAY,new c.TuiDay(2017,11,11),new c.TuiDay(2020,2,5),new c.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[c.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new d.TuiNamedDay(c.TUI_LAST_DAY.append({year:-1}),"Until today")]],this.markerHandlerVariants=[m.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?oe:ae],this.markerHandler=this.markerHandlerVariants[0],this.items=this.itemsVariants[0],this.autocompleteVariants=["off","bday"],this.autocomplete=null,this.cleaner=!1,this.control=new r.FormControl(null,r.Validators.required)}}return e.\u0275fac=function(t){return ie(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-date"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:y.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputDate","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","base",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","named",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiNamedDay[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","min","max","markerHandler","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","disabledItemHandler","items","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiHintContent","tuiHintDirection","tuiHintMode"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,k,11,3,"ng-template",1),s["\u0275\u0275template"](2,te,10,13,"ng-template",1),s["\u0275\u0275template"](3,ne,18,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[T.a,h.a,C.a,V,F,_,P.a,w.a,M.a,I.a,g.a,r.NgControlStatus,r.FormControlDirective,A.b,x.b,E.b,S.b,N.a,G.a],encapsulation:2,changeDetection:0}),e})();const ie=s["\u0275\u0275getInheritedFactory"](re);let le=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.h,p.a,r.ReactiveFormsModule,r.FormsModule,a.c,m.TuiLinkModule,d.TuiRadioListModule,m.TuiButtonModule,d.TuiInputDateModule,u.TuiMobileCalendarDialogModule,d.TuiUnfinishedValidatorModule,m.TuiTextfieldControllerModule,m.TuiHintControllerModule,d.TuiFieldErrorModule,i.f.forChild(Object(l.o)(re))]]}),e})()}}]);