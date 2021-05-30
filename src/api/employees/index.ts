import api from '../../services/api-http-service';

function getEmployeesList() {
    return api.get(`task0/users`);
}

export {
    getEmployeesList
}
