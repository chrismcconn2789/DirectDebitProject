import { Component, Inject, OnInit } from '@angular/core';
import { BacsService } from './service/bacs.service';
import { Observable } from 'rxjs';
import { BACs } from './models/BACs.model';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BACsApp';
  bacs: BACs[] = [];

  constructor(private BacsService: BacsService) {

  }
  ngOnInit() {
    this.getAllRecords();
  }

  getAllRecords() {
    this.BacsService.getAllRecords()
    .subscribe(
      response => {
        this.bacs = response;
      });
  }

  deleteRecord(policyRef: string) {
    if(confirm("Are you sure you finished with " + policyRef + "?")){
      this.BacsService.deleteRecord(policyRef)
    .subscribe(
      response => {
        this.getAllRecords();
      }
    )
    }
    
  }
}
