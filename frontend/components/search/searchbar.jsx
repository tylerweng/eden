import React from 'react';
import Autocomplete from 'react-autocomplete';
import _ from 'lodash';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryValue: ''
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleRenderItem = this.handleRenderItem.bind(this);
    this.handleItemValue = this.handleItemValue.bind(this);
  }

  handleSelect() {

  }

  handleItemValue(item) {
    return item => {
      if (item.title) {
        return item.title;
      } else {
        return item.username;
      }
    };
  }

  handleRenderItem(item, isSelected) {
    const displayValue = (item.title ? item.title : item.username);
    const klass = (isSelected
                  ? 'query-result-item selected'
                  : 'query-result-item');
    const img = (item.title
                  ? <img src={item.img_url} className="search-img"></img>
                  : <div></div>);
    return (
      <div
        key={item.id}
        id={item.id}
        className={klass}>
        {img}
        {displayValue}
      </div>
    );
  }

  update(field) {
    return event => {
      this.setState({[field]: event.target.value});
      this.props.query(event.target.value);
    };
  }

  render() {
    const search = this.props.search;
    const users = (search.users && search.users.length
                    ? search.users
                    : {});
    const tracks = (search.tracks && search.tracks.length
                     ? search.tracks
                     : {})
    const queryResultsArray = _.values(users).concat(_.values(tracks));
    return (
      <div className='searchbar'>
        <Autocomplete
          ref='autocomplete'
          defaultValue='Create Station'
          value={this.state.queryValue}
          onChange={this.update('queryValue')}
          items={queryResultsArray}
          getItemValue={this.handleItemValue()}
          onSelect={this.handleSelect}
          renderItem={this.handleRenderItem} />
      </div>
    );
  }

}

export default Searchbar;
