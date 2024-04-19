import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccueilComponent } from './view-accueil.component';

describe('ViewAccueilComponent', () => {
  let component: ViewAccueilComponent;
  let fixture: ComponentFixture<ViewAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
