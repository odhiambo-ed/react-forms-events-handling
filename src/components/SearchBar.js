import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };
    
    handleSubmitChange = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitChange} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                </div>
            </form>
        )
    }
}

export default SearchBar