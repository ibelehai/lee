import { Component, Input } from '@angular/core';
import { adTypes } from '../../../../constants';

@Component({
    selector: 'app-ad-preview-label',
    templateUrl: './ad-preview-label.component.html',
    styleUrls: ['./ad-preview-label.component.scss']
})
export class AdPreviewLabelComponent {
    @Input() adType: number;

    constructor() {}

    public getLabelIconClassName(): string {
        switch (this.adType) {
            case adTypes.Google:
                return 'icon fab fa-google';
            case adTypes.Facebook:
                return 'icon fab fa-facebook-square';
            case adTypes.Instagram:
                return 'icon fab fa-instagram';
            default:
                return 'icon fab fa-google';
        }
    }

    public getLabelText(): string {
        switch (this.adType) {
            case adTypes.Google:
                return 'Google network preview';
            case adTypes.Facebook:
                return 'Facebook post preview';
            case adTypes.Instagram:
                return 'Instagram post preview';
            default:
                return 'Google network preview';
        }
    }
}
