import React from 'react';
import styled from 'styled-components';
import Accordion, { AccordionItem } from './Accordion';
import ExampleAccordionContent from '../templates/ExampleAccordionContent';

interface AppProps {
  name: string;
}

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

const items = [
  {
    title: 'Nam ultrices justo ac mattis auctor',
    description:
      'Suspendisse placerat tortor id viverra tristique. Maecenas quis tristique dolor. Proin maximus, orci at ultricies venenatis, tellus ipsum gravida augue, eu bibendum ligula elit quis urna. Cras finibus, ante non scelerisque cursus, quam mi mollis enim, eu ornare mi est finibus erat. Sed in iaculis mauris.',
  },
  {
    title: 'Cras rutrum',
    description: <ExampleAccordionContent />,
  },
];

export const Container = styled.div<ContainerProps>`
  padding: ${props => ('padding' in props ? props.padding : '0')};
  margin: ${props => ('margin' in props ? props.margin : 0)};
`;

export default function App({ name }: AppProps) {
  return (
    <Container padding="1em" margin="0 auto">
      <h1>Accordion</h1>
      <Accordion>
        {items.map((item, index) => (
          <AccordionItem
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </Accordion>
    </Container>
  );
}
