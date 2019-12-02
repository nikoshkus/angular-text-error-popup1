import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  OnDestroy,
  OnInit
} from '@angular/core';

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
    constructor() {}

  ngOnInit() {
    this.requiredFormControl.statusChanges
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(changes =>  this.onChange(changes));
  }

  public getMessage() {
    return 'Title is required!';
  }

  onChange(event): void {
    console.log('change', event);
    if(event ==='VALID') {
      
    }
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
  }
}
