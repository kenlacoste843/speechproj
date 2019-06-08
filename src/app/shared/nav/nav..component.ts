import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
    
    isCollapsed = true;
    menuList: any;

    ngOnInit() {
        this.menuList = [
            { name: "View Speeches", route: "speeches" },
        ]
    }
    
}