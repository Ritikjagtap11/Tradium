# Contributing to Tradium

Thank you for your interest in contributing to Tradium! We welcome community contributions to help improve this open-source project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs
If you find a bug in the source code or an issue with the application, you can help us by submitting an issue to our GitHub repository. When submitting a bug report, please include:
- A clear, descriptive title.
- Step-by-step instructions to reproduce the issue.
- Details about your environment (OS, browser, Node version).
- Screenshots or code snippets showing the unexpected behavior.

### Suggesting Enhancements
We welcome feature requests and design improvements. To suggest a new feature:
- Search the issue tracker to ensure it hasn't been proposed already.
- Open an issue describing the feature, why it is needed, and how it should work.

### Pull Requests
Ready to submit code? Please follow this process:
1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Write clean, commented code following established design patterns.
3. Ensure there are no unused imports, console logs, or debugging placeholders.
4. Run testing scripts locally to ensure no functionality is broken:
   ```bash
   # Run tests inside the frontend/ workspace
   npm run test
   ```
5. Commit your changes with clear, descriptive commit messages (see [README.md](README.md) or git guidelines).
6. Push to your fork and submit a Pull Request to the `main` branch.
