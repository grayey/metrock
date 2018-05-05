import {Routes} from '@angular/router';
import {SetupModule} from './dashboard/setup/setup.module';
import {ReportsModule} from './dashboard/reports/reports.module';
import {OrdersModule} from './dashboard/orders/orders.module';
import {AuthenticationComponent} from './authentication/authentication.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {ErrorPageComponent} from './error-page/error-page.component';

export const APP_ROUTES: Routes = [
    {path: '', component: AuthenticationComponent},
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: '**', component: ErrorPageComponent }
];
