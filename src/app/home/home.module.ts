import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { CompanyService } from '../shared/company/index';
@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [SharedModule.forRoot(), MaterialModule.forRoot()],
    providers: [CompanyService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
