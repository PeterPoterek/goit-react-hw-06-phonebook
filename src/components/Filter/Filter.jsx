import { FilterContainer, FilterLabel, FilterInput } from './FilterStyles';

const Filter = () => {
  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput id="filter" type="filter" />
    </FilterContainer>
  );
};

export default Filter;
