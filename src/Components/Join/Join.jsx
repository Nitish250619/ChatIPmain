import React from "react";
import styles from "./Join.module.css";

const Join = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p className={styles.ipheading}>JOIN</p>
        <div className={styles.ipfield}>
         <div className={styles.inputfield}>
          <input className={styles.input}/>
         </div>
         <div className={styles.joinchatdiv}>
          <p className={styles.joinchat} >JOIN CHAT</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
