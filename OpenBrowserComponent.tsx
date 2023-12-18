import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const OpenBrowserComponent = ({ url }) => {
  const openInstagram = () => {
    const instagramUrl = 'https://www.instagram.com/accounts/login/';
    return (
      <WebView source={{ uri: instagramUrl }} />
    );
  };

  return (
    <>
      <TouchableOpacity onPress={openInstagram}>
        <Text>Open Instagram</Text>
      </TouchableOpacity>
    </>
  );
};

export default OpenBrowserComponent;
