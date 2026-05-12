import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const listings = [
  {
    id: 1,
    title: "Modern Apartment",
    city: "New York",
    price: 1200,
  },
  {
    id: 2,
    title: "Luxury Villa",
    city: "Los Angeles",
    price: 3500,
  },
  {
    id: 3,
    title: "Cozy Cottage",
    city: "Chicago",
    price: 900,
  },
  {
    id: 4,
    title: "Beach House",
    city: "Miami",
    price: 2500,
  },
  {
    id: 5,
    title: "Studio Flat",
    city: "San Francisco",
    price: 1800,
  },
];

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 24 }}
        ListHeaderComponent={
          <View className="gap-5 mb-5">
            <Text className="text-2xl text-center text-purple-700 font-bold">
              Hello from Arya
            </Text>

            <TextInput
              placeholder="Search here..."
              style={{
                backgroundColor: "#9995",
                height: 50,
                width: "100%",
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
            />

            <TouchableOpacity
              onPress={() => alert("Searching You...")}
              style={{
                backgroundColor: "blue",
                height: 50,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <View className="bg-purple-300 p-10 rounded-md mb-5">
            <Text className="font-bold">{item.title}</Text>
            <Text className="text-slate-500">{item.city}</Text>
            <Text className="text-blue-800 font-semibold">
              ${item.price}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}