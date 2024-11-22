import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Linking,
  Image,
} from 'react-native';
import Header from './components/Header';
import Susunan from './components/Susunan';
import ButtonCustom from './components/ButtonCustom';

const App = () => {
  const [SwitchOn, setSwitchOn] = useState(false);
  const pressSwitch = () => setSwitchOn(!SwitchOn);
  const [arrowMove, setArrowMove] = useState(false);
  const onPressArrow = () => setArrowMove(!arrowMove);

  const [arrowMoveA, setArrowMoveA] = useState(false);
  const onPressArrowA = () => setArrowMoveA(!arrowMoveA);

  const [arrowMoveB, setArrowMoveB] = useState(false);
  const onPressArrowB = () => setArrowMoveB(!arrowMoveB);

  const [arrowMoveC, setArrowMoveC] = useState(false);
  const onPressArrowC = () => setArrowMoveC(!arrowMoveC);

  const [arrowMoveD, setArrowMoveD] = useState(false);
  const onPressArrowD = () => setArrowMoveD(!arrowMoveD);
  // const [Username, setUsername] = useState('');
  // const [Password, setPassword] = useState('');

  // const handleLogin = () => {
  //   if (Username == 'admin' || Password == 'admin123') {
  //     // console.log('Login Berhasil');
  //     ToastAndroid.show('Login Berhasil!', ToastAndroid.SHORT);
  //   } else if (Username != 'admin' && Password != 'admin123') {
  //     // console.log('Login Gagal');
  //     ToastAndroid.show('Login Gagal!', ToastAndroid.SHORT);
  //   }

  //   Username == 'admin' && Password == 'admin123'
  //     ? ToastAndroid.show('Login Berhasil!', ToastAndroid.SHORT)
  //     : ToastAndroid.show('Login Gagal!', ToastAndroid.SHORT);
  // };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: SwitchOn ? 'black' : 'white',
        borderEndColor: 'grey',
        borderEndWidth: 0.5,
      }}>
      <ScrollView>
        <Header
          title="Richey Rich"
          textColor="#DAA520"
          kepala={SwitchOn}
          SwitchOn={SwitchOn}
          onValueChange={pressSwitch}
        />
        <View
          style={{
            padding: 2,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
          }}>
          <Susunan
            gambar={require('./assets/elon.png')}
            title="Elon Musk"
            title2="Tesla & SpaceX CEO"
            describeTitle="Elon Musk is the CEO of Tesla, SpaceX, The Boring Company, Neuralink, and The Boring Company."
            arrowAnimate={arrowMove}
            onPress={onPressArrow}
            kepala={SwitchOn}
            linker={() =>
              Linking.openURL('https://id.wikipedia.org/wiki/Elon_Musk')
            }
          />
          <Susunan
            gambar={require('./assets/billGates.png')}
            title="Bill Gates"
            title2="Microsoft CEO"
            describeTitle="Bill Gates is the chairman, chief executive officer, and co-founder of Microsoft Corporation."
            arrowAnimate={arrowMoveA}
            onPress={onPressArrowA}
            kepala={SwitchOn}
            linker={() =>
              Linking.openURL('https://id.wikipedia.org/wiki/Bill_Gates')
            }
          />
          <Susunan
            gambar={require('./assets/jackMa.png')}
            title="Jack Ma"
            title2=" Alibaba CEO"
            describeTitle="Jack Ma is the chairman, chief executive officer, and co-founder of Alibaba Group Holding Limited."
            arrowAnimate={arrowMoveB}
            onPress={onPressArrowB}
            kepala={SwitchOn}
            linker={() =>
              Linking.openURL('https://id.wikipedia.org/wiki/Jack_Ma')
            }
          />
          <Susunan
            gambar={require('./assets/jeffBezos.png')}
            title="Jeff Bezos"
            title2="Amazon CEO"
            describeTitle="Jeff Bezos is the chairman, chief executive officer, and co-founder of Amazon.com, Inc."
            arrowAnimate={arrowMoveC}
            onPress={onPressArrowC}
            kepala={SwitchOn}
            linker={() =>
              Linking.openURL('https://id.wikipedia.org/wiki/Jeff_Bezos')
            }
          />
          <Susunan
            gambar={require('./assets/mark.png')}
            title="Mark Zuckerberg"
            title2="Facebook CEO"
            describeTitle="Mark Zuckerberg is the chairman, chief executive officer, and co-founder of Facebook, Inc."
            arrowAnimate={arrowMoveD}
            onPress={onPressArrowD}
            kepala={SwitchOn}
            linker={() =>
              Linking.openURL('https://id.wikipedia.org/wiki/Mark_Zuckerberg')
            }
          />
        </View>
        <ButtonCustom
          title="About Us"
          kepala={SwitchOn}
          // verif={handleLogin}
          // disabled={Username == '' || Password == '' ? true : false}
        />
        <ButtonCustom title="Contact Us" kepala={SwitchOn} />
      </ScrollView>
    </View>
  );
};

export default App;
