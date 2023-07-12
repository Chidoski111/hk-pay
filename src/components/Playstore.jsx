const Playstore = () => {
    const buttonStyle = {
      backgroundColor: '#7B3DF4',
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '12px',
      padding: '20px 140px',
      borderRadius: '9px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      transition: 'all 150ms ease-linear',
      textDecoration: 'none', // Added text decoration for the link
      display: 'inline-block', // Added display inline-block to make the button inline
      marginbottom: "10px",
    };
  
    return (
      <a href="https://play.google.com/store/search?q=tokenpocket&c=apps" style={buttonStyle}>
       DOWNLOAD CAMBODIA PAY
      </a>
    );
  };
  
  export default Playstore;
  