import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustWillComponent } from './trust-will.component';

describe('TrustWillComponent', () => {
  let component: TrustWillComponent;
  let fixture: ComponentFixture<TrustWillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustWillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrustWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
