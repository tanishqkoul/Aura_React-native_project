import { ActivityIndicator, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useTailwind } from "nativewind";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-blue-500 rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      style={{
        backgroundColor: '#FF9C01', 
        borderRadius: 10, 
        minHeight: 59, 
        justifyContent: 'center', 
        alignItems: 'center',
        width: 300,
        marginTop:48,
        opacity: isLoading ? 0.5 : 1,
      }}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
