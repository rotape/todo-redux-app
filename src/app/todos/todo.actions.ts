import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO crear accion',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar todo',
  props<{ id: number; texto: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar todo',
  props<{ id: number }>()
);

export const toggleAll = createAction('[TODO] Toggle todos');

export const limpiarCompletados = createAction('[TODO] Limpiar completados');
