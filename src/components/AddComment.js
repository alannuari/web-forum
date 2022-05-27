import React, { useState } from 'react';

const AddComment = () => {

    const initialValues = { name: "", email: "", comment: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Wajib diisi";
        }
        if (!values.email) {
            errors.email = "Wajib diisi";
        } else if (!regex.test(values.email)) {
            errors.email = "Format email tidak sesuai";
        }
        if (!values.comment) {
            errors.comment = "Wajib diisi";
        }

        return errors;
    }

    return (
        <div className='addComment'>
            <h2>Tambahkan komentar</h2>

            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Nama' value={formValues.name} onChange={handleChange} />
                <p>{formErrors.name}</p>
                <input type='text' name='email' placeholder='Email' value={formValues.email} onChange={handleChange} />
                <p>{formErrors.email}</p>
                <textarea type="text" name='comment' rows="4" placeholder="Komentar anda" value={formValues.comment} onChange={handleChange} />
                <p>{formErrors.comment}</p>

                <button type='reset' className='reset'>Reset</button>
                <button type='submit' className='submit'>Submit</button>
            </form>

        </div>
    );
}
 
export default AddComment;