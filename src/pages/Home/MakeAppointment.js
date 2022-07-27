import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex mt-20 justify-center items-center'>
            <div className='flex-1'>{/* hidden lg:block */}
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>make and Appointment Today</h2>
                <p className='text-white'>We will provide you with all of the tools to start a homecare agency. Call us Today! The need for home care agencies are on the rise. Start your agency today. Call Now. Learn More Today. Services: We Teach Care Protocols, Recession Proof Business, Rewarding Career.</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;