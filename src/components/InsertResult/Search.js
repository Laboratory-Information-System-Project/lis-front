import React, {useCallback, useState} from "react";

import 'react-toastify/dist/ReactToastify.css'
import '../../styles/insertResult/insertResult.scss'

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Search({onSubmit}) {
    const [barcode, setBarcode] = useState('');
    const [stDate, setStDate] = useState(new Date().toISOString().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));

    const onChangeBarcode = useCallback((e) => {
        setBarcode(e.target.value);
    }, [barcode]);

    const changeStDate = useCallback(e => {
        if ("0000-00-00" <= e.target.value && e.target.value <= endDate) {
            setStDate(e.target.value);
        }
    }, [endDate]);

    const onChangeEndDate = useCallback(e => {
        if(stDate==''){
            if (e.target.value <= new Date().toISOString().slice(0, 10)) {
                setEndDate(e.target.value);
            }
        } else if (stDate <= e.target.value && e.target.value<= new Date().toISOString().slice(0, 10)) {
            setEndDate(e.target.value);
        }
    }, [stDate]);

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onSubmit(barcode, stDate, endDate);
            setBarcode('');
        }
    }, [onSubmit, barcode, stDate, endDate]);

    const SearchButtonClick = useCallback(() => {
        onSubmit(barcode, stDate, endDate);
        console.log(barcode,stDate,endDate)
        setBarcode('');
    }, [onSubmit, barcode, stDate, endDate]);


    return (
        <div className="frame search">
            <ArticleOutlinedIcon/>
            <p>검체번호 조회</p>
            <input className="startDate" type="date" value={stDate} onChange={changeStDate}/>
            <input className="endDate" type="date" value={endDate} onChange={onChangeEndDate}/>
            <input
                placeholder="검색어"
                onChange={onChangeBarcode}
                onKeyDown={EnterKeyPress}
                value={barcode}
            />
            <button className="search_btn" onClick={SearchButtonClick}>조회</button>
        </div>
    )
}

export default Search;