import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraindelpageComponent } from './traindelpage.component';

describe('TraindelpageComponent', () => {
  let component: TraindelpageComponent;
  let fixture: ComponentFixture<TraindelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraindelpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraindelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
