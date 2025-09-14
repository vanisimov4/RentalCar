import css from './CarImage.module.css';

export default function CarImage({ src, alt }) {
  return <img className={css.carImage} src={src} alt={alt} />;
}
