import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@store/model';

export interface IRequest {
  action: number;
}
interface IInitialState {
  requests: IRequest[];
}

const initialState: IInitialState = {
  requests: localStorage.getItem('requestHistory') 
    ? JSON.parse(localStorage.getItem('requestHistory') as string) 
    : [],
};

export const requestHistorySlice = createSlice({
  name: 'requestHistory',
  initialState,
  reducers: {
    setRequests(state, action: PayloadAction<IRequest[]>) {
      state.requests = action.payload;
      localStorage.setItem('requestHistory', JSON.stringify(state.requests));
    },
    addRequest(state, action: PayloadAction<IRequest>) {
      state.requests.unshift(action.payload);
      if (state.requests.length > 20) {
        state.requests = state.requests.slice(0, 20);
      }
      localStorage.setItem('requestHistory', JSON.stringify(state.requests));
    },
    removeRequest(state, action: PayloadAction<number>) {
      state.requests = state.requests.filter((req) => req.action !== action.payload);
      localStorage.setItem('requestHistory', JSON.stringify(state.requests));
    },
    clearRequests(state) {
      state.requests = [];
      localStorage.removeItem('requestHistory');
    },
  },
});

export const selectRequests = (state: IRootState) => state.requestHistory.requests;

export const { setRequests, addRequest, removeRequest, clearRequests } = requestHistorySlice.actions;
