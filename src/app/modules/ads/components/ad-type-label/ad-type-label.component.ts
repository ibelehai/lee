import { Component, OnInit, Input } from '@angular/core';
import { adTypes } from '../../../../constants';

@Component({
    selector: 'app-ad-type-label',
    templateUrl: './ad-type-label.component.html',
    styleUrls: ['./ad-type-label.component.scss']
})
export class AdTypeLabelComponent implements OnInit {
    @Input()
    public type: number;
    public adTypes = adTypes;

    constructor() {}

    ngOnInit(): void {}

    public getIconClassName(): string {
        switch (this.type) {
            case adTypes.Google:
                return 'icon fab fa-google';
            case adTypes.Facebook:
                return 'icon fab fa-facebook-f';
            case adTypes.Instagram:
                return 'icon fab fa-instagram';
            default:
                return 'icon fab fa-google';
        }
    }
}
