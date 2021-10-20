import nssLogo from './assets/_images/nssLogoTransparent.png'
import styles from './App.module.scss'


function App() {
  return (
    <div className="App">
      
      <div className={styles.navbar}>
        <h1>Sarcoidosis4TheArts.org</h1>
        <img src={nssLogo} alt="Logo" />
      </div>
    </div> 
  );
}

export default App;
