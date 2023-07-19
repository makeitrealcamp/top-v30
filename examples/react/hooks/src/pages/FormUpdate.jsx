import { useEffect } from 'react';
import useForm from '../hooks/useForm'

const FormCreate = ({ title, handleSubmit }) => {

    const {form, handleChange} = useForm({ title: 'el titulo creado en ese registro', body: '', userId: '' })

    
    return (
        <div className="container">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea id="body" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input type="number" id="userId" className="form-control" />
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}

export default FormCreate;