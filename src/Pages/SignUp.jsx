import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const {createUser } = useContext(AuthContext)
    const navigate = useNavigate(null)

    const handleSignUp = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        // const img = e.target.img.value
        const password = e.target.password.value
        console.log(name, email, password);

        createUser(email,password)
        .then(() =>{
            toast.success('User created successfully');
                navigate('/')
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
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Sign Up!</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="email" name='name' className="input input-bordered" required />
                        </div>
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
                        <input className="btn text-white bg-orange-500 hover:bg-orange-500" type="submit" value="Sign Up" />
                        </div>
                    </form>
                        <p className="text-center my-2">
                            Already have an account? <Link to="/login" className="text-orange-500 font-bold">Login </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;