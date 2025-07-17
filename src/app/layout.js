import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: "Shanjeyan Vinayagamoorthy Portfolio Website",
  description: "Official portfolio of V. Shanjeyan - showcasing skills, projects, and more.",
  keywords: ["Shanjeyan", "Portfolio", "Software Engineer", "Web Developer", "Full Stack"],
  authors: [{ name: "Shanjeyan Vinayagamoorthy" }],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
