import css from './FilterSelect.module.css';

export default function Filters({ brands, label, option }) {
  //   const handleChange = e => {
  //     // setSelected(e.target.value);
  //   };

  return (
    <div className={css.wrapper}>
      <label htmlFor="dropdown">{label}</label>
      <select
        id="dropdown"
        //   value={selected} onChange={handleChange}
      >
        <option value="">{option}</option>
        {(brands || []).map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
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
