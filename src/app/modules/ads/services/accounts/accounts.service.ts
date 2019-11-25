import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../../../actions';
import { IAppState } from '../../../../store';
import { mockedAccounts } from '../../mocks';
import { Account } from '../../../../domain/models';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    constructor(private store: Store<IAppState>) {}

    public getListOfAccounts(accountType: number): void {
        this.store.dispatch(actions.getAccountsRequest());

        const accounts: Account[] = mockedAccounts.filter(
            (account: Account) => account.type === accountType
        );

        setTimeout(() => this.store.dispatch(actions.getAccountsSuccess({ accounts })), 200);
    }

    public clearAccountsList(): void {
        this.store.dispatch(actions.clearAccountsList());
    }
}
