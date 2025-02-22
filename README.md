# Markdown To Medium Tool

A web application that converts Markdown to Medium-compatible formatted text. Built with Angular and Material Design.

## Features

- Live Markdown preview
- Medium-style formatting
- Copy formatted text to clipboard (supports HTML formatting)
- Responsive design for mobile and desktop
- Support for GitHub Flavored Markdown
- Support for extended list formatting

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm package manager

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/manthanank/ng-markdown-to-medium-tool.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:4200`

## Usage

1. Type or paste your Markdown content in the left editor panel
2. Preview the formatted text in the right panel
3. Click the copy button to copy the formatted text
4. Paste directly into Medium's editor

## Technology Stack

- Angular 19
- Angular Material
- RxJS
- Marked (for Markdown parsing)
- marked-more-lists (for extended list support)

## Development

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

## License

MIT License
