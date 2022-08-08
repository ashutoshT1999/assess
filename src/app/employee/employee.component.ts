import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "employee",
    templateUrl: "./employee.component.html",
    styleUrls: ["./employee.component.css"]
})

export class employee {

    person: any[] = [
        { firstname: "Ashutosh",middlename:"JJ",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "Ashutosh",middlename:"",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "Ashutosh",middlename:"",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "Ashutosh",middlename:"",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" },
        { firstname: "Ashutosh",middlename:"",lastname:"Tiwari", age: 20, gender: "male",DOB:"22/12/1980", address: "kanpur" }
    ]
    // person: any[] = [];

    employeedetails(data: NgForm) {
        // this.person = data.value;
    }

}