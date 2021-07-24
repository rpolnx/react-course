import ExpenseItem from "./ExpenseItem";
import styles from "./Expenses.module.css";

function Expenses(props) {
  const { items } = props;
  return (
    <div className={styles.expenses}>
      {items.map((it) => (
        <ExpenseItem title={it.title} amount={it.amount} date={it.date} />
      ))}
    </div>
  );
}

export default Expenses;
