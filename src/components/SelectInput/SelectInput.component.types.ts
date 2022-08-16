import { SetState, VoidFunction } from "../../../index.types"

export type Option = {
  value: any,
  label: string,
}

export type Props = {
  options: Option[],
  label: string,
  onChange: (value:string)=>void,
  value?: string
}

export type SetShowModal = SetState<boolean>