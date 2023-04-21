type Transaction = {
  id?: number;
  goalName?: string;
  transacted_at: Date;
  amount: number;
  emoji?: string;
  activityName?: string;
  type: string;
};

export default Transaction;
