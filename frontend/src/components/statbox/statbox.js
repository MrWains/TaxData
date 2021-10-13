import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Statbox = () => {
    const features = useSelector(state => state.status);
    const dispatch = useDispatch();
    return(
        <div>
            We got here!
        </div>
    );
}

export default Statbox;