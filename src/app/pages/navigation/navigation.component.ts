import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  items!: MenuItem[];
  options!: MenuItem[];
  title = 'ng Prime';
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: '',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Store',
        icon: 'fa-solid fa-store',
        routerLink: '/store',
      },
      {
        label: 'Signature',
        icon: 'fa-solid fa-signature',
        routerLink: '/sign',
      },
      {
        label: 'Gestion de contenu',
        icon: 'pi pi-book',
        routerLink: '/jcms',
      },
      {
        label: 'Outils',
        icon: 'fa-solid fa-screwdriver-wrench',
        items: [
          {
            label: 'Requête REST',
            icon: 'fa-solid fa-bolt',
            routerLink: '/callRequest',
          },
          {
            label: 'Générateur de dessins',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/draw',
          },
          {
            label: 'Icones',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Icon Finder',
                icon: 'pi pi-fw pi-search',
                routerLink: '/icons',
              },
              {
                label: 'PrimeNG',
                icon: 'pi pi-fw pi-images',
                url: 'http://primefaces.org/primeng/#/icons',
                target: '_icones',
              },
              {
                label: 'Font Awesome',
                icon: 'pi pi-fw pi-images',
                url: 'https://fontawesome.com/icons',
                target: '_icones',
              },
              {
                label: 'Flaticon',
                icon: 'pi pi-fw pi-images',
                url: 'https://api-gsa-v4.herokuapp.com/api/icons/search?json=false',
                target: '_icones',
              },
            ],
          },
        ],
      },
      {
        label: 'Demonstration',
        icon: 'fa-solid fa-laptop',
        items: [
          {
            label: 'Affichage de données',
            icon: 'pi pi-fw pi-database',
            routerLink: '/cards',
          },
          {
            label: 'Gallerie',
            icon: 'pi pi-fw pi-images',
            routerLink: '/gallery',
          },
          {
            label: 'RSS',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: '/rss',
          },
          {
            label: "Appel d'api",
            icon: 'pi pi-fw pi-box',
            routerLink: '/call',
          },
          {
            label: 'Outils',
            icon: 'pi pi-fw pi-inbox',
            items: [
              {
                label: 'Ouverture CSV ou Excel',
                icon: 'pi pi-fw pi-map-marker',
                routerLink: '/upload',
              },
              {
                label: 'Envoie de mail',
                icon: 'pi pi-fw pi-map-marker',
                routerLink: '/mail',
              },
            ],
          },
          {
            label: 'Map',
            icon: 'pi pi-fw pi-map',
            items: [
              {
                label: 'Données sur carte',
                icon: 'pi pi-fw pi-map-marker',
                routerLink: '/map',
              },
              {
                label: 'MapBox site',
                icon: 'pi pi-fw pi-sitemap',
                url: 'https://docs.mapbox.com/mapbox-gl-js/guides/',
                target: '_blank',
              },
              {
                label: 'Données',
                icon: 'pi pi-fw pi-sitemap',
                url: '/geo',
                target: '_blank',
              },
            ],
          },
        ],
      },
    ];
    this.setOptions();
  }
  setOptions() {
    this.options = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Votre compte',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Connection',
            icon: 'pi pi-lock-open',
            command: () => {
              // this.signIn();
            },
            visible: true,
          },
          {
            label: 'Dé-connection',
            icon: 'pi pi-lock',
            command: () => {
              // this.signOut();
            },
            visible: true,
          },
          {
            label: 'Votre profil',
            icon: 'pi pi-id-card',
            routerLink: '/profil',
          },
        ],
      },
      {
        label: 'Suivi Analytique de site',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Production',
            icon: 'pi pi-fw pi-info',
            url: 'https://gautiersa.yj.fr/matomo',
            target: '_blank',
          },
          {
            label: 'Suivi Analytic (Demo)',
            icon: 'pi pi-fw pi-info',
            url: 'https://thgautier.matomo.cloud/',
            target: '_blank',
          },
        ],
      },
      {
        label: 'Suivi Performances',
        icon: 'fa-solid fa-gauge-high',
        items: [
          {
            label: 'Prometheus',
            icon: 'fa-solid fa-file-export',
            url: 'https://gsa-prom.herokuapp.com',
            target: '_blank',
          },
          {
            label: 'Grafana',
            icon: 'fa-solid fa-table-columns',
            url: 'https://tgautier.grafana.net/',
            target: '_blank',
          },
        ],
      },
      {
        label: 'Thème',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Lara',
            icon: 'pi pi-cog',
            command: () => {
              // this.themeService.switchTheme('lara-light-indigo');
            },
          },
          {
            label: 'Material (défault)',
            icon: 'pi pi-cog',
            command: () => {
              // this.themeService.switchTheme('md-light-indigo');
            },
          },
          {
            label: 'Foncé',
            icon: 'pi pi-cog',
            command: () => {
              // this.themeService.switchTheme('bootstrap4-dark-purple');
            },
          },
          {
            label: 'Foncé - Vert',
            icon: 'pi pi-cog',
            command: () => {
              // this.themeService.switchTheme('arya-green');
            },
          },
        ],
      },
      {
        label: 'Applications',
        icon: 'pi pi-sitemap',
        items: [
          {
            label: 'Appli web, Proxy',
            icon: 'pi pi-fw pi-server',
            url: 'https://api-gsa-proxy.herokuapp.com/',
            target: '_blank',
          },
          {
            label: 'Template HBS',
            icon: 'pi pi-fw pi-server',
            url: 'https://hbs-template.herokuapp.com/',
            target: '_blank',
          },
          {
            label: 'Template Ng',
            icon: 'pi pi-fw pi-server',
            url: 'https://ngbs-template.herokuapp.com/',
            target: '_blank',
          },

          {
            label: 'Transformation PDF',
            icon: 'pi pi-fw pi-server',
            url: 'https://gsa-pdfserver.herokuapp.com/',
            target: '_blank',
          },
        ],
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/about',
      },
    ];
  }
  setTitle(data: string) {
    console.log('Receive Title', data);
    this.title = data;
  }
}
