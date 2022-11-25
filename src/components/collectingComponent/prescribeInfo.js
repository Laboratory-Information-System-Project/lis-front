import React, {useCallback, useEffect, useRef, useState} from 'react'
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import "../../styles/collecting.scss";
import 'realgrid/dist/realgrid-style.css';
import {GridView, LocalDataProvider} from "realgrid";
import {columns, fields} from "./realgrid-data";
import BarcodingButton from "./buttons/BarcodingButton";
import CancelBarcodeButton from "./buttons/CancelBarcodeButton";
import CollectingButton from "./buttons/CollectingButton";

const PrescribeInfo = ({prescribeInfo, createBarcode}) => {

    const PrescribeInfoItem = () => {

        gv.setDataSource(dp);
        dp.setFields(fields);
        gv.setColumns(columns);
        dp.setRows(prescribeInfo);

        gv.checkBar.mergeRule="value['classification_code']";

        gv.footer.visible = false;

        gv.setCheckBar({
            showAll: false
        });
        gv.setStateBar({
            visible: false
        });
        gv.setRowIndicator({
            visible: false
        });
    }
    const init = useRef(null);
    const [dataProvider, SetDataProvider] =useState();
    const [gridView, setGridView] = useState();
    let dp;
    let gv;
    let length;

    useEffect(() => {
        const container = init.current;
        dp = new LocalDataProvider(true);
        gv = new GridView(container);

        PrescribeInfoItem();

        // setTable(gv,dp, data);

        SetDataProvider(dp);
        setGridView(gv);

        length = dp.getRowCount();

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [prescribeInfo]);

    function checkData() {
        return dataProvider.getRowCount();
    }

    return (
        <div className={'patient-order right'}>
            <div className={'content-title'}>
                <LocalHospitalOutlinedIcon/>
                <h3>처방 정보</h3>
            </div>
            <div
                style={{ height: '180px', width: '700px' }}
                id={'prescribeInfo-info'} ref={init}>
            {/*{prescribeInfo.length > 0 &&*/}
            {/*        <PrescribeInfoItem gv={gv} dp={dp} data={prescribeInfo}/>*/}
            {/*}*/}
            </div>
            {/*<Buttons*/}
            {/*    dataProvider={length > 0 ? dataProvider: length}*/}
            {/*    gridView={gridView}/>*/}
            <div className={'buttons'}>
                <BarcodingButton dataProvider={dataProvider} gridView={gridView}/>
                <CancelBarcodeButton/>
                <CollectingButton/>
                <CancelBarcodeButton/>
                <button className={'collecting-button'}>바코드 재발급</button>
            </div>


        </div>
    )
}



export default PrescribeInfo;