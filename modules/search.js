export class Search {
    constructor(view, log, api) {
        this.view = view;
        this.log = log;
        this.api = api;

        this.currentUserPage = 1;
        this.showUserCount = 0;

        this.view.searchInput.addEventListener('keyup', this._debounce(this.searchUsers.bind(this), 500));
        this.view.userLoadMoreBtn.addEventListener('click', this.loadMoreUser());
    }

    setCurrentUserPage(number){
        this.currentUserPage = number;
    }

    setShowlUsersCount(number){
        this.showUserCount = number;
    }


    loadMoreUser(){
        this.loadUsers();
    }

    async searchUsers(inpValue) {
        if(this.view.searchInput.value.length){
            this.setCurrentUserPage(1);
            this.setShowlUsersCount(0);
            this.view.clearList();
            this.loadUsers();
        }else {
            this.view.clearList();
        }
    }

    loadUsers(){
        this.api.searchUsersData(this.view.searchInput.value, this.currentUserPage).then(
            res => {
                const users = res.items;
                this.setShowlUsersCount(this.showUserCount + users?.length);
                this.setCurrentUserPage(this.currentUserPage + 1);
                this.view.showCountMessage(this.log.countMessage(res.total_count));
                this.view.toggleViewUserloadMoreBtn(this.showUserCount < res.total_count && this.showUserCount !== res.total_count)
                
                users?.forEach(user => this.view.createPrevUser(user));
            }
        )
    }
    

    _debounce(func, wait, immediate) {
        let timeout;
        return function () {
            let context = this, args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}

 
