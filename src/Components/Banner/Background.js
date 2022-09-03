import { Particle } from './Particle';
import styles from './style.module.css';
import Logo from '../../Images/logo.svg';
import { Navbar } from '../Navbar/Navbar';

export const Background = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoNavWrapper}>
                <img src={Logo} alt="Logo" />
                <Navbar />
            </div>
            <Particle />
            <div className={styles.name}>
                Priyanshi Gupta <br /> Frontend Developer
            </div>
        </div>
    );
};
