import React, { useEffect } from 'react';
import { Image, ScrollView, BackHandler, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { resetState } from '../../store/modules/show/actions';
import arrow from '../../assets/arrow.png';
import overflow from '../../assets/Overflow.png';
import { Loading } from '../../components';

import {
  Container,
  Header,
  Touchable,
  Row,
  Title,
  Body,
  ImageBody,
  ContenFilterImage,
  Content,
  TitleBody,
  Description,
  SafeArea,
  ContentLoading,
  FloatView,
  FloatLocation,
  FloatDescription,
  ViewShimmer,
} from './styles';

export const Show = () => {
  const { show } = useSelector((state) => state.show);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleBackButtonClick() {
    dispatch(resetState());
    navigation.navigate('/Home');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick
      );
    };
  }, []);

  const handleGoBack = () => {
    dispatch(resetState());
    navigation.goBack();
  };

  return (
    <>
      {!show && (
        <>
          <ContentLoading>
            <Loading />
          </ContentLoading>
        </>
      )}

      {show && (
        <>
          <SafeArea>
            <ScrollView>
              <Container>
                <Header>
                  <Row>
                    <Touchable
                      testID="buttonTouchable_testID"
                      onPress={() => handleGoBack()}
                    >
                      <Image source={arrow} />
                    </Touchable>

                    <Touchable>
                      <Image source={overflow} />
                    </Touchable>
                  </Row>

                  {show.enterprise_name ? (
                    <Title>{show.enterprise_name}</Title>
                  ) : (
                    <>
                      <ViewShimmer
                        style={{ borderRadius: 16, marginTop: 32, height: 32 }}
                      >
                        <FloatView />
                      </ViewShimmer>
                    </>
                  )}
                </Header>
              </Container>

              <Body>
                <ImageBody
                  source={{
                    uri: `https://empresas.ioasys.com.br/${show.photo}`,
                  }}
                />

                {!show.photo && (
                  <View
                    style={{
                      width: '100%',
                      height: 219,
                      position: 'absolute',
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                    }}
                  />
                )}
                <ContenFilterImage />
              </Body>

              <Content>
                {show.city ? (
                  <TitleBody>
                    {show.city}, {show.country}
                  </TitleBody>
                ) : (
                  <>
                    <View
                      style={{ borderRadius: 16, marginTop: 32, height: 24 }}
                    >
                      <FloatLocation />
                    </View>
                  </>
                )}

                {show.description ? (
                  <Description>{show.description}</Description>
                ) : (
                  <>
                    <View
                      style={{ borderRadius: 16, marginTop: 32, height: 24 }}
                    >
                      <FloatDescription />
                    </View>
                  </>
                )}
              </Content>
            </ScrollView>
          </SafeArea>
        </>
      )}
    </>
  );
};
