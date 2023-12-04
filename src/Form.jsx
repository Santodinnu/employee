import { useState } from "react"
import { randomHeadshotPath, randomColor } from './utility/function.js';

//Controlled form / Input / Component

let resetForm={
    avatar:'',
    first_name:'',
    last_name:'',
    email:''}

export default function Form({addEmployee}){

    let [form, setForm] = useState({resetForm})

    function handleChange(e){
        setForm({...form, [e.target.id]: e.target.value})
        
        // if(e.target.id === 'name'){
        // setForm({...form, name:e.target.value})
        // }
        // else if (e.target.id === 'title'){
        //     setForm({...form, title:e.target.value})
        // }
        // else if (e.target.id === 'phone'){
        //     setForm({...form, phone:e.target.value})
        // }
        // else{
        //     setForm({...form, email:e.target.value})
        // }
        

    }
    

    function handleSubmit(e){
        e.preventDefault()
        
        const randomHeadshot = randomHeadshotPath();

        const randomBorderColor = randomColor();

        let employee = {
            avatar: randomHeadshot,
            first_name:form.first_name,
            last_name:form.last_name,
            email:form.email,            
            borderColor: randomBorderColor,
            id: crypto.randomUUID()
        }
        console.log(employee)
        setForm(resetForm)
        addEmployee(employee)


    }


    return(
        <form  className='form' onSubmit={handleSubmit}>
            <label htmlFor="firstname">FirstName:</label>
            <input id="first_name" value={form.first_name} onChange={handleChange} />

           <label htmlFor="lastname">LastName:</label>
           <input id="last_name" value={form.last_name} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input id="email" value={form.email} onChange={handleChange} />

            <button>Submit</button>




        </form>
    )
}