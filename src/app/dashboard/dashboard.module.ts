import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardHomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {DASHBOARD_ROUTES} from './dashboard-routing';
import {DashboardComponent} from './dashboard.component';
import {LayoutsModule} from '../layouts/layouts.module';


@NgModule({
    imports: [
        CommonModule,
        LayoutsModule,
        RouterModule.forChild(DASHBOARD_ROUTES)
    ],
    declarations: [DashboardHomeComponent, DashboardComponent],
    exports: [DashboardHomeComponent, DashboardComponent, RouterModule]
})
export class DashboardModule {
}
