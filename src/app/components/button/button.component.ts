import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() class!: string[];
  @Input() style!: string;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  clickEvent() {
    this.btnClick.emit()
  }

}
