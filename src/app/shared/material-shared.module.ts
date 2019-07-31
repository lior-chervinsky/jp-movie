import {NgModule} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
})
export class MaterialSharedModule { }
