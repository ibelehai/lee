import { Component, OnInit, Input } from '@angular/core';
import { FacebookAd } from '../../../../domain/models/newads';

@Component({
    selector: 'app-facebook-ad-preview',
    templateUrl: './facebook-ad-preview.component.html',
    styleUrls: ['./facebook-ad-preview.component.scss']
})
export class FacebookAdPreviewComponent implements OnInit {
    @Input()
    public ad: FacebookAd;

    constructor() {}

    ngOnInit(): void {}
}
