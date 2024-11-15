// Ex 1
// import React from 'react';
// import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
//
// const datasource = [
//   { key: 'a' },
//   { key: 'b' },
//   { key: 'c' },
//   { key: 'd' },
//   { key: 'e' },
//   { key: 'f' },
//   { key: 'g' },
//   { key: 'h' },
//   { key: 'i' },
//   { key: 'j' },
//   { key: 'k' },
//   { key: 'l' },
//   { key: 'm' },
//   { key: 'n' },
//   { key: 'o' },
//   { key: 'p' },
//   { key: 'q' },
//   { key: 'r' },
//   { key: 's' },
//   { key: 't' },
//   { key: 'u' },
//   { key: 'v' },
//   { key: 'w' },
//   { key: 'x' },
//   { key: 'y' },
//   { key: 'z' },
// ];
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//     padding: 8,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
// });
//
// const renderItem = ({ item }) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={{ flex: 1 }}>
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.key}
//         />
//       </View>
//   );
// };
//
// export default App;

//Ex 2
import React from 'react';
import { View, SectionList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const datasource = [
  { data: [{ key: 'a' }, { key: 'e' }, { key: 'i' }, { key: 'o'} ], title: "Vowels" },
  { data: [{ key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'j' }, { key: 'k' },
      { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' },
      { key: 't' }, { key: 'u'}, { key: 'v' }, { key: 'w' }, { key: 'x' }, { key: 'y' }, { key: 'z' } ], title: "Consonants" }
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5, // Add some vertical margin between items
    backgroundColor: '#fff', // White background for list items
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// Function to determine header background color based on title
const getHeaderStyle = (title) => {
  switch (title) {
    case "Vowels":
      return { ...styles.headerText, backgroundColor: 'lightblue' };
    case "Consonants":
      return { ...styles.headerText, backgroundColor: 'yellow' };
    default:
      return styles.headerText;
  }
};

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20 }}>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={getHeaderStyle(title)}>{title}</Text>
            )}
            stickySectionHeadersEnabled={false}
        />
      </View>
  );
};

export default App;
