export interface RootState {

  currentUser: {
    inProgress: boolean
    deleted: boolean
    created: boolean
    updated: boolean
    fetched: boolean
    error: any
    visibility: boolean
  }
}
