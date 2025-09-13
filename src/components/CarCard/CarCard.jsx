import css from './CarCard.module.css';

const Car = ({ car }) => {
  //   const dispatch = useDispatch();

  //   const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.car}>
      <img
        src={car.img || '/placeholder.jpg'}
        alt={car.name}
        className={css.image}
      />
      <div>1</div>
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
};

export default Car;
