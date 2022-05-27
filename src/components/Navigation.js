import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ hamburgerMenu, toggleMenu }) => {

    const initialValues = { name: "", email: "", password: "" };
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
        if (!values.password) {
            errors.password = "Wajib diisi";
        }

        return errors;
    }

    const [showCategory, setShowCategory] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const openCategory = () => {
        setShowCategory(true);
    }

    const closeCategory = () => {
        setShowCategory(false);
    }

    const toggleLogin = () => {
        setLogin(!login);
        setFormValues(initialValues);
        setFormErrors({});
    }

    const toggleRegister = () => {
        setRegister(!register);
        setFormValues(initialValues);
        setFormErrors({});
    }

    return (
        <>
            <header className='header'>
                <div className='headerContainer'>
                    <div className='headerContainer__logo'>
                        <a href='/'>Forum Anak IT</a>
                    </div>

                    <div className='headerContainer__searchBox'>
                        <form>
                            <input type='text' placeholder='Search' />
                            <button>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>

                    <div className='headerContainer__hamburger'>
                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    <div className='headerContainer__right'>
                        <div onMouseOver={openCategory} onMouseOut={closeCategory}>
                            <button>Categories</button>
                            <div className={showCategory ? 'dropdown-category' : 'dropdown-category-close'}>
                                <ul>
                                    <li>Linux</li>
                                    <li>Windows</li>
                                    <li>MAC OS</li>
                                    <li>Android</li>
                                    <li>iOS</li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={toggleLogin}>Login</button>
                        <button onClick={toggleRegister}>Register</button>
                    </div>
                </div>
            </header>

            {hamburgerMenu && (
                <div className='hamburger'>
                    <div className='hamburgerContainer'>
                        <button className='closeHamburger' onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className='hamburgerContainer__searchBox'>
                            <form>
                                <input type='text' placeholder='Search' />
                                <button>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </form>
                        </div>

                        <div className='hamburgerContainer__right'>
                            <button>Categories</button>
                            <ul>
                                <li>Linux</li>
                                <li>Windows</li>
                                <li>MAC OS</li>
                                <li>Android</li>
                                <li>iOS</li>
                            </ul>
                            <button onClick={toggleLogin}>Login</button>
                            <button onClick={toggleRegister}>Register</button>
                        </div>
                    </div>
                </div>
            )}

            {login && (
                <div className='login'>
                    <div className='loginContainer'>
                        <h3>Login</h3>

                        <form onSubmit={handleSubmit}>
                            <label>Email</label>
                            <input type='text' name='email' value={formValues.email} onChange={handleChange} />
                            <p>{formErrors.email}</p>
                            <label>Password</label>
                            <input type='password' name='password' value={formValues.password} onChange={handleChange} />
                            <p>{formErrors.password}</p>

                            <button type='submit'>Login</button>
                        </form>

                        <button className='close' onClick={toggleLogin}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </div>
            )}

            {register && (
                <div className='register'>
                    <div className='registerContainer'>
                        <h3>Register</h3>

                        <form onSubmit={handleSubmit}>
                            <label>Nama</label>
                            <input type='text' name='name' value={formValues.name} onChange={handleChange} />
                            <p>{formErrors.name}</p>
                            <label>Email</label>
                            <input type='text' name='email' value={formValues.email} onChange={handleChange} />
                            <p>{formErrors.email}</p>
                            <label>Password</label>
                            <input type='password' name='password' value={formValues.password} onChange={handleChange} />
                            <p>{formErrors.password}</p>
                            
                            <button type='submit'>Create account</button>
                        </form>
                        <button className='close' onClick={toggleRegister}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </div>
            )} 
        </>
    );
}
 
export default Navigation;