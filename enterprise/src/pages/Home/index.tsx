/* eslint-disable no-bitwise */
import React, { useState, useEffect, useRef } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import { IShow } from 'store/modules/show/types';
import exit from '../../assets/Vector.png';
import not from '../../assets/not.png';

import { logoutUser } from '../../store/modules/auth/actions';
import { IEnterprise } from '../../store/modules/enterprise/types';

import { requestShow } from '../../store/modules/show/actions';

import InputSearch from '../../components/InputSearch';
import Loading from '../../components/Loading';

import api from '../../services/api';

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
  ViewShimmer,
  EmptyFilterData,
  ContentEmpty,
} from './styles';

const Home: React.FC = () => {
  const [dataEnterprise, setDataEnterprise] = useState<IEnterprise[]>([]);

  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  const [dataFiltered, setDataFiltered] = useState<IEnterprise[]>([]);

  console.log(dataFiltered, 'FILTERED');

  const enterprise = useSelector(state => state.enterprise);

  const headers = useSelector(state => state.show);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    setDataEnterprise(Object.values(enterprise));
  }, [enterprise]);

  const handeExit = () => {
    dispatch(logoutUser());

    navigation.navigate('/SignIn');
  };

  const handleShow = async (id: IShow) => {
    dispatch(requestShow(headers, id));

    navigation.navigate('/Show');
  };

  const CardItem = ({ title, description, photo, id }) => {
    return (
      <>
        <ContainerCard onPress={() => handleShow(id)}>
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
      id={item.id}
      title={item.enterprise_name}
      description={item.description}
      photo={item.photo}
    />
  );

  const handleFilterValue = (value: any) => {
    const itemFiltered = dataEnterprise.filter(
      item =>
        item.enterprise_name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase()),
    );

    if (itemFiltered) {
      setDataFiltered(itemFiltered);
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const emptyListDataFilter = () => (
    <>
      <ContentEmpty>
        <EmptyFilterData> Não Encontrado</EmptyFilterData>
        <Image source={not} />
      </ContentEmpty>
    </>
  );

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
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

            <InputSearch
              title="Buscar por nome"
              name="filter"
              callBackParent={value => handleFilterValue(value)}
            />

            <ContentFlat>
              {filter ? (
                <FlatList
                  data={dataFiltered}
                  ListEmptyComponent={emptyListDataFilter}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                />
              ) : (
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
        </>
      )}
    </>
  );
};

export default Home;
