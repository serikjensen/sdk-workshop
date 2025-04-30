import styles from "./Greeting.module.css";

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return (
    <div className={styles.container}>
      <p className={styles.greeting}>
        Hello, <span className={styles.highlight}>{name}</span>!
      </p>
    </div>
  );
}

export default Greeting;
