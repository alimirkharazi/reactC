import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
};

const initialAuthState = {
};

export const reducer = persistReducer(
  { storage, key: 'reactC'},
  (state = initialAuthState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
);

export const actions = {
};

export function* saga() {
}
