import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-privilege-page-list',
  templateUrl: './role-privilege-page-list.component.html',
  styleUrls: ['./role-privilege-page-list.component.css']
})
export class RolePrivilegePageListComponent implements OnInit {

  	rolePrivilegePageSettings = {
		title: "Privilege",
		showCreateIcon: true,
		viewSettings: {
			columns: {
		    	roleName: {
		      		title: 'Role name'
		    	}
		  	},
		 	actions: {
	      		columnTitle: 'Actions',
	      		add: false,
	      		edit: false,
	      		delete: false,
	      		custom: [],
	      		position: 'right'
	    	},
	    	source: "",
	    	sourceData: []
		},
	};

  	constructor() { }

  	ngOnInit() {
  		this.rolePrivilegePageSettings.viewSettings.sourceData = this.generateData()
  	}

    protected generateData(): Array<any> {
    const data = [];
    for (let i = 0; i < 26; i++) {
      data.push({
	    roleName: "Admin " + i
	  });
    }
    return data;
  }

}