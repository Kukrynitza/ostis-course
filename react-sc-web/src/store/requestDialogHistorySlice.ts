import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@store/model';

export interface IRequest {
  query: string;
  answer: any;
}

interface IInitialState {
  requests: IRequest[];
}

const initialState: IInitialState = {
  requests: [],
};

export const requestDialogHistorySlice = createSlice({
  name: 'requestDialogHistory',
  initialState,
  reducers: {
    addInHistory: (state, action: PayloadAction<IRequest>) => {
      state.requests.push(action.payload);
    },
    resetHistory: (state) => {
      state.requests = [];
    },
  },
});

export const selectRequests = (state: IRootState) => state.requestDialogHistory.requests;

export const { addInHistory, resetHistory } = requestDialogHistorySlice.actions;
