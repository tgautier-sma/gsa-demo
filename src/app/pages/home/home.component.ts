import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!: MenuItem[];
  msgs1!: Message[];
  msgs2!: Message[];
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
   ) {
   
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
            this.update();
          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            this.delete();
          }
        }
        ]
      },
      {
        label: 'Navigate',
        items: [{
          label: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
        },
        {
          label: 'A propos...',
          icon: 'pi pi-info-circle',
          routerLink: '/about'
        }
        ]
      }
    ];
  }
  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }

}