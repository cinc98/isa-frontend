import Service from './Service';

const resource = '/operatingRoom';

class OperatingRoomService extends Service{

    newOpRoom(operatingRoom) {
        return this.getApiClient().post(`${resource}/add`, operatingRoom);
    }

    getOpRooms(){
        return this.getApiClient().get(`${resource}/get`);
    }
}

export default OperatingRoomService;