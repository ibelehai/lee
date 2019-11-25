import { adTypes } from '../../constants';
import { IGoogleEditFormValues } from '../../modules/ads/components/google-ad-edit-form/google-ad-edit-form.component';
import { IFacebookEditFormValues } from '../../modules/ads/components/facebook-ad-edit-form/facebook-ad-edit-form.component';
import { IAccount } from './accounts';
import { IInstagramEditFormValues } from '../../modules/ads/components/instagram-ad-edit-form/instagram-ad-edit-form.component';
import { Tag } from './tags';

// Ad
export interface IIAd {
    id?: number;
    type?: number;
    name: string;
    ad: GoogleAd | FacebookAd | InstagramAd;
}

export interface IIAdActions<T> {
    createEmpty?: (adType?: number) => T;
    createFromValues?: (ad: T) => T;
    clone?: () => T;
    updateValues?: (values) => T;
    uploadImage?: (image: File) => T;
    updateTags?: (tags: Tag[]) => T;
    updateName?: (name: string) => T;
}

export class Ad implements IIAd, IIAdActions<IIAd> {
    public id?: number;
    public type?: number;
    public name: string;
    public ad: GoogleAd | FacebookAd | InstagramAd;

    constructor() {}

    public createEmpty(adType: number): Ad {
        this.name = '';

        switch (adType) {
            case adTypes.Google: {
                this.ad = new GoogleAd().createEmpty();
            }
        }

        return this;
    }

    public createFromValues(ad: IIAd): Ad {
        this.id = ad.id;
        this.name = ad.name;
        this.type = ad.type;

        switch (ad.type) {
            case adTypes.Google: {
                if (ad.ad instanceof GoogleAd) {
                    this.ad = new GoogleAd().createFromValues(ad.ad);
                }
                break;
            }
            case adTypes.Facebook: {
                if (ad.ad instanceof FacebookAd) {
                    this.ad = new FacebookAd().createFromValues(ad.ad);
                }
                break;
            }
            case adTypes.Instagram: {
                if (ad.ad instanceof InstagramAd) {
                    this.ad = new InstagramAd().createFromValues(ad.ad);
                }
                break;
            }
        }

        return this;
    }

    public clone(): Ad {
        return new Ad().createFromValues(this);
    }

    public updateName(name: string): Ad {
        this.name = name;
        return this;
    }
}

// Google Ad
export interface IIGoogleAd {
    headline: string;
    link: string;
    description: string;
    tags: Tag[]
}

export class GoogleAd implements IIGoogleAd, IIAdActions<IIGoogleAd> {
    public headline: string;
    public link: string;
    public description: string;
    public tags: Tag[];

    constructor() {}

    public createEmpty(): GoogleAd {
        this.headline = '';
        this.link = '';
        this.description = '';
        this.tags = [];

        return this;
    }

    public createFromValues(ad: IIGoogleAd): GoogleAd {
        this.headline = ad.headline;
        this.link = ad.link;
        this.description = ad.description;
        this.tags = [...ad.tags];

        return this;
    }

    public clone(): GoogleAd {
        return new GoogleAd().createFromValues(this);
    }

    public updateValues(values: IGoogleEditFormValues): GoogleAd {
        this.link = values.link;
        this.headline = values.headline;
        this.description = values.description;

        return this;
    }

    public updateTags(tags: Tag[]): GoogleAd {
        this.tags = [...tags];
        return this;
    }
}

export interface IIFacebookAd {
    postTo: IAccount;
    text: string;
    images: string[];
    uploadedImages?: File[];
    linkTo: string;
    CTALink: string;
    description: string;
    tags: Tag[];
}

// Facebook Ad
export class FacebookAd implements IIFacebookAd, IIAdActions<IIFacebookAd> {
    public postTo: IAccount;
    public text: string;
    public images: string[];
    public uploadedImages?: File[];
    public linkTo: string;
    public CTALink: string;
    public description: string;
    public tags: Tag[];

    constructor() {}

    public createEmpty(): FacebookAd {
        this.postTo = null;
        this.text = '';
        this.images = [];
        this.uploadedImages = [];
        this.linkTo = '';
        this.CTALink = '';
        this.description = '';
        this.tags = [];

        return this;
    }

    public createFromValues(ad: IIFacebookAd): FacebookAd {
        this.postTo = { ...ad.postTo };
        this.text = ad.text;
        this.images = [...ad.images];
        this.linkTo = ad.linkTo;
        this.description = ad.description;
        this.CTALink = ad.CTALink;
        this.tags = [...ad.tags];

        if (ad.uploadedImages) {
            this.uploadedImages = [...ad.uploadedImages];
        } else {
            this.uploadedImages = [];
        }

        return this;
    }

    public updateValues(values: IFacebookEditFormValues): FacebookAd {
        this.text = values.text;
        this.CTALink = values.CTALink;
        this.linkTo = values.linkTo;
        this.description = values.description;

        if (values.postTo) {
            this.postTo = { ...values.postTo };
        }

        return this;
    }

    public clone(): FacebookAd {
        return new FacebookAd().createFromValues(this);
    }

    public uploadImage(image: File): FacebookAd {
        this.uploadedImages.push(image);
        return this;
    }

    public updateTags(tags: Tag[]): FacebookAd {
        this.tags = [...tags];
        return this;
    }
}

// Instagram Ad
export interface IIInstagramAd {
    postTo: IAccount;
    text: string;
    images: string[];
    uploadedImages?: File[];
    linkTo: string;
    tags: Tag[];
}

export class InstagramAd implements IIInstagramAd, IIAdActions<IIInstagramAd> {
    public postTo: IAccount;
    public text: string;
    public images: string[];
    public linkTo: string;
    public tags: Tag[];
    public uploadedImages?: File[];

    constructor() {}

    public createEmpty(): InstagramAd {
        this.postTo = null;
        this.text = '';
        this.images = [];
        this.uploadedImages = [];
        this.linkTo = '';
        this.tags = [];

        return this;
    }

    public createFromValues(ad: IIInstagramAd): InstagramAd {
        this.postTo = { ...ad.postTo };
        this.text = ad.text;
        this.images = [...ad.images];
        this.linkTo = ad.linkTo;
        this.tags = [...ad.tags];

        if (ad.uploadedImages) {
            this.uploadedImages = [...ad.uploadedImages];
        } else {
            this.uploadedImages = [];
        }

        return this;
    }

    public clone(): InstagramAd {
        return new InstagramAd().createFromValues(this);
    }

    public updateValues(values: IInstagramEditFormValues): InstagramAd {
        this.text = values.text;
        this.linkTo = values.linkTo;

        if (values.postTo) {
            this.postTo = { ...values.postTo };
        }

        return this;
    }

    public uploadImage(image: File): InstagramAd {
        this.uploadedImages.push(image);
        return this;
    }

    public updateTags(tags: Tag[]): InstagramAd {
        this.tags = [...tags];
        return this;
    }
}
