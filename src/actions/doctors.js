import { ServiceFactory } from '../services/ServiceFactory';
const doctorService = ServiceFactory.get('doctors');


export const fetchDoctor = (id) => {
    
    return async dispatch => {
        let response;
        response = await doctorService.fetchDoctor(id);
        return dispatch({ type: 'DOCTOR_FETCHED', payload: response.data });
    }
}

export const getDataForDoctor = (id) => {
    
    return async dispatch => {
        let response;
        response = await doctorService.getDataForDoctor(id);
        return dispatch({ type: 'DATA_FOR_DOCTOR', payload: response.data });
    }
}

export const  filterDoctors = (filter) => {
    return {
        type: 'DOCTOR_FILTER',
        payload: filter
    }
}


export const getAppointment = () =>{

    return async dispatch => {
        let response;
        response = await doctorService.getAppointment();
        return dispatch({ type: 'FETCH_APPOINTMENT', payload: response.data });
    
    }
  
}

export const getOperations = () =>{

    return async dispatch => {
        let response;
        response = await doctorService.getOperations();
        return dispatch({ type: 'GET_OPERATIONS', payload: response.data });
    
    }
  
}

export const finishReport = (data) =>{

    return async dispatch => {
        await doctorService.finishReport(data);
    
    }
  
}


export const sheduleAnOperation = (data) =>{

    return async dispatch => {
        await doctorService.sheduleAnOperation(data);
    
    }
  
}

export const getDoctorsOptions = () => {
    return async dispatch => {
        let response;
        response = await doctorService.getDoctorsOptions();
        return dispatch({ type: 'DOCTORS_APP_TYPES', payload: response.data});
    
    }
}

export const scheduleAnAppointment = (data) =>{
    return async dispatch => {
        await doctorService.scheduleAnAppointment(data);
    }
}