import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../types/dialog-data.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VALIDATE_HTTP_PATTERN} from './types/add-movie-dialog.constants';

@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.scss']
})
export class AddMovieDialogComponent {
  movieFormGroup: FormGroup;

  constructor( private formBuilder: FormBuilder,
               public dialogRef: MatDialogRef<AddMovieDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.movieFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      imdbLink: ['', [Validators.required, Validators.pattern(VALIDATE_HTTP_PATTERN)]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.movieFormGroup.invalid) {
      return;
    }
  }
}
