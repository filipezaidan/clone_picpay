import React from 'react';

import { Container, Option, Img, Label } from './styles';

const items = [
    {
        key: String(Math.random()),
        img: require('../../assets/img/01.png'),
        label: "Doações"
    },
    {
        key: String(Math.random()),
        img: require('../../assets/img/02.png'),
        label: "UBER"
    },
    {
        key: String(Math.random()),
        img: require('../../assets/img/03.png'),
        label: "Ônibus"
    },
    {
        key: String(Math.random()),
        img: require('../../assets/img/04.png'),
        label: "TV"
    },
    {
        key: String(Math.random()),
        img: require('../../assets/img/05.png'),
        label: "Doações"
    },
    {
        key: String(Math.random()),
        img: require('../../assets/img/06.png'),
        label: "Boleto"
    },
    {
        key: String(Math.random()),
        img: require('../../assets/img/07.png'),
        label: "FAQ"
    },
]

export default function Suggestions() {
 return (
     <Container>
         {items.map( (item) => (
            <Option key={item.key}>
                <Img source={item.img}/>
                <Label>{item.label}</Label>
            </Option> 
         ))}
     </Container>
  
  );
}