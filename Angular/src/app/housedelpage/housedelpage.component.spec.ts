import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousedelpageComponent } from './housedelpage.component';

describe('HousedelpageComponent', () => {
  let component: HousedelpageComponent;
  let fixture: ComponentFixture<HousedelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousedelpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousedelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
