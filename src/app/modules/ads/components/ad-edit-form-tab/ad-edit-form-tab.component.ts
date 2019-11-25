import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ad-edit-form-tab',
    templateUrl: './ad-edit-form-tab.component.html',
    styleUrls: ['./ad-edit-form-tab.component.scss']
})
export class AdEditFormTabComponent {
    @Input() title: string;
    @Input() active = false;
}
