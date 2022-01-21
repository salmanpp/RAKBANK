import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Fonts from '../../theme/Fonts';
import { Details } from './components/Details'

export default function index() {
    return (
        <View style={styles.main}>
            <View style={styles.profiles}>
                <Text style={styles.profileText}>Profile</Text>
            </View>
            <View style={styles.infoTag}>
                <View style={styles.infoTag1}>
                    <View style={styles.imageTag}>
                        <Image
                            source={require('../../assets/images/man.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                </View>
                <View style={{ flex: 1.6, backgroundColor: '' }}>
                    <Details
                        Descp={'Name'}
                        OutDescp={'Ajith'}
                    />
                    <Details
                        Descp={'Email'}
                        OutDescp={'Ajith7274@gmail.com'}
                    />
                    <Details
                        Descp={'Mobile No'}
                        OutDescp={'0509634295'}
                    />
                    <Details
                        Descp={'Place'}
                        OutDescp={'Al Ain'}
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: '#F9F4F0' },
    profiles: { height: 50, width: '100%', backgroundColor: '#EC2235', justifyContent: 'center', alignItems: 'center' },
    profileText: { fontFamily: Fonts.bold, fontSize: 30, color: 'white' },
    infoTag: { flex: 2, backgroundColor: '', },
    infoTag1: { flex: 0.4, backgroundColor: '', justifyContent: 'center', alignItems: 'center' },
    imageTag: { height: 120, width: 120, borderRadius: 60, backgroundColor: 'lightgray', elevation: 5, borderWidth: 0.8, borderColor: 'red', shadowColor: 'red' },
    imageStyle: { height: 120, width: 120, resizeMode: 'contain' }
});