import React, { useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = React.useState(Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setDate(Date());
            console.log('Setting up interval');
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log('Clearing interval')
        };
    },[]);

    return(
        <div>
            {date}
        </div>
    )
}

export default Clock;