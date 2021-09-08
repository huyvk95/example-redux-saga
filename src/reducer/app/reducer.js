const initialState = {
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
};
