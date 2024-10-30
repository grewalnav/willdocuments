import { Component, Input } from '@angular/core';
import { WillData } from '../will-data';
import { WillService } from '../will.service';
import { FormsModule } from '@angular/forms';
import { AddressData } from '../address-data';
import { TrustWillData } from '../trust-will';
@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  @Input() customerType! : 'testator' | 'beneficiary';
  willData! : WillData;
  firstName!: string;
  lastName!: string;
  address!: string;
  city!: string;
  province!: string;
  trustee!: string;
  trustName!: string;

  constructor(private willService:WillService) {
    
    var willData = this.willService.getWillData();
    this.willData = willData;
    this.customerType = 'testator';
  }

  onContinue(){
    var willData = this.willService.getWillData();
    if(!willData.user.complete){
      willData.user.firstName = this.firstName;
      willData.user.lastName = this.lastName;
      willData.user.addressData.address = this.address;
      willData.user.addressData.city = this.city;
      willData.user.addressData.province = this.province;
      willData.user.complete = true;
    }else{
      this.setBeneficiary();
    }
    if('Trust' === willData.type){
      var trust = <TrustWillData>willData;
      trust.trustName = this.trustName;
      trust.trustee = this.trustee;
    }

    this.willData = willData;
    this.willService.setWillData(willData);
  }

  setBeneficiary(){
    
    var willData = this.willService.getWillData();
    var id = 1

    var beneficiary = {
      firstName : this.firstName,
      lastName : this.lastName,
      middleName : '',
      addressData : {
        address : this.address,
        city : this.city,
        province : this.province
      },
      complete : true
    }
    if(!willData.beneficiaries){
      willData.beneficiaries = [];
    }
    willData.beneficiaries.push(beneficiary);
    this.willData.newBeneificiary = false;
    this.willData.complete = false;
    this.willService.setWillData(willData);
    this.willData = willData;
  }

  onGenerate(){
    var willData = this.willService.getWillData();  

    if(willData.type === 'Simple'){
      this.setBeneficiary();
    }
    this.willService.getDocument();
  }
}
