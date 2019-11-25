import { IAdsState } from "../store";
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions';
import { Ad, InstagramAd, FacebookAd } from '../domain/models/newads';

const initialState: IAdsState = {
    isAdLoading: false,
    selectedAd: null,
    modifiedAd: null,

    isAdsListLoading: false,
    adsList: [],

    isTagsListLoading: false,
    tags: []
};

const reducer = createReducer(
    initialState,

    on(actions.getAdByIdRequest, (state: IAdsState) => ({
        ...state,
        isAdLoading: true
    })),
    on(actions.getAdByIdSuccess, (state: IAdsState, { ad }) => ({
        ...state,
        isAdLoading: false,
        selectedAd: ad.clone(),
        modifiedAd: ad.clone()
    })),
    on(actions.getAdByIdFailure, (state: IAdsState) => ({
        ...state,
        isAdLoading: false
    })),

    on(actions.getListOfAdsRequest, (state: IAdsState) => ({
        ...state,
        isAdsListLoading: true
    })),
    on(actions.getListOfAdsSuccess, (state: IAdsState, { ads }) => ({
        ...state,
        isAdsListLoading: false,
        adsList: ads
    })),
    on(actions.getListOfAdsFailure, (state: IAdsState) => ({
        ...state,
        isAdsListLoading: false
    })),

    on(actions.getAllTagsRequest, (state: IAdsState) => ({
        ...state,
        isTagsListLoading: true
    })),

    on(actions.getAllTagsSuccess, (state: IAdsState, { tags }) => ({
        ...state,
        isTagsListLoading: false,
        tags
    })),

    on(actions.getAllTagsFailure, (state: IAdsState) => ({
        ...state,
        isTagsListLoading: false
    })),

    on(actions.clearSelectedAd, (state: IAdsState) => ({
        ...state,
        selectedAd: null,
        modifiedAd: null,
    })),

    on(actions.changeSelectedAdInfo, (state: IAdsState, { info }) => {
        let modifiedAd: Ad = state.modifiedAd;
        modifiedAd.ad.updateValues(info); 
  
        return {
            ...state,
            modifiedAd
        }
    }),

    on(actions.changeSelectedAdName, (state: IAdsState, { name }) => {
        const modifiedAd: Ad = state.modifiedAd;
        modifiedAd.updateName(name);

        return {
            ...state,
            modifiedAd
        }
    }),

    on(actions.uploadAdImage, (state: IAdsState, { image }) => {
        const modifiedAd: Ad = state.modifiedAd;
        
        if (modifiedAd.ad instanceof InstagramAd || modifiedAd.ad instanceof FacebookAd) {
            modifiedAd.ad.uploadImage(image);
        }

        return {
            ...state,
            modifiedAd
        }
    }),

    on(actions.changeAdTags, (state: IAdsState, { tags }) => {
        const modifiedAd: Ad = state.modifiedAd;
        modifiedAd.ad.updateTags(tags);

        return {
            ...state,
            modifiedAd
        }
    })
)

export function adsReducer(state: IAdsState, action: Action) {
    return reducer(state, action);
}
