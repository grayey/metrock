import {SetupModule} from './setup/setup.module';
import {ReportsModule} from './reports/reports.module';
import {OrdersModule} from './orders/orders.module';
import {DashboardHomeComponent} from './home/home.component';
import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
        {path: '', component: DashboardHomeComponent},
        {path: 'setup', loadChildren: './setup/setup.module#SetupModule'},
        {path: 'reports', loadChildren: './reports/reports.module#ReportsModule'},
        {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
    ]
    }

];