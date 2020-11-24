import React, {Component} from 'react'
import BotonContador from './BotonContador'

class Cuerpo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
    }

    aumentar = () => {
        const contador = this.state.contador + 1;
        
        this.setState(
            {
               contador
            }
        )
    }

    render() {
        return(
            <section>
                <h2>Contador: {this.state.contador}</h2>
                <BotonContador aumentar={this.aumentar} />
            </section>
        );
    }
}

export default Cuerpo;