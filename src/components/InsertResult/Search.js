import React, {useCallback, useState} from "react";

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import '../../styles/insertResult.scss'

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Search({onSubmit}) {
    const [query, setQuery] = useState('');
    const [target, setTarget] = useState('');

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, [query]);

    const SearchButtonClick = useCallback(() => {
        if (!query) {
            return;
        }
        onSubmit(query, target);
        setQuery('');
    }, [onSubmit, query, target]);

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onSubmit(query, target);
            setQuery('');
        }
    }, [onSubmit, query, target]);

    return (
        <div className="frame search">
            <ArticleOutlinedIcon/>
            <p>검체번호 조회</p>
            <input type="date" />
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