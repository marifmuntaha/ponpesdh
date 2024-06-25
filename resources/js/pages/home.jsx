//import React
import React, { useState, useEffect } from 'react';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import Inertia adapter
import { Inertia } from '@inertiajs/inertia';

function Home() {

    //destruct props "errors"
    const { errors } = usePage().props;

    //define state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //method "storeLogin"
    const storeLogin = async (e) => {
        e.preventDefault();

        Inertia.post('/masuk', {

            //data
            email: email,
            password: password,
        });
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card border-0 rounded-3 shadow-sm">
                        <div className="card-body">
                            <h5>LOGIN</h5>
                            <hr/>
                            <form onSubmit={storeLogin}>

                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control"
                                           onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                                </div>
                                {errors.email && (
                                    <div className="alert alert-danger">
                                        {errors.email}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control"
                                           onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                                </div>
                                {errors.password && (
                                    <div className="alert alert-danger">
                                        {errors.password}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary w-100">LOGIN</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home
