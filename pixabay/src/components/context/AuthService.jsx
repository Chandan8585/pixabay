import axios from 'axios'

export const LoginHandler = async (email, password) => {
    try { 
        const response = await axios.post("https://menu-api-zps1.vercel.app/login", {
            email: email,
            password: password 
        });
        
        console.log("Full response:", response); 
        
        if(response.status === 200 && response.data.data?.token){
            const token = response.data.data.token;  
            const userName = response.data.data.firstName;
            
            localStorage.setItem("token", token);
            localStorage.setItem("userName", userName);
            
            return { token, userName }; 
        }
        throw new Error("Invalid response format");
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        throw error; 
    }
};