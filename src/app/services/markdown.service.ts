import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  private markdownSource = new BehaviorSubject<string>('');
  markdown$ = this.markdownSource.asObservable();

  constructor() {}

  updateMarkdown(content: string) {
    this.markdownSource.next(content);
  }
}
