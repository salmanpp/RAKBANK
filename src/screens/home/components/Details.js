import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Fonts from '../../../theme/Fonts';

function Details(props) {
    const { Descp, OutDescp } = props
    return (
        <View style={styles.main}>
            <View style={styles.viewMain}>
                <View style={styles.viewTag}>
                    <Text style={styles.descpTag}>{Descp}</Text>
                </View>
                <View style={styles.viewTag2}>
                    <Text style={styles.outdescpTag}>{OutDescp}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: { height: 50, width: '100%', backgroundColor: '#F9F4F0', marginTop: 10, elevation: 1 },
    viewMain: { flex: 2, backgroundColor: '', flexDirection: 'row', },
    viewTag: { flex: 0.9, backgroundColor: '', justifyContent: 'center', alignItems: 'flex-start' },
    descpTag: { fontSize: 20, color: 'black', fontFamily: Fonts.medium },
    viewTag2: { flex: 1.1, backgroundColor: '', justifyContent: 'center', alignItems: 'flex-start' },
    outdescpTag: { fontSize: 20, color: 'black', fontFamily: Fonts.medium },
});
export { Details }