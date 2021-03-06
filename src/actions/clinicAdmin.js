import { ServiceFactory } from '../services/ServiceFactory';
const clinicAdminService = ServiceFactory.get('clinicAdmin');

export const registerMedStaff = data => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.registerMedStaff(data);
        }catch(e){
            if(e.response !== undefined){
                if(e.response.status === 500){
                    return dispatch({ type: 'ERROR_MAIL_EXISTS', payload: 'Failed to sign up' })
                }
            }
        }
        
        if(!response){
            dispatch({ type: 'ERROR', payload: 'Failed to add medical staff' });
        }
        if (response.status === 200) {
            dispatch({ type: 'REGISTERMEDSTAFF' });
        } 
    }
}

export const getAllDoctors = () => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getAllDoctors();
        }catch(e){
            if(e.response !== undefined){
                if(e.response.status === 500){
                    return dispatch({ type: 'FETCHING_DOCTORS_ERROR', payload: 'Fetching all doctors failed' })
                }
            }
        }

        if(!response){
            return dispatch({ type: 'FETCHING_DOCTORS_ERROR', payload: 'Fetching all doctors failed' })
        }

        if (response.status === 200) {
            dispatch({ type: 'GETALLDOCTORS', payload: response.data });
        }
    }
}

export const getClinicAdminClinic = () => {
    return async dispatch => {
        let response;
        response = await clinicAdminService.getClinicAdminClinic();
        return dispatch({type: 'FETCH_CLINIC_ADMIN_CLINIC', payload: response.data})
    }
}

export const editOperation = (data) => {
    return async dispatch => {
        await clinicAdminService.editOperation(data);
    }
}

export const changeDateoOfOperation = (data) => {
    return async dispatch => {
        await clinicAdminService.changeDateoOfOperation(data);
    }
}

export const addDuration = (data) => {
    return async dispatch => {
        await clinicAdminService.addDuration(data);
    }
}

export const getOperations = () => {
    return async dispatch => {
        let response;
        response = await clinicAdminService.getOperations();
        return dispatch({type: 'GET_OPERATIONS', payload: response.data})
    }
}



export const updateClinic = (data) => {
    return async dispatch => {
        try{
            await clinicAdminService.updateClinic(data);
        }catch(e){
            if(e.response !== undefined){
                if(e.response.status === 500){
                    dispatch({ type: 'ERROR', payload: 'error'});
                }
            }
        }
    }
}

export const setEntityToBeUpdated = (data) => {
    return dispatch => {
        dispatch({ type: 'ENTITY_TO_BE_UPDATED', payload: data});
    }
}

export const seeIfBookedDoctor = (id) => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.seeIfBooked(id);
        }catch(e){
            if(e.response !== undefined){
                if(e.response.status === 500){
                    dispatch({ type: 'ERROR', payload: 'error'});
                }
            }
        }

        if(response.status === 200){
            dispatch({type: 'SET-UPDATABLE', payload: response.data});
        }
    }
}

export const deleteDoctor = (id) => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.deleteDoctor(id);
        }catch(e){
            if(e.response !== undefined){
                if(e.response.status === 500){
                    dispatch({ type: 'ERROR', payload: 'error'});
                }
            }
        }

        if(response.status === 200){
            dispatch({type: 'DELETE-DOCTOR', payload: response.data});
        }
    }
}

export const updateDoctor = (doctor) => {
    return async dispatch => {
        try{
            await clinicAdminService.updateDoctor(doctor);
        }catch(e){
            if(e.response !== undefined){
                if(e.response.status === 500){
                    dispatch({ type: 'ERROR', payload: 'error'});
                }
            }
        }
    }
}

export const getClinicDoctors = () => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getClinicDoctors();
        }catch(e){
            if(e.response !== undefined){
                if(e.response.status === 500){
                    return dispatch({ type: 'FETCHING_DOCTORS_ERROR', payload: 'Fetching all doctors failed' })
                }
            }
        }
        if(!response){
            return dispatch({ type: 'FETCHING_DOCTORS_ERROR', payload: 'Fetching all doctors failed' })
        }

        if (response.status === 200) {
            dispatch({ type: 'CLINIC_DOCTORS', payload: response.data });
        }
    }
}

export const getPendingRequests = () => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getRequests();
            dispatch({ type: 'PENDING_REQUEST_FETCHED', payload: response.data });
            
        }catch(e){
            
        }
            
    }
}

export const reserveRoom = app =>{
    return{type: 'RESERVE_ROOM',payload: app}
}

export const reserveRoomForOperation = app =>{
    return{type: 'RESERVE_ROOM_FOR_OPERATION',payload: app}
}

export const reserveAppointment = (operations_room_id,appointment_id) => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.reserveAppointment(operations_room_id,appointment_id);
            return dispatch({ type: 'ROOM_RESERVED', payload: response.data });
            
        }catch(e){
            
        }
            
    }
}

export const reserveOperation = (operations_room_id,operation_id) => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.reserveOperation(operations_room_id,operation_id);
            return dispatch({ type: 'ROOM_RESERVED_FOR_OPERATION', payload: response.data });
            
        }catch(e){
            
        }
    }
}
            
export const getDoctorsByAppType = (id) => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getDoctorsByAppType(id);
        }catch(e){
            
        }
            
        if(response.status === 200){
            return dispatch({ type: 'DOCTORS_BY_APP_TYPES', payload: response.data });
        }
    }
}

export const specializeDoctor = (data, id) => {
    return async dispatch => {
        try{
            await clinicAdminService.specializeDoctor(id,data);
        }catch(e){
            
        }
    }
}

export const updateAppointmentRequest = (data) => {
    return async dispatch => {
        try{
            await clinicAdminService.updateAppointmentRequest(data);
        }catch(e){
            
        }
    }
}

export const clinicAverageRating = () => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getClinicAverageRating();
            return dispatch({ type: 'CLINIC_AVERAGE_RATING', payload: response.data });
        }catch(e){
            
        }
    }
}

export const getDoctorsAverageRating = () => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getDoctorsAverageRating();
            return dispatch({ type: 'DOCTORS_AVERAGE_RATING', payload: response.data });
        }catch(e){
            
        }
    }
}

export const getMoneyEarned = (startDate, endDate) => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getMoneyEarned(startDate,endDate);
            return dispatch({ type: 'EARNED_MONEY', payload: response.data });
        }catch(e){
            
        }
    }
}

export const getMonthlyReport = () => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getMonthlyReport();
            return dispatch({ type: 'WEEKLY_REPORT', payload: response.data });
        }catch(e){
            
        }
    }
}

export const getWeeklyReport = () => {
    return async dispatch => {
        let response;
        try{
            response = await clinicAdminService.getWeeklyReport();
            return dispatch({ type: 'MONTHLY_REPORT', payload: response.data });
        }catch(e){
            
        }
    }
}