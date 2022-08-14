import { TransactionObject } from "../../index.types";
import APIServices from "../configs/api";

const getListTransaction = async (): Promise<{data: TransactionObject}> => {
  const { data } = await APIServices.RecruitmentTest.get('/frontend-test');

  return data;
};

const recruitmentTest = {
  getListTransaction
};

export default recruitmentTest;