import { Component } from '@angular/core';
import { CustomerComponent } from "../customer/customer.component";
import { ConditionalWillData } from '../conditional-will-data';
import { WillData } from '../will-data';

@Component({
    selector: 'app-generate-will',
    standalone: true,
    templateUrl: './generate-will.component.html',
    styleUrl: './generate-will.component.css',
    imports: [CustomerComponent]
})
export class GenerateWillComponent {

}
