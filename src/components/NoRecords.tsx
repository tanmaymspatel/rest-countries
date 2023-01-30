/**
 * @returns A component to show no records text when there are no data after searching / filtering 
 */
function NoRecords() {
    return (
        <div className='container'>
            <h2 className='no-records'>No Records Found!</h2>
        </div>
    )
}

export default NoRecords
