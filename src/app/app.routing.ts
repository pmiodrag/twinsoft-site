import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TeamRoutes } from './team/index';
import { ServiceRoutes } from './service/index';

const appRoutes: Routes = [
    ...TeamRoutes,
    ...HomeRoutes,
    ...ServiceRoutes
    
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
