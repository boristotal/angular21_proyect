import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  title: string;
  open?: boolean;
  url?: string;
  children?: MenuItem[];
}
// {"username":"testuser","email":"testuser@example.com","age":30}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menu: MenuItem[] = [
    {
      title: 'Inicio',
      children: [
        { title: 'Dashboard', children: [
          { title: 'Angular', url: 'https://angular.dev' },
          { title: 'Google', url: 'https://www.google.com' },
          { title: 'GitHub', url: 'https://github.com' }
        ]},
        { title: 'Noticias', children: [
          { title: 'BBC', url: 'https://www.bbc.com' },
          { title: 'CNN', url: 'https://www.cnn.com' },
          { title: 'Reuters', url: 'https://www.reuters.com' }
        ]},
        { title: 'Ayuda', children: [
          { title: 'MDN', url: 'https://developer.mozilla.org' },
          { title: 'Stack Overflow', url: 'https://stackoverflow.com' },
          { title: 'Wikipedia', url: 'https://www.wikipedia.org' }
        ]}
      ]
    },

    {
      title: 'Usuarios',
      children: [
        { title: 'Lista', children: [
          { title: 'LinkedIn', url: 'https://www.linkedin.com' },
          { title: 'Microsoft', url: 'https://www.microsoft.com' },
          { title: 'Apple', url: 'https://www.apple.com' }
        ]},
        { title: 'Roles', children: [
          { title: 'TypeScript', url: 'https://www.typescriptlang.org' },
          { title: 'Node.js', url: 'https://nodejs.org' },
          { title: 'NPM', url: 'https://www.npmjs.com' }
        ]},
        { title: 'Permisos', children: [
          { title: 'Vercel', url: 'https://vercel.com' },
          { title: 'Netlify', url: 'https://www.netlify.com' },
          { title: 'Cloudflare', url: 'https://www.cloudflare.com' }
        ]}
      ]
    },

    {
      title: 'Productos',
      children: [
        { title: 'Catálogo', children: [
          { title: 'Amazon', url: 'https://www.amazon.com' },
          { title: 'Mercado Libre', url: 'https://www.mercadolibre.com' },
          { title: 'eBay', url: 'https://www.ebay.com' }
        ]},
        { title: 'Categorías', children: [
          { title: 'Shopify', url: 'https://www.shopify.com' },
          { title: 'WooCommerce', url: 'https://woocommerce.com' },
          { title: 'Stripe', url: 'https://stripe.com' }
        ]},
        { title: 'Inventario', children: [
          { title: 'SAP', url: 'https://www.sap.com' },
          { title: 'Oracle', url: 'https://www.oracle.com' },
          { title: 'Odoo', url: 'https://www.odoo.com' }
        ]}
      ]
    },

    {
      title: 'Reportes',
      children: [
        { title: 'Ventas', children: [
          { title: 'Analytics', url: 'https://analytics.google.com' },
          { title: 'Power BI', url: 'https://powerbi.microsoft.com' },
          { title: 'Looker Studio', url: 'https://lookerstudio.google.com' }
        ]},
        { title: 'Finanzas', children: [
          { title: 'Yahoo Finance', url: 'https://finance.yahoo.com' },
          { title: 'Bloomberg', url: 'https://www.bloomberg.com' },
          { title: 'Investing', url: 'https://www.investing.com' }
        ]},
        { title: 'Estadísticas', children: [
          { title: 'Statista', url: 'https://www.statista.com' },
          { title: 'Kaggle', url: 'https://www.kaggle.com' },
          { title: 'Data.gov', url: 'https://data.gov' }
        ]}
      ]
    },

    {
      title: 'Configuración',
      children: [
        { title: 'Perfil', children: [
          { title: 'Gravatar', url: 'https://gravatar.com' },
          { title: 'Notion', url: 'https://www.notion.so' },
          { title: 'About.me', url: 'https://about.me' }
        ]},
        { title: 'Seguridad', children: [
          { title: 'Auth0', url: 'https://auth0.com' },
          { title: 'Okta', url: 'https://www.okta.com' },
          { title: 'Cloudflare', url: 'https://www.cloudflare.com' }
        ]},
        { title: 'Preferencias', children: [
          { title: 'Chrome', url: 'https://www.google.com/chrome' },
          { title: 'Firefox', url: 'https://www.mozilla.org/firefox' },
          { title: 'Products', url: '/products-dashboard' }
        ]}
      ]
    }
  ];

  toggle(item: MenuItem): void {
    item.open = !item.open;
  }
}
