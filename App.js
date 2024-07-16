import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ActivityIndicator,RefreshControl } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import Card from './component/Card';
import store from './component/redux/store';
import axios from 'axios';

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

const MainComponent = () => {
  const [data, setData] = useState("");
  const [element, setElement] = useState([]);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData = async () => {
    try {
      setLoad(false);
      // data.split('')[0].toUpperCase().join('')
      const response = await axios.get(`https://openlibrary.org/search.json?title=${data}`);
      setElement(response.data.docs);
      setLoad(true);
    } catch (error) {
      console.error(error);
      setLoad(true);
    }
  }; 
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };
  const changeData = (text) => {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    setData(capitalizedText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txxt1}>GeeksforGeeks Book Store</Text>
      <TextInput
        value={data}
        onChangeText={changeData}
        style={styles.input}
      />
      <TouchableOpacity onPress={fetchData} style={styles.button}>
        <Text>Search</Text>
      </TouchableOpacity>

      {load ? (
        element.length !== 0 ? (
          <FlatList
            data={element}
            renderItem={({ item, index }) => {
              return(
                <>
              { (item.title.includes(`${data}`))? <Card value={item.author_name} title={item.title} dataa={data} />:null}
              </>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatlistContent}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        ) : null
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor:"#D3D3D3"
  },
  txxt1:{
    // backgroundColor:"red",
    textAlign:"center",
    color:"green",
    fontWeight:"bold",
    fontSize:27
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor:"white"
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  flatlistContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default App;
