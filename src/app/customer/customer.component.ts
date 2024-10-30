import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BeneficiariesComponent } from '../beneficiaries/beneficiaries.component';
import { FormsModule } from '@angular/forms';
import { WillService } from '../will.service';
import { WillData } from '../will-data';
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BeneficiariesComponent,
    CustomerDetailsComponent
],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  willData! : WillData;
  constructor(private willService:WillService) {
    this.willData = this.willService.getWillData();
  }
}