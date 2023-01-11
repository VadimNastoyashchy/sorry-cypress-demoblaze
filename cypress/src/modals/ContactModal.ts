import BaseModal from '../base/BaseModal';

export default class ContactModal extends BaseModal {

    public checkFooterSendButton(textButton: string): this {
        this.modalFooterButton.contains(textButton).should('be.visible');
        return this;
    }
}