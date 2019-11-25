import { createAction, props } from '@ngrx/store';
import * as types from '../action-types';
import { IFacebookEditFormValues } from '../modules/ads/components/facebook-ad-edit-form/facebook-ad-edit-form.component';
import { IGoogleEditFormValues } from '../modules/ads/components/google-ad-edit-form/google-ad-edit-form.component';
import { IInstagramEditFormValues } from '../modules/ads/components/instagram-ad-edit-form/instagram-ad-edit-form.component';
import { Ad } from '../domain/models/newads';
import { ITag, Tag } from '../domain/models';

export const getListOfAdsRequest = createAction(
    types.GET_LIST_OF_ADS_REQUEST
);

export const getListOfAdsSuccess = createAction(
    types.GET_LIST_OF_ADS_SUCCESS,
    props<{ ads: Array<Ad> }>()
);

export const getListOfAdsFailure = createAction(
    types.GET_LIST_OF_ADS_FAILURE
);

export const getAdByIdRequest = createAction(
    types.GET_AD_BY_ID_REQUEST
);

export const getAdByIdSuccess = createAction(
    types.GET_AD_BY_ID_SUCCESS,
    props<{ ad: Ad }>()
);

export const getAdByIdFailure = createAction(
    types.GET_AD_BY_ID_FAILURE
);

export const getAllTagsRequest = createAction(
    types.GET_ALL_TAGS_REQUEST
);

export const getAllTagsSuccess = createAction(
    types.GET_ALL_TAGS_SUCCESS,
    props<{ tags: ITag[] }>()
);

export const getAllTagsFailure = createAction(
    types.GET_ALL_TAGS_FAILURE
)

export const clearSelectedAd = createAction(
    types.CLEAR_SELECTED_AD
);

export const changeSelectedAdInfo = createAction(
    types.CHANGE_SELECTED_AD_INFO,
    props<{ info: IFacebookEditFormValues | IGoogleEditFormValues | IInstagramEditFormValues }>()
);

export const changeSelectedAdName = createAction(
    types.CHANGE_SELECTED_AD_NAME,
    props<{ name: string }>()
)

export const uploadAdImage = createAction(
    types.UPLOAD_AD_IMAGE,
    props<{ image: File }>()
);

export const changeAdTags = createAction(
    types.CHANGE_SELECTED_AD_TAGS,
    props<{ tags: Tag[] }>()
)
