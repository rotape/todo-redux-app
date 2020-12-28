import { createReducer, on, State, Action } from '@ngrx/store';
import { filtrosVarios, setFiltro } from './filtro.actions';

export const initialState: filtrosVarios = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state, action: Action) {
  return _filtroReducer(state, action);
}
