import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VendorsComponent} from './vendors/vendors.component';
import {CustomersComponent} from './customers/customers.component';
import {MaterialsComponent} from './materials/materials.component';
import {SetupHomeComponent} from './setup-home/setup-home.component';
import {RouterModule} from '@angular/router';
import {SETUP_ROUTES} from './setup-routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SETUP_ROUTES)
    ],
    declarations: [VendorsComponent, CustomersComponent, MaterialsComponent, SetupHomeComponent],
    exports: [VendorsComponent, CustomersComponent, MaterialsComponent, SetupHomeComponent, RouterModule]
})
export class SetupModule {
}
