import './globals.css';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Kaouther. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
