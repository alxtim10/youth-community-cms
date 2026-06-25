
export type EventStatus = 'DONE' | 'NOT_DONE';

export interface FellowshipEvent {
  id: number;
  month: string;
  date: string; // ISO 8601 date string, e.g. "2026-06-25"
  theme: string;
  bible_verse: string;
  objective: string;
  theme_description: string;
  speaker: string;
  speaker_pic: string;
  speaker_status: EventStatus;
  mc: string;
  musician: string;
  worship_team_pic: string;
  worship_team_status: EventStatus;
  attendance_count: number;
  created_at: string;
  updated_at: string;
}

export type FellowshipEventPayload = Omit<FellowshipEvent, 'id' | 'created_at' | 'updated_at'>;