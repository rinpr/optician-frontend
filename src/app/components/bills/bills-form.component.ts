import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../services/api.service';
import { Bill } from '../../models/bill';

@Component({
  selector: 'bills-form',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './bills-form.component.html',
  styleUrl: './bills-form.component.css'
})
export class BillsFormComponent implements OnInit {
  apiService  = inject(ApiService)
    bills: Bill[] = []

    ngOnInit(): void {
        this.apiService.getBills().subscribe((bill) => {
            this.bills = bill
        })
        console.log(this.bills)
    }
}
