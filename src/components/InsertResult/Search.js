import React, {useCallback, useState} from "react";

import 'react-toastify/dist/ReactToastify.css'
import '../../styles/insertResult.scss'

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Search({onSubmit}) {
    const [query, setQuery] = useState('');
    const [target, setTarget] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));

    const onChangeStartDateDate = useCallback(e => {
        if (e.target.value <= endDate) {
            setStartDate(e.target.value);
        }
    }, [endDate]);

    const onChangeEndDate = useCallback(e => {
        if (e.target.value <= new Date().toISOString().slice(0, 10)) {
            setEndDate(e.target.value);
        }
    }, []);

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, [query]);

    const SearchButtonClick = useCallback(() => {
        onSubmit(query, startDate, endDate, target);
        setQuery('');
    }, [onSubmit, query, startDate, endDate, target]);

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onSubmit(query, startDate, endDate, target);
            setQuery('');
        }
    }, [onSubmit, query, startDate, endDate, target]);

    return (
        <div className="frame search">
            <ArticleOutlinedIcon/>
            <p>검체번호 조회</p>
            <input className="startDate" type="date" value={startDate} onChange={onChangeStartDateDate}/>
            <input className="endDate" type="date" value={endDate} onChange={onChangeEndDate}/>
            <input
                placeholder="검색어"
                onChange={onQueryChange}
                onKeyDown={EnterKeyPress}
                value={query}
            />
            <button
                className="search_btn"
                onClick={SearchButtonClick}
            >조회
            </button>
        </div>
    )
}

export default Search;