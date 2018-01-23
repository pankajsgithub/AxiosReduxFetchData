import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import BookPage from './src/components/book/BookPage';
import { fetchBooks } from './src/actions/bookActions';


export default class App extends Component {
  
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <BookPage/>
      </Provider>  
    );
  }
}

{/* <Provider store={createStore(reducers).dispatch(bookActions.fetchBooks())}>
        
        </Provider>   */}

// import React, { Component } from "react";
// import { FlatList, StyleSheet, Text, View } from "react-native";

// export default class App extends Component {
//   state = {
//     data: []
//   };

//   componentWillMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     const response = await fetch("https://randomuser.me/api?results=500");
//     const json = await response.json();
//     this.setState({ data: json.results });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(x, i) => i}
//           renderItem={({ item }) =>
//             <Text>
//               {`${item.name.first} ${item.name.last}`}
//             </Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   }
// });


