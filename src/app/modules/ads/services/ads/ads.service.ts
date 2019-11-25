import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store';
import * as actions from '../../../../actions';
import { mockedAdsList, mockedTagsList } from '../../mocks';
import { IFacebookEditFormValues } from '../../components/facebook-ad-edit-form/facebook-ad-edit-form.component';
import { IGoogleEditFormValues } from '../../components/google-ad-edit-form/google-ad-edit-form.component';
import { IInstagramEditFormValues } from '../../components/instagram-ad-edit-form/instagram-ad-edit-form.component';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Ad } from '../../../../domain/models/newads';
import { Tag } from '../../../../domain/models';

@Injectable({
    providedIn: 'root'
})
export class AdsService {
    constructor(private store: Store<IAppState>) {}

    public getListOfAds(): void {
        this.store.dispatch(actions.getListOfAdsRequest());

        setTimeout(
            () => this.store.dispatch(actions.getListOfAdsSuccess({ ads: mockedAdsList })),
            500
        );
    }

    public getAdById(id: number | string): Observable<Ad> {
        this.store.dispatch(actions.getAdByIdRequest());

        const ad: Ad = mockedAdsList.find((item: Ad) => item.id == id);

        setTimeout(() => {
            this.store.dispatch(actions.getAdByIdSuccess({ ad }));
        }, 500);

        return of(ad).pipe(delay(500));
    }

    public getListOfTags(): void {
        this.store.dispatch(actions.getAllTagsRequest());

        setTimeout(
            () => this.store.dispatch(actions.getAllTagsSuccess({ tags: mockedTagsList })),
            500
        );
    }

    public clearSelectedAd(): void {
        this.store.dispatch(actions.clearSelectedAd());
    }

    public uploadImage(image: File): void {
        this.store.dispatch(actions.uploadAdImage({ image }));
    }

    public changeAdTags(tags: Tag[]): void {
        this.store.dispatch(actions.changeAdTags({ tags }));
    }

    public changeAd(
        info: IGoogleEditFormValues | IFacebookEditFormValues | IInstagramEditFormValues
    ): void {
        this.store.dispatch(actions.changeSelectedAdInfo({ info }));
    }

    public changeAdName(name: string): void {
        this.store.dispatch(actions.changeSelectedAdName({ name }));
    }
}
