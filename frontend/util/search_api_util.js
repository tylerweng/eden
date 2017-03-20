const SearchAPIUtil = {
  query: queryValue => (
    $.ajax({
      type: 'GET',
      url: `/api/search?q=${queryValue}`
    })
  )
};

export default SearchAPIUtil;
