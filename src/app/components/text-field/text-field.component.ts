import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MarkdownService } from '../../services/markdown.service';

@Component({
  selector: 'app-textfield',
  imports: [ReactiveFormsModule],
  template: `
    <div class="editor-container">
      <textarea
        class="markdown-editor"
        [formControl]="markdownText"
        placeholder="Type your markdown here..."
      ></textarea>
    </div>
  `,
  styles: [
    `
      .editor-container {
        height: 100%;
        padding: 8px;

        @media (max-width: 768px) {
          padding: 4px;
        }
      }

      .markdown-editor {
        width: 100%;
        height: 100%;
        min-height: 300px;
        padding: 16px;
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        line-height: 1.6;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        resize: none;
        outline: none;
        transition: border-color 0.2s;

        &:focus {
          border-color: #1976d2;
        }

        @media (max-width: 768px) {
          min-height: 200px;
          padding: 12px;
          font-size: 13px;
        }
      }
    `,
  ],
})
export class TextFieldComponent {
  markdownText = new FormControl('');

  constructor(private markdownService: MarkdownService) {
    this.markdownText.valueChanges.subscribe((value) => {
      this.markdownService.updateMarkdown(value || '');
    });
  }
}
