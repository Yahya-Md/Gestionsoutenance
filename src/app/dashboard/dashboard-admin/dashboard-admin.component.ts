import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  public close = false;
  constructor() { }

  ngOnInit(): void {
  }
  closeSideNav() {
    this.close = true;
  }
}
