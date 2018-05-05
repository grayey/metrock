
import {CustomersComponent} from './customers/customers.component'
import {MaterialsComponent} from './materials/materials.component';;
import { RecipesComponent } from './recipes/recipes.component';
import { StoreComponent } from './store/store.component';
import {VendorsComponent} from './vendors/vendors.component';
import {SetupHomeComponent} from './setup-home/setup-home.component';

import {Routes} from '@angular/router';


export const SETUP_ROUTES: Routes = [
    {path: '', component: SetupHomeComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'materials', component: MaterialsComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'store', component: StoreComponent},
    {path: 'vendors', component: VendorsComponent},


];