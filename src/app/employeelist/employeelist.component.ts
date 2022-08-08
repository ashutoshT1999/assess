import { Component, Input } from "@angular/core";

@Component({
    selector: "employeelist",
    templateUrl: "./employeelist.component.html",
    styleUrls: ["./employeelist.component.css"]
})

export class employeelist {

    person: any[] = [
        { firstname: "Ashutosh",middlename:"JJ",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "axc",middlename:"",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "TT",middlename:"bb",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "tgggs",middlename:"shsh",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "Ashutosh",middlename:"",lastname:"jj", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" }
    ]
    // @Input()
    // firstname: string = "";
    // @Input()
    // middlename: string = "";
    // @Input()
    // lastname: string = "";
    // @Input()
    // age: number = 0;
    // @Input()
    // gender: string = "";
    // @Input()
    // dob: string = "";
    // @Input()
    // address1: string = "";
    // @Input()
    // address2: string = "";
    // @Input()
    // pincode:string = "";
    @Input()
    details:any[]=[];

}