import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoogleAd, FacebookAd, InstagramAd, Account, Tag } from '../../../../domain/models';
import { adTypes } from '../../../../constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFacebookEditFormValues } from '../facebook-ad-edit-form/facebook-ad-edit-form.component';
import { IGoogleEditFormValues } from '../google-ad-edit-form/google-ad-edit-form.component';
import { IInstagramEditFormValues } from '../instagram-ad-edit-form/instagram-ad-edit-form.component';
import { Ad } from '../../../../domain/models/newads';

@Component({
    selector: 'app-ad-edit-form',
    templateUrl: './ad-edit-form.component.html',
    styleUrls: ['./ad-edit-form.component.scss']
})
export class AdEditFormComponent implements OnInit {
    @Input()
    public ad: Ad;
    @Input()
    public accounts: Account[]
    @Input()
    public tags: Tag[]
    @Input()
    public accountsLoading: boolean;

    @Output()
    private uploadImage: EventEmitter<File> = new EventEmitter();

    public modifiedAd: Ad;
    public adTypes = adTypes;
    public adForm: FormGroup;
    private nestedFormValues:
        | IFacebookEditFormValues
        | IGoogleEditFormValues
        | IInstagramEditFormValues;

    @Output()
    private changes: EventEmitter<any> = new EventEmitter();
    @Output()
    private changeName: EventEmitter<string> = new EventEmitter();
    @Output()
    private changeTags: EventEmitter<Tag[]> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.initializeEditForm();
    }

    get adType(): number {
        return this.ad.type;
    }

    get formControls(): any {
        return this.adForm.controls;
    }

    private initializeEditForm(): void {
        this.adForm = this.formBuilder.group({
            name: [this.ad.name, [Validators.required]]
        });
    }

    public handleNameChange(): void {
        this.changeName.emit(this.formControls.name.value);
    }

    public handleImageUpload(image: File): void {
        console.log(image);
        this.uploadImage.emit(image);
    }

    public handleTagsChange(tags: Tag[]): void {
        this.changeTags.emit(tags);
    }

    public handleFormChanges(
        values: IFacebookEditFormValues | IGoogleEditFormValues | IInstagramEditFormValues
    ): void {
        this.changes.emit(values);
    }
}
