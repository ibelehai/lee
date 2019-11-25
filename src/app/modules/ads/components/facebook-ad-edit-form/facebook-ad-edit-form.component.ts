import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account, Tag } from '../../../../domain/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacebookAd } from '../../../../domain/models/newads';

export interface IFacebookEditFormValues {
    name?       : string;
    linkTo?     : string;
    text?       : string;
    CTALink?    : string;
    description?: string;
    postTo?: Account;

}
 
@Component({
    selector   : 'app-facebook-ad-edit-form',
    templateUrl: './facebook-ad-edit-form.component.html',
    styleUrls  : ['./facebook-ad-edit-form.component.scss']
})
export class FacebookAdEditFormComponent implements OnInit {
    @Input()
    public ad      : FacebookAd;
    @Input()
    public accounts: Account[];
    @Input()
    public tags: Tag[]

    public editForm: FormGroup;
    public selectBoxModelType;
    public displayedImages: Array<string | ArrayBuffer>
    private newFiles: File[];

    @Output()
    private changes: EventEmitter<IFacebookEditFormValues> = new EventEmitter();
    @Output()
    private uploadImage: EventEmitter<File> = new EventEmitter();
    @Output()
    private changeTags: EventEmitter<Tag[]> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {}

    get formValues(): IFacebookEditFormValues {
        return { ...this.editForm.value };
    }

    public ngOnInit(): void {
        this.initializeValues();
        this.initializeEditForm();
    }

    public handleAccountSelect(account: Account): void {
        const formValues: IFacebookEditFormValues = this.formValues;
        formValues.postTo = { ...account };
        this.changes.emit(formValues);
    }

    public handleImageUpload(event: any): void {
        const file: File = event.target.files[0];
        const reader: FileReader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            this.newFiles.push(file);
            this.uploadImage.emit(file);
        }

        reader.onloadend = (): void => {
            this.displayedImages.push(reader.result);
        };
    }

    public handleImageInputClick(event: any): void {
        event.target.value = null;
    }

    private initializeValues(): void {
        this.displayedImages = [...this.ad.images];
        this.newFiles = [];
        this.selectBoxModelType = Account;
    }

    private initializeEditForm(): void {
        this.editForm = this.formBuilder.group({
            linkTo     : [this.ad.linkTo, [Validators.required]],
            text       : [this.ad.text, [Validators.required]],
            CTALink    : [this.ad.CTALink, [Validators.required]],
            description: [this.ad.description, [Validators.required]],
        });

        this.editForm.valueChanges.subscribe((values: IFacebookEditFormValues) =>
            this.changes.emit(values)
        );
    }

    public handleTagSelect(tags: Tag[]): void {
        this.changeTags.emit(tags);
    }
}
