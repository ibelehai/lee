import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState, IAdsState } from '../../../../store';
import { AdsService } from '../../../ads/services/ads/ads.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account, Tag } from '../../../../domain/models';
import { rootRoutes } from '../../../../constants/routes';
import { IFacebookEditFormValues } from '../facebook-ad-edit-form/facebook-ad-edit-form.component';
import { IGoogleEditFormValues } from '../google-ad-edit-form/google-ad-edit-form.component';
import { IInstagramEditFormValues } from '../instagram-ad-edit-form/instagram-ad-edit-form.component';
import { AccountsService } from '../../services/accounts/accounts.service';
import { Ad } from '../../../../domain/models/newads';

@Component({
    selector   : 'app-ad-edit',
    templateUrl: './ad-edit.component.html',
    styleUrls  : ['./ad-edit.component.scss']
})
export class AdEditComponent implements OnInit, OnDestroy {
    private adId             : number;
    private storeSubscription: Subscription;
    public  ad               : Ad;
    public  isAdLoading      : boolean;
    public  isAccountsListLoading: boolean;
    public  accounts: Account[];
    public routes = rootRoutes;
    public isTagsListLoading: boolean;
    public tags: Tag[];

    constructor(
        private store          : Store<IAppState>,
        private adsService     : AdsService,
        private accountsService: AccountsService,
        private route          : ActivatedRoute
    ) {}

    private getSelectedAd(): void {
        this.adId = this.route.snapshot.params['id'];
        this.adsService.getAdById(this.adId).subscribe((ad: Ad) => {
            this.accountsService.getListOfAccounts(ad.type);
        })
    }

    private getListOfTags(): void {
        this.adsService.getListOfTags();
    }

    private subscribeToStoreValues(): void {
        this.storeSubscription = this.store
            .pipe(select((state: IAppState) => state))
            .subscribe((state: IAppState) => {
                this.ad          = state.ads.modifiedAd;
                this.isAdLoading = state.ads.isAdLoading;

                this.isAccountsListLoading = state.accounts.isAccountsListLoading;
                this.accounts = state.accounts.accounts;

                this.isTagsListLoading = state.ads.isTagsListLoading;
                this.tags = state.ads.tags;
            });
    }

    public ngOnInit(): void {
        this.getSelectedAd();
        this.getListOfTags();
        this.subscribeToStoreValues();
    }

    public handleAdNameChange(name: string): void {
        this.adsService.changeAdName(name);
    }

    public handleFormChange(values: IFacebookEditFormValues | IGoogleEditFormValues | IInstagramEditFormValues): void {
        this.adsService.changeAd(values);
    }

    public handleImageUpload(image: File): void {
        this.adsService.uploadImage(image);
    }

    public handleTagsChange(tags: Tag[]): void {
        this.adsService.changeAdTags(tags);
    }

    public ngOnDestroy(): void {
        this.storeSubscription.unsubscribe();
        this.adsService.clearSelectedAd();
        this.accountsService.clearAccountsList();
    }
}
