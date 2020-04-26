import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.less']
})
export class SiteFooterComponent implements OnInit {

  // set the default prefix for fontawesome icons, since only one that was imported is from a different prefix
  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fab';
  }

  ngOnInit() {
  }

}
