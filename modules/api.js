const URL = 'https://api.github.com';
const USERS_PER_PAGE = 20;


export class Api{
    constructor(){
        
    }

    async searcUsers(inpValue, page){
        return await fetch(`${URL}/search/users?q=${inpValue}&per_page=${USERS_PER_PAGE}&page=${page}`).then((res) => res.json());
    }
}
