import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule],
  template: `<mat-toolbar color="primary">Markdown to Medium</mat-toolbar>`,
  styles: [
    `
      mat-toolbar {
        font-size: 20px;
      }
    `,
  ],
})
export class AppbarComponent {}
