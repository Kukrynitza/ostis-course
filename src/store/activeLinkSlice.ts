import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { routes } from '@constants';
import { IRootState } from '@store/model';

export interface IRequest {
  newActiveLink: string;
}
interface IInitialState {
  value: string;
}

const initialState: IInitialState = {
  value: routes.MAIN,
};

export const requestActiveLink = createSlice({
  name: 'activeLink',
  initialState,
  reducers: {
    setActiveLink(state, action: PayloadAction<IRequest>) {
      state.value = action.payload.newActiveLink;
    },
  },
});

export const selectActiveLink = (state: IRootState) => state.activeLink.value;

export const { setActiveLink } = requestActiveLink.actions;
