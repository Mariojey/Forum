import React from "react"

/*
export default function Main() {
    return(
        <div className="Main">
            <form action="" className="main--form">
                <div className="form--name">
                    <input type="text" name="name" id="name" placeholder="Enter your name: "/>
                </div>
                <div className="form--text">
                    <input type="text" name="text" id="text" placeholder="Write your text..."/>
                </div>
            </form>
        </div>
    )
}
*/

class Texarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Write your text here...'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Add your text' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="main--form">
                <label>
                    Post:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Send" />
            </form>
        );
    }
}
export default Texarea;