import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContuctUs = () => {
    return (

        <section style={{
            background: `url(${appointment})`

        }}
            className='flex mt-20 justify-center items-center my-10 '>
            <div className='text-center mt-20 mb-10'>
                <h3 className=' text-xl text-primary text-bold'>Contuct Us</h3>
                <h2 className='text-3xl text-white mb-5'>Stay connected with us</h2>
                <div className='mb-5'>
                    <input type="text" placeholder="Your Email address" className="input input-bordered input-xs w-full max-w-xs" /><br /><br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" /><br /><br />
                    <input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs" />
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContuctUs;