import { Component, OnInit, HostBinding, Host } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map, distinctUntilChanged, filter } from 'rxjs/operators';
import { trigger, state, style, animate, transition, group, query, animateChild } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

enum PositionState {
    AtTop = 'transparent',
    NotAtTop = 'opaque'
}

@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.less'],
  animations: [
    trigger('toggleBackground', [
      state(
        'true',
        style({ })
      ),
      state(
        'false',
        style({ 'background-color': 'white' })
      ),
      transition('* => *', [
        group([
          query('@toggleTextColor', animateChild()),
          animate('200ms ease-in')
        ]),
      ]),
    ]),
    trigger('toggleTextColor', [
      state(
        'true',
        style({  })
      ),
      state(
        'false',
        style({ color: 'black' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ]),
  ],
})
export class NavBannerComponent implements OnInit {

  public isAtTop = true;
  public isAtHome;

  constructor(router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isAtHome = event.url === '/home';
      });
   }

  ngOnInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      map((yVal) => yVal < 1 ? true : false),
      distinctUntilChanged(),
    );

    scroll$.subscribe(res => this.isAtTop = res);
  }

}
