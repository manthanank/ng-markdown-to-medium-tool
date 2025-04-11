import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-halfpage',
  imports: [],
  template: `
    <div class="halfpage">
      <div class="header">
        <h2>{{ header }}</h2>
        @if (subheader) {
          <span class="subheader">{{ subheader }}</span>
        }
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .halfpage {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: var(--editor-bg);
      transition: background-color 0.3s;

      @media (max-width: 768px) {
        padding: 12px;
      }
    }

    .header {
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-color);

      @media (max-width: 768px) {
        margin-bottom: 12px;
      }
    }

    h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      color: var(--text-color);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    .subheader {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: var(--text-color);
      opacity: 0.7;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }

    .content {
      flex: 1;
      overflow: auto;
    }
  `]
})
export class HalfPageComponent {
  @Input() header!: string;
  @Input() subheader?: string;
}