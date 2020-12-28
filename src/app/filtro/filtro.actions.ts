import { createAction, props } from '@ngrx/store';
export type filtrosVarios = 'todos' | 'compoletados' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosVarios }>()
);
