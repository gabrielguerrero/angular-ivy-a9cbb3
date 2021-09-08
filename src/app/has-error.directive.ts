import {
  Directive,
  HostBinding,
  ViewChild,
  OnChanges,
  OnDestroy,
  OnInit,
  ContentChild
} from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({ selector: '[has-error]' })
export class HasErrorDirective implements OnInit, OnDestroy {
  @HostBinding('class.has-error') hasError = false;

  @ContentChild(NgControl) control: NgControl;

  destroy$ = new Subject();

  constructor(private form: FormGroupDirective) {
    console.log('hidsadasdasde');
  }

  ngOnInit() {
    console.log('gfghf', this.hasError);
    this.form.control.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.hasError =
          this.control.invalid && (this.form.submitted || this.control.touched);
        console.log(
          this.hasError,
          this.control.touched,
          this.control.dirty,
          this.form.submitted
        );
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
