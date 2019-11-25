import { Component, OnInit, Input } from '@angular/core';
import { GoogleAd, FacebookAd, InstagramAd } from '../../../../domain/models';
import { adTypes } from '../../../../constants';
import { Ad } from '../../../../domain/models/newads';

@Component({
    selector: 'app-ad-preview',
    templateUrl: './ad-preview.component.html',
    styleUrls: ['./ad-preview.component.scss']
})
export class AdPreviewComponent implements OnInit {
    @Input()
    public ad: Ad; 
    public adTypes = adTypes;

    constructor() {}

    get adType(): number {
        return this.ad.type;
    }

    ngOnInit() {}
}
