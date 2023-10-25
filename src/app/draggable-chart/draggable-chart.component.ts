import {Component} from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'cdk-drag-div',
  templateUrl: 'draggable-chart.component.html',
  styleUrls: ['draggable-chart.component.scss'],
  standalone: true,
  imports: [CdkDrag],
})
export class DraggableChartComponent {}
