import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-halfpage',
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
      background: #fff;

      @media (max-width: 768px) {
        padding: 12px;
      }
    }

    .header {
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e0e0e0;

      @media (max-width: 768px) {
        margin-bottom: 12px;
      }
    }

    h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      color: #2c3e50;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    .subheader {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #666;
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