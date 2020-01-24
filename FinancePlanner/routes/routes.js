// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import Profile from '../src/components/Profile/Profile';

// const MainNavigator = createStackNavigator({
//   Home: {screen: Profile},
//   Login: {screen: Login},
// });

// const AppNavigator = createAppContainer(MainNavigator);



import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../src/components/Login/Login'
import NumPad from '../src/components/Transfer/TransferCalc'
import Accounts from '../src/components/Transfer/TransferAccounts'
import Complete from '../src/components/Transfer/TransferComplete'
import Confirmation from '../src/components/Transfer/TransferConfirmation'
import Summary from '../src/components/Transfer/TransferSummary'
import TransferInitial from '../src/components/Transfer/TransferInitial';

const RootStack = createStackNavigator(
    {
        Login: Login,
        NumPad: NumPad,
        Accounts: Accounts,
        Complete: Complete,
        Confirmation: Confirmation,
        Summary: Summary,
        Initial: TransferInitial
    },
    {
        initialRouteName: 'Login',
    }
    );
    
    const AppContainer = createAppContainer(RootStack);
    export default AppContainer;