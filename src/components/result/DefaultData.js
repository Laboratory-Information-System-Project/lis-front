import React from 'react';
import '../../styles/resultCheck/default.scss';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import { useSelector } from 'react-redux';

const DefaultData = ({ division }) => {
    const { sampleInfo } = useSelector((state) => state.sampleInfo);
    const { userInfo } = useSelector((state) => state.userInfo);

    return (
        <div className='default'>
            <div className='default-wrap'>
                <div className='default-icon'>
                    <WarningOutlinedIcon />
                </div>
                {division === '1' ? (
                    <div>
                        <h3>조회된 데이터가 없습니다.</h3>
                        <p>검체 번호를 조회해 주세요.</p>
                    </div>
                ) : division === '2' ? (
                    <h3>결과 미등록 검체가 없습니다.</h3>
                ) : division === '3' ? (
                    <div>
                        <h3>조회된 데이터가 없습니다.</h3>
                        <p>환자번호를 입력 후 조회해 주세요.</p>
                    </div>
                ) : division === '4' ? (
                    <div>
                        <h3>조회된 데이터가 없습니다.</h3>
                        <p>
                            환자번호 조회 후 체크박스를 클릭하여 데이터를 입력
                            해주세요.
                        </p>
                    </div>
                ) : division === '5' ? (
                    <div>
                        {sampleInfo?.data?.length > 0 &&
                        sampleInfo.data[0].message ? (
                            <>
                                <h3>{sampleInfo.data[0].message}</h3>
                                <p>바코드를 다시 입력해주세요.</p>
                            </>
                        ) : (
                            <>
                                <h3>조회된 데이터가 없습니다.</h3>
                                <p>바코드를 입력 후 조회해 주세요.</p>
                            </>
                        )}
                    </div>
                ) : (
                    <div>
                        {userInfo?.data?.length > 0 &&
                        userInfo.data[0].message ? (
                            <>
                                <h3>{userInfo.data[0].message}</h3>
                                <p>사용자 이름을 다시 입력해주세요</p>
                            </>
                        )  : division==='6'? (
                            <div>
                                <h3>방문내역이 없습니다.</h3>
                                <p>환자를 클릭해 주세요</p>
                            </div>
                            ) : division==='7'? (
                            <div>
                                <h3>처방내역이 없습니다</h3>
                                <p>내원 정보를 클릭해 주세요</p>
                            </div>) : (
                            <>
                                <h3>조회된 데이터가 없습니다.</h3>
                                <p>환자 혹은 환자번호를 입력 후 조회해 주세요.</p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DefaultData;
