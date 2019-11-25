import { IAccount } from "../domain/models";
import { IAccountsState } from '../store';
import  * as actions from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: IAccountsState  = {
    isAccountsListLoading: false,
    accounts: []
}

const reducer = createReducer(
    initialState,

    on(actions.getAccountsRequest, (state: IAccountsState) => ({
        ...state,
        isAccountsListLoading: true
    })),
    on(actions.getAccountsSuccess, (state: IAccountsState, { accounts }) => ({
        ...state,
        isAccountsListLoading: false,
        accounts
    })),
    on(actions.getAccountsFailure, (state: IAccountsState) => ({
        ...state,
        isAccountsListLoading: false
    })),

    on(actions.clearAccountsList, (state: IAccountsState) => ({
        ...state,
        accounts: []
    }))
)

export function accountsReducer(state: IAccountsState, action: Action) {
    return reducer(state, action);
}
