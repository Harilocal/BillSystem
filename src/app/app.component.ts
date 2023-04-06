import { Component,OnInit  } from '@angular/core';
import { Table } from 'primeng/table';
import { Productmodel } from '../app/Model/productmodel';
import { ProducserviceService } from '../app/Service/producservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BillSystem';
}
