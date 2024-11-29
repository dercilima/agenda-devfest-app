import { Component, OnInit } from '@angular/core';
import { Talk } from './talk.model';
import { MatDialog } from '@angular/material/dialog';
import { TalkDialogComponent } from './components/talk-dialog/talk-dialog.component';
import { TalkDialogResult } from './components/talk-dialog/dialog-data.model';
import { TalkService } from './talk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  talks: Talk[] = [];

  constructor(private dialog: MatDialog, private talkService: TalkService) {}

  ngOnInit() {
    this.loadTalks();
  }

  private loadTalks() {
    this.talkService.getAll().then((talks) => {
      this.talks = talks;
    });
  }

  addNewTalk() {
    const dialogRef = this.dialog.open(TalkDialogComponent, {
      width: '500px',
      data: {
        talk: {},
      },
    });
    dialogRef.afterClosed().subscribe((result: TalkDialogResult) => {
      if (result && result.talk) {
        this.talkService.add(result.talk).then(() => this.loadTalks());
      }
    });
  }

  editTalk(talk: Talk) {
    const dialogRef = this.dialog.open(TalkDialogComponent, {
      width: '500px',
      data: {
        talk: talk,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TalkDialogResult) => {
      if (result) {
        if (result.deleted) {
          this.talkService.delete(result.talk!).then(() => this.loadTalks());
        } else {
          this.talkService.update(result.talk!).then(() => this.loadTalks());
        }
      }
    });
  }
}
