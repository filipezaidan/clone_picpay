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

export default function Header() {
  return (
    <Container colors={["#52e78c", "#1ab563"]}>
      <HeaderContainer>
        <Title>Saldo Picpay</Title>

        <BalanceContainer>
          <Value>
            R$ <Bold>0,00</Bold>
          </Value>

          <EyeButton>
            <Feather name="eye" size={28} color="#fff"/>
          </EyeButton>

        </BalanceContainer>

        <Info>
          Seu saldo está rendendo 100% do CDI
        </Info>

        <Actions>
          <Action>
            <MaterialCommunityIcons name="cash" size={30} color="#fff"/>
            <ActionLabel>Adicionar</ActionLabel>
          </Action>

          <Action>
            <MaterialCommunityIcons name="bank" size={30} color="#fff"/>
            <ActionLabel>Adicionar</ActionLabel>
          </Action>
        </Actions>

      </HeaderContainer>
    </Container>
  );
}