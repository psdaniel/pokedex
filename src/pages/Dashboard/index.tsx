import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Header, CardContainer, Card } from './styles';


interface IProps {
    id?: string
}
  
interface IState {
    pokemons: Array<any>,
    page: Number
}

interface IType {
    typeInfo: any;
    type: any;
}

export default class Dashboard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    
        this.state = {
          pokemons: [],
          page: 1
        };
    }

    componentDidMount() {
        api.get('pokemon').then((response) => {
            this.setState({ pokemons: response.data.results });
            console.log(this.state.pokemons)
        });
    }

    render() {
        const page = Number(this.state.page)
      return (
        <>
            <Container>
                    <Header>
                        <h1>Pokedex</h1>
                    </Header>
                    <CardContainer>
                        {this.state.pokemons.map((pokemon, k) => (
                        <Card>
                            <div>
                                <img
                                alt='monster'
                                src={`https://pokeres.bastionbot.org/images/pokemon/${20 * (page - 1) + k + 1}`+ ".png"}
                                width={100}
                                />
                                <h2>{pokemon.id} {pokemon.name}</h2>
                                <p>{pokemon.type}</p>
                            </div>
                        </Card>
                        ))}
                    </CardContainer>
            </Container>
        </>
      );  
    } 
}
