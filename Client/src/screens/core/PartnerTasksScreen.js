import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';

export default function PartnerTasksScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title_text}>Welcome to Partner Tasks</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#111111",
    },
    title_text: {
        marginTop: 250,
        color: '#fff',
        fontSize: 22,
        fontWeight: '400',
    },
});