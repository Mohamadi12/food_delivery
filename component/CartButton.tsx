import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "@/constants";

const CartButton = () => {
  const totalItems = 0;
  
  return (
    <TouchableOpacity className="cart-btn" onPress={() => {}}>
      <Image source={icons.bag} className="size-5" resizeMode="contain" />

      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
