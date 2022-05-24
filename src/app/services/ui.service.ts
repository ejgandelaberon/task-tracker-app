import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private defaultTitle: string = 'Task Tracker App';
  private newTitle!: string;
  private subject = new Subject<string>();

  constructor() { }

  setDefault() {
    localStorage.removeItem('title');
    this.subject.next(this.defaultTitle);
  }

  updateTitle(title: string) {
    localStorage.setItem('title', title);
    this.subject.next(localStorage.getItem('title')!)
  }

  onUpdate(): Observable<string> {
    return this.subject.asObservable();
  }
}
