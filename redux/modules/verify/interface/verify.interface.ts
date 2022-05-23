export interface IVerifyAccountState {
  status: string
  serverErr: string | undefined
  loading: boolean
}
export interface IVerifyData {
  token: string | string[]
  loginToken: string
}
