import SearchBarController from './controllers/search-bar.controller';
import searchBarHtml from './templates/search-bar.html';

const SearchBarComponent = {
    bindings: {
        click: '=',
        focusSearchBar: '&',
        blurSearchBar: '&'
    },
    controller: SearchBarController,
    template: searchBarHtml
};

export {SearchBarComponent};

