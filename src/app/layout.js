export const metadata = {
  title: "Shanjeyan Vinayagamoorthy Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Official portfolio of V. Shanjeyan - showcasing skills, projects, and more."
        />
        <meta
          name="keywords"
          content="Shanjeyan, Portfolio, Software Engineer, Web Developer, Full Stack Developer, React, Next.js"
        />
        <meta name="author" content="Shanjeyan Vinayagamoorthy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
