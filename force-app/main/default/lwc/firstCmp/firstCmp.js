import { LightningElement } from 'lwc';

export default class FirstCmp extends LightningElement {
    students = [
        { name: 'Riya', age: 20, rollNumber: 1 },
        { name: 'Priya', age: 21, rollNumber: 2 },
        { name: 'Siya', age: 22, rollNumber: 3 },
        { name: 'Diya', age: 23, rollNumber: 4 },
        { name: 'Miya', age: 24, rollNumber: 5 }
    ];

    selectedStudent;

    handleStudentSelect(event) {
        this.selectedStudent = event.detail;
    }
}
