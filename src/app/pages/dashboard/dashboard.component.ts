import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-th-large'
    },
    {
      label: 'Usuários',
      icon: 'pi pi-users',
      items: [
        {
          label: 'Funcionários',
          icon: 'pi pi-id-card'
        },
        {
          label: 'Alunos',
          icon: 'pi pi-user'
        },
      ]
    },
    {label: 'Visitantes', icon: 'pi pi-ticket'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
