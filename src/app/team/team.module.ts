import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TeamComponent } from './team.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { PersonService } from '../shared/person/index';
@NgModule({
    declarations: [
        TeamComponent
    ],
    exports: [
        TeamComponent
    ],
    imports: [SharedModule.forRoot(), MaterialModule.forRoot()],
    providers: [PersonService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamModule {
}
