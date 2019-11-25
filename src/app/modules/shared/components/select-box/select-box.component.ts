import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { CommonUtils } from '../../../../utils';


interface ISelect<T> {
  options                : Array<T>;
  selected               : T;
  isValid                : boolean;
  tabIndex?              : number;
  name?                  : string;
  isDisabled             : boolean;
  select                 : EventEmitter<T>;
}

// Todo: make more reusable
@Component({
  selector   : 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls  : ['./select-box.component.scss']
})
export class SelectBoxComponent<T> implements OnInit, ISelect<T> { 
      @Input() options   : Array<T>;
      @Input() selected  : T;
      @Input() isValid   : boolean = true;
      @Input() isDisabled: boolean = false;
      @Input() tabIndex  : number;
      @Input() name      : string;
      @Input() modelType: <T>({}) => T;
      @Output() select: EventEmitter<T> = new EventEmitter();
  
      public areOptionsVisible: boolean = false;
      public activeItem       : T;
  
      private optionsPosition     : string = 'bottom';
      private activeItemIndex     : number;
      private isActiveIndexChanged: boolean = false;
  
      @ViewChild('selectList', { static: false }) private selectList      : ElementRef;
      @ViewChild('selectDisplay', { static: false }) private selectDisplay: ElementRef;
  
      @HostListener('document:click', ['$event'])
      clickHandler(event) {
          if (this.areOptionsVisible && !this.elRef.nativeElement.contains(event.target)) {
              this.closeOptionsList();
          }
      }
  
      @HostListener('document:keydown', ['$event'])
      keydownHandler(event: KeyboardEvent) {
          switch (event.key) {
              case 'ArrowDown': {
                  this.handleArrowDownKeyPressed(event);
                  break;
              }
              case 'ArrowUp': {
                  this.handleArrowUpKeyPressed(event);
                  break;
              }
              case 'Enter': {
                  this.handleEnterKeyPressed(event);
                  break;
              }
              case 'Tab': {
                  this.handleTabKeyPressed(event);
                  break;
              }
              case 'Escape': {
                  this.handleEscapeKeyPressed(event);
                  break;
              }
              default:
                  break;
          }
      }
      constructor(private elRef: ElementRef) {}
  
      ngOnInit(): void {
      }
  
  
      // Public handlers dedicated to work with the template
      public handleSelectDisplayClick(): void {
          this.toggleOptionsVisibility();
      }
   
      public checkIfListOptionSelected(index: number, option: T): boolean {
          if (this.activeItemIndex >= 0) {
              return index === this.activeItemIndex;
          } else {
              return option === this.selected;
          }
      }
  
      public handleSelectItemClick(option: T): void {
          this.selectItem(option);
      }
  
      public getOptionsListClassName(): string {
          return this.optionsPosition === 'top' ? 'edit-form__select-options-list top' : 'edit-form__select-options-list';
      }
  
      // Private handlers
      private isDisplayItemSelected(): boolean {
          return document.activeElement === this.selectDisplay.nativeElement;
      }
  
      private getActiveOptionValue(index: number): T {
          return this.options[index];
      }
  
      private toggleOptionsVisibility(): void {
          if (this.areOptionsVisible) this.closeOptionsList();
          else this.openOptionsList();
      }
  
      private selectItem(value: T): void {
          this.select.emit(value);
          this.selected = JSON.parse(JSON.stringify(value));
          console.log(this.selected);
          this.closeOptionsList();
      }
  
      private setOptionsPosition(): void {}
  
      // toggling handlers
      private closeOptionsList(): void {
          this.areOptionsVisible = false;
          this.activeItemIndex = undefined;
          this.isActiveIndexChanged = false;
      }
  
      private openOptionsList(): void {
          this.setOptionsPosition();
  
          if (!this.isDisabled) {
              this.areOptionsVisible = true;
              this.activeItemIndex = this.options.indexOf(this.selected);
              this.activeItem = this.options[this.activeItemIndex]
          }
      }
  
      // Keydown handlers
      private handleArrowDownKeyPressed(event: KeyboardEvent): void {
          event.preventDefault();
  
          switch (this.areOptionsVisible) {
              case true: {
                  if (this.isDisplayItemSelected()) {
                      this.activeItemIndex = CommonUtils.increaseValueToLimit(
                          this.activeItemIndex,
                          this.options.length - 1
                      );
                      this.activeItem = this.getActiveOptionValue(this.activeItemIndex);
                      this.isActiveIndexChanged = true;
                  }
                  break;
              }
              default:
                  break;
          }
      }
  
      private handleArrowUpKeyPressed(event: KeyboardEvent): void {
          event.preventDefault();
  
          switch (this.areOptionsVisible) {
              case true: {
                  if (this.isDisplayItemSelected()) {
                      this.activeItemIndex = CommonUtils.decreaseValueToLimit(
                          this.activeItemIndex,
                          0
                      );
                      this.activeItem = this.getActiveOptionValue(this.activeItemIndex);
                      this.isActiveIndexChanged = true;
                  }
                  break;
              }
              default:
                  break;
          }
      }
  
      private handleTabKeyPressed(event: KeyboardEvent): void {
          switch (this.areOptionsVisible && this.isDisplayItemSelected()) {
              case true: {
                  this.closeOptionsList();
                  break;
              }
              default:
                  break;
          }
      }
  
      private handleEnterKeyPressed(event: KeyboardEvent): void {
          switch (this.areOptionsVisible) {
              case true: {
                  if (this.isDisplayItemSelected()) {
                      if (this.isActiveIndexChanged) {
                          this.selectItem(this.options[this.activeItemIndex]);
                      } else {
                          this.closeOptionsList();
                          this.elRef.nativeElement.focus();
                      }
                  }
                  break;
              }
              case false: {
                  if (this.isDisplayItemSelected()) {
                      this.openOptionsList();
                  }
                  break;
              }
              default:
                  break;
          }
      }
  
      private handleEscapeKeyPressed(event: KeyboardEvent): void {
          switch (this.areOptionsVisible && this.isDisplayItemSelected()) {
              case true: {
                  this.closeOptionsList();
                  break;
              }
              default:
                  break;
          }
      }
}

