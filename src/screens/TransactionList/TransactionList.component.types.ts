import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList, SetState } from "../../../index.types";

export type Props = NativeStackScreenProps<RootStackParamList, 'TransactionDetail'>;

export type SetSearchInput = SetState<string | undefined>;
export type SetSortCondition = SetState<string | undefined>;