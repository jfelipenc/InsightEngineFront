import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsComponent } from './agents.component';
import { AgentsRoutingModule } from './agents-routing.module';



@NgModule({
  declarations: [
    AgentsComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
