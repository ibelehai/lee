import { Component, AfterContentInit, QueryList, ContentChildren } from '@angular/core';
import { AdEditFormTabComponent as TabComponent } from '../ad-edit-form-tab/ad-edit-form-tab.component';

@Component({
    selector: 'app-ad-edit-form-tabs',
    templateUrl: './ad-edit-form-tabs.component.html',
    styleUrls: ['./ad-edit-form-tabs.component.scss']
})
export class AdEditFormTabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent) 
    public tabs: QueryList<TabComponent>;

    public ngAfterContentInit() {
        let activeTabs = this.tabs.filter(tab => tab.active);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    public selectTab(tab: any) {
        this.tabs.toArray().forEach(tab => (tab.active = false));
        tab.active = true;
    }

    public getIconClassName(title: string): string {
        switch (title) {
            case 'Content': return 'fas fa-font';
            case 'Notes': return 'fas fa-pencil-alt';
            case 'Chat': return 'fas fa-comments';
            case 'Activity': return 'fas fa-bell';
            default: return 'fas-fa-font';
        }
    }
}
