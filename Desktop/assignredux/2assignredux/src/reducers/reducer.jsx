const initialState = {
    buttonName: '',
    clickCount: 0,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_BUTTON':
        return {
          buttonName: action.buttonName,
          clickCount: state.clickCount + 1,
        };
      default:
        return state;
    }
  };
  
  export default reducer;