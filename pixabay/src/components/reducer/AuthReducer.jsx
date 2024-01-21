export const authReducer = (state, {type, payload})=> {
    switch(type){
      case "NAME": return {
        ...state,
        name: payload
      }
   
     case "MOBILE": return {
        ...state,
        mobile: payload
      }
     case "EMAIL": return {
        ...state,
        email: payload
      }
     case "PASSWORD": return {
        ...state,
        password: payload
      }
     case "CONFIRM_PASSWORD": return {
        ...state,
        confirmPassword: payload
      }
     
      case "CLEAR_USER_DATA": return {
        ...state,
        name: "",
        mobile: "",
        password:"",
        email: "",
        confirmPassword:"",
      }

      default: return state
    }
}