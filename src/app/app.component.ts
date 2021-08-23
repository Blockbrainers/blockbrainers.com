import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import AOS from 'aos';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Blockbrainers';
  public isBrowser = false;
  public topened = false;
  private subscription = new Subscription();

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      AOS.init({
        disable: 'mobile'
      });
    }
    this.listenToRoute();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private listenToRoute(): void {
    const appTitle = this.titleService.getTitle();
    const subscription = this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data.title) {
            return child.snapshot.data.title;
          }
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });

    this.subscription.add(subscription);
  }

}
