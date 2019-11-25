import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { AdsRoutingModule } from './ads-routing.module';
import { AdPreviewComponent } from './components/ad-preview/ad-preview.component';
import { GoogleAdPreviewComponent } from './components/google-ad-preview/google-ad-preview.component';
import { FacebookAdPreviewComponent } from './components/facebook-ad-preview/facebook-ad-preview.component';
import { InstagramAdPreviewComponent } from './components/instagram-ad-preview/instagram-ad-preview.component';
import { AdTypeLabelComponent } from './components/ad-type-label/ad-type-label.component';
import { SharedModule } from '../shared/shared.module';
import { AdEditComponent } from './components/ad-edit/ad-edit.component';
import { AdEditFormComponent } from './components/ad-edit-form/ad-edit-form.component';
import { GoogleAdEditFormComponent } from './components/google-ad-edit-form/google-ad-edit-form.component';
import { FacebookAdEditFormComponent } from './components/facebook-ad-edit-form/facebook-ad-edit-form.component';
import { InstagramAdEditFormComponent } from './components/instagram-ad-edit-form/instagram-ad-edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdEditFormTabsComponent } from './components/ad-edit-form-tabs/ad-edit-form-tabs.component';
import { AdEditFormTabComponent } from './components/ad-edit-form-tab/ad-edit-form-tab.component';
import { AdPreviewLabelComponent } from './components/ad-preview-label/ad-preview-label.component';

@NgModule({
  declarations: [AdsListComponent, AdPreviewComponent, GoogleAdPreviewComponent, FacebookAdPreviewComponent, InstagramAdPreviewComponent, AdTypeLabelComponent, AdEditComponent, AdEditFormComponent, GoogleAdEditFormComponent, FacebookAdEditFormComponent, InstagramAdEditFormComponent, AdEditFormTabsComponent, AdEditFormTabComponent, AdPreviewLabelComponent],
  imports: [
    CommonModule, AdsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule
  ]
})
export class AdsModule { }
