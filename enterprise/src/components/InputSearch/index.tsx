import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import { Image, TextInput, View, TextInputProps } from 'react-native';

import { useField } from '@unform/core';
import { Touchable, ContentInput, Input } from './styles';

import search from '../../assets/search.png';

interface ISearch extends TextInputProps {
  title: string;
  name: string;
  callBackParent(value: any): void;
}

const InputSearch: React.FC<ISearch> = ({
  title,
  name,
  callBackParent,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);

  return (
    <Touchable onPress={() => inputElementRef.current.focus()}>
      <Image source={search} />

      <ContentInput>
        <Input
          placeholder={title}
          placeholderTextColor="#A4A4B2"
          ref={inputElementRef}
          onChangeText={callBackParent}
          {...rest}
        />
      </ContentInput>
    </Touchable>
  );
};

export default InputSearch;
