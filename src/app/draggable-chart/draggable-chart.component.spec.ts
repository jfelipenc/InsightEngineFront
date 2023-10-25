import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableChartComponent } from './draggable-chart.component';

describe('DraggableChartComponent', () => {
  let component: DraggableChartComponent;
  let fixture: ComponentFixture<DraggableChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableChartComponent]
    });
    fixture = TestBed.createComponent(DraggableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
