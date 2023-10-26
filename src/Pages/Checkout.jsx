import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";


const Checkout = () => {
    
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const {title, _id, price, img} = service

    const handleBookService = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value
        

        const booking = {
            name, 
            date, 
            phone, 
            email, 
            title, 
            service_id: _id,
            price, 
            img, 
            message}
        console.log(booking);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
               return toast.success("Service Booked Successfully")
            }
        })
    }

    return (
        <div className="my-10">
            <h1 className="text-center text-3xl font-bold mb-5">Book Service: {title}</h1>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            

            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Name</label>
                        <input  type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Date</label>
                        <input  type="date" placeholder="date" name="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Your Phone</label>
                        <input  type="text" placeholder="Phone" name="phone" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Your Email</label>
                        <input type="email" placeholder="Email" name="email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700 dark:text-gray-200">Your Message</label>
                        <textarea  placeholder="Message" name="message" className="block w-full px-4 py-2  mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <input type="submit" value="Confirm" className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-500 focus:outline-none cursor-pointer"/>
                </div>
            </form>
        </section>
        </div>
    );
};

export default Checkout;