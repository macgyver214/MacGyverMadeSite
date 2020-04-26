import { Component, OnInit, HostBinding, Host } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map, distinctUntilChanged, filter } from 'rxjs/operators';
import { trigger, state, style, animate, transition, group, query, animateChild } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.less'],
  animations: [
    // animate background from transparent to white when not at the top of page
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
        // trigger the next animation after this one
        group([
          query('@toggleTextColor', animateChild()),
          animate('200ms ease-in')
        ]),
      ]),
    ]),
    // animate the text color from white to black
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
  public isAtHome = true;
  private router;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit() {

    // listen to window scroll events for when the app is no longer at the top of the page
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      map((yVal) => yVal < 1 ? true : false),
      distinctUntilChanged(),
    );

    scroll$.subscribe(res => this.isAtTop = res);

    // listen for router navigation events for when the app lands on the homepage
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      console.log(event.url);
      this.isAtHome = (event.url === '/home') || (event.url === '/index.html') || (event.url === '/');
    });
  }

}
