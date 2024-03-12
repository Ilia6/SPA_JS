import {View} from "./modules/view.js";
import {Api} from "./modules/api.js";
import {Search} from "./modules/search.js";


class App{
    constructor(view){
        this.view = view;
    }
}

const api = new Api();
const view = new View();
const search = new Search(view);

const app = new App(new View());
