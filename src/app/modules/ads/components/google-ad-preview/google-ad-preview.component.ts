import { Component, OnInit, Input } from '@angular/core';
import { GoogleAd } from '../../../../domain/models/newads';

@Component({
  selector: 'app-google-ad-preview',
  templateUrl: './google-ad-preview.component.html',
  styleUrls: ['./google-ad-preview.component.scss']
})
export class GoogleAdPreviewComponent implements OnInit {
  @Input()
  public ad: GoogleAd

  constructor() { }

  ngOnInit() {
  }

}
