import React from 'react';
import Autocomplete from 'react-autocomplete';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryValue: '',
      selectedTrackId: this.props.selectedTrackId
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleRenderItem = this.handleRenderItem.bind(this);
    this.handleItemValue = this.handleItemValue.bind(this);
  }


  handleSelect() {
  }

  handleItemValue(item) {
    if (item.title) {
      return item.title;
    } else {
      return item.username;
    }
  }

  handleRenderItem(item, isSelected) {
    const displayValue = (item.title
                         ? item.title
                         : `Artist: ${item.username}`);
    const klass = (isSelected
                  ? 'search-item selected'
                  : 'search-item');
    const img = (item.title
                  ? <img src={item.img_url} className="search-img"></img>
                  : <div></div>);
    const artist = (item.title
                  ? <div>{item.artist}</div>
                  : <div></div>);
    const path = (item.title ? 'tracks' : 'users');

    return (
      <Link
        to={`/${path}/${item.id}`}
        className={klass}>
        { img }
        <div className='search-text'>
          {displayValue}
          {artist}
        </div>
      </Link>
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
          getItemValue={this.handleItemValue}
          onSelect={this.handleSelect}
          renderItem={this.handleRenderItem} />
      </div>
    );
  }

}

export default Searchbar;
