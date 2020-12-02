import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './services/canonical.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from './environments/environment.prod';
import { isPlatformBrowser } from '@angular/common';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyPaintings';

  constructor(private metaTagService: Meta,
  			  private canonicalService: CanonicalService,
          private router: Router,
          @Inject(PLATFORM_ID) platformId)
  {
    if (isPlatformBrowser(platformId)) {
      this.addGAScript();

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        /** START : Code to Track Page View  */
         gtag('event', 'page_view', {
            page_path: event.urlAfterRedirects
         })
        /** END */
      })
    }
    
  }

  /** Add Google Analytics Script Dynamically */
  addGAScript() {
      let gtagScript: HTMLScriptElement = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.GA_TRACKING_ID;
      document.head.prepend(gtagScript);
      /** Disable automatic page view hit to fix duplicate page view count  **/
      gtag('config', environment.GA_TRACKING_ID, { send_page_view: false });
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Lorena Garcia Mateu, Paintings, Arts, Oil on canvas, Contemporary Art, Art scene, Pintores emergentes, Pintoras emergentes, Artistas' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);

    this.canonicalService.setCanonicalURL();
  }

}
