const initialState = {
  data: undefined,
  error: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      return { ...state, data: action.payload, error: undefined };
    case "USER_FETCH_FAILED":
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};
