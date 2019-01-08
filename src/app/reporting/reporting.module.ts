import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { ReportingRoutingModule } from './reporting-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReportingRoutingModule,
    SharedModule,
  ],
  declarations: [MainComponent]
})
export class ReportingModule { }
