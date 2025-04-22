// ModalContext.js
import React, { createContext, useContext, useReducer } from 'react';
import ModalReducer from '../reducer/ModalReducer';

const initialValue = {
  isModalOpen: false,
  modalImage: null 
};

const ModalContext = createContext(initialValue);

const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ModalReducer, initialValue);
    
    return (
        <ModalContext.Provider value={{ ...state, modalDispatch: dispatch }}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };