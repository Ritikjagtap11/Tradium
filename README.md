# Tradium

> **A Full-Stack MERN Stock Trading & Investment Platform.**

**Tradium** is a modern full-stack MERN stock trading and investment platform inspired by leading online brokerage applications. It features a responsive marketing website, an interactive trading dashboard, portfolio and holdings management, watchlists, order placement, and data visualization using Chart.js, all powered by a secure Node.js, Express, and MongoDB backend.

---

## Features

- **Public Marketing Website**: A highly clean, responsive landing page detailing company products, awards, pricing structures, support ticket forms, and user signup options.
- **Interactive Watchlist**: Real-time mock tracking of stock price updates, complete with buy/sell actions, hover options, and dynamic stock search filters.
- **Holdings Management**: Comprehensive portfolio investment view displaying live stock quantities, average cost, current value, total profit/loss margins, and day changes.
- **Dynamic Data Visualization**: Integrated Chart.js doughnut and bar charts representing price ratios and holdings value trends.
- **Orders Pipeline**: Modern transaction endpoint supporting instant purchase orders, saved securely to MongoDB.
- **Responsive Layout**: Designed with modular CSS stylesheets and unified layouts for maximum aesthetic value across devices.

---

## Tech Stack

* **Languages**: JavaScript (ES6+), HTML5, CSS3
* **Frontend UI**: React.js (v18 & v19)
* **Dashboard Componentry**: React Router DOM (v6 & v7), Material UI (@mui/material, @mui/icons-material), Emotion
* **Data Visualization**: Chart.js, React-Chartjs-2
* **Backend API**: Node.js, Express.js
* **Database & ORM**: MongoDB Atlas, Mongoose
* **HTTP Client**: Axios
* **Dev Tooling**: Nodemon, Git

---

## Project Structure

```text
Tradium/
├── backend/                  # Node.js/Express backend server
│   ├── model/                # Mongoose Models (Holdings, Orders, Positions)
│   ├── schemas/              # Mongoose Schemas definitions
│   ├── .env.example          # Sample environment variables file
│   ├── index.js              # Server entry point and REST API routes
│   └── package.json          # Backend dependencies
├── dashboard/                # React application for the trading dashboard
│   ├── public/               # Public assets (icons, HTML templates)
│   ├── src/
│   │   ├── components/       # Dashboard components (Holdings, Positions, WatchList, etc.)
│   │   ├── data/             # Mock financial datasets
│   │   ├── index.css         # Styling system for trading UI
│   │   ├── index.js          # React entry point
│   │   └── package.json      # Dashboard dependencies
├── frontend/                 # React application for the public landing website
│   ├── public/               # Public assets, icons, and media images
│   ├── src/
│   │   ├── landing_page/     # Multi-page website routing sections (Home, About, Support)
│   │   ├── test/             # React testing scripts
│   │   ├── index.css         # Styling rules for marketing website
│   │   ├── index.js          # React entry point
│   │   └── package.json      # Marketing frontend dependencies
├── .gitignore                # Root gitignore file
├── CHANGELOG.md              # Project history logs
├── CODE_OF_CONDUCT.md        # Contributor code guidelines
├── CONTRIBUTING.md           # Contribution instructions
├── LICENSE                   # Software license (MIT)
└── README.md                 # Project documentation (this file)
```

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ritikjagtap11/tradium.git
   cd tradium
   ```

2. **Install dependencies** for each project segment:
   ```bash
   # Install Backend dependencies
   cd backend
   npm install

   # Install Dashboard dependencies
   cd ../dashboard
   npm install

   # Install Frontend dependencies
   cd ../frontend
   npm install
   ```

---

## Running Locally

To run the full stack locally, launch the backend server and frontend applications simultaneously:

1. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```
   *The server will run by default on port `3002`.*

2. **Start the dashboard interface**:
   ```bash
   cd dashboard
   npm start
   ```
   *The dashboard web application runs on port `3001`.*

3. **Start the marketing frontend**:
   ```bash
   cd frontend
   npm start
   ```
   *The public landing page website runs on port `3000`.*

---

## Build

To compile production bundles for deployment:

```bash
# Build dashboard React application
cd dashboard
npm run build

# Build frontend marketing application
cd ../frontend
npm run build
```

---

## Environment Variables

The backend relies on the following environment configurations. Create a `.env` file in the `backend/` directory referencing these values:

- `MONGO_URL`: The MongoDB Atlas connection string (or local MongoDB URL) for storage operations.
- `PORT`: (Optional) The port number where the backend server will run. Defaults to `3002`.

See `backend/.env.example` for details.

---

## Screenshots

*(Place screenshots showcasing key interfaces here)*
- **Landing Page Page**: `![Landing Page UI](screenshots/landing_page.png)`
- **Dashboard Interface**: `![Dashboard Portfolio UI](screenshots/dashboard.png)`
- **Interactive Watchlist**: `![Watchlist UI](screenshots/watchlist.png)`

---

## Future Improvements

- **Interactive Order Execution**: Connect the `/newOrder` POST pipeline to update user holdings and position totals in real-time.
- **Live WebSocket Data**: Replace static stock arrays with a live WebSocket feed to stream actual market indices and prices.
- **Secure Authentication**: Integrate standard JWT or Session-based authentication patterns for user sign-ups and logins.
- **Dark Mode**: Add support for standard dark and light toggles in the dashboard styling configuration.

---

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to the repository.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

- **Ritik Jagtap**
- **Portfolio**: https://portfolio-f10t.onrender.com/
- **LinkedIn**: https://linkedin.com/in/ritik-jagtap11
- **GitHub**: https://github.com/RitikJagtap11
- **Email**: jagtapritik8@gmail.com


