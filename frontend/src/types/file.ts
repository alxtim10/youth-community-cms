export interface AppFile {
  id: number;
  name: string;
  url: string;
  description?: string | null;
  created_at: string;
}

export type AppFilePayload = Omit<AppFile, 'id' | 'created_at'>;