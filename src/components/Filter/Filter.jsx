import css from './filter.module.css'

const Filter = ({ setFilter }) => {

  const filterContacts = event => {
    setFilter(event.target.value)
  };
  return (
  <div className={css.filterWrapper}>
    <input className={css.inputFilter} type="text"
      name="filter"
      placeholder="Find contacts"
      onChange={filterContacts}
    />
  </div>  
  );
};

export default Filter;
