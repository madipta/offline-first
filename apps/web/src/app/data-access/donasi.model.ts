export interface IDonasi {
  id: string;
  createdAt: number | Date,
  name: string;
  phone: string;
  amount: number;
  sync: 0 | 1;
}
