import { accountTypes } from '../../../constants/other';
import { Ad, GoogleAd, FacebookAd, InstagramAd } from '../../../domain/models/newads';
import { adTypes } from '../../../constants';
import { Account, Tag } from '../../../domain/models';

const vwLogoUrl: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/480px-Volkswagen_Logo_till_1995.svg.png';
const mercedesLogoUrl: string =
    'https://cdn.imgbin.com/11/24/18/imgbin-logo-mercedes-benz-pictogram-car-business-clearance-sale-0-0-1-j6R1uhweA9KKsUiETpkuwmDbB.jpg';

export const mockedAdsList: Ad[] = [
    new Ad().createFromValues({
        id: 0,
        name: 'Here is my ad',
        type: adTypes.Google,
        ad: new GoogleAd().createFromValues({
            headline: 'Mazda Mx-5: Only £1,245 in London',
            link: 'www.volkswagonleads.com',
            description: 'Mazda MX-5 NA convertible hood with PVC rear window 1989-1997 Mazda MX-5',
            tags: [new Tag(0, 'Volkswagon'), new Tag(1, 'Newspaper ad')]
        })
    }),
    new Ad().createFromValues({
        id: 1,
        name: 'Here is another ad',
        type: adTypes.Facebook,
        ad: new FacebookAd().createFromValues({
            postTo: new Account(0, accountTypes.Facebook, 'VolkswagonLeeds', vwLogoUrl),
            text:
                'Mazda MX-5 NA convertible hood with PVC rear window 1989-1997 Mazda MX-5 100% Guaranteed',
            images: ['https://img1.automoto.ua/overview/Mazda-MX-5-2019-0b5-huge-1355.jpg'],
            linkTo: 'www.volkswagonleads.com',
            CTALink: 'Only £1,245 in London',
            description: 'Cruise control, less than 10k miles',
            tags: [new Tag(0, 'Volkswagon'), new Tag(1, 'Newspaper ad')]
        })
    }),
    new Ad().createFromValues({
        id: 2,
        name: 'Yet another ad',
        type: adTypes.Instagram,
        ad: new InstagramAd().createFromValues({
            postTo: new Account(1, accountTypes.Facebook, 'MercedesLeeds', mercedesLogoUrl),
            text:
                'Mazda MX-5 NA convertible hood with PVC rear window 1989-1997 Mazda MX-5 100% Guaranteed',
            images: ['https://img1.automoto.ua/overview/Mazda-MX-5-2019-0b5-huge-1355.jpg'],
            linkTo: 'www.volkswagonleads.com',
            tags: [new Tag(0, 'Volkswagon'), new Tag(1, 'Newspaper ad')]
        })
    })
];

export const mockedAccounts: Account[] = [
    new Account(0, accountTypes.Facebook, 'VolkswagonLeeds', vwLogoUrl),
    new Account(1, accountTypes.Facebook, 'MercedesLeeds', mercedesLogoUrl),
    new Account(2, accountTypes.Instagram, 'VolkswagonLeeds', vwLogoUrl),
    new Account(3, accountTypes.Instagram, 'MercedesLeeds', mercedesLogoUrl)
];

export const mockedTagsList: Tag[] = [
    new Tag(0, 'Volkswagon'),
    new Tag(1, 'Newspaper ad'),
    new Tag(2, 'Radio')
];
