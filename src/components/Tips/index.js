import React from 'react';

import { Container, Option, Title, Img } from './styles';


const items = [
    {
        key: String(Math.random()),
        img: require("../../assets/img/08.png"),
        title: "Pague suas contas sem sair de casa",
        color: "#172c4a",
    },
    {
        key: String(Math.random()),
        img: require("../../assets/img/09.png"),
        title: "Pague suas contas sem sair de casa",
        color: "#6a0159",
    },
    {
        key: String(Math.random()),
        img: require("../../assets/img/10.png"),
        title: "Pague suas contas sem sair de casa",
        color:"#4139c8",
    },
    {
        key: String(Math.random()),
        img: require("../../assets/img/11.png"),
        title: "Pague suas contas sem sair de casa",
        color:"#00ab4b",
    },
    {
        key: String(Math.random()),
        img: require("../../assets/img/12.png"),
        title: "Pague suas contas sem sair de casa",
        color:"#ba2f76",
    },
]

export default function Tips() {
 return (
   <Container>
       {items.map( (item) => (
            <Option key={item.key} bgcolor={item.color}>
                <Title>{item.title}</Title>
                <Img source={item.img}/>
            </Option>
       ))}
   </Container>
  );
}