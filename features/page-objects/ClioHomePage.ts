import { $ } from '@wdio/globals'

class ClioHomePage {
    // Header elements
    get headerLogo() { return $('header img[alt*="Clio"]') }
    get mainNavigation() { return $('nav') }
    get loginButton() { return $('//span[@class="icon-admin"]//ancestor::a') }
    get menuProducts() { return $('//button[@class="c-header-navigation__primary-link js-dropdown-trigger"]//p[text()="Products"]') }
    get menuPraticeTypes() { return $('//button[@class="c-header-navigation__primary-link js-dropdown-trigger"]//p[text()="Practice Types"]') }
    get menuPricing() { return $('//a[@class="c-header-navigation__primary-link"][.="Pricing"]') }
    get menuRNE() { return $('//button[@class="c-header-navigation__primary-link js-dropdown-trigger"]//p[.="Resources & Events"]') }
    get titleBody() { return $('//h2[text()="Software made for law firms, loved by clients"]') }
   
    async open() {
        await browser.url('/')
    }

    async validateOtherElements() {
        await expect(this.mainNavigation).toBeDisplayed()
        await expect(this.headerLogo).toBeDisplayed()
        await expect(this.loginButton).toBeDisplayed()
        await expect(this.menuProducts).toBeDisplayed()
        await expect(this.menuPraticeTypes).toBeDisplayed()
        await expect(this.menuPricing).toBeDisplayed()
        await expect(this.menuRNE).toBeDisplayed()
        await expect(this.titleBody).toBeDisplayed()

    }
}
export default new ClioHomePage() 