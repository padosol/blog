# My Tech Blog

A modern, responsive tech blog built with Next.js 15, React 19, TypeScript, and TailwindCSS. Features MDX support for content creation, dark mode, and a clean, minimalist design.

## Features

- 📝 MDX-based blog posts with syntax highlighting
- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- 🔍 Category-based post organization
- 🖼️ Image optimization with Next.js Image
- ⚡ Fast page loads with Next.js App Router
- 🎯 SEO optimized
- 📊 Vercel Speed Insights integration

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** Radix UI
- **Content:** MDX
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd my-blog
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── content/          # Blog posts in MDX format
├── public/           # Static assets
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # React components
│   ├── lib/         # Utility functions
│   └── styles/      # Global styles
└── ...
```

## Writing Posts

1. Create a new `.mdx` file in the `content/posts` directory
2. Add frontmatter with title, description, date, and category
3. Write your content in MDX format

Example frontmatter:
```yaml
---
title: Your Post Title
desc: A brief description of your post
date: 2024-04-03
category: tech
thumbnail: /path/to/thumbnail.jpg
---
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.