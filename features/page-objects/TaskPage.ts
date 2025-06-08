class taskPage {
    get btnNewTask(){return $(`//th-button[@title="New task"]//button[@aria-label="New task"]`)}
    get nameTask(){return $(`//input[@aria-label="Name"]`)}
    get btnSaveTask(){return $(`//th-button[@type="primary"]//button[@aria-label="Save task"]`)}
    get btnCancel(){return $(`(//th-button[@type="secondary"]//button[@aria-label="Cancel"])[1]`)}
    
    async clickBtnCreateTask(){
        await expect(this.btnNewTask).toBeDisplayed()
        await this.btnNewTask.click()
    }

    async validateAfterClik(){
        await expect(this.btnNewTask).toBeDisplayed()
        await expect(this.btnSaveTask).toBeDisplayed()
        await expect(this.nameTask).toBeDisplayed()
    }

    async cancelNewTask(){
        await this.btnCancel.click()
        await expect(this.btnCancel).not.toBeDisplayed()
    }
    
}
export default new taskPage() 