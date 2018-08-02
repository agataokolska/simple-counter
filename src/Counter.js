import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.number
    }

    addNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    subtractNumber = () =>{
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.addNumber}
                >
                ADD 1
                </button>
                <button
                    onClick={this.subtractNumber}
                >
                SUBTRACT 1
                </button>
                <button>
                    ADD 5
                </button>
                <button>
                    SUBTRACT 5
                </button>
            </div>
        )
    }
}

export default Counter