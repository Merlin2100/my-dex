export const provider = (state = { value: 0 }, action) => {
    switch (action.type) {
      case 'PROVIDER_LOADED':
        return {
            ...state,
            connection: action.connection
        }

        default:
        return state
    }
  }