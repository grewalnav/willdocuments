import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WillService } from '../will.service';
import { CustomerComponent } from "../customer/customer.component";
import { WillData } from '../will-data';
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";

@Component({
  selector: 'app-beneficiaries',
  standalone: true,
  imports: [
    FormsModule,
    CustomerComponent,
    CustomerDetailsComponent
],
  templateUrl: './beneficiaries.component.html',
  styleUrl: './beneficiaries.component.css'
})
export class BeneficiariesComponent {

  willData? : WillData;
  
  constructor(private willService:WillService) {
    this.willData = this.willService.getWillData();
  }
}
