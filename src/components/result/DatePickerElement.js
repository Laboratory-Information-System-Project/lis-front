import React, { memo, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

import datepicker from 'react-datepicker/dist/react-datepicker.css';

const DatePickerElement = ({ setDate }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        setDate({ startDate, endDate });
    }, [startDate, endDate]);

    return (
        <Container>
            <StyledDatePicker
                selected={startDate}
                onChange={(dates) => {
                    const [start, end] = dates;

                    setStartDate(start);
                    setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy-MM-dd"
                locale={ko}
                selectsRange
            />
        </Container>
    );
};

const Container = styled.div`
    display: grid;
`;

const StyledDatePicker = styled(DatePicker)`
    width: 160px;
    height: auto;
    box-sizing: border-box;
    padding: 3px 10px 3px 10px;
    border-radius: 4px;
    border: 1px solid lightGray;
    font-size: 12px;
`;

export default memo(DatePickerElement);
