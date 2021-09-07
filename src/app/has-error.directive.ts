import { Directive, HostBinding, ViewChild, OnChanges } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

@Directive({ selector: '[has-error]' })
export class HasErrorDirective implements OnChanges {
  @HostBinding('class.has-error') hasError = false;

  @ViewChild(NgControl) control;

  constructor(private form: FormGroupDirective) {}

  ngOnChanges() {
    this.hasError =
      this.form.submitted || (this.control.touch && this.control.dirty);
  }
}
