export class View{
    constructor(){

    this.app = document.getElementById('app');

    this.title = this.createElement('h1', 'title');
    this.title.textContent = 'Github Search users';

    this.searchBlock = this.createElement('div', 'search');
    this.searchForm = this.createElement('form', 'form');
    this.searchInput = this.createElement('input', 'input');
    this.searchInput.placeholder = 'Write user name...';
    this.counter = this.createElement('span', 'counter');
    this.searchForm.append(this.searchInput);
    this.searchBlock.append(this.searchForm);
    this.searchBlock.append(this.counter);

    this.main = this.createElement('div', 'main');

    this.users = this.createElement('div', 'users');
    this.usersList = this.createElement('ul', 'users-list');
    this.userLoadMoreBtn = this.createElement('button', 'button');
    this.userLoadMoreBtn.textContent = 'Load More';
    this.userLoadMoreBtn.style.display = "none";
    this.users.append(this.usersList);
    this.users.append(this.userLoadMoreBtn);

    this.userInfo = this.createElement('div', 'user-info'); 

    this.main.append(this.users);
    this.main.append(this.userInfo);

    this.app.append(this.title);
    this.app.append(this.searchForm);
    this.app.append(this.main);
    }

    createElement(elTag, elClass){
        const element = document.createElement(elTag);
        if(elClass) element.classList.add(elClass);
        return element;
    }

    createPrevUser(userData) {
        const userPrev = this.createElement('li', 'user-small');
        userPrev.addEventListener('click', () => {
            
        });
    
        userPrev.innerHTML = `<img src="${userData.avatar_url}" alt="${userData.login}"> <span>${userData.login}</span>`;
    
        this.usersList.append(userPrev);
    }
    showUserData(){
        const user = this.createElement('div', 'user');

        user.innerHTML = '';

        this.userInfo.append(user);
    }

    toggleViewUserloadMoreBtn(isShow){
        this.userLoadMoreBtn.style.display = isShow ? 'inline-block' : 'none';
    }

    showCountMessage(message){
        this.counter.textContent = message;
    }

    clearList(){
        this.usersList.innerHTML = '';
        this.counter.textContent = '';
        this.toggleViewUserloadMoreBtn(false);
    }
}
