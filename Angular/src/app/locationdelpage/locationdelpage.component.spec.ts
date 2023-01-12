import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationdelpageComponent } from './locationdelpage.component';

describe('LocationdelpageComponent', () => {
  let component: LocationdelpageComponent;
  let fixture: ComponentFixture<LocationdelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationdelpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationdelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
