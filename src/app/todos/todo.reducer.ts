import { createReducer, on, State, Action } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Salvar comprar traje de ironman'),
  new Todo('Comprar escudo de capitán américa'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completado: !todo.completado };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, texto: texto };
      } else {
        return todo;
      }
    });
  }),
  on(actions.toggleAll, (state) => {
    return state.map((todo) => {
      return { ...todo, completado: !todo.completado };
    });
  }),
  on(actions.limpiarCompletados, (state) =>
    state.filter((todo) => !todo.completado)
  )
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
