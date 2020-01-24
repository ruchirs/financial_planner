/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowAltCircleRight, faUniversity, faRetweet, faUserFriends, faTty, faTasks, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AppContainer from './routes/routes'

library.add(fab, faCheckSquare, faCoffee, faArrowAltCircleRight, faUniversity, faRetweet, faUserFriends, faTty, faTasks, faSearch, faEnvelope)

export default class App extends React.Component {
  render(){
  return <AppContainer />
}
};




