import UnsuitableReasonItem from "./UnsuitableReasonItem"

const UnsuitableReasonList = ({unsuitableSampleInfo }) => {

    return (
        <>
             {
                unsuitableSampleInfo?.data?.length > 0 &&
                unsuitableSampleInfo.data.map((data, index) => {
                    if(index !== 0) { 
                    return (
                        <UnsuitableReasonItem
                            key2={index}
                            employeeAuthority={data.employeeAuthority}
                            employeeName={data.employeeName}
                            detail={data.query}
                            sampleBarcode={data.sampleBarcode}
                            category={data.selectedCategory}
                            reason={data.selectedReason}  
                            
                        />
                )
            }
                })
              } 
        </>
            
    )
}
export default UnsuitableReasonList;


