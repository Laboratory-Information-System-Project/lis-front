/* eslint-disable */
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import "../../styles/collecting.scss";
import 'realgrid/dist/realgrid-style.css';
import {GridView, LocalDataProvider} from "realgrid";
import {columns, fields} from "./realgrid-data";
import BarcodingButton from "./buttons/BarcodingButton";
import CancelCollectingButton from "./buttons/CancelCollectingButton";
import CollectingButton from "./buttons/CollectingButton";
import CancelBarcodeButton from "./buttons/CancelBarcodeButton";
import DefaultData from "../result/DefaultData";
import ReprintBarcode from "./buttons/ReprintBarcode";

let options = {
    summaryMode: 'aggregate',
    display: {
        syncGridHeight: "always",
        maxRowHeight: 30,
    },
    grouping: {
        enabled: false
    }
};


const PrescribeInfo = ({
                           prescribeInfo,
                           initPrescribeCodeInfo,
                           setModal,
                           prescribeData,
                           isInit,
                           changeStatus,
                           barcodeInfo,
                           collectingInfo
                       }) => {

    const init = useRef(null);
    const [dataProvider, SetDataProvider] = useState();
    const [gridView, setGridView] = useState();
    let dp;
    let gv;

    useEffect(() => {
        if(barcodeInfo.data[0]?.message === 'create barcode successfully!') {
            for (let i = 0; i < prescribeInfo.length; i++) {
                for (let j = 0; j < barcodeInfo.data.length; j++) {
                    if (prescribeInfo[i].prescribe_code === barcodeInfo.data[j].prescribe_code) {
                        prescribeInfo[i].status_name = '바코드출력';
                    }
                }
            }
            if (dp !== undefined && gv !== undefined) {

                PrescribeInfoItem(gv, dp, prescribeInfo);

                SetDataProvider(dp);
                setGridView(gv);
            }
        }

    }, [barcodeInfo]);

    useEffect(() => {

        for (let i = 0; i <prescribeInfo.length; i++) {

            for (let j = 0; j <collectingInfo.data?.length; j++) {
                if(prescribeInfo[i].prescribe_code.toString() === collectingInfo.data[j]){
                    prescribeInfo[i].status_name = '채혈';
                }
            }
        }

        if(dp !== undefined && gv !== undefined) {
            PrescribeInfoItem(gv, dp, prescribeInfo);

            SetDataProvider(dp);
            setGridView(gv);
        }

    }, [collectingInfo]);



    useLayoutEffect(() => {

        if (prescribeInfo.length > 0) {
            const container = init.current;
            dp = new LocalDataProvider(true);
            gv = new GridView(container);

            PrescribeInfoItem(gv, dp, prescribeInfo);

            SetDataProvider(dp);
            setGridView(gv);

            return () => {
                dp.clearRows()
                gv.destroy()
                dp.destroy()
            }
        }
    }, [prescribeInfo, barcodeInfo, collectingInfo]);

    return (
        <div className={'patient-order right'}>
            <div className={'content-title'}>
                <LocalHospitalOutlinedIcon/>
                <h3>처방 정보</h3>
                <div className={'buttons'}>
                    {prescribeData > 0 ?
                        <>
                            <BarcodingButton dataProvider={dataProvider}
                                             gridView={gridView}
                                             initPrescribeInfo={initPrescribeCodeInfo}
                                             changeStatus={changeStatus}
                                             barcodeInfo={barcodeInfo}
                                             />
                            <CancelBarcodeButton
                                dataProvider={dataProvider}
                                gridView={gridView}
                                changeStatus={changeStatus}/>
                            <CollectingButton
                                dataProvider={dataProvider}
                                gridView={gridView}
                                changeStatus={changeStatus}
                                initPrescribeCodeInfo={initPrescribeCodeInfo}
                                />
                            <CancelCollectingButton
                                dataProvider={dataProvider}
                                gridView={gridView}
                                changeStatus={changeStatus}
                                initPrescribeInfo={initPrescribeCodeInfo}/>
                            <ReprintBarcode
                                dataProvider={dataProvider}
                                gridView={gridView}
                                setModal={setModal}
                                changeStatus={changeStatus}
                                initPrescribeCodeInfo={initPrescribeCodeInfo}/>
                        </>
                        : ''}
                </div>
            </div>
            {prescribeData ? <div
                style={{height: '5%', width: '85%'}}
                id={'prescribeInfo-info'} ref={init}>
            </div> : <div id={'invisible'}
                          ref={init}>
            </div>}
            {prescribeData ? '' : isInit ? <DefaultData/> : <DefaultData division={'7'}/>}
        </div>
    )
}


const PrescribeInfoItem = (gv, dp, prescribeInfo) => {

    gv.setDataSource(dp);
    dp.setFields(fields);
    gv.setColumns(columns);
    dp.setRows(prescribeInfo);
    gv.setCheckableExpression("values['Bool'] <> 'false'", true);
    gv.setFixedOptions({
        colCount: 1
    });

    gv.fixedOptions.colBarWidth = 0;

    gv.checkBar.mergeRule = "value['classification_code']";
    gv.checkBar.width = 30;
    gv.setOptions(options);
    gv.displayOptions.fitStyle = "even";

    gv.editOptions.commitByCell = true
    gv.editOptions.commitWhenLeave = true

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

export default PrescribeInfo;
