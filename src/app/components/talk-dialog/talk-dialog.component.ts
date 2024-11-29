import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Talk } from '../../talk.model';
import { Component, Inject, OnInit } from '@angular/core';
import { TalkDialogData, TalkDialogResult } from './dialog-data.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-talk-dialog',
  templateUrl: './talk-dialog.component.html',
  styleUrl: './talk-dialog.component.css',
})
export class TalkDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, [Validators.required]),
    speaker: new FormControl(null, [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<TalkDialogComponent, TalkDialogResult>,
    @Inject(MAT_DIALOG_DATA) public data: TalkDialogData
  ) {}

  ngOnInit(): void {
    if (this.data?.talk) {
      this.form.patchValue(this.data.talk);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close({
        talk: this.form.value as Talk,
      });
    }
  }

  delete() {
    this.dialogRef.close({
      talk: this.data.talk,
      deleted: true,
    });
  }
}
