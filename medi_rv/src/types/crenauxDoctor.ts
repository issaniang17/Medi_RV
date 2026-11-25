export type doctorCreneau = {
  id: number;
  day: string;
  availability?: {id:number, start: string; end: string }[];
};
