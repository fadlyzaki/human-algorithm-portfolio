# Fadlyzaki Portfolio 🧢

A cyberpunk-themed portfolio showcasing product design and engineering work, built with React and featuring experimental AI-powered hand tracking interactions.

## 🎮 Features

### 🏴‍☠️ Treasure Hunt Game
Activate hand tracking mode to discover **8 hidden treasures** scattered across the portfolio using AI-powered gesture recognition.

- **Hand Tracking**: MediaPipe-based gesture control (point with index finger)
- **Random Positions**: Treasure locations randomize on activation and reset
- **Progress Tracking**: Real-time counter and collection system
- **Achievement System**: Trophy modal when all 8 treasures are discovered
- **Manual Reset**: "Reset Hunt" button to re-randomize and start fresh
- **Privacy First**: All video processing happens locally in your browser

**Treasure Types:**
| Type | Icon | Color |
|------|------|-------|
| 💎 Gem | Diamond | Purple |
| 🪙 Coins | Circle Stack | Gold |
| 👑 Crown | Crown | Yellow |
| ⚓ Relic | Anchor | Teal |

**How to Play:**
1. Click the ScanEye 👁️ icon in navigation
2. Grant camera permission
3. Move your hand to discover glowing orbs
4. Collect all 8 to unlock the achievement!
5. Click "Reset Hunt" to re-randomize and play again

### 🤖 Side Project AI Visuals
Dynamic, generative AI interactions integrated into side project indices and detail pages:
- **NexusAI**: A generative particle field representing "Synthesis" and "Ideation."
- **Thematic Mapping**: Unique AI visuals (`NexusAI`, `WorkforceAI`, `EfficiencyAI`, `CommerceAI`) assigned to projects based on their functional theme.
- **Brand Inversion**: Visuals automatically adapt to project-specific brand colors.

### 📜 Running Ticker
Interactive status ticker at the top of the homepage with clickable links:
- 📍 **Location**: Jakarta, Indonesia
- 📖 **Reading**: "Daring Greatly" → [Goodreads](https://www.goodreads.com/fadlyzaki)
- 🎧 **Listening**: "Let's get things done — together" → [YouTube Music](https://music.youtube.com/watch?v=S02l82H9yks)
- 🏃 **Training**: Running 5K & Swimming 1K Weekly → [Strava](https://www.strava.com/athletes/129304799)
- ✍️ **Reflecting**: Reflecting on Life Weekly → [Substack](https://substack.com/@fadlyzaki)
- 🟢 **Status**: Open to Collaboration

### 🪪 Interactive ID Card
Draggable identity card with:
- Realistic smart chip design
- Holographic sheen effect on hover
- Flip animation to reveal other photos
- Custom ID number: 1407-1995

### 📡 Profile Identity Scan
Interactive "About Me" hero component (`ProfileScanner`) featuring:
- **Cinematic Reveal**: "Blur-to-Clear" cleaning animation on page load.
- **3D Tilt Physics**: Card responds to mouse movement with parallax depth.
- **HUD Overlay**: Technical data readout and scanning beam effects.

### 📌 Sticky Notes
Dual motivational sticky notes in the hero section:
- 💙 "Antidote to digital fatigue."
- 🧡 "Built for humans at their limit."

### 🧠 AI Brainstorm Dialogue
Interactive "If I built this today..." section visualized as Human + AI collaboration:
- **Chat Interface**: Visual conversation between you and an AI collaborator
- **Typing Animation**: AI "thinks" before suggesting alternatives
- **3 AI Solutions**: Each case study offers multiple AI-powered approaches
- **Glowing Solution Card**: Highlighted output with impact metrics
- **Explore Ideas**: Cycle through alternatives with smooth transitions

### Core Portfolio Features
- **Responsive Design**: Optimized for desktop and mobile
- **Dark/Light Theme**: Toggle between themes
- **Bilingual Support**: English and Indonesian
- **Interactive Projects**: Featuring case studies from Gojek, PayPal, and more
- **Semantic SEO**: Optimized meta tags and structure
- **Performance**: Lazy loading and code splitting

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **AI/ML**: MediaPipe Hands (hand tracking)
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/fadlyzaki/human-algorithm-portfolio.git
cd human-algorithm-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Treasure.jsx            # Treasure hunt collectible
│   ├── TreasureProgress.jsx    # Progress counter + reset button
│   ├── TreasureCongrats.jsx    # Completion modal
│   ├── HandCursorOverlay.jsx   # Hand tracking engine
│   ├── DraggablePhoto.jsx      # Interactive ID card
│   ├── ProfileScanner.jsx      # Identity scan hero
│   └── ...
├── context/            # React Context providers
│   ├── HandCursorContext.jsx   # Hand tracking state
│   ├── ThemeContext.jsx        # Theme management
│   └── LanguageContext.jsx     # i18n
├── pages/              # Route pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── ...
├── data/               # Portfolio content
│   ├── portfolioData.js
│   └── translations.js
└── App.jsx             # Main app component
```

## 🎯 Treasure Locations

Find all 8 hidden treasures:
- 🏠 **Home** (2 treasures): Hero section (gem), Work section
- 👤 **About** (1 treasure): Photo area (coins)
- 📁 **Side Projects** (2 treasures): Index page (gem), Detail page (coins)
- 💼 **Company Detail** (1 treasure): Hero area (crown)
- 📬 **Contact** (1 treasure): Network matrix (anchor/relic)

## 🔧 Configuration

### Environment Variables
Create `.env` file in root:
```env
VITE_GA_MEASUREMENT_ID=your_ga_id
```

### Hand Tracker Settings
Edit `src/components/HandCursorOverlay.jsx`:
```javascript
modelComplexity: 0,  // 0=Lite, 1=Full (faster vs more accurate)
minDetectionConfidence: 0.5,
minTrackingConfidence: 0.5,
```

## 🌐 Deployment

Deployed on Vercel with automatic deployments from `main` branch.

```bash
# Build command
npm run build

# Output directory
dist
```

## 📄 License

© 2024-2025 Fadly Zaki. All rights reserved.

## 🤝 Contact

- Portfolio: [fadlyzaki.com](https://fadlyzaki.com)
- Email: fadly.zaki96@gmail.com
- LinkedIn: [fadlyzaki](https://linkedin.com/in/fadlyzaki)

---

**Note**: Hand tracking requires camera access and works best in good lighting conditions. Supported on modern browsers (Chrome, Edge, Firefox). Safari support is limited.

<!-- Deployed: 2026-02-03 Standardized Human Algorithm Card & Integrated Habits -->
