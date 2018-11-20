import React, { Component } from 'react'

export default class Postform extends Component {

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
