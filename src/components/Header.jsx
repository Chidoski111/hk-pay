const Header = () => {
    const headerStyle = {
        position: 'fixed',
        top: 0,
        background: '#3B82F6',
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
      };

      const logoStyle = {
        fontWeight: 'bold',
        fontSize: 'xl',
        color: '#fff',
      };
    
    return (
        <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={logoStyle}>CAMBODIA PAY</p>
        </div>
      </header>
    );
  };
  
  export default Header;
  