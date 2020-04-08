import { ITravelDetail } from '../ITravelDetail';
import { Action } from '@ngrx/store';

export const ADD_TRAVEL = 'ADD_TRAVEL';

export function addTravelReducer(state: ITravelDetail[] = [], action) {
  switch (action.type) {
    case ADD_TRAVEL:
        return [...state, action.payload];
    default:
        return state;
    }
}
