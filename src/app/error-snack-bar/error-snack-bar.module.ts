import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ErorrSnackBarComponent } from './error-snack-bar.component';
import { MatSnackBarModule } from '@angular/material';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@NgModule ({
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule
  ],
  declarations: [
    ErorrSnackBarComponent
  ],
  exports: [
    FormsModule,
    ErorrSnackBarComponent
  ],
  providers: [
     { provide: MAT_SNACK_BAR_DATA, useValue: {} },
     { provide: MatSnackBarRef, useValue: {} }
  ],
  entryComponents: [ErorrSnackBarComponent]
})
export class ErrorSnackBarModule {}