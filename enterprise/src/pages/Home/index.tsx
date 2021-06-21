/* eslint-disable no-bitwise */
import React, { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import exit from '../../assets/Vector.png';

import { logoutUser } from '../../store/modules/auth/actions';
import { IEnterprise } from '../../store/modules/enterprise/types';

import InputSearch from '../../components/InputSearch';
import Loading from '../../components/Loading';

import {
  Container,
  Description,
  Header,
  Title,
  TouchableExit,
  ContentFlat,
  ContainerCard,
  ImageCard,
  ShadowContent,
  TitleCard,
  DescriptionCard,
  ContentDescription,
} from './styles';

const Home: React.FC = () => {
  const [dataEnterprise, setDataEnterprise] = useState<IEnterprise[]>([]);

  const enterprise = useSelector(state => state.enterprise);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    setDataEnterprise(Object.values(enterprise));
  }, [enterprise]);

  console.log(dataEnterprise, 'Data Enterprises');

  const handeExit = () => {
    dispatch(logoutUser());

    navigation.navigate('SignIn');
  };

  const CardItem = ({ title, description, photo }) => {
    return (
      <>
        <ContainerCard>
          <ImageCard
            source={{
              uri: `https://empresas.ioasys.com.br/${photo}`,
            }}
          />
          <ShadowContent>
            <TitleCard>{title}</TitleCard>

            <ContentDescription>
              <DescriptionCard numberOfLines={4}>{description}</DescriptionCard>
            </ContentDescription>
          </ShadowContent>
        </ContainerCard>
      </>
    );
  };

  const renderItem = ({ item }) => (
    <CardItem
      key={item.id}
      title={item.enterprise_name}
      description={item.description}
      photo={item.photo}
    />
  );

  return (
    <Container>
      <Header>
        <View>
          <Title>Olá, Alexandre!</Title>
          <Description>Bem-vindo(a)</Description>
        </View>

        <TouchableExit onPress={() => handeExit()}>
          <Image source={exit} />
        </TouchableExit>
      </Header>

      <InputSearch title="Buscar por nome" />

      <ContentFlat>
        {loading && <Loading />}
        {!loading && (
          <FlatList
            data={dataEnterprise}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        )}
      </ContentFlat>
    </Container>
  );
};

export default Home;
