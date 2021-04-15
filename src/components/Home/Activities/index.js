import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons/'

import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Avatar,
    Description,
    Username, 
    Bold,
    Details, 
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionsLabel,
} from './styles';

export default function Activities() {
 return (
   <Container>
       <Header>
           <Title>Atividades</Title>
       </Header>

       <Card>
           <CardHeader>
               <Avatar source={require('../../../assets/img/08.png')}/>
               <Description>
                   <Bold>Você</Bold> pagou a <Bold>@filipezaidan</Bold>
               </Description>
           </CardHeader>

           <CardBody>
               <Username>Filipe Zaidan</Username>
           </CardBody>

           <CardFooter>
               <Details>
                   <Value>R$ 100,00</Value>

                   <Divider/>

                   <Feather name="lock" color="#fff" />  
                   <Date> 2 anos atrás</Date>
               </Details>

               <Actions>
                   <Option>
                       <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                       <OptionsLabel>0</OptionsLabel>
                   </Option>

                   <Option>
                       <AntDesign name="hearto" size={14} color="#fff"/>
                       <OptionsLabel>0</OptionsLabel>
                   </Option>
               </Actions>
           </CardFooter>
       </Card>
   </Container>
  );
}