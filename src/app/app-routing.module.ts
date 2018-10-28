import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { CoreModule } from './core/core.module';
// import * as core from '@app/core';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" }
	// ,{ path: '**', component: core.HomeComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(approutes, { enableTracing: false })
	],
	declarations: [
	]
})

export class AppRoutingModule {}