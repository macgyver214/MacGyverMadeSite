import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.less']
})
export class SiteFooterComponent implements OnInit {

  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fab';
  }

  ngOnInit() {
  }

}
