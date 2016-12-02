import { UserActions, Action } from '../actions'

let defaultState: any = {
  inProgress: false,
  deleted: false,
  created: false,
  updated: false,
  fetched: false,
  error: null,
  radar: null,
  visibility: 'private',
  presentationMode: false,
  copied: false,
}

export default function currentUser(state: any = defaultState, action: Action): any {
  'use strict'

  switch (action.type) {
    // Create Radar
    case UserActions.CREATE_USER_START:
      return Object.assign({}, state, {
        inProgress: true,
        created: false,
        error: null,
      })
    case UserActions.CREATE_USER_RESOLVE:
      return Object.assign({}, state, {
        inProgress: false,
        created: true,
        user: action.payload,
      })
    case UserActions.CREATE_USER_REJECT:
      return Object.assign({}, state, {
        inProgress: false,
        error: action.payload,
      })

    // Fetch Radar
    case UserActions.GET_USER_START:
      return Object.assign({}, state, {
        inProgress: true,
        fetched: false,
        error: null,
      })
    case UserActions.GET_USER_RESOLVE:
      return Object.assign({}, state, {
        inProgress: false,
        fetched: true,
        radar: action.payload,
      })
    case UserActions.GET_USER_REJECT:
      return Object.assign({}, state, {
        inProgress: false,
        error: action.payload,
      })

    // Update Radar
    case UserActions.UPDATE_USER_START:
      return Object.assign({}, state, {
        inProgress: true,
        updated: false,
        error: null,
      })
    case UserActions.UPDATE_USER_RESOLVE:
      return Object.assign({}, state, {
        inProgress: false,
        updated: true,
        radar: action.payload,
      })
    case UserActions.UPDATE_USER_REJECT:
      return Object.assign({}, state, {
        inProgress: false,
        error: action.payload,
      })

    // Delete Radar
    case UserActions.DELETE_USER_START:
      return Object.assign({}, state, {
        inProgress: true,
        deleted: false,
        error: null,
      })
    case UserActions.DELETE_USER_RESOLVE:
      return Object.assign({}, state, {
        inProgress: false,
        deleted: true,
        radar: null,
      })
    case UserActions.DELETE_USER_REJECT:
      return Object.assign({}, state, {
        inProgress: false,
        error: action.payload,
      })

    default:
      return state
  }
}
