import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input term="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                </div>
            </form>
        )
    }
}

export default SearchBar