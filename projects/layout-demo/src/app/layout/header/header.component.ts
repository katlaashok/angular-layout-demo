import { Component, OnInit, NgZone } from '@angular/core';
import * as $ from 'jquery';
declare const HSMegaMenu: any;

@Component({
  selector: 'fid-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
       var megaMenu = new HSMegaMenu($('.js-mega-menu'), {
        desktop: {
          position: 'left'
        }
      }).init();
    });
  }
}
