const SearchAPIUtil = {
  query: queryValue => (
    $.ajax({
      type: 'GET',
      url: 'api/tracks',
      data: { title: queryValue }
    })
  )
};

export default SearchAPIUtil;
