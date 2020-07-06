describe('homepage', function() {
  it('should have a title', function() {
    browser.get('https://www.google.com/');
    expect(browser.getTitle()).toContain('AngularJS');
  });
});
