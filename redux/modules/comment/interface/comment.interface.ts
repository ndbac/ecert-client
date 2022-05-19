export interface Comment {
  _id: string
  createdAt: string
  updatedAt: string
  userId: string
  text: string
  parentId: string
}
export interface CommentGet {
  sort?: boolean
  page?: number
  limit?: number
  parentId: string
}
export interface CommentPost {
  text: string
  parentId?: string | string[]
  token: string
}
export interface CommentDelete {
  id: string
  token: string
}
export interface CommentUpdate extends CommentDelete {
  text: string
}
export interface CommentState {
  list: Comment[]
  loading: boolean
  serverErr: string | undefined
}
export interface CommentCard {
  text: string
  userId: string
  createdAt: string
  parentId: string
  id: string
  show: boolean
  onRemove?: () => void
  onUpdate: (text: string, id: string) => void
}
