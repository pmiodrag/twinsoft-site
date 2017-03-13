import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ServiceComponent } from './service.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { InfoService } from '../shared/info/index';
@NgModule({
    declarations: [
        ServiceComponent
    ],
    exports: [
        ServiceComponent
    ],
    imports: [SharedModule.forRoot(), MaterialModule.forRoot()],
    providers: [InfoService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceModule {
}
