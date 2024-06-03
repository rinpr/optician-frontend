import { Component } from "@angular/core";
import { BillsFormComponent } from "../bills/bills-form.component";

@Component({
    selector: 'app-index',
    standalone: true,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    imports: [BillsFormComponent]
})

export class IndexComponent{

}