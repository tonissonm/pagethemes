import React from 'react';
import Header from './Header';
import { useTheme } from './ThemeContext';

const Page = () => {
  const { theme } = useTheme();
  console.log("Current theme:", theme);
  return (
    <div id="app" className={theme}>
      <Header />
      <article>
        <h2>React Course</h2>
        <p>A course that teaches you React</p>
      </article>
    </div>
  );
};

export default Page;