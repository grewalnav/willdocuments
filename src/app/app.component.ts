import { Component, Input } from '@angular/core';
import { StepsComponent } from './steps/steps.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SimpleWillComponent } from './basic-will/simple-will.component';
import { CustomerComponent } from './customer/customer.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { NavBarComponent } from "./navigationbar/navbar.component";
import { GenerateWillComponent } from "./generate-will/generate-will.component";
import { ConditionalWillComponent } from "./conditional-will/conditional-will.component";
import { TrustWillComponent } from './trust-will/trust-will.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
    CommonModule,
    HomeComponent,
    StepsComponent,
    SimpleWillComponent,
    CustomerComponent,
    BeneficiariesComponent,
    NavBarComponent,
    GenerateWillComponent,
    ConditionalWillComponent,
    TrustWillComponent
]
})
export class AppComponent {
  title = 'WillDocs';
  selectGenerate = false;
  willSelection = '';
  
  constructor(){}

  setSelectGenerate(generate: boolean){
    this.selectGenerate = generate;
  }

  setWillSelection(willSelection: string){
    this.willSelection = willSelection;
  }
}























 