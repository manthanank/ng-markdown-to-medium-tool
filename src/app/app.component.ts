import { Component } from '@angular/core';
import { MediumComponent } from './components/medium/medium.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { HalfPageComponent } from "./components/half-page/half-page.component";
import { AppbarComponent } from "./components/app-bar/app-bar.component";

@Component({
  selector: 'app-root',
  imports: [TextFieldComponent, MediumComponent, HalfPageComponent, AppbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-markdown-to-medium-tool';
}
