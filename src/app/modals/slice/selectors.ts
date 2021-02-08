import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.modal || initialState;

export const selectModal = createSelector([selectSlice], state => state);
