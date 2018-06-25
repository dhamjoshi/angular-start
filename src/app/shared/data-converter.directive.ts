import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
    selector: '[appDataConverter]',
})
export class DataConverterDirective {


    @Input() date: string;
    @Output() convertedDate = new EventEmitter<string>();

    constructor() {
        setTimeout(() => {
            this.convertedDate.emit(this.date);
        }, 2000);
    }

    // @HostListener('show') onClick() {
    //     this.convertedDate.emit(this.date + ' yes');
    // }

}
