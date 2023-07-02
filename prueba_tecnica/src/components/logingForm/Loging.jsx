import { useState } from "react";
import validation from '../validation/validation'
import './Loging.css'
const Loging = ({login})=>{

    const [userData, setUserData]  = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event)=>{
        console.log(event);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <div >


            <div className="login-box">
                <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="user-box">
                            <input type="text" name="email"  value={userData.email} onChange={handleChange}/>
                            <label htmlFor="email">Username</label> 
                            {errors.email && <p style={{color: "white", marginBottom:"20px"}}>{errors.email}</p>}
                        </div>
                            
                        <div className="user-box">
                            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                            <label htmlFor="password">Password</label>
                            {errors.password && <p style={{color: "white"}}>{errors.password}</p>}
                        </div>
                           
                        <button className="btnSumit">
                            Submit
                        </button>
                    </form>
            </div>

        </div>
    )
}

export default Loging;