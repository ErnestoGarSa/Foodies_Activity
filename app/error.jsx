"use client";

const error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error ocurred!</h1>
      <p>Failed to fetch meal data. Please try again later!</p>
    </main>
  );
};

export default error;
