import React, {Component} from 'react'

class BotonContador extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={this.props.aumentar}>Aumentar</button>
        )
    }
}

export default BotonContador;