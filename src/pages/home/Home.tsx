import React from 'react';
import { BlogCard } from '../../components/BlogCard/BlogCard';

const Home = () => {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 300px))',
          maxWidth: '80vw',
          minWidth: '0vh',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
