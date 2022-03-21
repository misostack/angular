import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  @HostListener('document:keydown.esc', ['$event'])
  onEscDownHandler() {
    // close modal
    this.onClose();
  }

  @Input() title!: string;
  show: boolean = false;

  constructor() {}
  ngOnInit(): void {}
  onOpen() {
    this._open();
  }
  onConfirm() {
    this._close();
  }
  onClose() {
    this._close();
  }
  _close() {
    this.show = false;
  }
  _open() {
    this.show = true;
  }
}
