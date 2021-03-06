import nssLogo from './assets/_images/nssLogoTransparent.png'
import sampleImage from './assets/_images/2313_The_Lung_Pleurea.jpg'
import styles from './App.module.scss'
import '@fortawesome/fontawesome-free/js/all'
//import '@fortawesome/fontawesome-pro/js/all'

// <h3><i className="fad fa-hands-usd"></i> Give</h3>
// <h3><i class="fad fa-inbox-in"></i> Contact Us</h3>

function App() {
  return (
    <div className="App">
      
      <header className={styles.navbar}>
        <div className={styles['left-nav']}>
          <img src={nssLogo} alt="Logo" />
          <h1>Sarcoidosis4TheArts.org</h1>
        </div>
        <div className={styles['right-nav']}>
          <h3><i class="fas fa-inbox"></i> Contact Us</h3>
          <h3><i class="fas fa-hand-holding-usd"></i> Give</h3>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.whatis}>
          <div className={styles['whatis-section']}>
              <h2 className={styles['whatis-header']}>What is Sarcoidosis?</h2>
              <div className={styles['whatis-text']}>
                <p>
                  The May Clinic (2018) says "Sarcoidosis is the growth of tiny collections of inflammatory cells (granulomas)
                  in different parts of your body - most commonly the lungs, lymph nodes, eyes and skin.
                </p>
                <p>
                  Doctors believe sarcoidosis results from the body's immune system responding to an unknown substance, most likely
                  something inhaled from the air.
                </p>
                <p>
                  There is no cure for sarcoidosis, but most people do very well with little or only modest treatment.  In half of
                  cases, sarcoidosis goes away on its own.  In a few cases, however, sarcoidosis may last for years and may cause
                  damage.
                </p>
              </div>
            </div>
            <img src={sampleImage} alt="sample" />
        </div>
        <div className={styles.whatis}>
          <div className={styles['whatis-section']}>
            <h2 className={styles['whatis-header']}>National Sarcoidosis Foundation (NSF)</h2>
            <div className={styles['whatis-text']}>
              <p>
                The National Sarcoidosis Foundation makes referrals to doctors, social service
                providers, pharmacist, psychiatrist and or psychologist for health and mental
                assessment and other essential services they may need to sustain themselves.
              </p>
              <p>
                In 2017, NSF had a client who needed assistance with locating a medical internist
                to assess his condition. The referral was made, the appointment with the physician
                was scheduled, transportation to and from the clinic was arranged and an NSF representative
                was confirmed to meet the client at the doctor's office.
              </p>
              <p>
                The NSF representative met the client at the doctor's office and stayed with him
                throughout the appointment. NSF then assisted the client to their awaiting ride home.
                This occurrence is documented in the 2017 NSF daily activity log.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles['footer-content']}>
          Created by GW
        </div>
      </footer>
    </div> 
  );
}

export default App;
