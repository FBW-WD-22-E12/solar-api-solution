const FilteringComponent = ({ filterData }) => {
  const filteringButtons = [
    { name: "All", url: "" },
    { name: "Largest", url: "size?pick=largest" },
    { name: "Smallest", url: "size?pick=smallest" },
    { name: "Densest", url: "density?pick=highest" },
    { name: "Least dense", url: "density?pick=lowest" },
  ];
  return (
    <>
      {filteringButtons.map((el) => (
        <button
          onClick={(e) => filterData(e.target.name)}
          key={el.url}
          name={el.url}
        >
          {el.name}
        </button>
      ))}
    </>
  );
};

export default FilteringComponent;
