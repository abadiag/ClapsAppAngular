import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit, OnDestroy {

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  title: string = "Chart title";
  data: Array<number> = [];
  lineChartData: ChartDataSets[] = [{ data: this.data, label: this.title },];
  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0.1
      }
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
      borderWidth: 1,

    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  interval: any = -1;

  constructor() { }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private updateSeries() {
    console.log("new data");
    let value = Math.random() * (1000 - 0) + 0;

    this.data?.push(value);
    this.lineChartLabels.push("");

    if (this.lineChartData[0].data != null && this.lineChartLabels.length > 50) {
      this.lineChartLabels.shift();
      this.lineChartData[0].data.shift();
    }

    this.chart.update();
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.updateSeries();
    }, 300);
  }
}
