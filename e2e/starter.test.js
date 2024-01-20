describe('測試基本功能', () => {
    beforeAll(async () => {
      await device.launchApp({permissions: {notifications: 'YES'}});
    });

    beforeEach(async () => {
      await device.reloadReactNative();
    });
    
    it('登入', async () => {
        await element(by.id('account_text_field')).typeText('master');
        await element(by.id('password_text_field')).typeText('master');
        await element(by.id('login_button')).tap();
     });
});

