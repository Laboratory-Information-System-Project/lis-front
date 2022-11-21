import UnsuitableReasonItem from "./UnsuitableReasonItem"

const UnsuitableReasonList = ({unsuitableSampleInfo}) => {

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
                                employeeAuthority={data.employeeAuthority}
                                employeeName={data.employeeName}
                                query={data.query}
                                sampleBarcode={data.sampleBarcode}
                                selectedCategory={data.selectedCategory}
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


