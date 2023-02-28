import React, { useRef } from 'react';
import { Image, TextInputProps } from 'react-native';
import { Touchable, ContentInput, Input } from './styles';

import search from '../../assets/search.png';

interface ISearch extends TextInputProps {
  title: string;
  name: string;
  callBackParent(value: any): void;
}

export const InputSearch = ({
  title,
  name,
  callBackParent,
  ...rest
}: ISearch) => {
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
