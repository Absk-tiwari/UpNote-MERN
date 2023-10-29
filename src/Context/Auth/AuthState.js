import AuthContext from "./AuthContext";


const AuthState=(props)=>{

    const host = 'http://192.168.93.154:1901';

    const login = async({email, password}) =>{
        try {
            
            const resp =await fetch(`${host}/api/login`,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({email, password})
            });

            const data = resp.json();
            if(data.success){
                // Save the auth token 
                localStorage.setItem('token', data.authtoken);
            }else{
                alert('login Failed!')
            }
            // setfields(data);
            

        } catch (error) {
            alert(error.message);
            console.log(error)
        }
    }
    
    const signup = async({name, email, password}) =>{
        console.log({name, email, password})
        try {
            await fetch(`${host}/api/createUser`,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({name, email, password})
            })
    
        } catch (error) {
            alert(error.message);
            console.log(error);         
        }

    }
    
    return (
    <AuthContext.Provider value={{login, signup}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthState