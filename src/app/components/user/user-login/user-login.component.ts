import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-user-login',
    standalone: true,
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
    title = 'optician-frontend'
    signupUsers: any[] = []
    signupObj: any = {
        userName: '',
        email: '',
        password: ''
    }
    loginObj: any = {
        userName: '',
        email: '',
        password: ''
    }
    constructor() { }
    ngOnInit(): void {

    }
}