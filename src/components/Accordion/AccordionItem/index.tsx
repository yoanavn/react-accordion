import React, { useState, useRef } from 'react';
import styled from 'styled-components';

type AccordionItemProps = {
  title: string;
  description: string | React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const content = useRef(document.createElement('div'));

  const toggleActive = () => {
    setIsActive(!isActive);
    setHeight(isActive ? '0px' : `${content.current.scrollHeight}px`);
  };

  const AccordionItemWrapper = styled.div`
    &:not(:last-of-type) {
      border-bottom: 1px solid #9f9f9f;
    }
  `;
  const AccordionButton = styled.button`
    border: 0;
    cursor: pointer;
    display: block;
    font-size: 16px;
    outline: none;
    padding: 20px;
    text-align: left;
    width: 100%;
  `;
  const AccordionContentWrapper = styled.div`
    overflow: auto;
    transition: max-height 0.3s ease;
  `;
  const AccordionContent = styled.div`
    padding: 20px;
  `;

  return (
    <AccordionItemWrapper
      className={`accordion-item ${isActive ? 'is-active' : ''}`}
    >
      <AccordionButton onClick={toggleActive}>{title}</AccordionButton>
      <AccordionContentWrapper style={{ maxHeight: `${height}` }} ref={content}>
        <AccordionContent>{description}</AccordionContent>
      </AccordionContentWrapper>
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
