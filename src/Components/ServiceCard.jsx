/* eslint-disable react/prop-types */
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    console.log(service);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={service.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{service.title}</h2>
        <p className="text-orange-500 font-semibold">Price: ${service.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${service._id}`}>
            <button className=" text-orange-500  "><FaArrowRightLong></FaArrowRightLong></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
