import React, { createContext, useContext, useReducer } from 'react'
import ModalReducer from '../reducer/ModalReducer';

const initialValue = {
  isModalOpen: false,
  modalImgID : ""
}
const ModalContext = createContext(initialValue);

const ModalProvider = ({children})=>{
    const [{isModalOpen , modalImgID}, modalDispatch] = useReducer(ModalReducer, initialValue);
  return(
    <ModalContext.Provider value={{isModalOpen,modalImgID, modalDispatch}}>
        {children}
    </ModalContext.Provider>
  )
}

const useModal = ()=> useContext(ModalContext);

export {useModal, ModalProvider};