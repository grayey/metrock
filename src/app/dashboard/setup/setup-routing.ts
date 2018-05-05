import {VendorsComponent} from './vendors/vendors.component';
import {CustomersComponent} from './customers/customers.component';
import {MaterialsComponent} from './materials/materials.component';
import {SetupHomeComponent} from './setup-home/setup-home.component';

import {Routes} from '@angular/router';


export const SETUP_ROUTES: Routes = [
    {path: '', component: SetupHomeComponent},
    {path: 'vendors', component: VendorsComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'materials', component: MaterialsComponent}

];