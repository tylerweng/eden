import React from 'react';
import Autocomplete from 'react-autocomplete';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryValue: '',
      queryResults: []
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleRenderItem = this.handleRenderItem.bind(this);
  }

  handleSelect() {

  }

  handleRenderItem(item, isSelected) {
    const klass = (isSelected
                  ? 'query-result-item selected'
                  : 'query-result-item');
    return (
      <div
        key={item.id}
        id={item.id}
        className={klass}>
        {item.title}
      </div>
    );
  }

  update(field) {
    return event => {
      this.setState({[field]: event.target.value});
      // debugger;
      return this.props.query(event.target.value);
    };
  }

  render() {
    return (
      <div className='searchbar'>
        <Autocomplete
          ref='autocomplete'
          defaultValue='Create Station'
          inputProps={ { title: 'title' } }
          value={this.state.queryValue}
          onChange={this.update('queryValue')}
          items={this.state.queryResults}
          getItemValue={(item) => item.title}
          onSelect={this.handleSelect}
          renderItem={this.handleRenderItem} />
      </div>
    );
  }

}

export default Searchbar;
