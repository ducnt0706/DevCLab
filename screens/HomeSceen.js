import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';

import Card from '../components/Card';
import {globalStyles} from '../styles/style';
import AccountItem from '../components/AccountItem';
import RecordItem from '../components/RecordItem';

export default function HomeSceen({navigation}) {
  const DATA = require('../datas/data.json');
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => toggleModal()}>
          <Image
            style={globalStyles.headerRight}
            source={require('../assets/Group1.png')}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={globalStyles.totalConent}>
      <Modal visible={modalVisible}>
        <View style={globalStyles.container}>
          <Text>Notification</Text>
          <TouchableOpacity onPress={() => toggleModal()}>
            <Image style={globalStyles.imageModal} source={require('../assets/close.png')} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </Modal>

      <View>
        <Text style={globalStyles.sectionText}>List of Account</Text>
      </View>

      <View style={globalStyles.accountList}>
        <AccountItem
          style={globalStyles.accountItem}
          title="Bank account"
          item={DATA.account_information.bank}
        />
        <AccountItem
          title="Credit account"
          item={DATA.account_information.credit}
        />
        <AccountItem
          title="Cast account"
          item={DATA.account_information.cash}
        />
      </View>

      <Card>
        <Text style={globalStyles.textTotal}>
          $ {DATA.account_information.total}
        </Text>
        <Text style={globalStyles.textOpacity}>Total Balance</Text>
      </Card>

      <View>
        <Text style={globalStyles.sectionText}>Last Record Overview</Text>
      </View>
      <FlatList
        data={DATA.detail}
        renderItem={({item}) => (
          <RecordItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </SafeAreaView>
  );
}
