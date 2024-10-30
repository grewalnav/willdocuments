import { Component, Inject, Input, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WillOption } from '../willoption';
import { WillService } from '../will.service';
import { NavBarComponent } from '../navigationbar/navbar.component';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {

  willOptionList: WillOption[] = [];
  willService: WillService = inject(WillService);

  constructor() {
    this.willOptionList = this.willService.getWillOptions();
    console.log(this.willOptionList.length);
  }
  
  @Output() willSelection = new EventEmitter<string>();
  
  onSelectWill(willSelection:string){
    this.willSelection.emit(willSelection);
  }
}