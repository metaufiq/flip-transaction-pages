import { useState } from "react";

import { TransactionsList } from "../../../index.types";
import { Params } from "./useTransactions.hooks.types";

const useTransactions = ({initialValue}: Params)=>{
  const [transactions] = useState<TransactionsList>(initialValue);

  return {transactions}
}

export default useTransactions;