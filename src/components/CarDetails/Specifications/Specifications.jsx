import css from './Specifications.module.css';

export default function Specifications({ carDetails }) {
  return (
    <ul className={css.detailsList}>
      <li>Year: {carDetails.year}</li>
      <li>Type: {carDetails.type}</li>
      <li>Fuel Consumption: {carDetails.fuelConsumption}</li>
      <li>Engine Size: {carDetails.engineSize}</li>
    </ul>
  );
}
