
//field editability based on status
function isRestrictedStatus(data){
    const aRestrictedStatuses = ['Testing'];
    if (data) {
        return aRestrictedStatuses.includes(data.orderStatusName());
    }
    return true;
}