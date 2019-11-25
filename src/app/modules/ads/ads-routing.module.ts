import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { adsPaths } from '../../constants/routes';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { AdEditComponent } from './components/ad-edit/ad-edit.component';

const adsRoutes: Routes = [
    {
        path: adsPaths.MAIN,
        component: AdsListComponent
    },
    {
        path: adsPaths.EDIT,
        component: AdEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(adsRoutes)],
    exports: [RouterModule]
})
export class AdsRoutingModule {}
