export interface Macro {
  id: number;
  name: string;
  amount: number;
  percentage: number;
  share: number;
  type_name: string;
  type_id: number;
  expense: number;
  range_expense: {
    last_month_total: number;
    this_month_total: number;
  };
}
