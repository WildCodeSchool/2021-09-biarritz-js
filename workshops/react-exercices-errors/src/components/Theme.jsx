const Theme = ({ image, name }) => {
  return <img src={image} alt={name} className={styles.theme} />;
};

export default Theme;
