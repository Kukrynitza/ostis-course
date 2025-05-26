import { configureStore } from '@reduxjs/toolkit';

import { argsFixingSlice } from './argsFixingSlice';
import { commonSlice } from './commonSlice';
import { requestHistorySlice } from './requestHistorySlice';
import { requestActiveLink } from './activeLinkSlice';
import { requestDialogHistorySlice } from './requestDialogHistorySlice';

export const store = configureStore({
  reducer: {
    [commonSlice.name]: commonSlice.reducer,
    [requestHistorySlice.name]: requestHistorySlice.reducer,
    [argsFixingSlice.name]: argsFixingSlice.reducer,
    [requestDialogHistorySlice.name]: requestDialogHistorySlice.reducer,
    [requestActiveLink.name]: requestActiveLink.reducer,
  },
});
