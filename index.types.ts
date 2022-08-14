export type TransactionStatus = {
  status: "PENDING" | "SUCCESS"
}
export type TransactionId = string

export type Transaction = {
  id:TransactionId,
  amount:number,
  unique_code:number,
  status:TransactionStatus,
  sender_bank:string,
  account_number:string,
  beneficiary_name:string,
  beneficiary_bank:string,
  remark:string,
  created_at:string,
  completed_at: string,
  fee:number
}

export type TransactionsObject = {
  [id:TransactionId]: Transaction
}

export type TransactionsList = Transaction[]