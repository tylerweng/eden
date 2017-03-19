import React from 'react';
import Autocomplete from 'react-autocomplete';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      queryResults = []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRenderItem = this.handleRenderItem.bind(this);
  }

  handleSubmit() {

  }

  handleSelect() {

  }

  handleRenderItem(item, isSelected) {
    const klass = isSelected
                  ? 'query-result-item selected'
                  : 'query-result-item';
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
    return event => this.setState({[field]: event.target.value});
  }

  // render() {
  //   return (
  //     <form
  //       onSubmit={this.handleSubmit}
  //       className='searchbar'>
  //       <input
  //         type='text'
  //         value={this.state.query}
  //         onChange={this.update('query')}
  //         className='searchbar searchbar-query' />
  //       <input type='submit' />
  //     </form>
  //   );
  // }

  render() {
    return (
      <div className='searchbar'>
        <Autocomplete
          ref='autocomplete'
          inputProps={ { title: 'title' } }
          value={this.state.query}
          onChange={this.update('query')}
          items={this.props.queryResults}
          getItemValue={(item) => item.title}
          onSelect={this.props.handleSelect}
          renderItem={this.handleRenderItem} />
      </div>
    );
  }

}

export default Searchbar;
