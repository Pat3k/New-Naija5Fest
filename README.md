# Naija5Fest - National 5-Aside Football Tournament Website

![Naija5Fest Logo](https://img.shields.io/badge/Naija5Fest-National%205--Aside%20Football-green?style=for-the-badge)

A dynamic, mobile-first website for Nigeria's premier grassroots football tournament, bringing together teams from all 36 states and FCT.

## 🏆 Project Overview

Naija5Fest is the central digital hub for Nigeria's National 5-Aside Football Tournament, featuring:
- **74 concurrent tournaments** (37 Male, 37 Female)
- **2,000+ participating teams** across all Nigerian states
- **Dual-tier tournament structure** with state qualifiers and grand finale
- **₦50M+ prize pool** celebrating grassroots football excellence

## 🚀 Features

### Core Functionality
- ✅ **Team Registration System** - Multi-step form with ₦5,700 acceptance fee integration
- ✅ **Dynamic Fixtures & Results** - Real-time tournament brackets with state/category filtering
- ✅ **Teams Gallery** - Searchable directory with advanced filtering options
- ✅ **Fan Engagement Zone** - Referral system, leaderboard, polls, and social media integration
- ✅ **Sponsorship Portal** - Three-tier packages with inquiry forms and partner showcase
- ✅ **Tournament Information** - Complete rules, dual-tier structure, and mission/vision
- ✅ **Contact System** - State coordinators, department contacts, and inquiry forms

### Design & UX
- 🎨 **Nigerian Patriotic Theme** - Green (#008751) and white color scheme
- 📱 **Mobile-First Design** - Responsive across all devices
- ⚡ **Fast Performance** - Optimized build with 490KB bundle size
- 🎯 **Prominent CTAs** - "Register Team" and "Become Sponsor" buttons
- 🔄 **Interactive Elements** - Countdown timers, progress bars, and dynamic content

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Components**: shadcn/ui with Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Hooks + Local Storage
- **Icons**: Lucide React
- **Notifications**: Sonner (Toast notifications)
- **Forms**: React Hook Form ready integration

## 📁 Project Structure

```
naija5fest-website/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   └── Layout.tsx       # Main layout with navigation
│   ├── pages/
│   │   ├── Index.tsx        # Homepage with countdown
│   │   ├── Registration.tsx # Team registration system
│   │   ├── Tournament.tsx   # Tournament information
│   │   ├── Fixtures.tsx     # Dynamic fixtures & results
│   │   ├── Teams.tsx        # Teams gallery
│   │   ├── FanZone.tsx      # Fan engagement hub
│   │   ├── Sponsors.tsx     # Sponsorship portal
│   │   ├── Contact.tsx      # Contact information
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/naija5fest-website.git
cd naija5fest-website
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Start development server**
```bash
pnpm run dev
# or
npm run dev
```

4. **Build for production**
```bash
pnpm run build
# or
npm run build
```

5. **Preview production build**
```bash
pnpm run preview
# or
npm run preview
```

## 📝 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run lint` - Run ESLint
- `pnpm run preview` - Preview production build

## 🎯 Key Pages & Features

### Homepage (`/`)
- Hero section with countdown timer
- Tournament statistics and key information
- Featured updates and news
- Prominent registration and sponsorship CTAs

### Team Registration (`/register`)
- Multi-step registration form
- Team and player information collection
- File upload for team photos
- Payment integration for ₦5,700 acceptance fee
- Eligibility confirmation checkbox

### Tournament Hub (`/tournament`)
- Mission, vision, and core values
- Dual-tier tournament structure explanation
- Detailed rules and regulations
- Tournament concept video embed

### Fixtures & Results (`/fixtures`)
- Interactive tournament brackets
- State and category filtering
- Live match status indicators
- Match details and venues

### Teams Gallery (`/teams`)
- Searchable team directory
- Filter by state, category, and status
- Team profiles with manager details
- Registration statistics

### Fan Zone (`/fanzone`)
- Fan registration system
- Referral program with unique links
- Top 100 referrers leaderboard
- Interactive polls and voting
- Social media feed integration

### Sponsorship Portal (`/sponsors`)
- Three-tier sponsorship packages
- Current partners showcase
- Partnership inquiry form
- ROI and benefits explanation

### Contact (`/contact`)
- General inquiry form
- Department-specific contacts
- State coordinators directory
- FAQ section

## 🎨 Design System

### Colors
- **Primary Green**: #008751 (Nigerian flag green)
- **Secondary**: White (#FFFFFF)
- **Accent**: Various shades of green for depth
- **Text**: Gray scale for hierarchy

### Typography
- **Headings**: Bold, impactful fonts
- **Body**: Clean, readable sans-serif
- **CTAs**: Prominent button styling

### Components
- Consistent card-based layouts
- Responsive grid systems
- Interactive hover states
- Loading and success states

## 🔧 Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Layout.tsx`

### Styling
- Modify `tailwind.config.ts` for theme changes
- Update `src/index.css` for global styles
- Use shadcn/ui components for consistency

### Data Integration
- Replace mock data with API calls
- Add state management (Redux/Zustand) if needed
- Implement backend integration

## 🌟 Future Enhancements

- [ ] Real-time match updates via WebSocket
- [ ] Payment gateway integration (PayStack)
- [ ] Email notification system
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@naija5fest.ng
- **Phone**: +234 800 NAIJA5F
- **Website**: https://naija5fest.ng

## 🏆 Acknowledgments

- Nigerian Football Federation (NFF)
- All participating state coordinators
- Grassroots football communities across Nigeria
- Tournament sponsors and partners

---

**Made with ❤️ for Nigerian Football** 🇳🇬

![Nigerian Flag](https://img.shields.io/badge/Made%20in-Nigeria-green?style=flat-square&labelColor=white)