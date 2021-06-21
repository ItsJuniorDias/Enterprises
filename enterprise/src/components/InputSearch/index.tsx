import React, { useRef } from 'react';
import { Image, TextInput, View } from 'react-native';

import { Touchable, ContentInput, Input } from './styles';

import search from '../../assets/search.png';

interface ISearch {
  title: string;
}

const InputSearch: React.FC<ISearch> = ({ title }) => {
  const inputElementRef = useRef<any>(null);

  return (
    <Touchable onPress={() => inputElementRef.current.focus()}>
      <Image source={search} />

      <ContentInput>
        <Input
          placeholder={title}
          placeholderTextColor="#A4A4B2"
          ref={inputElementRef}
        />
      </ContentInput>
    </Touchable>
  );
};

export default InputSearch;
