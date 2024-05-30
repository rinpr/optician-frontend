import { Component } from "@angular/core";

import { MatCardModule } from '@angular/material/card'

@Component({
    selector: 'app-index',
    standalone: true,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    imports: [MatCardModule]
})

export class IndexComponent {
    
}