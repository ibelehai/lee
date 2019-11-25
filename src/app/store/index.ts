
import { ActionReducerMap } from '@ngrx/store';
import { Account, ITag } from '../domain/models';
import { adsReducer, accountsReducer } from '../reducers';
import { Ad } from '../domain/models/newads';

/**
 * Interface representing the ads state
 */
export interface IAdsState {
    isAdLoading: boolean;
    selectedAd: Ad
    modifiedAd: Ad

    isAdsListLoading: boolean;
    adsList: Array<Ad>

    isTagsListLoading: boolean;
    tags: ITag[]
}

/**
 * Interface representing the accoutns state
*/
export interface IAccountsState {
    isAccountsListLoading: boolean;
    accounts: Account[]
}

/**
 * Interface representing the whole app state
 */
export interface IAppState {
    ads: IAdsState,
    accounts: IAccountsState
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    ads: adsReducer,
    accounts: accountsReducer
}
