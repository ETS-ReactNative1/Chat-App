import React from "react";
import { View, Text, Button } from "react-native";

//chat component 
export default class Chat extends React.Component {
  ccomponentDidMount() {
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Screen 2!</Text>
        <Button
          title="go to start"
          onPress={() => this.props.navigation.navigate("Start")}
        />
      </View>
    );
  }
}
