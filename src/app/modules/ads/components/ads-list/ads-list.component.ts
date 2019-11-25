import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState, IAdsState } from '../../../../store';
import { Subscription } from 'rxjs';
import { GoogleAd, FacebookAd, InstagramAd } from '../../../../domain/models';
import { AdsService } from '../../services/ads/ads.service';
import { rootRoutes } from '../../../../constants/routes';
import { Ad } from '../../../../domain/models/newads';

@Component({
    selector: 'app-ads-list',
    templateUrl: './ads-list.component.html',
    styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit, OnDestroy {
    private storeSubscription: Subscription;

    public isAdsListLoading: boolean;
    public adsList: Array<Ad>;
    public routes = rootRoutes;

    constructor(private store: Store<IAppState>, private adsService: AdsService) {
        this.storeSubscription = this.store
            .pipe(select((state: IAppState) => state.ads))
            .subscribe((state: IAdsState) => {
                this.adsList = state.adsList;
                this.isAdsListLoading = state.isAdsListLoading;
            });
    }

    public ngOnInit(): void {
        this.adsService.getListOfAds();
    }

    public generateAdLink(id: number): string {
        return `${this.routes.ADS}/${id}`;
    }

    public ngOnDestroy(): void {
        this.storeSubscription.unsubscribe();
    }
}
