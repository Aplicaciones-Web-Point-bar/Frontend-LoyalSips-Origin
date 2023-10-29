import http from '../../shared/services/http-common';

export class BarService {
    getPubs() {
        return http.get('/pubs');
    }
    getBarId(id){
        return http.get(`/pubs/${id}`)
    }
}
