import { ReactNode } from "react";

export interface Fellowship {
  id: number;

  month: string;

  date: string;

  theme: string;

  bible_verse: string;

  objective: string;

  theme_description: string;

  speaker: string;

  speaker_pic: string;

  speaker_status: "DONE" | "NOT_DONE";

  mc: string;

  musician: string;

  worship_team_pic: string;

  worship_team_status:
    | "DONE"
    | "NOT_DONE";

  attendance_count: number;

  created_at: string;
}

export interface Member {
  id: number;

  name: string;

  gender: "M" | "F";

  phone: string;

  address: string;

  created_at: string;
}

export interface FileResource {
  id: number;

  name: string;

  url: string;

  description?: string;

  created_at: string;
}

export interface MonthlyAttendance {
  month: string;

  attendance: number;
}

export interface AttendanceTrend {
  date: string;

  attendance: number;
}

export interface InfoCardProps {
  icon: ReactNode;

  title: string;

  value: string | number;
}

export interface InfoRowProps {
  label: string;

  value: string | number;
}




