
describe('golden eagle lawn care website smoke test', () => {
    it('should load the home page', async () => {
      await browser.url('https://goldeneaglelawncare.com')
      let mainLogo = $('.u_1952458124.small-12.dmRespCol.large-2.medium-2.has-one-widget-only')
      await expect(mainLogo).toBeExisting()
    })
})