import { Option } from "../SelectInput/SelectInput.component.types";

export interface Props{
  placeholder?: string,
  onChangeSearch: (value:string)=>void,
  options: Option[],
  sortLabel: string,
  onChangeSort: (value:string)=>void,
  value?: string
}