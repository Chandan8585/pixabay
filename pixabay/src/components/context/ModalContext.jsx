import React, { createContext, useContext, useReducer } from 'react'
import ModalReducer from '../reducer/ModalReducer';

const initialValue = {
  isModalOpen: true,
}
const ModalContext = createContext(initialValue);

const ModalProvider = ({children})=>{
    const [{isModalOpen}, modalDispatch] = useReducer(ModalReducer, initialValue);
  return(
    <ModalContext.Provider value={{isModalOpen, modalDispatch}}>
        {children}
    </ModalContext.Provider>
  )
}

const useModal = ()=> useContext(ModalContext);

export {useModal, ModalProvider};