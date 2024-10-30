import { Component } from '@angular/core';
import { WillData } from '../will-data';
import { WillService } from '../will.service';
import { BeneficiariesComponent } from "../beneficiaries/beneficiaries.component";
@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [BeneficiariesComponent],
  templateUrl: './beneficiary-list.component.html',
  styleUrl: './beneficiary-list.component.css'
})
export class BeneficiaryListComponent {
  newBeneficiary! : true | false;
  willData! : WillData;

  constructor(private willService:WillService){
    this.willData = this.willService.getWillData();
    this.willData.newBeneificiary = false;
  }

  onNew(){
    this.willData.newBeneificiary = true;
  }

  onContinue(){
    this.willData.complete = true;
  }
  onGenerate(){
    this.willService.getDocument();
  }
}
