# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-07-11

### Added
- Created a root-level `README.md` providing clear instructions on project setup, installation, running locally, and folder structures.
- Added `CONTRIBUTING.md` with guidelines on how to report bugs, suggest enhancements, and construct pull requests.
- Added `LICENSE` (MIT) and `CODE_OF_CONDUCT.md` to establish community standards.

### Fixed
- Fixed critical runtime bug in `BuyActionWindow.js` where the context callback `closeBuyWindow()` was called directly on `GeneralContext` rather than consuming it with the `useContext` hook.
- Fixed mismatched API URLs inside dashboard components `Holdings.js` and `Positions.js` by shifting target port from `3001` (client) to `3002` (backend API).
- Added `await` to `newOrder.save()` in the backend server routes and wrapped all model-query endpoints in standard Express try-catch blocks to prevent server crashes on database errors.

### Cleaned
- Removed unused packages `passport`, `passport-local`, and `passport-local-mongoose` from `backend/package.json`.
- Removed commented-out database seeding scripts and endpoints from the main backend `index.js`.
- Cleaned up unused imports (such as `{ all }` from `axios`, unused components, and comments) in frontend sub-pages and dashboard controllers.
