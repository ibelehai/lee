import { Component, OnInit, Input } from '@angular/core';
import { InstagramAd } from '../../../../domain/models/newads';

@Component({
    selector: 'app-instagram-ad-preview',
    templateUrl: './instagram-ad-preview.component.html',
    styleUrls: ['./instagram-ad-preview.component.scss']
})
export class InstagramAdPreviewComponent implements OnInit {
    @Input()
    public ad: InstagramAd;

    constructor() {}

    ngOnInit() {}
}
