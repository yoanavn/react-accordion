import React from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

type AccordionProps = {
  children?: React.ReactNode;
};

const AccordionWrapper = styled.div`
  border: 1px solid #9f9f9f;
`;

const Accordion: React.FC<AccordionProps> = ({ children }) => (
  <AccordionWrapper>{children}</AccordionWrapper>
);

export { AccordionItem };
export default Accordion;
