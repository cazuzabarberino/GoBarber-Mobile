import React from "react";
import { View, Button } from "react-native";

import { useAuth } from "../../hooks/Auth";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Button onPress={signOut} title="Logout" />
    </View>
  );
};

export default Dashboard;
