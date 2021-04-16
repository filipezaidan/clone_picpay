import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TicketContainer, TicketButton, TicketLabel } from './styles';

export default function Ticket() {
 return (
   <TicketContainer>
       <TicketButton>
           <MaterialCommunityIcons name="ticket-outline" size={30} color="#0db060"/>
           <TicketLabel>Usar código promocional</TicketLabel>
       </TicketButton>
   </TicketContainer>
  );
}