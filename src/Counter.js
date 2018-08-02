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
    subtractNumber = () => {
        this.setState({
            number: this.state.number - 1
        })
    }
    addNumberFive = () => {
        this.setState({
            number: this.state.number + 5
        })
    }
    subtractNumberFive = () => {
        this.setState({
            number: this.state.number - 5
        })
    }
    resetCounter = () => {
        this.setState({
            number: this.state.number = 0
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
                <button
                    onClick={this.addNumberFive}
                >
                    ADD 5
                </button>
                <button
                    onClick={this.subtractNumberFive}
                >
                    SUBTRACT 5
                </button>
                <button
                    onClick={this.resetCounter}
                >
                    RESET COUNTER 
                </button>
            </div>
        )
    }
}

export default Counter