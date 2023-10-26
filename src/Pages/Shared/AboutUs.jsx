/* eslint-disable react/no-unescaped-entities */
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero mt-10 mb-20 ">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5" />
                </div>
                <div className='lg:w-1/2 px-5'>
                <p className='text-orange-500 font-semibold '>About Us</p>
                <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='pb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn  text-white bg-orange-500  hover:bg-orange-500 border-none  ">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;