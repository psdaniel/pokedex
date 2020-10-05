import React, { Component } from 'react';
import { Pagination } from '@material-ui/lab';

import api from '../../services/api';

import { Container, Header, CardContainer, Card } from './styles';

interface IProps {
  id?: string
}

interface IState {
  pokemons: Array<any>,
  page: Number,
  pokemonsCount: any,
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
      pokemonsCount: 20,
      page: 1
    };
  }

  async fetchPokemon() {
    const offset = Number(this.state.page) * 20 - 20;

    const response = await api.get(`pokemon?offset=${offset}&limit=20`);

    this.setState({
      pokemons: response.data.results
    });
  }

  async componentDidMount() {
    await this.fetchPokemon();
  }

  async handlePagination(event: any, value: any) {
    this.setState({ page: value });
    await this.fetchPokemon();
  }

  render() {
    const page = this.state.page;

    return (
      <>
        <Container>
          <Header>
            <h1>Pokedex</h1>
          </Header>
          <Pagination onChange={(e, value) => this.handlePagination(e, value)} page={Number(this.state.page)} count={this.state.pokemonsCount} color='primary' style={{ margin: '10px' }} />
          <CardContainer>
            {this.state.pokemons.map((pokemon, k) => (
              <Card key={k}>
                <div>
                  <img
                    alt='monster'
                    src={`https://pokeres.bastionbot.org/images/pokemon/${(20 * (Number(this.state.page) - 1)) + k + 1}` + ".png"}
                    width={100}
                  />
                  <h2>{this.state.pokemons[k].name}</h2>
                </div>
              </Card>
            ))}
          </CardContainer>
        </Container>
      </>
    );
  }
}
