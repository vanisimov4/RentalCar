import css from './DetailsList.module.css';
export default function DetailsList({ features }) {
  return (
    <ul className={css.detailsList}>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  );
}
