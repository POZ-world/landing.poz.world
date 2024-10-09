import type { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';
import { createAsyncThunk as baseCreateAsyncThunk } from '@reduxjs/toolkit';

export const createAsyncThunk = <Returned, ThunkArg>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, { state: undefined, serializedErrorType: any }>,
) => baseCreateAsyncThunk(
  typePrefix,
  payloadCreator,
  { serializeError: (e) => e },
);
