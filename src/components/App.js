import Form from "./Form"
import React from "react"
//

export default function App(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: ""
    })
    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevState=>{
            return {
                ...prevState,
                [name]: value
            }

        })
    }
    return(
        <div>
            <Form formData={formData} handleChange={handleChange} />
        </div>
    )
}