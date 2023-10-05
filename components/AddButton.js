import React, { useState } from "react";
import { Button, Image, TouchableOpacity } from "react-native";
import add from "../assets/interface/add.png";

export default function AddButton({ handleAddToMenu, item }) {

  const handlePress = () => {
    handleAddToMenu(item);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`h-10 w-10 m-1`}>
      <Image source={add} alt="atc-icon" className="max-w-full max-h-full" />
    </TouchableOpacity>
  );
}
