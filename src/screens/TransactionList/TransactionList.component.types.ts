import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList, SetState } from "../../../index.types";
import { SortCondition } from "../../hooks/useTransactions/useTransactions.hooks.types";

export type Props = NativeStackScreenProps<RootStackParamList, 'TransactionDetail'>;

export type SetSearchInput = SetState<string | undefined>;
export type SetSortCondition = SetState<SortCondition>;