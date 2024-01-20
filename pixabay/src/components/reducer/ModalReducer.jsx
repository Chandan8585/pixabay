const ModalReducer = (state, {type, payload})=> {
   switch(type){
      case "MODAL_OPEN": 
      return{
        ...state,
        isModalOpen: true,
      }
      default: 
      return state
   }
}

export default ModalReducer;