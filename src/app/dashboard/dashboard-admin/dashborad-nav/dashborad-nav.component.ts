import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashborad-nav',
  templateUrl: './dashborad-nav.component.html',
  styleUrls: ['./dashborad-nav.component.css']
})
export class DashboradNavComponent implements OnInit {
  public menuIcon = true;
  @Output() public sideNavToggle = new EventEmitter();
  @Input() public showIcone;
  constructor() { }

  ngOnInit(): void {
  }
  onToggleSidenav() {
    this.sideNavToggle.emit();
  }
}
