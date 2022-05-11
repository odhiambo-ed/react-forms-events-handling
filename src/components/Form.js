import React from 'react'

class Form extends React.Component {
    state = { type: '' }
    
    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className='ui container'>
                <div className="ui segment">
                    <div className="ui form" onsSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Image Search</label>
                            <input
                                type="text"
                                value={this.state.type}
                                onChange={(e) => this.setValue(e.target.value)}
                            />
                            <p>You've typed!!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form