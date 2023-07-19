

const FormUserCreate = () => {
    const {form, handleChange} = useForm()

    useFetch('https://jsonplaceholder.typicode.com/posts/1');

    return (
        <div className="container">
            <h1>Form Create</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">name</label>
                    <input type="text" id="title" className="form-control" onChange={handleChange}/>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}


export default FormUserCreate;