import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')}
        />
      )}
      <Appbar.Content title="My App" />
    </Appbar.Header>
  );
};

export default AppBar;
