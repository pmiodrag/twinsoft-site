import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeModule } from './home';
import { TeamModule } from './team/team.module';
import { ServiceModule } from './service/service.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HomeModule,
        BrowserModule,
        TeamModule,
        ServiceModule,
        SharedModule.forRoot(),
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    schemas:   [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
