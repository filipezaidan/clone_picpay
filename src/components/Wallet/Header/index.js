import React from 'react';

import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons';

import {
  Container,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel
} from './styles';

export default function Header({ value, onChangeVisibility, valueBalance}) {

  return (
    <Container colors={valueBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}>
      <HeaderContainer>
        <Title>Saldo Picpay</Title>

        <BalanceContainer>
          <Value>
            R$ <Bold>{value ? '0,00' : '----'}</Bold>
          </Value>

          <EyeButton onPress={ () => onChangeVisibility(value)}>
            <Feather name={value ? "eye" : 'eye-off'} size={28} color="#fff"/>
          </EyeButton>

        </BalanceContainer>

        <Info>
          Seu saldo está rendendo 100% do CDI
        </Info>

        <Actions>
          <Action>
            <MaterialCommunityIcons name="cash" size={40} color="#fff"/>
            <ActionLabel>Adicionar</ActionLabel>
          </Action>

          <Action>
            <MaterialCommunityIcons name="bank" size={30} color="#fff"/>
            <ActionLabel>Retirar</ActionLabel>
          </Action>
        </Actions>

      </HeaderContainer>
    </Container>
  );
}