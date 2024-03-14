export class Search {

    

    constructor(view, log) {
        this.view = view;
        this.log = log;

        this.currentUserPage = 0;
        this.showUserCount = 0;

        this.view.searchInput.addEventListener('keyup', this._debounce(this.searchUsers.bind(this), 500));
    }

    setCurrentUserPage(number){
        this.currentUserPage = number;
    }

    setShowlUsersCount(number){
        this.showUserCount = number;
    }

    async searchUsers() {
        const inpValue = this.view.searchInput.value;
        return await fetch(`https://api.github.com/search/users?q=${inpValue}`).then(
            (res) => res.json().then(
                res => {
                    const users = res.items;
                    this.setShowlUsersCount(this.showUserCount + user.length);
                    this.view. showCountMessage(this.log.countMessage(res.total_count));
                    this.view.toggleViewUserloadMoreBtn(this.showUserCount < res.total_count && this.showUserCount !== res.total_count)
                    
                    users.forEach(user => this.view.createPrevUser(user));
                }
            )
        );
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

 
