import UnsuitableReasonItem from "./UnsuitableReasonItem"

const UnsuitableReasonList = ({unsuitableSampleInfo}) => {
    console.log(unsuitableSampleInfo.data)
    return (
        <>
             {
                unsuitableSampleInfo?.data?.length > 0 &&
                unsuitableSampleInfo.data.map((data, index) => {
                    if(index !== 0) { 
                    return (
                        <li key={index}>
                            <UnsuitableReasonItem
                                key2={index}
                                notificatorId={data.notificatorId}
                                notifiedId={data.notifiedId}
                                query={data.query}
                                sampleBarcode={data.sampleBarcode}
                                selectedReason={data.selectedReason}  
                            />
                        </li>
                    )
            }
                })
              } 
        </>
            
    )
}
export default UnsuitableReasonList;


