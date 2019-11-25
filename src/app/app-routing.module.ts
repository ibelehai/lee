import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { rootPaths, rootRoutes } from './constants/routes';

const routes: Routes = [
    {
        path: rootPaths.ADS,
        loadChildren: './modules/ads/ads.module#AdsModule'
    },
    {
        path: rootPaths.MAIN,
        pathMatch: 'prefix',
        redirectTo: rootRoutes.ADS
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
