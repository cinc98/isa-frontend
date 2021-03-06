export default (state = null, action) => {    
    switch(action.type){
        case 'APPOINTMENT_RESERVED_APPOINTMENT':
            const newApp = state.appointments.filter(element => element.id !== action.payload.id);
            console.log(newApp, action.payload);
            
            return {...state, appointments: newApp}
        case 'PENDING_REQUEST_FETCHED':
            
            return {...state, pending: action.payload}
            
        case 'APPOINTMENT_HISTORY':            
            return action.payload;
        case 'APPOINTMENT_REQUESTED':            
            return {...state, reservedAppointment: action.payload}
        case 'FETCH_APPOINTMENTS':
            return {...state, appointments: action.payload}
        case 'ROOM_RESERVED':
            return {...state, appointmentReseved: action.payload}
        case 'DOCTORS_APP_TYPES':
            return {...state, appointmentTypeOptions: action.payload}
            
        default: return state;
    }

}