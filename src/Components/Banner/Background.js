import { Particle } from './Particle';
import styles from './style.module.css';
import Logo from '../../Images/logo.svg';

export const Background = () => {
    return (
        <div className={styles.container}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <Particle />
            <div className={styles.name}>
                Priyanshi Gupta <br /> Frontend Developer
            </div>
        </div>
    );
};
