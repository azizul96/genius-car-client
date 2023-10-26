import { Link, useNavigate, } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
    const {emailLogin } = useContext(AuthContext)
    const navigate = useNavigate(null)

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);

        emailLogin(email,password)
        .then(result =>{
            const loggedInUser = result.user
            console.log(loggedInUser);
            toast.success('Login successfully');

            const user = { email };
            
            // get access token
            // {withCredentials:true}
            
            axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
            .then(res =>{
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location.state : '/')
                }
            })
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10 ">
                    <div className="text-center lg:text-left w-1/2">
                    
                    <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login!</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input className="btn text-white bg-orange-500 hover:bg-orange-500" type="submit" value="Login" />
                        </div>
                    </form>
                        <p className="text-center my-2">
                            New Here? <Link to="/signUp" className="text-orange-500 font-bold">Sign Up </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;