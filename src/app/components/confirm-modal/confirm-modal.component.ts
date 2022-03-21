import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  @Input() confirmCallBack!: Function;
  show: boolean = false;

  constructor() {}
  ngOnInit(): void {}
  open() {
    this._open();
  }
  onConfirm() {
    this._close();
    this.confirmCallBack();
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
