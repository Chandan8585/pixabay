const ModalReducer = (state, {type, payload})=> {
   switch(type){
      case "MODAL_OPEN": 
      return{
        ...state,
        isModalOpen: true,
      }
      case "MODAL_CLOSE": 
      return{
        ...state,
        isModalOpen: false
      }
     case "IMAGE_URL": 
     return{
        ...state,
        modalImgID: payload
     }
      default: 
      return state
   }
}

export default ModalReducer;