import React from 'react';
import './App.css';
import Calculator from './Calculator';
const Footer = () => (
	<footer className="footer">
		<p>©Calculator </p>

	</footer>
);

function App() {
  return (
    <>
    <div className="center-container">
      <Calculator />
    </div>
     <div>< Footer /></div>
     </>
  );
}

export default App;
