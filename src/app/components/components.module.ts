import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [BarChartComponent,LineChartComponent,PieChartComponent],
  imports: [
    CommonModule
  ],
  exports:[BarChartComponent,LineChartComponent,PieChartComponent]
})
export class ComponentsModule { }
