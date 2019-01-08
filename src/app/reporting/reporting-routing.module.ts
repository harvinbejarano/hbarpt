import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		data: { title: 'Reporting' },
		children: [
			{
				path: 'main',
				component: MainComponent
			},
			{
				path: '',
				redirectTo: 'main',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ReportingRoutingModule { }