import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Svg, Path, Ellipse } from "react-native-svg";

const NotificationIcon = ({ width, height, fillColor, strokeColor }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("notifcations")}>
      <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
        <Ellipse cx="15.373" cy="15" rx="15" ry="15" fill="#FFB322" />
        <Path
          d="M14.4072 22.8645H16.7882"
          stroke="white"
          strokeWidth="1.048"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.3591 13.936C20.3591 12.673 19.8574 11.4618 18.9644 10.5688C18.0713 9.67577 16.8601 9.17407 15.5972 9.17407C14.3342 9.17407 13.123 9.67577 12.23 10.5688C11.337 11.4618 10.8353 12.673 10.8353 13.936V18.1026C10.8353 18.5762 10.6471 19.0304 10.3123 19.3653C9.97736 19.7002 9.52316 19.8884 9.04956 19.8884H22.1448C21.6712 19.8884 21.217 19.7002 20.8821 19.3653C20.5472 19.0304 20.3591 18.5762 20.3591 18.1026V13.936Z"
          stroke="white"
          strokeWidth="1.048"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Ellipse cx="19.7646" cy="11.2574" rx="2.5" ry="2.5" fill="#FC4F72" />
      </Svg>
    </TouchableOpacity>
  );
};

export default NotificationIcon;
