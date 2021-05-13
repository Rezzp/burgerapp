import styles from './MenuCard.module.css';

const MenuCard = props => {

    return (

        <section className={styles.card}>
            {props.children}
        </section>
    );
};
export default MenuCard;