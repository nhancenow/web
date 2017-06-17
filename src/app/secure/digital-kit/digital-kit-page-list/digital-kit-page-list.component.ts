import { Component, OnInit } from '@angular/core';
import { PageListComponent } from '../../../shared/modules/page-first-view-with-list/page-list/page-list.component';
import { DigitalKitService } from '../../../shared/services/digital-kit.service';
import { LocalDataSource } from '../../../shared/components/ng2-smart-table';

@Component({
  selector: 'app-digital-kit-page-list',
  templateUrl: './digital-kit-page-list.component.html',
  styleUrls: ['./digital-kit-page-list.component.css']
})

export class DigitalKitPageListComponent implements OnInit {
	
	dataSource:LocalDataSource;
	
	dkPageSettings = {
		title: "Digital Kit",
		showCreateIcon: true,
		viewSettings: {
			columns: {
		    	digitalKitCode: {
		      		title: 'DK code'
		    	},
		    	brand: {
		      		title: 'Brand'
		    	},
		    	modelNumber: {
		      		title: 'Model number'
		    	},
		    	customerName: {
		      		title: 'Customer name'
		    	},
		    	status: {
		    		title: 'Status'
		    	}
		  	},
		 	actions: {
	      		add: false,
	      		edit: false,
	      		delete: false,
	      		custom: [],
	      		position: 'right'
	    	}
		},
	};
	
  	constructor(private dkService: DigitalKitService) {
  		this.dataSource = new LocalDataSource();
  	}

  	ngOnInit() {
  		this.dkService.getDigitalKits().subscribe(result => {
	    	this.dataSource.load(result);
        },
        error => {
        	console.log("Unexpected error - " + error);
        });
  	}  
}
