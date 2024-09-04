// Import necessary modules from Next.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Import CSS 

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Main heading of the home page */}
      <h1>Welcome to My Portfolio</h1>

      {/* Introduction paragraph */}
      <p>Hi, I'm Kaouther. I'm a React and Next.js Developer.</p>

      {/* Link to the projects page */}
      <Link href="/projects">Check out my projects</Link>

      
    </div>
  );
};

export default Home;
