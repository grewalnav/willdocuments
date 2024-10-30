import { Component } from '@angular/core';
import { WillService } from '../will.service';
import { ConditionalWillData } from '../conditional-will-data';
import { FormsModule } from '@angular/forms';
import { compileDeclareClassMetadata } from '@angular/compiler';
import { WillCondition } from '../will-condition';

@Component({
  selector: 'app-condition-list',
  standalone: true,
  imports: [FormsModule
  ],
  templateUrl: './condition-list.component.html',
  styleUrl: './condition-list.component.css'
})
export class ConditionListComponent {

  condition! : string;
  edit!: true | false;
  editId! : number;
  newCondition! : true | false;
  willData! : ConditionalWillData;

  constructor(private willService:WillService){
    this.newCondition = false;
    this.willData = <ConditionalWillData>this.willService.getWillData();
  }

  onEdit(id:number){
    this.condition = '';
    this.edit = true;

    var willCondition = this.willData.conditions.find((condition) => {
      if(condition.id == id){
        return condition;
      }
      return null;
    });
    this.editId = id;
    this.condition = willCondition ? willCondition.description : '';
  }

  onNew(){
    this.condition = '';
    this.newCondition = true;
  }

  onUpdate(){

    var willData = <ConditionalWillData>this.willService.getWillData();
    if(this.editId){
      var conditions = willData.conditions.map((cnd) => {
        if (cnd.id === this.editId) {
            return {
                ...cnd,
                description: this.condition
            };
        }
        return cnd;
      });
      willData.conditions = conditions;
      this.willService.setWillData(willData);
    }
    this.edit = false;
  }

  onSave(){

    var willData = <ConditionalWillData>this.willService.getWillData();

    var id = 1
    if(willData.conditions){
      const ids = willData.conditions.map((condition) => condition.id);
      id = Math.max(...ids) + 1;
    }
    var willCondition = {
      id : id,
      description: this.condition
    }
    if(!willData.conditions){
      willData.conditions = [];
    }
    willData.conditions.push(willCondition);
    this.newCondition = false;
    this.willService.setWillData(willData);
  }

  onGenerate(){
    this.willService.getDocument();
  }
}
