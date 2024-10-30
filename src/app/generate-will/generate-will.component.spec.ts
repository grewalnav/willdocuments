import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWillComponent } from './generate-will.component';

describe('GenerateWillComponent', () => {
  let component: GenerateWillComponent;
  let fixture: ComponentFixture<GenerateWillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateWillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
