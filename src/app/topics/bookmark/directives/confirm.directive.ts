import { Directive, HostListener, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Directive({
  selector: '[appConfirm]',
})
export class ConfirmDirective {
  @Input() appConfirm!: Function;
  @Input() confirmMessage = 'Are you sure you want to do this?';
  @HostListener('click', ['$event'])
  confirmEvent(event: Event) {
    const confirm = window.confirm(this.confirmMessage);
    if (confirm) {
      this.appConfirm();
    }
  }

  constructor(private appService: AppService) {}
}
