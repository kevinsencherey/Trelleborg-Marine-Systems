import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
    selector: 'review-component',
    styleUrls: ['./review-component.component.css'],
    templateUrl: './review-component.component.html'
})
export class ReviewComponent implements OnInit, OnDestroy {

    public newCustomerUniqueId = "";
    public newCustomerName = "";
    private newCustomerAge = "";
    private newCustomerAddress: string = "";

    public currentCustomers: any[] = null;
    private selectedCustomer: any = null;
	

    private routerSub: Subscription;

    constructor(
        private _route: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.routerSub = this._route
            .params
            .subscribe((params) => {
                // Route entry
                this.currentCustomers = [];
                this.currentCustomers.push(
                    {
                        uniqueId: 1,
                        name: 'Phill Jensen',
                        age: 34,
                        address: '56 Pill Lane, Hugecastle, UFoP'
                    },
                    {
                        uniqueId: 2,
                        name: 'Claire Hopper',
                        age: 19,
                        address: '2 Worth Street, Litemouth, UFoP'
                    },
                    {
                        uniqueId: 3,
                        name: 'Marcy Francis',
                        age: '24',
                        address: '404 Webdrive, Coolpool, UFoP'
                    },
                    {
                        'uniqueId': 4,
                        'name': 'John Insinge',
                        'age': 66,
                        'address': '123 Pretender Drive, Bladgow, UFoP'
                    },
                )


            });
    }

    public ngOnDestroy(): void {
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
    }

	//--------Logic added so that an empty customer data cannot be submitted--------------
    public addCustomer(customer: string): void{		    
			    
		if(this.newCustomerUniqueId != '' && this.newCustomerAddress != '' && this.newCustomerName != '' && this.newCustomerAge != ''){	
					this.currentCustomers.push(customer);						
				 }			
    }

    public remove(index: number) {
        this.currentCustomers.splice(index, 1);
    }
}
