const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REFRESH':
      return {
        refresh: state.refresh++,
      }
  }
}

export default appReducer
