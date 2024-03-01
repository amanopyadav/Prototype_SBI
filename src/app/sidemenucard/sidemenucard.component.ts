import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-sidemenucard',
  templateUrl: './sidemenucard.component.html',
  styleUrls: ['./sidemenucard.component.css']
})
export class SidemenucardComponent {

  

  images = [
    { url: 'https://example.com/image1.jpg' },
    // Add more images as needed
  ];
  dropdownOpen: boolean = false;
  

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  completionPercentage1: number = 80;
  completionPercentage2: number = 80;

  dataSource = new MatTableDataSource<any>([
    { column1: 'XXXXXXX', column2: '00', column3: '00', column4: '00000', column5: '00000' },
    { column1: 'XXXXXXX', column2: '00', column3: '00', column4: '00000', column5: '00000' },
    { column1: 'XXXXXXX', column2: '00', column3: '00', column4: '00000', column5: '00000' },
    // Add more rows as needed
  ]);
  
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5'];

}
