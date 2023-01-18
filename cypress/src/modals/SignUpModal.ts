import BaseModal from '../base/BaseModal';

class SignUpModal extends BaseModal {

    public checkFooterSignUpButton(textButton: string): this {
        this.modalFooterButton.contains(textButton).should('be.visible');
        return this;
    }
}

export default new SignUpModal();