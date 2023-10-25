import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsightagentService } from 'src/app/services/insightagent.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent {
  constructor(private api:InsightagentService) {}

  agent_response = {};
  task_id = "";
  user_input = "";

  chartData = [{x: 'Sample', y: 1}];

  chartData_sample1 = [
    {label: 'Central', y: 11139},
    {label: 'East', y: 6002},
    {label: 'West', y: 2486}
  ]

  chartOptions = {}
  message_list:Array<any> = [{'role': 'agent', "message": this.chartData}];

  onSendEvent() {
    this.api.sendEvent(this.user_input).subscribe((data:any)=>{
      console.log(data);
      this.agent_response = data;
      this.task_id = data.task_id;
      //this.message_list.push({"role": "user", "message": this.user_input});
      this.user_input = "";
      this.onStartTask(this.task_id);
      this.chartData = data.data;
      this.chartOptions = {
        title: {
          text: "Test",
        },
        data: [{
          type: "column",
          dataPoints: this.chartData
        }]
      }
    });
  }

  onStartTask(task_id: string) {
    this.api.startTask(task_id).subscribe((data:any)=>{
      console.log(data);
      this.agent_response = data;
      if (!data.is_last) {
        this.onStartTask(data.task_id);
      } else {
        this.onEndTask(task_id);
      }
    });
  }

  onEndTask(task_id: string) {
    this.api.endTask(task_id).subscribe((data:any)=>{
      this.message_list.push({"role": "agent", "message": data.data});
      this.chartData = data.data;
    });
  }

}
