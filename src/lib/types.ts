export type Chicken = {
  id: string;
  name: string;
  breed: string;
  birthDate: Date;
};

export type DailyLog = {
  id: string;
  chickenId: string;
  date: Date;
  eggCount: number;
  feedAmount: number; // in grams
};
