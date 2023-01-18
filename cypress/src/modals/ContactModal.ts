import BaseModal from '../base/BaseModal';

class ContactModal extends BaseModal {

    public checkFooterSendButton(textButton: string): this {
        this.modalFooterButton.contains(textButton).should('be.visible');
        return this;
    }
}

export default new ContactModal();