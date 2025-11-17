import { Lock, MailOpen, MailOpenIcon } from "lucide-react";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.behindDeco}></div>
      <div className={styles.formBox}>
        <div className={styles.wrapper}>
          <div className={styles.formBoxHeader}>
            <h5>Hello!</h5>
            <p>Sign in to your account</p>
          </div>
          <div className={styles.formBoxBody}>
            <div className={styles.form}>
              <MailOpenIcon color="#06a3da" />
              <input type="text" placeholder="E-mail" />
            </div>
            <div className={styles.form}>
              <Lock color="#06a3da" />
              <input type="text" placeholder="Passsword" />
            </div>
            <div className={styles.forgotSection}>
              <div>
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div>
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className={styles.signInWrapper}>
              <button>SIGN IN</button>
            </div>
            <div>
              <div>Don't have an account? <a href="#">Create</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.wrapper}>
          <div className={styles.infoBoxHeader}>
            <h5>Welcome Back!</h5>
            <p>Lorem ipsum dolor sit amet, consectus adisury elit. Sed pharetra magma nist, at posure sem dapibus sed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}