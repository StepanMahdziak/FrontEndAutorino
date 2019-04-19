import React, { Component } from 'react'
import { Button } from 'grommet';
import { FavoritesList } from '../Components/FavoritesList';
import { FavoritesContainer } from '../styles/Favorites';
import { RED } from '../../../styles/colors';

export default class Favorites extends Component {
  render() {
    return (
      <FavoritesContainer>
        <Button label="remove all" margin={{bottom: "3%", left: "45%", }} color={RED}/>
        <FavoritesList/>
      </FavoritesContainer>
    )
  }
}
