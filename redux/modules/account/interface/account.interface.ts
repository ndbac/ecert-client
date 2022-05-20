export interface Account {
  email: string
  name: string
  bio: string
  active: boolean
  verify: false
  photoUrl: string
  namespace: string
}
export interface AccountState {
  user: Account
  loading: boolean
  serverErr: string | undefined
}
