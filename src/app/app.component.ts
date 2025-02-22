import { Component, inject, OnInit } from '@angular/core';
import { MediumComponent } from './components/medium/medium.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { HalfPageComponent } from "./components/half-page/half-page.component";
import { AppbarComponent } from "./components/app-bar/app-bar.component";
import { TrackService } from './services/track.service';

@Component({
  selector: 'app-root',
  imports: [TextFieldComponent, MediumComponent, HalfPageComponent, AppbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ng-markdown-to-medium-tool';

  trackService = inject(TrackService);

  ngOnInit(): void {
    this.trackService.trackProjectVisit(this.title);
  }
}
