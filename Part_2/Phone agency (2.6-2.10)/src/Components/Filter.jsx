const Filter = ({ filterName, setFilterName }) => {
    console.log('filterName:', filterName)
  return (
    <input
      value={filterName}
      onChange={(event) => setFilterName(event.target.value)}
    />
  )
}

export default Filter