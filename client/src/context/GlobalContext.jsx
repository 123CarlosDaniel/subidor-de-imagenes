import { createContext, useReducer } from 'react'
import appReducer from './reducer'

const initialProvider = {
  refresh: 0,
}

const GlobalContext = createContext(initialProvider)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialProvider)

  const updateRefresh = () => {
    dispatch({ type: 'UPDATE_REFRESH' })
  }
  return (
    <GlobalContext.Provider value={{ ...state, updateRefresh }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
