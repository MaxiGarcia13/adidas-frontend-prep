# Coach notes — 10-redux-async

## Planted issues

1. Thunk not handled in `extraReducers` fully (missing rejected/pending)
2. Total selector multiplies wrong fields / uses stale prices
3. UI ignores `status === 'loading'`
4. Duplicate fetches without condition

## Good signals

- Uses RTK thunk + `extraReducers`
- Selectors for total
- Error path tested

## Follow-ups

1. RTK Query vs hand-written thunks?
2. Where should entity normalization live?
3. How to cancel thunks on unmount?

## Solution outline

- `createAsyncThunk('products/fetch')`
- Slice status flags
- `selectCartTotal` = sum qty * price
