import { Component } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { WillData } from '../will-data';
import { WillService } from '../will.service';
import { FormsModule } from '@angular/forms';
import { BeneficiaryListComponent } from "../beneficiary-list/beneficiary-list.component";

@Component({
  selector: 'app-simple-will',
  standalone: true,
  imports: [
    CustomerComponent,
    FormsModule,
    BeneficiaryListComponent
],
  templateUrl: './simple-will.component.html',
  styleUrl: './simple-will.component.css'
})
export class SimpleWillComponent {

  willData! : WillData;
  
  constructor(private willService:WillService) {
  
    this.willData = this.willService.getWillData();
    if(!this.willData.type){
      this.willData.type = 'Simple',
      this.willData.description = "Legal document that outlines how a person's assets and property should be distributed"
    }
    this.willService.setWillData(this.willData);
  }
}
