import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../controller/service/doctorant.service';
import {Doctorant} from '../../../controller/model/doctorant.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashborad-etudiant',
  templateUrl: './dashborad-etudiant.component.html',
  styleUrls: ['./dashborad-etudiant.component.css']
})
export class DashboradEtudiantComponent implements OnInit {
  displayedColumns: string[] = ['cin', 'cne', 'tel', 'email'];
  dataSource = new MatTableDataSource(this.doctorants);
  constructor(private doctorantService: DoctorantService) { }

  ngOnInit(): void {
    this.doctorantService.findAll();
    this.dataSource._updateChangeSubscription();
  }

  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }

}
