import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account, Tag } from '../../../../domain/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstagramAd } from '../../../../domain/models/newads';

export interface IInstagramEditFormValues {
    name?       : string;
    linkTo?     : string;
    text?       : string;
    postTo?: Account;
}
  
@Component({
    selector: 'app-instagram-ad-edit-form',
    templateUrl: './instagram-ad-edit-form.component.html',
    styleUrls: ['./instagram-ad-edit-form.component.scss']
})
export class InstagramAdEditFormComponent implements OnInit {
    @Input()
    public ad      : InstagramAd
    @Input()
    public accounts: Account[]
    @Input()
    public tags: Tag[]

    public editForm: FormGroup;
    public selectBoxModelType;
    public displayedImages: Array<string | ArrayBuffer>
    private newFiles: File[];

    @Output()
    private changes: EventEmitter<IInstagramEditFormValues> = new EventEmitter();
    @Output()
    private changeTags: EventEmitter<Tag[]> = new EventEmitter();
    @Output()
    private uploadImage: EventEmitter<File> = new EventEmitter();


    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.initializeValues();
        this.initializeEditForm();
    } 

    public handleAccountSelect(account: Account): void {
        const formValues: IInstagramEditFormValues = { ...this.editForm.value };
        formValues.postTo = { ...account };
        this.changes.emit(formValues);
    }

    private initializeEditForm(): void {
        this.editForm = this.formBuilder.group({
            linkTo: [this.ad.linkTo, [Validators.required]],
            text  : [this.ad.text, [Validators.required]],
        });

        this.editForm.valueChanges.subscribe((values: IInstagramEditFormValues) =>
            this.changes.emit(values)
        );
    }

    // todo: move photos to a separate component
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

    public handleTagSelect(tags: Tag[]): void {
        this.changeTags.emit(tags);
    }

    public initializeValues(): void {
        this.displayedImages = [...this.ad.images];
        this.newFiles = [];
        this.selectBoxModelType = Account;
    }
}
