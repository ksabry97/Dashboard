import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // intializing the array columns tp adjust responsisvty among screens
  displayedColumns: string[] = [];

  // static data to change the UI
  customers: customer[] = [
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
    {
      id: 'ID-15877',
      name: 'اسم افتراضى',
      email: 'Example@company.com',
      files: 'واجهة المستخدم ',
    },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public breakpointObserver: BreakpointObserver) {}
  //intializing the menu according the media query:taking 650 as the breakpoint
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width:650px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.displayedColumns = ['id', 'name', 'email', 'setting'];
        } else {
          this.displayedColumns = [
            'id',
            'name',
            'email',
            'workDays',
            'files',
            'setting',
          ];
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  dataSource = new MatTableDataSource<customer>(this.customers);
}
