import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  OnDestroy,
  OnInit
} from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormControl, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text-error.component.html',
  styleUrls: ['./text-error.component.scss'],
  selector: 'shared-text-error',
  encapsulation: ViewEncapsulation.None
})
export class TextErorrComponent implements OnDestroy, OnInit {
  private destroy$: Subject<boolean> = new Subject();

  requiredFormControl = new FormControl('textError', [Validators.required]);

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.requiredFormControl.statusChanges
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(changes =>  this.onChange(changes));
  }

  public openSnackBar() {
    if(this.requiredFormControl.hasError('required')) {
      const message = 'Title is required!';
      this.snackBar.open('Title is required!', 'Close',
      {
        panelClass: 'error-message',
        duration: 5000,
      });
    }
  }

  onChange(event): void {
    console.log('change', event);
    if(event ==='VALID' && this.snackBar._openedSnackBarRef) {
      this.snackBar._openedSnackBarRef.dismiss();
    }
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
  }
}
