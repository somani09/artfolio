import React from 'react'
import styles from './community.module.scss'
const CommunityContainer = () => {
  return (
    <div className={styles.communityContainer}>
        <div className={styles.jtc}>
            <div className={styles.jtcInfo}>
                <div className={styles.jtcInfoHeader}>Join The Community</div>
                <div className={styles.jtcInfoText}>
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                </div>
            </div>
            <div className={styles.jtcImage}>some random image</div>
        </div>

        <div className={styles.uta}>
            <div className={styles.utaImage}>some random image</div>
            <div className={styles.utaInfo}>
                <div className={styles.utaInfoHeader}>Unleash The Artist</div>
                <div className={styles.utaInfoText}>
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                    Exercitation minim et ipsum nostrud occaecat elit. Dolor eu deserunt labore culpa eiusmod eu magna dolore laborum eu. Eiusmod ex ex dolor Lorem ad nisi eiusmod deserunt culpa cupidatat dolor commodo do eu.
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityContainer