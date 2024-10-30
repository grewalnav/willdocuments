import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalWillComponent } from './conditional-will.component';

describe('ConditionalWillComponent', () => {
  let component: ConditionalWillComponent;
  let fixture: ComponentFixture<ConditionalWillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalWillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionalWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
