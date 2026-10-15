# JustPress Ecommerce - Admin Panel


> Modern React Admin Dashboard for managing e-commerce operations, built with Material-UI, TypeScript, and Vite.js.

## 🚀 Features

### Dashboard & Analytics
- **Dashboard Overview** - Comprehensive analytics and metrics visualization
- **Analytics Components** - Conversion rates, website visits, traffic analysis, order timeline

### E-commerce Management
- **Products** - Complete product management system
- **Categories** - Category hierarchy management
- **Subcategories** - Subcategory organization
- **Departments** - Department management

### Outlet Management
- **Stores** - Multi-store management with store code selection
- **Pincodes** - Delivery pincode management
- **Delivery Slots** - Time slot configuration for deliveries
- **Payment Modes** - Payment method configuration

### Dynamic Content
- **Advertisements** - Advertisement banner management
- **Best Sellers** - Featured products management
- **Popular Categories** - Category promotion management

### User Management
- **Users** - User account management and administration

### Authentication
- **Sign In** - Secure authentication system with JWT tokens
- **Protected Routes** - Route protection and authorization

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Material-UI (MUI) v7** - Component library
- **Vite 6** - Build tool and dev server
- **React Router v7** - Routing
- **ApexCharts** - Data visualization
- **Emotion** - CSS-in-JS styling
- **Day.js** - Date manipulation

## 📋 Prerequisites

- **Node.js** >= 20.x
- **npm** or **yarn** package manager
- Backend API server running (default: `http://localhost:3000`)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/juggernaut03/eroc_universal_admin.git

# Navigate to project directory
cd admin_panel

# Install dependencies
npm install
# or
yarn install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev

# Open browser: http://localhost:5173 (or port shown in terminal)
```

### Build

```bash
# Build for production
npm run build
# or
yarn build

# Preview production build
npm run start
# or
yarn start
```

## 📁 Project Structure

```
admin_panel/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── chart/          # Chart components
│   │   ├── color-utils/     # Color picker utilities
│   │   ├── iconify/        # Icon components
│   │   ├── label/          # Label component
│   │   ├── logo/           # Logo component
│   │   ├── scrollbar/      # Custom scrollbar
│   │   └── svg-color/      # SVG color utilities
│   ├── contexts/            # React contexts
│   │   └── store-code-context.tsx
│   ├── layouts/             # Layout components
│   │   ├── auth/           # Authentication layout
│   │   ├── dashboard/      # Dashboard layout
│   │   ├── core/           # Core layout components
│   │   └── components/     # Layout-specific components
│   ├── pages/               # Page components
│   │   ├── dashboard.tsx
│   │   ├── sign-in.tsx
│   │   ├── users.tsx
│   │   ├── ecommerce/      # E-commerce pages
│   │   ├── outlet/         # Outlet management pages
│   │   └── dynamic/        # Dynamic content pages
│   ├── routes/              # Routing configuration
│   ├── sections/            # Section components
│   │   ├── auth/           # Authentication sections
│   │   ├── error/          # Error pages
│   │   └── overview/       # Dashboard overview sections
│   ├── services/            # API service functions
│   ├── theme/               # Theme configuration
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── app.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── config-global.ts     # Global configuration
├── public/                  # Static assets
└── dist/                    # Build output
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run fm:check` - Check Prettier formatting
- `npm run fm:fix` - Fix Prettier formatting
- `npm run fix:all` - Fix both linting and formatting
- `npm run clean` - Clean build artifacts
- `npm run tsc:watch` - Watch TypeScript compilation

## 🔐 Authentication

The application uses JWT-based authentication. Tokens are stored in session storage and automatically included in API requests. On 401 errors, users are automatically redirected to the sign-in page.

## 🌐 API Integration

The application communicates with a backend API. Configure the API base URL using the `VITE_API_BASE_URL` environment variable.

### API Services

- Authentication (`src/services/auth.ts`)
- Dashboard (`src/services/dashboard.ts`)
- Products (`src/services/products.ts`)
- Categories (`src/services/categories.ts`)
- Stores (`src/services/stores.ts`)
- Users (`src/services/users.ts`)
- And more...

## 🎨 Theming

The application uses Material-UI theming with custom configurations:
- Custom palette colors
- Typography settings
- Shadow configurations
- Component overrides

Theme configuration is located in `src/theme/`.

## 📝 Code Quality

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vite Plugin Checker** - Build-time checks

## 📚 Documentation

- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [ADMIN_DASHBOARD_INTEGRATION_PLAN.md](./ADMIN_DASHBOARD_INTEGRATION_PLAN.md) - Dashboard integration guide
- [ADMIN_STORE_CODE_INTEGRATION_PLAN.md](./ADMIN_STORE_CODE_INTEGRATION_PLAN.md) - Store code integration guide

## 🚢 Deployment

The project includes a `vercel.json` configuration file for Vercel deployment. The build output is in the `dist/` directory.

## 📄 License

Distributed under the [MIT](./LICENSE.md) license.

## 👥 Contact

**JustPress Ecommerce**

For issues, questions, or contributions, please open an issue on the GitHub repository.

---

Built with ❤️ using React, TypeScript, and Material-UI
