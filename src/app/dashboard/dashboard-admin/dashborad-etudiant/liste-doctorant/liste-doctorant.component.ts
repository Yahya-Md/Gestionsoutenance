import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-liste-doctorant',
  templateUrl: './liste-doctorant.component.html',
  styleUrls: ['./liste-doctorant.component.css']
})
export class ListeDoctorantComponent implements OnInit {
  displayedColumns: string[] = ['cin', 'cne', 'tel', 'email'];
  data: Doctorant [] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
   applyFilter(filterValue: string){
  //  this.data.filter = filterValue.trim().toLowerCase();
 }
  constructor(private doctorantService: DoctorantService) { }

  ngOnInit(): void {
    this.doctorantService.findAll();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // console.log(this.data);
    console.log(this.doctorantService.findAll());
  }

  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }
/*
  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  } */
}
