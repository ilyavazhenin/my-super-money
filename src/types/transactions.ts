export interface ICategory {
  name: string;
  id: number;
  icon: string;
}

export interface ITransactionFormValue {
  id: number | null;
  amount: number | null;
  name: string | null;
  date: Date;
  category: ICategory;
  type: 'expense' | 'income';
}

export type ITransaction = Omit<ITransactionFormValue, 'Date'> & { Date: string };