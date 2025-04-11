import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule, ThemeToggleComponent],
  template: `
    <mat-toolbar color="primary">
      <span>Markdown to Medium</span>
      <span class="spacer"></span>
      <app-theme-toggle></app-theme-toggle>
    </mat-toolbar>`,
  styles: [
    `
      mat-toolbar {
        font-size: 20px;
      }
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class AppbarComponent {}
