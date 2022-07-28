import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Service from './Service'
const AvailableAppointment = ({ date }) => {
    const [services, setservices] = useState([]);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setservices(data));
    }, [])

    return (
        <div>
            <h3 className='text-xl text-secondary text-center text-bold'> AvailableAppointments On {format(date, 'pp')}</h3>

            <div className='grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;