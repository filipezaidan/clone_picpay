import styled from 'styled-components/native';

export const CardContainer = styled.View`
    background-color: #1e232a;
    padding: 20px;
    margin: 0 16px;
    border-radius: 8px;
    margin-top: 10px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;


export const CardDetails = styled.View`
    flex:1;
    margin-right: 20px;
`;

export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const CardInfo = styled.Text`
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    margin-top: 15px;

`;

export const Img = styled.Image`
    width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const AddLabel = styled.Text`
    color: #0db060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`;