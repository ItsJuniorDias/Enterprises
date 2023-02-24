import React, { useRef } from 'react';
import { Image, TextInputProps } from 'react-native';
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
