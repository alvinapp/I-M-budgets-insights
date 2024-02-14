type Account = {
  id: number;
  account_id: string;
  account_number: string;
  name: string;
  type: string;
  balance: number;
  is_linked: boolean;
  created_on: string;
  created_at: string;
  source: string;
  transactions: {
    total_debit: number;
    total_credit: number;
  };
};

export default Account;
