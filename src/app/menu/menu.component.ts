import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuList: any = [];
  superMenuList: any = [];
  category = '';
  categoryList: any = [];
  constructor(private _dataservice: DataService) {}

  getCategory(val: any) {
    let tempList = this.superMenuList;
    if (val !== 'all') {
      this.menuList = tempList.filter((item: any) => item.categoryCode === val);
    } else {
      this.menuList = this.superMenuList;
    }
  }
  ngOnInit(): void {
    this._dataservice.getMenuList().subscribe((data: any) => {
      this.superMenuList = data.menuItems;
      this.menuList = this.superMenuList;
      this.setCategoryList();
    });
  }

  setCategoryList() {
    let tempList: any = [];
    this.superMenuList.forEach((item: any) => {
      let obj = {
        categoryCode: item.categoryCode,
        category: item.category,
      };
      if (
        tempList.map((e: any) => e.categoryCode).indexOf(item.categoryCode) ==
        -1
      ) {
        tempList.push(obj);
        console.log(obj);
      }
    });
    this.categoryList = tempList;
  }
}
