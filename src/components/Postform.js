import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class Postform extends Component {

    state = {
        title: '',
        body: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        const postData = {
            title: this.state.title,
            body: this.state.body
        }
        //Call action
        this.props.createPost(postData)
    }

    render() {
        return (
        <div>
            <h1>Add Post</h1>   
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title</label>
                    <br/>
                    <input type="text" name='title' value={this.state.title} onChange={this.onChange} />
                </div>
                <br/>
                <div>
                    <label>Body</label>
                    <br/>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.body} onChange={this.onChange} ></textarea>
                </div>
                <br/>
                <button type='submit'>Submit</button>
            </form>    
        </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform)