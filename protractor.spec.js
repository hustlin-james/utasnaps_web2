describe('uta snaps homepage', function(){
    it('should have a title',function(){
        browser.get('http://localhost:9000/#/');
        expect(browser.getTitle()).toEqual('uta snaps');
    });
});