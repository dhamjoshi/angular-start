import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownDirective} from './dropdown.directive';
import { DataConverterDirective } from './data-converter.directive';

@NgModule({
    declarations: [
        DropdownDirective,
        DataConverterDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        DataConverterDirective
    ]
})
export class SharedModule {

}