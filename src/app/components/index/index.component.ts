import { Component, inject, OnInit } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { ApiService } from "../../services/api.service";
import { Bill } from "../../models/bill";

@Component({
    selector: 'app-index',
    standalone: true,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    imports: [MatCardModule]
})

export class IndexComponent implements OnInit{
    apiService  = inject(ApiService)
    bills: Bill[] = []

    ngOnInit(): void {
        this.apiService.getBills().subscribe((bill) => {
            this.bills = bill
        })
        console.log(this.bills)
    }
    
}