import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsComponent } from './agents.component';
import { AgentsRoutingModule } from './agents-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { DraggableChartComponent } from 'src/app/draggable-chart/draggable-chart.component';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AgentsComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    CanvasJSAngularChartsModule,
    CdkDrag,
    DraggableChartComponent,
    MatProgressSpinnerModule
  ]
})
export class AgentsModule { }
