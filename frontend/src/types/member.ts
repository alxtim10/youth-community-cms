export type Gender = 'M' | 'F';

export interface Member {
  id: number;
  name: string;
  address: string;
  gender: Gender;
  phone: string;
  created_at: string; // ISO 8601 datetime string
}

// Untuk form create/update (tanpa id & timestamps)
export type MemberPayload = Omit<Member, 'id' | 'created_at'>;