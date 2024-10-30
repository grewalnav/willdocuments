import { Component } from '@angular/core';
import { SimpleWillComponent } from "../basic-will/simple-will.component";
import { ConditionListComponent } from '../condition-list/condition-list.component';
import { WillData } from '../will-data';
import { WillService } from '../will.service';
import { ConditionalWillData } from '../conditional-will-data';
@Component({
  selector: 'app-conditional-will',
  standalone: true,
  imports: [SimpleWillComponent,
    ConditionListComponent
  ],
  templateUrl: './conditional-will.component.html',
  styleUrl: './conditional-will.component.css'
})
export class ConditionalWillComponent {

  willData! : ConditionalWillData;
  
  constructor(private willService:WillService) {
  
    this.willData = <ConditionalWillData>this.willService.getWillData();
    this.willData.type = 'Conditional',
    this.willData.description = "A conditional will is a type of last will and testament that includes provisions specifying that certain actions or events must occur before the will's instructions take effect."
    this.willService.setWillData(this.willData);
  }
}
