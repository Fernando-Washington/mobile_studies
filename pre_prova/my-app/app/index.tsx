import { View, StyleSheet, SafeAreaView } from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Stack } from 'expo-router';

export default function Kabum() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* TOPO: search + carrinho */}
      <View style={styles.topbar}>
        <View style={styles.searchbar}></View>
        <Feather name="shopping-cart" size={26} color="#ffffff" />
      </View>

      {/* BANNER HEXA */}
      <View style={styles.banner}>
        {/* TODO: <Image source={...} /> */}
        <View style={styles.imgbanner}></View>
      </View>

      {/* DOIS CARDS DE OFERTAS */}
      <View style={styles.bloco_ofertas}>

        <View style={styles.cardoferta}>
          <View style={styles.linhaproduto}>
            {/* TODO: <Image source={...} /> */}
            <View style={styles.imgproduto}></View>
            <View style={styles.barproduto}></View>
          </View>
          <View style={styles.linhaproduto}>
            {/* TODO: <Image source={...} /> */}
            <View style={styles.imgproduto}></View>
            <View style={styles.barproduto}></View>
          </View>
        </View>

        <View style={styles.cardoferta}>
          <View style={styles.linhaproduto}>
            {/* TODO: <Image source={...} /> */}
            <View style={styles.imgproduto}></View>
            <View style={styles.barproduto}></View>
          </View>
          <View style={styles.linhaproduto}>
            {/* TODO: <Image source={...} /> */}
            <View style={styles.imgproduto}></View>
            <View style={styles.barproduto}></View>
          </View>
        </View>

      </View>

      {/* CATEGORIAS (circulos azuis) */}
      <View style={styles.bloco_categorias}>
        <View style={styles.circles}>
          <FontAwesome5 name="microchip" size={26} color="#ffffff" />
        </View>
        <View style={styles.circles}>
          <FontAwesome5 name="mouse" size={26} color="#ffffff" />
        </View>
        <View style={styles.circles}>
          <Feather name="monitor" size={26} color="#ffffff" />
        </View>
        <View style={styles.circles}>
          <FontAwesome5 name="gamepad" size={26} color="#ffffff" />
        </View>
      </View>

      {/* BANNER PAY DAY 30% OFF */}
      <View style={styles.bannerpayday}>
        {/* TODO: <Image source={...} /> */}
        <View style={styles.imgpayday}></View>
      </View>

      {/* TAB BAR */}
      <View style={styles.tabbar}>
        <Feather name="home" size={26} color="#ffffff" />
        <Feather name="grid" size={26} color="#ffffff" />
        <Feather name="heart" size={26} color="#ffffff" />
        <Feather name="user" size={26} color="#ffffff" />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  topbar: {
    backgroundColor: '#0d4dad',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 10,
    gap: 10,
  },
  searchbar: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 20,
  },

  banner: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  imgbanner: {
    height: 150,
    backgroundColor: '#1d4d3d',
    borderRadius: 8,
  },

  bloco_ofertas: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 10,
  },
  cardoferta: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  linhaproduto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    gap: 8,
  },
  imgproduto: {
    width: 50,
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  barproduto: {
    flex: 1,
    height: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },

  bloco_categorias: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  circles: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bannerpayday: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  imgpayday: {
    height: 60,
    backgroundColor: '#3b236d',
    borderRadius: 6,
  },

  tabbar: {
    flexDirection: 'row',
    backgroundColor: '#0d4dad',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
  },
});