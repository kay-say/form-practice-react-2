
export default function Form(props){
    const {firstName} = props.formData
    return(
        <form>
            <input 
                type="text"
                name="firstName"
                placeholder="firsName"
                value={firstName}
                onChange={props.handleChange}
            />
            {firstName}
        </form>
    )
}

//