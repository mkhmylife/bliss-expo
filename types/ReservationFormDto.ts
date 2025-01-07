interface ReservationFormDto {
  branchId: number;
  date: string;
  ppl: number;
  time: string;
  notes: string;
  promoCode?: string;
  acceptToc: string;

  pplSelect: number;
}