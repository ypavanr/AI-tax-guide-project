import React, { useState } from 'react';



const Calculate = () => {
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [deduction, setDeduction] = useState('');

  const calculateTax = () => {
    alert('Hello Pavan Reddy implement me ');
    
  };

  return (
    <div style={styles.appWrapper}>
      <header style={styles.header}>
        <div style={styles.logo}>AI TAX GUIDE</div>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="#">Home</a>
          <a style={styles.navLink} href="#">Login</a>
          <a style={styles.navLink} href="#">About Us</a>
        </nav>
      </header>

      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Enter your Details</h2>
        <input
          type="number"
          placeholder="Annual Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Age Group"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />
     <select
  value={deduction}
  onChange={(e) => setDeduction(e.target.value)}
  style={styles.select}
>
<option value="" disabled>Deduction</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>

        <button onClick={'calculateTax'} style={styles.button}>
          CALCULATE TAX <FaCalculator style={{ marginLeft: '10px' }} />
        </button>
      </div>

      
      
    </div>
  );
};

const styles = {
  appWrapper: {
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to bottom, # #1f2c3e, #0d152b)',
    minHeight: '100%',
    height:'auto',
    color: 'white',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #fff3',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  },
  formWrapper: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#101d2e',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 0 20px #0005',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  input: {
    padding: '12px',
    borderRadius: '30px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
  },
  select: {
    padding: '12px',
    borderRadius: '30px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: '#5C5858',
    fontSize: '16px',
   
    outline: 'none',
  },
  button: {
    padding: '14px',
    borderRadius: '30px',
    border: '2px solid white',
    backgroundColor: '#2d6cdf',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatBot: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#2d6cdf',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    cursor: 'grab',
  },
  
};

export default Calculate;
