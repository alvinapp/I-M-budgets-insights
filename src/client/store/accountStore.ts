import create from "zustand";

import Account from "client/models/Account";

const useAccountStore = create((set) => ({
  accounts: [],
  balance: 0,
  isStale: true,
  filter: null,
  loading: false,
  account_id: "",
  account_name: "",
  openAccountBottomSheet: false,
  setOpenAccountBottomSheet: (open: boolean) => {
    return set((state: any) => {
      return {
        openAccountBottomSheet: open,
      };
    });
  },
  init: (accounts: Account[]) => {
    return set((state: any) => {
      // const newState = (accounts || []).map((account: Account) => {
      //   return [account.account_id, account];
      // });

      // const currentState = (state.accounts || []).map((account: Account) => {
      //   return [account.account_id, account];
      // });
      // const nextState = new Map([...newState, ...currentState]);
      const results = {
        accounts: accounts,
      };
      return results;
    });
  },
  setStale: (stale: boolean) => {
    return set((state: any) => {
      const results = {
        isStale: stale,
      };
      return results;
    });
  },
  filterBy: (account: Account) => {
    return set((state: any) => {
      const results = {
        filter: account,
      };
      return results;
    });
  },
  setBalance: (balance: number) => {
    return set((state: any) => {
      const result = {
        balance: balance,
      };
      return result;
    });
  },
  setAccountLoading: (loading: boolean) => {
    return set((state: any) => {
      const results = {
        loading: loading,
      };
      return results;
    });
  },
  selectAccount: (account: Account) => {
    return set((state: any) => {
      const results = {
        account_id: account.account_id,
        account_name: account.name,
      };
      return results;
    });
  },
}));

export default useAccountStore;
