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
import ReprintBarcode from "./buttons/ReprintBarcode";
import DefaultData from "../common/DefaultData/DefaultData";

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
        if(barcodeInfo.data[0]?.message === 'create barcode successfully!' ||
            barcodeInfo.data[0]?.message === '선택하신 바코드 발급이 취소되었습니다') {
            for (let i = 0; i < prescribeInfo.length; i++) {
                for (let j = 0; j < barcodeInfo.data.length; j++) {
                    if (prescribeInfo[i].prescribe_code === parseInt(barcodeInfo.data[j].prescribe_code) &&
                    barcodeInfo.data[1].status !== undefined ) {
                        prescribeInfo[i].status_name = barcodeInfo.data[1].status;
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
                    prescribeInfo[i].status_name = collectingInfo.data[1];
                }
            }
        }
        const color = document.querySelectorAll(".rg-data-cell")
        for (let i = 0; i < color.length; i++) {
            console.log(color.classList);
            console.log(color.classList);
            console.log(color.classList);
            console.log(color.classList);
            console.log(color.classList);
            ;
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
    }, [prescribeInfo, collectingInfo, barcodeInfo]);

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
            {prescribeData ? '' : isInit ?
                <div className="default_position2">
                    <DefaultData division={'4'}/>
                </div>
                :
                <div className="default_position2">
                    <DefaultData division={'8'}/>
                </div>
                }
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
    // dp.restoreMode = "auto";

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
