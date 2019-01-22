import { CategoryComponent } from './category/category.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportItemComponent } from './report-item/report-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReportingRoutingModule,
    SharedModule,
  ],
  declarations: [MainComponent,CategoryComponent, ReportItemComponent]
})
export class ReportingModule { }
