import css from './CarImage.module.css';
export default function CarImage({ src, alt }) {
  return (
    // <div className={css.recipeImageContainer}>
    <img className={css.carImage} src={src} alt={alt} />
    // </div>
  );
}
