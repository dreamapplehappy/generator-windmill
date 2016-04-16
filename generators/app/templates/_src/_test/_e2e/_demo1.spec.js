
var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
    var args = arguments;

    // queue 100ms wait
    origFn.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(100);
    });

    return origFn.apply(browser.driver.controlFlow(), args);
};

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('http://localhost:3000/#/demo');

        //element(by.model('todoList.todoText')).sendKeys('第一个protractor测试用例');
        for(var i = 0; i < 10; i++) {
            element(by.css('.btn-increment')).click();
            var content = element(by.css('.demo-count'));

        }
        expect(content.getText()).toEqual('This is Demo page count: ' + 11);
    });
});