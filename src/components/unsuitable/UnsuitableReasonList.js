import UnsuitableReasonItem from "../UnsuitableReasonItem"

const UnsuitableReasonList = ({ unsuitableData }) => {

    console.log(unsuitableData);
    console.log('위에 있음');

    
    return (
        <>
            {
                unsuitableData?.length > 0 &&
                unsuitableData.map((data, index) => {
                    return (
                        <UnsuitableReasonItem
                            key={index}
                            employeeAuthority={data.employeeAuthority}
                            employeeName={data.employeeName}
                            detail={data.query}
                            sampleBarcode={data.sampleBarcode}
                            category={data.selectedCategory}
                            reason={data.selectedReason}  
                            
                        />
                )
                })
             }
            {/* <p>{unsuitableData.selectedReason}</p> */}
        </>
            
    )
}
export default UnsuitableReasonList;


