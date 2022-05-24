import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() newTitle!: string;
  display: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private messageService: MessageService) { 
    this.subscription = this.uiService
      .onUpdate()
      .subscribe()
  }

  ngOnInit(): void {
    this.initButtons();
  }

  initButtons() {
  }

  settings() {
    this.showDialog();
  }

  logout() {
    this.messageService.add({
      severity:'info',
      summary:'Logout',
      detail:'You have logged out.'
    })
  }

  showDialog() {
    this.display = !this.display;
    console.log(this.display);
  }

  updateAppName(input: string) {
    if (!input) return this.messageService.add({
      severity:'error',
      summary:'Error',
      detail:'Please enter a new app name!'
    })
    this.uiService.updateTitle(input);
    this.display = false;
    this.messageService.add({
      severity:'success',
      summary:'Success',
      detail:'Updated app name successfully!'
    })
  }

  defaultAppName() {
    this.uiService.setDefault();
    this.display = false;
    this.messageService.add({
      severity:'success',
      summary:'Success',
      detail:'Default app name restored.'
    })
  }

  reset() {
    this.newTitle = '';
  }

}
