import React, {useState, useEffect} from 'react';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import {Inertia} from '@inertiajs/inertia';
import Logo from '../../images/logo.png'
import LogoDark from '../../images/logo-dark.png'
import {Block, BlockContent, BlockDes, BlockHead, BlockTitle, Icon, PreviewCard} from "../../components";
import {Alert, Button, Form, Spinner} from "reactstrap";
import NoSidebar from "../../layouts/NoSidebar.jsx";

const Login = () => {
    const {errors} = usePage().props;
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [email, setEmail] = useState('');
    const [passState, setPassState] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        Inertia.post('/administrator/masuk', formData);
    }
    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <NoSidebar>
            <Head title="Login" />
            <Block className="nk-block-middle nk-auth-body  wide-xs">
                <div className="brand-logo pb-4 text-center">
                    <Link href={import.meta.env.APP_URL} className="logo-link">
                        <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo"/>
                        <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark"/>
                    </Link>
                </div>
                <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
                    <BlockHead>
                        <BlockContent>
                            <BlockTitle tag="h4">Masuk Administrator</BlockTitle>
                            <BlockDes>
                                <p>masuk menggunakan alamat email dan kata sandi anda.</p>
                            </BlockDes>
                        </BlockContent>
                    </BlockHead>
                    <div className="mb-3">
                        {errors.lengh > 0 && (
                            <Alert color="danger" className="alert-icon">
                                <Icon name="alert-circle"/> Unable to login with credentials{" "}
                            </Alert>
                        )}
                    </div>
                    <Form className="is-alter" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" htmlFor="email">
                                    Alamat Email
                                </label>
                            </div>
                            <div className="form-control-wrap">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Masukkan alamat email anda"
                                    className="form-control-lg form-control"
                                    onChange={(e) => handleInput(e)}
                                />
                                {errors.email && <span className="invalid">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" htmlFor="password">
                                    Kata Sandi
                                </label>
                                <Link className="link link-primary link-sm"
                                      href='/administrator/reset-password'>
                                    Lupa Sandi?
                                </Link>
                            </div>
                            <div className="form-control-wrap">
                                <a
                                    href="#password"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        setPassState(!passState);
                                    }}
                                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                                >
                                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                                </a>
                                <input
                                    type={passState ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Masukkan kata sandi anda"
                                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                                    onChange={(e) => handleInput(e)}
                                />
                                {errors.password && <span className="invalid">{errors.password}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <Button size="lg" className="btn-block" type="submit" color="primary">
                                {loading ? <Spinner size="sm" color="light"/> : "MASUK"}
                            </Button>
                        </div>
                    </Form>
                </PreviewCard>
            </Block>
        </NoSidebar>
    )

}

export default Login
