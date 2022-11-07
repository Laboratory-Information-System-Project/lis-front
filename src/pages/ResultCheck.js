import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Result from '../components/result/ResultItem';
import ResultActions from '../redux/modules/Result/ResultActions';
import '../styles/result.scss'
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SearchForm from '../components/result/SearchForm';
import ResultList from '../components/result/ResultList';

const ResultCheck = () => {
    
    const { resultInfo } = useSelector((state) => state.ResultInfo);
    const dispatch = useDispatch();

    const onSubmit = async (query, target) => {
        dispatch(ResultActions.getResults(query,target));
    };

    const [date, setDate] = useState();

    // useEffect(() => {
    //     dispatch(ResultActions.getResults());
    // }, []);

    return (
        <div className='wrap'>
            <div className='max-wrap'>
                <div className='title-wrap'>
                    <ContentPasteSearchOutlinedIcon />
                    <h2>검사결과 조회 <span>Inspection result inquiry</span></h2>
                </div>

                <SearchForm onSubmit={onSubmit}/>

                <div className='result-wrap'>
                    <div className='con-title'>
                        <TextSnippetOutlinedIcon /> 
                        <p>검사결과</p>
                    </div>
                    <ResultList resultInfo={resultInfo} />
                </div>

                <div className='graph-wrap'>
                    <div className='graph graph-line'>
                        <div className='con-title'>
                            <TimelineOutlinedIcon /> 
                            <p>그래프</p>
                        </div>
                        {/* <DatePickerElement setDate={setDate} /> */}
                        {/* <ChartElement date={date} /> */}
                        
                    </div>
                    <div className='graph graph-data'>
                        <div className='con-title'>
                            <InsertChartOutlinedIcon /> 
                            <p>그래프 데이터</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCheck;