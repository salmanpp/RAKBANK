import { View, Text, TouchableOpacity, Modal, TextInput, Keyboard, ToastAndroid, Animated } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../theme/Fonts';
import LottieView from 'lottie-react-native';

export default function index(props) {
    const [ModalStatus, setModalStatus] = useState(false)
    const [text, onChangeText] = React.useState("");
    const [secondText, setsecondText] = useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [emailID, setemailID] = useState('ajith123');
    const [passwordCheck, setpasswordCheck] = useState('123@123');

    const [activity, setActivity] = useState('LoginButton')

    const animated = new Animated.Value(0);
    const duration = 5000;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animated, {
                    toValue: 40,
                    duration: duration,
                    useNativeDriver: true,
                }),
                Animated.timing(animated, {
                    toValue: 0,
                    duration: duration,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, []);

    const LoginCheck = () => {
        console.log("mail", emailID);
        console.log("pass", passwordCheck);
        console.log("gotmail", text);
        console.log("gotpass", number);
        if (emailID == text && passwordCheck == secondText) {
            setModalStatus(false)
            props.navigation.navigate('home')
            ToastAndroid.showWithGravity(
                "Successfully logged in",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
            setActivity('LoginButton')
            onChangeText("");
            setsecondText("");
        }
        else {
            setModalStatus(false)
            onChangeText("");
            setsecondText("");
            ToastAndroid.showWithGravity(
                "Incorrect ID or Password...try again",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
            setActivity('LoginButton')
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F9F4F0' }}>
            {/* <Animated.View style={[{ transform: [{ translateX: animated }] }]}>
                <View style={{ backgroundColor: 'red', height: 10, width: 100 }}></View>
            </Animated.View> */}
            <View style={{ flex: 0.93, backgroundColor: '' }}>
                <View style={{ height: 800, width: 800, backgroundColor: '#C2024A', borderRadius: 400, position: 'absolute', top: -390, bottom: 0, left: -220, right: 150 }}>
                    <View style={{ height: 900, width: 900, backgroundColor: '#E40D4B', borderRadius: 450, position: 'absolute', top: -150, bottom: 0, left: -120, right: 100 }}>
                        <Animated.View style={[{ transform: [{ translateX: animated }] }]}>
                            <View style={{ height: 1200, width: 1200, backgroundColor: '#EE2039', borderRadius: 600, position: 'absolute', top: -320, bottom: 0, left: -230, right: 100 }}>
                            </View>
                        </Animated.View>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, marginRight: 15 }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{ height: 40, width: 100, backgroundColor: '#F03356', borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderColor: 'white', elevation: 5, borderColor: 'white', borderWidth: 0.5 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: Fonts.bold }}>Register</Text>
                    </TouchableOpacity>
                </View>
                {ModalStatus == false && <View style={{ height: 200, width: 250, backgroundColor: '', marginLeft: 10, marginTop: 30 }}>
                    <Text style={{ fontSize: 40, color: 'white', fontFamily: Fonts.bold }}>RAKBANK</Text>
                    <Text style={{ fontSize: 20, marginTop: 10, color: 'white', fontFamily: Fonts.medium }}>Everything you love about Digital Banking in a smarter,smarter simple design</Text>
                </View>}
                {ModalStatus == false && <View style={{ alignItems: 'center', marginTop: 280 }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            setModalStatus(true)
                        }}
                        style={{ height: 55, width: "80%", backgroundColor: '#3A383C', borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                        <Text style={{ color: 'white', fontFamily: Fonts.medium }}>Login With User ID</Text>
                    </TouchableOpacity>
                </View>}
                {ModalStatus == false && <View style={{ alignItems: 'center', marginTop: 8 }}>
                    <View style={{ height: 50, width: 170, backgroundColor: '' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.3, backgroundColor: '', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Ionicons
                                    name={'ios-finger-print-sharp'} size={30} color={'black'}
                                />
                            </View>
                            <View style={{ flex: 0.7, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: Fonts.medium }}>Quik Balance</Text>

                            </View>
                        </View>
                    </View>
                </View>}
            </View>
            <View style={{ flex: 0.07, backgroundColor: 'green', borderTopWidth: 0.5, borderColor: 'gray' }}>
                <View style={{ flex: 4, backgroundColor: 'blue', flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo
                            name={'wallet'} size={20} color={'black'}
                        />
                        <Text style={{ color: 'black', fontFamily: Fonts.light }}>Products</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons
                            name={'chatbubble-ellipses-outline'} size={20} color={'black'}
                        />
                        <Text style={{ color: 'black', fontFamily: Fonts.light }}>Live Chat</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons
                            name={'file-key-outline'} size={20} color={'black'}
                        />
                        <Text style={{ color: 'black', fontFamily: Fonts.light }}>RAK Token</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo
                            name={'location'} size={20} color={'black'}
                        />
                        <Text style={{ color: 'black', fontFamily: Fonts.light }}>Locate us</Text>
                    </View>
                </View>
            </View>

            <Modal
                transparent
                visible={ModalStatus}
                animationType='slide'
                onRequestClose={() => setModalStatus(false)}
            >
                <View style={{ flex: 1, backgroundColor: '' }}>
                    <View style={{ height: 50, width: "100%", backgroundColor: '', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalStatus(false)
                                onChangeText("");
                                setsecondText("");
                            }}
                        >
                            <Ionicons
                                name={'chevron-back-outline'} size={40} color={"white"}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 70, width: '90%', backgroundColor: 'white', borderRadius: 5, elevation: 5 }}>
                            <Text style={{ color: 'black', marginLeft: 10, marginTop: 5, fontFamily: Fonts.medium }}>User ID</Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderBottomWidth: 1,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    color: 'black',
                                    borderColor: 'orange',
                                    fontFamily: Fonts.medium
                                }}
                                placeholderTextColor={"gray"}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="User ID"
                                keyboardType="default"
                            />
                        </View>

                        <View style={{ height: 70, width: '90%', backgroundColor: 'white', borderRadius: 5, marginTop: 25, elevation: 5 }}>
                            <Text style={{ color: 'black', marginLeft: 10, marginTop: 5, fontFamily: Fonts.medium }}>Password</Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderBottomWidth: 1,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    color: 'black',
                                    borderColor: 'orange',
                                    fontFamily: Fonts.medium
                                }}
                                placeholderTextColor={"gray"}
                                onChangeText={setsecondText}
                                value={secondText}
                                placeholder="Password"
                                keyboardType="default"
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                setActivity('Loading')
                                setTimeout(() => LoginCheck(), 3000)
                            }}
                            style={{ height: 60, width: '80%', backgroundColor: '#8E8C90', borderRadius: 30, marginTop: 25, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                            {activity == 'LoginButton' &&

                                <Text style={{ fontSize: 23, color: 'white', fontFamily: Fonts.medium }}>Submit</Text>
                            }
                            {activity == 'Loading' && <LottieView
                                style={{ height: 80, width: 80, }}
                                source={require('../../assets/animations/load.json')}
                                autoPlay loop
                            />}
                        </TouchableOpacity>

                        <View style={{ height: 40, width: '70%', backgroundColor: '', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: 'black', fontFamily: Fonts.light }}>Forgot User ID | Forgot Password</Text>
                            <Text style={{ fontSize: 15, color: 'black', fontFamily: Fonts.light }}>Enable User ID</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    );
}
