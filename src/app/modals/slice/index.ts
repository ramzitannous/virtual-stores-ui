import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ModalState, ModalType } from './types';

export const initialState: ModalState = {
  isShowing: false,
  type: ModalType.INFO,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show(state, action: PayloadAction<ModalState>) {
      state.type = action.payload.type;
      state.isShowing = action.payload.isShowing;
    },
  },
});

export const { actions: modalActions } = slice;

export const useModalSlice = () => {
  return { actions: slice.actions };
};
