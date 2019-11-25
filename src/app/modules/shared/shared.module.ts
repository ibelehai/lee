import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { MultipleSelectBoxComponent } from './components/multiple-select-box/multiple-select-box.component';



@NgModule({
  declarations: [SpinnerComponent, SelectBoxComponent, MultipleSelectBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    SelectBoxComponent,
    MultipleSelectBoxComponent
  ]
})
export class SharedModule { }
