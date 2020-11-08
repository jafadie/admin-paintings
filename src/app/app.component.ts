import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyPaintings';

  constructor(private metaTagService: Meta,
  			  private canonicalService: CanonicalService)
  {}

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Lorena García Mateu, Paintings, Arts, Art, Arte contemporáneo, Oil on canvas, Óleo, Contemporary Art, Art scene, Pintores emergentes, Pintoras emergentes, Artistas' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);

    this.canonicalService.setCanonicalURL();
  }

}
