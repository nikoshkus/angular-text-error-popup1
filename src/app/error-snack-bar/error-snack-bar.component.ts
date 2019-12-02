import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy
} from '@angular/core';

import { Subject } from 'rxjs';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './error-snack-bar.component.html',
  styleUrls: ['./error-snack-bar.component.scss'],
  selector: 'shared-error-snack-bar'
})
export class ErorrSnackBarComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    public snackBarRef: MatSnackBarRef<ErorrSnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  public ngOnDestroy() {
    this.destroy$.next(true);
  }
}
