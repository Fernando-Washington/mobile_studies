# 📱 React Native - Layout Notes

## Setup básico

```bash
npx create-expo-app nomeProjeto
cd nomeProjeto
npx expo start
```

## Estrutura inicial

```jsx
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Minha Tela</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

## Componentes comuns

```jsx
<View>
  <Text>Texto</Text>
</View>

<Image 
  source={{ uri: 'https://...' }} 
  style={{ width: 50, height: 50 }} 
/>

<Button title="Clique" onPress={() => {}} />

<TextInput 
  placeholder="Digite algo" 
  style={styles.input} 
/>
```

## Layout (Flexbox)

```javascript
flexDirection: 'row'      // linha
flexDirection: 'column'   // coluna (padrão)

justifyContent: 'center'         // eixo principal
alignItems: 'center'             // eixo secundário

justifyContent: 'space-between'  // espaçamento
```

## Estruturas frequentes

### Header

```jsx
<View style={styles.header}>
  <Text>Logo</Text>
  <Text>Icon</Text>
</View>
```

```javascript
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
}
```

### Card

```jsx
<View style={styles.card}>
  <Text>Título</Text>
  <Text>Descrição</Text>
</View>
```

```javascript
card: {
  backgroundColor: '#eee',
  padding: 15,
  margin: 10,
  borderRadius: 10,
}
```

### Linha com imagem

```jsx
<View style={styles.row}>
  <Image style={styles.img} />
  <Text>Item</Text>
</View>
```

```javascript
row: {
  flexDirection: 'row',
  alignItems: 'center',
}

img: {
  width: 40,
  height: 40,
  marginRight: 10,
}
```

## Estilos úteis

```javascript
container: {
  flex: 1,
}

box: {
  padding: 10,
  margin: 10,
}

input: {
  borderWidth: 1,
  padding: 10,
  margin: 10,
}
```

## Componentes básicos

- **ScrollView**: para conteúdo que ultrapassa a tela
- **SafeAreaView**: para respeitar áreas seguras do dispositivo
- **Ícones (Entypo)**:

```jsx
import { Entypo } from '@expo/vector-icons';

<Entypo name="home" size={24} color="black" />
```

## Componentes reutilizáveis

```jsx
function Card({ titulo, descricao }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{titulo}</Text>
      <Text>{descricao}</Text>
    </View>
  );
}

// Uso:
<Card titulo="Saldo" descricao="R$ 1000" />
<Card titulo="Pix" descricao="Transferir" />
```

## Organização de layout

```
View (container)
 ├── Header
 ├── Conteúdo
 │    ├── Card
 │    ├── Card
 │    └── Card
 └── Footer
```

## Fluxo de construção

1. Estruturar com View
2. Inserir conteúdo (Text, Image, Button)
3. Ajustar com flexbox
4. Refinar estilos

## Observações

- Uso frequente de View dentro de View
- ScrollView para telas maiores
- `flex: 1` no container principal
- `padding` e `margin` para espaçamento
- `flexDirection: 'row'` quando necessário alinhar horizontalmente
- Construir primeiro funcional, depois ajustar visual