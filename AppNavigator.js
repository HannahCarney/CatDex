import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './views/Home';
import AddCats from './views/AddCats';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  AddCats: {screen: AddCats},
});

const App = createAppContainer(MainNavigator);

export default App;