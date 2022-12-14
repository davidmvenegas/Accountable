import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import NavigationComponent from './src/components/NavigationComponent';
import HeaderComponent from './src/components/HeaderComponent';

// Auth screens
import LandingScreen from './src/screens/auth/LandingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';

// Core screens
import HomeScreen from './src/screens/core/HomeScreen';
import YourTasksScreen from './src/screens/core/YourTasks/YourTasksScreen';
import AddTaskScreen from './src/screens/core/YourTasks/AddTaskScreen';
import TaskScreen from './src/screens/core/YourTasks/TaskScreen';
import PartnerTasksScreen from './src/screens/core/PartnerTasksScreen';
import PartnerScreen from './src/screens/core/PartnerScreen';

// System screens
import SettingsScreen from './src/screens/system/SettingsScreen';
import NotificationsScreen from './src/screens/system/NotificationsScreen';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

export default function Main() {
    const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
    
    const userData = useSelector((store) => store.user);
    console.log(userData)

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Tab.Navigator
                    initialRouteName={"HomeScreen"}
                    tabBar={props => <NavigationComponent {...props} />}
                    screenOptions={{
                        headerTitle: props => <HeaderComponent {...props} />
                    }}>
                    <Tab.Group>
                        <Tab.Screen name="HomeScreen" component={HomeScreen} />
                        <Tab.Screen name="YourTasksScreen" component={YourTasksScreen} />
                        <Tab.Screen name="AddTaskScreen" component={AddTaskScreen} />
                        <Tab.Screen name="TaskScreen" component={TaskScreen} />
                        <Tab.Screen name="PartnerTasksScreen" component={PartnerTasksScreen} />
                        <Tab.Screen name="PartnerScreen" component={PartnerScreen} />
                        <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
                        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
                    </Tab.Group>
                </Tab.Navigator>
            ) : (
                <AuthStack.Navigator>
                    <AuthStack.Group screenOptions={{ headerShown: false }} >
                        <AuthStack.Screen name="LandingScreen" component={LandingScreen} />
                        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
                        <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
                    </AuthStack.Group>
                </AuthStack.Navigator>
            )}
        </NavigationContainer>
    );
}