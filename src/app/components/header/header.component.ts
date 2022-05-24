import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = localStorage.getItem('title') ||'Task Tracker App';
  icon!: string;
  class!: string[];

  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onUpdate()
      .subscribe(title => this.title = title)
  }

  ngOnInit(): void {
    this.initButtons();
  }

  initButtons() {
    this.icon = 'pi pi-plus';
    this.class = [
      'p-button-raised',
      'p-button-rounded',
      'p-button-success'
    ];
  }

  newTask() {
    console.log('New task button works!');
  }

}
