import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AuthMenu from '../../components/auth/menu';
import styles from './style';
import AuthDetails from '../../components/auth/details';

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(0)
  const [detailsPage, setDetailsPage] = useState(false)
  return (
    <View style={styles.container}> 
      {detailsPage ? 
        <AuthDetails setDetailsPage={setDetailsPage} />
        :
        <AuthMenu authPage={authPage} setAuthPage={setAuthPage} detailsPage={detailsPage} setDetailsPage={setDetailsPage}/>
      } 
    </View>
  )
}