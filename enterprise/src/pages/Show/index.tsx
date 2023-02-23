import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  Dimensions,
  BackHandler,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import { resetState } from '../../store/modules/show/actions';

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

import arrow from '../../assets/arrow.png';
import overflow from '../../assets/Overflow.png';

import Loading from '../../components/Loading';

const Show = () => {
  const [headerShown, setHeaderShown] = useState(false);

  const { enterprise } = useSelector(state => state.show);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const windowHeight = Dimensions.get('window').height;

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
        handleBackButtonClick,
      );
    };
  }, []);

  const handleGoBack = () => {
    dispatch(resetState());
    navigation.goBack();
  };

  return (
    <>
      {!enterprise && (
        <>
          <ContentLoading>
            <Loading />
          </ContentLoading>
        </>
      )}

      {enterprise && (
        <>
          <SafeArea>
            <ScrollView
              onScroll={event => {
                const scrolling = event.nativeEvent.contentOffset.y;

                if (scrolling > 50) {
                  setHeaderShown(true);
                } else {
                  setHeaderShown(false);
                }
              }}
              // onScroll will be fired every 16ms
              scrollEventThrottle={16}
            >
              <Container>
                <Header>
                  <Row>
                    <Touchable onPress={() => handleGoBack()}>
                      <Image source={arrow} />
                    </Touchable>

                    <Touchable>
                      <Image source={overflow} />
                    </Touchable>
                  </Row>

                  {enterprise.enterprise_name ? (
                    <Title>{enterprise.enterprise_name}</Title>
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
                    uri: `https://empresas.ioasys.com.br/${enterprise.photo}`,
                  }}
                />
                {!enterprise.photo && (
                  <ViewShimmer
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
                {enterprise.city ? (
                  <TitleBody>
                    {enterprise.city}, {enterprise.country}
                  </TitleBody>
                ) : (
                  <>
                    <ViewShimmer
                      style={{ borderRadius: 16, marginTop: 32, height: 24 }}
                    >
                      <FloatLocation />
                    </ViewShimmer>
                  </>
                )}
                {enterprise.description ? (
                  <Description>{enterprise.description}</Description>
                ) : (
                  <>
                    <ViewShimmer
                      style={{ borderRadius: 16, marginTop: 32, height: 24 }}
                    >
                      <FloatDescription />
                    </ViewShimmer>
                  </>
                )}
              </Content>

              <LinearGradient
                style={{
                  width: '100%',
                  height: 109,
                  position: 'absolute',
                  marginTop: windowHeight * 0.87,
                  transform: [{ translateY: headerShown ? 155 : -20 }],
                }}
                colors={[' rgba(249, 250, 255, 0.3)', '#fafbff']}
              />
            </ScrollView>
          </SafeArea>
        </>
      )}
    </>
  );
};

export default Show;
