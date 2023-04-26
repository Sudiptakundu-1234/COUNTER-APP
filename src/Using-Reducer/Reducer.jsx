export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "INCRESE":
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case "DECRESE":
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    case "RESET":
      return {
        ...state,
        count: 0,
      };
      break;
    case "ADD":
      return {
        ...state,
        count: state.count + parseInt(action.payload),
      };
      break;
    case "NO_VALUE":
      return {
        ...state,
        alert: true,
      };
      break;
    case "CLOSE_ALERT":
      return {
        ...state,
        alert: false,
      };
      break;
    default:
      break;
  }
};
