import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // subject
  private _confirmModalStatusSource: Subject<'open' | 'close' | 'confirmed'> =
    new Subject();
  // stream
  private _confirmModalStatus = this._confirmModalStatusSource.asObservable();
  // action

  constructor() {}

  onConfirmedModal() {
    this._confirmModalStatusSource.next('confirmed');
  }
  openConfirmModal() {
    this._confirmModalStatusSource.next('open');
  }
  closeConfirmModal() {
    this._confirmModalStatusSource.next('close');
  }

  getConfirmModalStatus() {
    return this._confirmModalStatus;
  }
}
