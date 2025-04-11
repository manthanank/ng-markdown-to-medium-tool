import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [MatIconModule, MatButtonModule, AsyncPipe],
  template: `
    <button mat-icon-button (click)="toggleTheme()" aria-label="Toggle theme" class="theme-toggle">
      <mat-icon>{{ (themeService.isDarkTheme$ | async) ? 'light_mode' : 'dark_mode' }}</mat-icon>
    </button>
  `,
  styles: [`
    .theme-toggle {
      color: inherit;
    }
  `]
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}