import { Component } from '@angular/core';
import { TrustWillData } from '../trust-will';
import { WillService } from '../will.service';
import { CustomerComponent } from '../customer/customer.component';
import { BeneficiaryListComponent } from '../beneficiary-list/beneficiary-list.component';

@Component({
  selector: 'app-trust-will',
  standalone: true,
  imports: [CustomerComponent,
    BeneficiaryListComponent
  ],
  templateUrl: './trust-will.component.html',
  styleUrl: './trust-will.component.css'
})
export class TrustWillComponent {
  willData! : TrustWillData;
  
  constructor(private willService:WillService) {
  
    this.willData = <TrustWillData>this.willService.getWillData();
    if(!this.willData.type){
      this.willData.type = 'Trust'
    }
    this.willService.setWillData(this.willData);
  }
}
