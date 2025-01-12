import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router'; 
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

   employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,  private route: ActivatedRoute , private router: Router) { }
      id : number = 0;
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
     this.getemployeeDataById(this.id);
    
  }

  getemployeeDataById(id : number){
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}

  

 