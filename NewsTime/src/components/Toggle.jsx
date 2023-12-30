import styles from "./Toggle.module.css";
function Toggle({ dark }) {
  return (
    <>
      <div className={styles.toggleSwitch}>
        <label className={styles.switchLabel}>
          <input type="checkbox" className={styles.checkboxs} onClick={dark} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </>
  );
}

export default Toggle;
