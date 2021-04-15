import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { 
    CardContainer,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
} from './styles';

export default function Card() {
 return (
   <CardContainer>
       <CardBody>
            <CardDetails>
                <CardTitle>
                    Cadastre seu cartão de crédito
                </CardTitle>

                <CardInfo>
                    Cadastre seu cartão de crédito para poder fazer 
                    pagamentos mesmo quando nãotiver saldo no seu Picpay.
                </CardInfo>
            </CardDetails>

            <Img resizeMode="contain" source={require('../../../assets/img/credit-card.png')}/>
       </CardBody>

       <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060"/>
            <AddLabel>
                Adicionar cartão de crédito
            </AddLabel>
       </AddButton>


   </CardContainer>
  );
}