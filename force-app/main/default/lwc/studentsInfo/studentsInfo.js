import { LightningElement ,track} from 'lwc';

export default class StudentsInfo extends LightningElement {
   @track studentInfoParent=[
    {name:'shravani',age:20, marks:'100', },
    {name:'shravi',age:'20', marks:'100', },
    {name:'shreya',age:'22', marks:'100', },   
    {name:'shravya',age:'23', marks:'100', },
];
 tileselectHandler(event){
    alert('tileselect was called'+JSON.stringfy(event.detail));
    this.selectedStudentInfo;
 }
}