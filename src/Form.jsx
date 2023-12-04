import { useState } from "react"
import { randomHeadshotPath, randomColor } from './utility/function.js';

//Controlled form / Input / Component

let resetForm={
    name:'',
    title:'',
    phone:'',
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
            first_name:form.name,
            title:form.title,
            phone:form.phone,
            email:form.email,
            avatar: randomHeadshot,
            borderColor: randomBorderColor,
            id: crypto.randomUUID()
        }
        console.log(employee)
        setForm(resetForm)
        addEmployee(employee)


    }


    return(
        <form  className='form' onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" value={form.name} onChange={handleChange}/>

            <label htmlFor="title">Title:</label>
            <input id="title" value={form.title} onChange={handleChange}/>

            <label htmlFor="phone">Phone:</label>
            <input id="phone" value={form.phone} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input id="email" value={form.email} onChange={handleChange} />

            <button>Submit</button>




        </form>
    )
}