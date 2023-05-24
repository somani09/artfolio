import React from 'react'
import styles from './community.module.scss'
const CommunityContainer = () => {
  return (
    <div className={styles.communityContainer}>
        <div className={styles.jtc}>
            <div  className={`${styles.info} ${styles.jtcElement}`}>
                <div  className={styles.infoHeader}>Join The Community</div>
                <div  className={styles.infoText}>
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                </div>
            </div>
            <div className={`${styles.jtcImage} ${styles.jtcElement}`}>some random image</div>
        </div>

        <div className={styles.uta}>
            <div className={styles.utaImage}>some random image</div>
            <div className={styles.info}>
                <div className={styles.infoHeader}>Unleash The Artist</div>
                <div className={styles.infoText}>
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityContainer