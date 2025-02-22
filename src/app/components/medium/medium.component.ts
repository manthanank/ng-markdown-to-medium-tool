import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from '../../services/markdown.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as marked from 'marked';
import markedMoreLists from 'marked-more-lists';

@Component({
  selector: 'app-medium',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="preview-container">
      <div class="toolbar">
        <button
          mat-icon-button
          (click)="copyToClipboard()"
          aria-label="Copy formatted text"
        >
          <mat-icon>content_copy</mat-icon>
        </button>
      </div>
      <div
        class="markdown-preview"
        #previewContent
        [innerHTML]="convertedMarkdown"
      ></div>
    </div>
  `,
  styles: [
    `
      .preview-container {
        height: 100%;
        padding: 8px;
        background: #fff;
        position: relative;

        @media (max-width: 768px) {
          padding: 4px;
        }
      }

      .toolbar {
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 1;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        padding: 4px;

        button {
          color: #1976d2;

          &:hover {
            background-color: rgba(25, 118, 210, 0.04);
          }
        }
      }

      .markdown-preview {
        padding: 16px;
        font-family: 'Georgia', serif;
        font-size: 16px;
        line-height: 1.8;
        color: #2c3e50;

        @media (max-width: 768px) {
          padding: 12px;
          font-size: 14px;
        }

        :host ::ng-deep {
          h1,
          h2,
          h3 {
            margin-top: 24px;

            @media (max-width: 768px) {
              margin-top: 16px;
            }
          }

          p {
            margin: 16px 0;
          }
          code {
            background: #f5f7f9;
            padding: 2px 4px;
            border-radius: 3px;
          }
          pre {
            background: #f5f7f9;
            padding: 16px;
            border-radius: 4px;

            @media (max-width: 768px) {
              padding: 12px;
              font-size: 13px;
            }
          }
        }
      }
    `,
  ],
})
export class MediumComponent {
  @ViewChild('previewContent') previewContent!: ElementRef;
  convertedMarkdown: SafeHtml = '';

  constructor(
    private markdownService: MarkdownService,
    private sanitizer: DomSanitizer,
    private snackBar: MatSnackBar
  ) {
    // Configure marked options
    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown
      breaks: true, // Convert line breaks to <br>
    });

    marked.use(markedMoreLists());

    this.markdownService.markdown$.subscribe((content) => {
      this.convertMarkdown(content);
    });
  }

  async convertMarkdown(content: string) {
    const parsedMarkdown = await marked.parse(content);
    this.convertedMarkdown =
      this.sanitizer.bypassSecurityTrustHtml(parsedMarkdown);
  }

  async copyToClipboard() {
    if (this.previewContent?.nativeElement) {
      try {
        const formattedHtml = this.previewContent.nativeElement.innerHTML;
        const plainText = this.previewContent.nativeElement.innerText;

        // Try rich HTML copy first
        try {
          const htmlBlob = new Blob([formattedHtml], { type: 'text/html' });
          const textBlob = new Blob([plainText], { type: 'text/plain' });

          await navigator.clipboard.write([
            new ClipboardItem({
              'text/html': htmlBlob,
              'text/plain': textBlob,
            }),
          ]);
        } catch (e) {
          // Fallback to plain text
          await navigator.clipboard.writeText(plainText);
        }

        this.snackBar.open('Copied to clipboard', 'Dismiss', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      } catch (err) {
        console.error('Failed to copy:', err);
        this.snackBar.open('Failed to copy', 'Dismiss', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    }
  }
}
