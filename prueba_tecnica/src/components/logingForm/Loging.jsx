import { useState } from "react";

const Loging = ()=>{

    const [userData, setUserData]  = useState({
        email:'',
        password:''
    })

    //const [errors, setErrors] = useState({})

    const handleChange = (event)=>{
        console.log(event);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        // setErrors(validation({
        //     ...userData,
        //     [event.target.name]: event.target.value
        // }))
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     login(userData)
    // }

    return(
        <div >

            <form  >
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Ingrese Email..." value={userData.email} onChange={handleChange}/>
                
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Ingrese Password..." value={userData.password} onChange={handleChange} />
                
                <br />
                <button>Submit</button>

            </form>

        </div>
    )
}

export default Loging;