import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleWillComponent } from './simple-will.component';
describe('SimpleWillComponent', () => {
  let component: SimpleWillComponent;
  let fixture: ComponentFixture<SimpleWillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleWillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
