import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TotalSaldo from '../../component/total_saldo';
import DompetCard from '../../component/dompet_card';
import {data} from '../../data/data';
import AddDompet from '../../component/button/add_dompet';
import AddSaldo from '../../component/button/add_saldo';
import Activities from '../../component/activities';
import AddButton from '../../component/button/add_button';

const Home = () => {
  const flatListRef = useRef<FlatList<any> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // Menambahkan variabel state untuk indeks aktif

  const handleIndicatorPress = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index});
      setActiveIndex(index); // Mengatur indeks aktif saat indikator ditekan
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TotalSaldo />
        <FlatList
          ref={flatListRef}
          data={data[0].dompetDetail}
          keyExtractor={(_item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <DompetCard dompetDetail={item} />}
          onMomentumScrollEnd={event => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / 200);
            setActiveIndex(index); // Mengatur indeks aktif saat scroll berhenti
          }}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.indicatorContainer}>
              {data[0].dompetDetail.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.indicator,
                    index === activeIndex && styles.activeIndicator,
                  ]}
                  onPress={() => handleIndicatorPress(index)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        {/* <AddButton/> */}
        <AddSaldo />
        <AddDompet />
        <Activities />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
  },

  indicator: {
    width: 35,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 2,
  },

  activeIndicator: {
    backgroundColor: 'black',
  },
});
