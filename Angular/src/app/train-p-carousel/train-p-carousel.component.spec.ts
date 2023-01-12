import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainPCarouselComponent } from './train-p-carousel.component';

describe('TrainPCarouselComponent', () => {
  let component: TrainPCarouselComponent;
  let fixture: ComponentFixture<TrainPCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainPCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainPCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
