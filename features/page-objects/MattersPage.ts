import homePage from '../page-objects/ClioManagePage'

class MattersPage {
    // Header elements
    get tabMatters(){return $(`//span[@class="tab-text" and @data-text="Matters"]`)}
    get tabStages(){return $(`//span[@class="tab-text" and @data-text="Stages"]`)}
    get btnMattersTemplaes(){return $(`//button[@aria-label="Matter Templates"]`)}
    get subTabAll(){return $(`//li[@role="listitem"][.="All"]`)}
    get subTabOpen(){return $(`//li[@role="listitem"][.="Open"]`)}
    get subPending(){return $(`//li[@role="listitem"][.="Pending"]`)}
    get subClosed(){return $(`//li[@role="listitem"][.="Closed"]`)}
    get inputSearchMatters(){return $(`//input[@aria-label="Filter by keyword"]`)}


    //form new matters 
    get tltNewMatter(){return $(`//div[@class="title-text"][text()="New matter"]`)}
    get btnSaveMatter(){return $(`//button[@aria-label="Save matter"]`)}
    get btnCancel(){return $(`//button[@aria-label="Cancel"]`)}
    get inputClient(){return $(`//input[@name="client_input"]`)}
    get inputDescription(){return $(`//th-textarea[@name="description"]//textarea`)}
    get lblTemplateInform(){return $(`//h2[text()="Template information"]`)}
    get sideBar(){return $(`//h2[@class="navigation-sidebar__header"]`)}
    get sideBarTemplateInformation(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#template_information"]`)}
    get sideBarMattersDetails(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#matter_details"]`)}
    get sideBarMatterPermission(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#matter_permissions"]`)}
    get sideBarMatterNotifications(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#matter_notifications"]`)}
    get sideBarBlockUsers(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#matter_block_groups"]`)}
    get sideBarRelatedContacs(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#related_contacts"]`)}
    get sideBarCustomField(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#custom_fields"]`)}
    get sideBarTaskList(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#task_lists"]`)}
    get sideBarDocumenFolders(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#matter_document_folders"]`)}
    get sideBarReports(){return $(`//th-link[@href="https://app.clio.com/nc/#/matters/new#matter_report_options"]`)}
    get inputTemplateInput(){return $(`//input[@name="template_input"]`)}
    get errorContact(){return $(`//*[@id="matter_details"]/ng-form/section/cc-contact-field/div/label/div[2]/div/span`)}
    get errorDesc(){return $(`//*[@id="matter_details"]/ng-form/section/label/div[2]/div/span`)}
    get errorPermission(){return $(`//*[@id="matter_permissions"]/ng-form/section/label/div/div/div/span`)}
    get ddlClinentInput(){return $('//input[@name="client_input"]//following-sibling::span[@class="k-select"]')}
    get radioBtnEvryone(){return $(`//span[@value="everyone"]`)}
    
    async validatePageMatters(){
        await expect(this.tabMatters).toBeDisplayed()
        await expect(this.tabStages).toBeDisplayed()
        await expect(this.btnMattersTemplaes).toBeDisplayed()
        await expect(this.subTabAll).toBeDisplayed()
        await expect(this.subTabOpen).toBeDisplayed()
        await expect(this.subPending).toBeDisplayed()
        await expect(this.subClosed).toBeDisplayed()
        await expect(this.inputSearchMatters).toBeDisplayed()
    }

    async clickBtnNeeMatter(){
        await expect(homePage.btnNewMatter).toBeDisplayed()
        await homePage.btnNewMatter.click()
        await expect(homePage.btnNewMatter).not.toBeDisplayed()
    }

    async validateFormNewMatter(){
        await expect(this.tltNewMatter).toBeDisplayed()
        await expect(this.btnSaveMatter).toBeDisplayed()
        await expect(this.btnCancel).toBeDisplayed()
        await expect(this.inputClient).toBeDisplayed()
        await expect(this.inputDescription).toBeDisplayed()
        await expect(this.lblTemplateInform).toBeDisplayed()
        await expect(this.lblTemplateInform).toBeDisplayed()
        await expect(this.inputTemplateInput).toBeDisplayed()
        await expect(this.sideBar).toBeDisplayed()
        await expect(this.sideBarBlockUsers).toBeDisplayed()
        await expect(this.sideBarCustomField).toBeDisplayed()
        await expect(this.sideBarDocumenFolders).toBeDisplayed()
        await expect(this.sideBarMatterNotifications).toBeDisplayed()
        await expect(this.sideBarMatterPermission).toBeDisplayed()
        await expect(this.sideBarMattersDetails).toBeDisplayed()
        await expect(this.sideBarRelatedContacs).toBeDisplayed()
        await expect(this.sideBarReports).toBeDisplayed()
    }

    async cancelCreateNewMatter(){
        await this.btnCancel.scrollIntoView()
        await this.btnCancel.click()
        await expect(this.btnCancel).not.toBeDisplayed()
    }

    async saveMatter(){
        await expect(this.btnSaveMatter).toBeDisplayed()
        await this.btnSaveMatter.click()
    }

    async negativeValidateDirectlySaveMatter(){
        await this.saveMatter()
        await expect(this.errorContact).toBeDisplayed()
        await expect(this.errorDesc).toBeDisplayed()
        await this.errorPermission.scrollIntoView()
        await expect(this.errorPermission).toBeDisplayed()
    }

    async createNewMatter(client, description) {
        await this.ddlClinentInput.click()
        const elementContact = $(`(//li[@class="k-item k-state-focused"]//strong[text()="${client}"])[1]`);
        await elementContact.waitForDisplayed({ timeout: 5000 }); // tunggu maksimal 5 detik sampai muncul
        await elementContact.click();
    
        await this.inputDescription.setValue(description);
    
        await this.radioBtnEvryone.scrollIntoView();
        await this.radioBtnEvryone.click();
    
        await this.btnSaveMatter.scrollIntoView();
        await this.btnSaveMatter.click();
    }
    
}
export default new MattersPage() 