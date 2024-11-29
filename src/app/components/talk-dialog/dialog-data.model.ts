import { Talk } from "../../talk.model";

export interface TalkDialogData {
  talk: Talk
  enableDelete: boolean;
}

export interface TalkDialogResult {
  talk?: Talk;
  deleted?: boolean;
}
