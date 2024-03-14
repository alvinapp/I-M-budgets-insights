import { Category } from "./Categories";
import { MicroGoal } from "./MicroGoal";

export type BudgetTransaction = {
  id: string;
  amount: number;
  merchant: Merchant;
  category: Category;
  transacted_at: string;
  type: string;
};

type Merchant = {
  id: number;
  name: string;
};
