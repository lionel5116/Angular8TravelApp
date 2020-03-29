import { Login } from '../login.model';
import { Action } from '@ngrx/store';

export const ADD_LOGIN = 'ADD_LOGIN';

export function addLoginReducer(state: Login[] = [], action) {
  switch (action.type) {
    case ADD_LOGIN:
        return [...state, action.payload];
    default:
        return state;
    }
}