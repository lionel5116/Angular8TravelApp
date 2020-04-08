import { ILogin } from './ILogin.model';
import {ITravelDetail} from './ITravelDetail';

export interface AppState {
  readonly login: ILogin[];
  //trying to add multiple interfaces to AppState
  readonly travel: ITravelDetail[];
}
