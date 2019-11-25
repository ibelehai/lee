import { createAction, props } from '@ngrx/store';
import * as types from '../action-types';
import { IAccount } from '../domain/models';

export const getAccountsRequest = createAction(
    types.GET_ACCOUNTS_REQUEST
);

export const getAccountsSuccess = createAction(
    types.GET_ACCOUNTS_SUCCESS,
    props<{ accounts: IAccount[] }>()
);

export const getAccountsFailure = createAction(
    types.GET_ACCOUNTS_FAILURE
);

export const clearAccountsList = createAction(
    types.CLEAR_ACCOUNTS_LIST
);
