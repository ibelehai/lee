import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAd } from '../../../../domain/models/newads';
import { Tag } from '../../../../domain/models';


export interface IGoogleEditFormValues {
    name?       : string;
    headline?   : string;
    link?       : string;
    description?: string;
}


@Component({
    selector: 'app-google-ad-edit-form',
    templateUrl: './google-ad-edit-form.component.html',
    styleUrls: ['./google-ad-edit-form.component.scss']
})
export class GoogleAdEditFormComponent implements OnInit {
    @Input()
    public ad      : GoogleAd
    @Input()
    public tags: Tag[];
    public editForm: FormGroup;

    @Output()
    private changes: EventEmitter<IGoogleEditFormValues> = new EventEmitter();
    @Output()
    private changeTags: EventEmitter<Tag[]> = new EventEmitter();
    public multipleSelectBoxModelType = Tag;

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.initializeEditForm();
    }

    private initializeEditForm(): void {
        this.editForm = this.formBuilder.group({
            headline   : [this.ad.headline, [Validators.required]],
            link       : [this.ad.link, [Validators.required]],
            description: [this.ad.description, [Validators.required]]
        });

        this.editForm.valueChanges.subscribe((values: IGoogleEditFormValues) =>
            this.changes.emit(values)
        );
    }

    public handleTagSelect(tags: Tag[]): void {
        this.changeTags.emit(tags);
    }
}
