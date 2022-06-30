import React from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function Datepicker({
                                       selectedDate,
                                       onChange,
                                       isClearable = false,
                                       showPopperArrow = false,
                                       ...props
                                   }) {
    return (
        <ReactDatePicker
            selected={selectedDate}
            onChange={onChange}
            isClearable={isClearable}
            showPopperArrow={showPopperArrow}
            {...props}
        />
    )

}