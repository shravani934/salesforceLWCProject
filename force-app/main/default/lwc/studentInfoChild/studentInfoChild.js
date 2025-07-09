import { LightningElement, api } from 'lwc';

export default class StudentInfoChild extends LightningElement {
    @api student;

    handleClick() {
        const selectedEvent = new CustomEvent('selectstudent', {
            detail: this.student
        });
        this.dispatchEvent(selectedEvent);
    }
}
