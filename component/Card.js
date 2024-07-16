import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import axios from 'axios';

const Card = (props) => {
  const [val, setVal] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        setVal(response.data.message);
        console.log("Fetched image URL: ", response.data.message);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.box1}>
      <View style={styles.imageContainer}>
        {val ? <Image source={{ uri: val }} style={styles.image} /> : null}
      </View>
      <View style={styles.textContainer}>
        {(props.title.includes(`${props.dataa}`)) && (
          <>
            <Text style={styles.txt}>{props.value}</Text>
            <Text style={styles.txt1}>{props.title}</Text>
          </>
        )}
      </View>
      <View>
        <TouchableOpacity><Text style={styles.ttxt1}>Store</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  txt: {
    color: "black",
    fontSize: 19,
    fontWeight: "bold",
  },
  txt1: {
    color: "black",
    fontSize: 15,
  },
  box1: {
    // borderWidth: 2,
    borderRadius:9,
    width:"99%",
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    // margin: 10,
    marginVertical:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginRight: 10,

  },
  image: {
    height: 150,
    width: 120,
    borderRadius:30
  },
  textContainer: {
    flex: 1,
  },
  ttxt1:{
    margin:5,
    padding:12,
    backgroundColor:"lightblue",
    color:"white",
    fontWeight:"bold"
  }
});
