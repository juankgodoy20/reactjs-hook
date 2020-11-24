import React , {Component} from 'react'

class Perros extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imagenes: []
        }
    }

    componentDidMount(){
        console.log('Inicio Componente...');
        fetch("https://dog.ceo/api/breed/hound/afghan/images")
        .then(res => res.json())
        .then(
            (result) => {
                const { message } = result;

                this.setState({
                    imagenes: message
                })
            },
            (error) => {
                console.log('Ha ocurrido un error')
            }
        )
    }

    

    render() {
        return (
            <header>
                <h1>Perros</h1>

                {
                    this.state.imagenes.map((perro)=>
                        <img src={perro} alt=""/>    
                    )
                }

                
                
            </header>
        )
    }

}

export default Perros;