import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewRegionsComponent } from './crew-regions.component';

describe('CrewRegionsComponent', () => {
  let component: CrewRegionsComponent;
  let fixture: ComponentFixture<CrewRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewRegionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
