import React from 'react'; 
import { Container,
    Header, 
    Title, 
    Icon, 
    Footer, 
    Amount, 
    LastTransaction,

} from './styles'; 

export function HighlightCard() {
    return(
        <Container>
            <Header>
                <Title>
                    Entrada
                </Title>
                <Icon name="arrow-up-circle" /> 

                <Footer>
                    <Amount>3</Amount>
                    <LastTransaction>R$2000,00</LastTransaction>
                </Footer>
            </Header>
        </Container>
    )
}