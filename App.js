import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

export default function App() {
  const courses = [
    {
      id: 1,
      name: "flat list",
    },
    {
      id: 2,
      name: "flat list",
    },
    {
      id: 3,
      name: "flat list",
    },
    {
      id: 4,
      name: "flat list",
    },
    {
      id: 5,
      name: "flat list",
    },
    {
      id: 6,
      name: "flat list",
    },
    {
      id: 7,
      name: "flat list",
    },
    {
      id: 8,
      name: "flat list",
    },
    {
      id: 9,
      name: "flat list",
    },
  ];
  const onecourse = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const listHeader = () => {
    return <Text style={styles.headerText}></Text>;
  };

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={listHeader}
        data={courses}
        renderItem={onecourse}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={<Text>This is a flat list</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 26,
    color: "#2f3436",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    backgroundColor: "#b0a615",
  },
  name: {
    fontWeight: "600",
    fontSize: 20,
    marginLeft: 13,
    color: "white",
  },
  separator: {
    color: "#000000",
    margin: 2,
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
});
