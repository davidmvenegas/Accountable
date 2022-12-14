import { useDispatch } from 'react-redux';
import { home } from '../../redux/actions/navigationAction';
import { onSignOut } from '../../database/auth/auth';
import { StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, Dimensions, View } from 'react-native';

export default function SettingsScreen({ navigation }) {
    const dispatch = useDispatch();

    function handleLogout() {
        onSignOut(dispatch);
        dispatch(home());
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrap}>
                    <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                        <Text style={styles.btn_text}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: deviceWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#111111",
    },
    wrap: {
        alignItems: 'center',
    },
    btn: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#4C3527',
        padding: 16,
        marginBottom: 28,
        borderRadius: 8,
    },
    btn_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },
});