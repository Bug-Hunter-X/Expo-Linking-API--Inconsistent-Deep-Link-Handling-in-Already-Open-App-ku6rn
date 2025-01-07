```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleDeepLink = (event) => {
      console.log('Deep link received:', event.url);
      // Handle the deep link navigation
    };
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
        console.log('Initial deep link:', url);
        //Handle the deep link navigation
      }
    };
    getInitialUrl();
    const linkSubscription = Linking.addEventListener('url', handleDeepLink);

    return () => {
        linkSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (initialUrl) {
        //Handle deep link navigation
    }
  }, [initialUrl]);

  return (
    <View>
      <Text>App Content</Text>
    </View>
  );
};

export default App;
```