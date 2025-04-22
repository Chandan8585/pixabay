// ModalReducer.js
const ModalReducer = (state, { type, payload }) => {
  switch(type) {
     case "OPEN_MODAL_WITH_IMAGE": 
       return {
         isModalOpen: true,
         modalImage: payload 
       }
     case "CLOSE_MODAL": 
       return {
         ...state,
         isModalOpen: false
       }
     default: 
       return state
  }
}

export default ModalReducer;