import css from './FilterSelect.module.css';

export default function Filters() {
  //   const handleChange = e => {
  //     // setSelected(e.target.value);
  //   };

  return (
    <div className={css.wrapper}>
      <label htmlFor="dropdown">Car brand</label>
      <select
        id="dropdown"
        //   value={selected} onChange={handleChange}
      >
        <option value="">Choose a brand</option>
        {/* {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))} */}
      </select>

      {/* {selected && (
        <span>
          {' '}
          Вибрано: {options.find(o => o.id === parseInt(selected))?.name}
        </span>
      )} */}
    </div>
  );
}
