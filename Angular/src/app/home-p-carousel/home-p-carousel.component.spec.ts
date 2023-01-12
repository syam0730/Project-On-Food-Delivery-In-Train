import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePCarouselComponent } from './home-p-carousel.component';

describe('HomePCarouselComponent', () => {
  let component: HomePCarouselComponent;
  let fixture: ComponentFixture<HomePCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
