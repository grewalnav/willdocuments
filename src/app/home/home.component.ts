import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepsComponent } from '../steps/steps.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeComponent,
    StepsComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Output() select = new EventEmitter<boolean>();
  onSelectGenerate(){
    this.select.emit(true);
  }
}
