/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useState, useCallback, useRef } from 'react';
import { Image, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/core';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginToAuthRequest } from '../../store/modules/auth/actions';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import iconGoogle from '../../assets/Google.png';
import iconFacebook from '../../assets/Facebook.png';
import forgotPassword from '../../assets/round-arrow_right_alt-24px.png';

import {
  Container,
  Title,
  Header,
  Body,
  Footer,
  Forgot,
  TextForgot,
  TextFooter,
  Row,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true);

      await api.post('/users/auth/sign_in', data);
      dispatch(loginToAuthRequest(data));

      setLoading(false);

      navigation.navigate('Home');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }

      setLoading(false);

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais',
      );
    }
  }, []);

  return (
    <Container>
      {loading && <Loading />}

      {!loading && (
        <View>
          <Header>
            <Title>Login</Title>
          </Header>

          <Body>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Forgot>
                <TextForgot>Esqueceu sua senha ?</TextForgot>
                <Image source={forgotPassword} />
              </Forgot>

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
          </Body>

          <Footer>
            <View>
              <TextFooter>Ou faça login com sua conta</TextFooter>
            </View>

            <Row>
              <TouchableOpacity>
                <Image source={iconGoogle} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={iconFacebook} />
              </TouchableOpacity>
            </Row>
          </Footer>
        </View>
      )}
    </Container>
  );
};

export default SignIn;
