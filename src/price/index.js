import React from "react";
import {
  Container,
  Top,
  FooterL,
  FooterR,
  Title,
  Subtitle,
  Text,
  UsTitle,
  UsList,
  PriceTitle,
  PriceSubtitle,
  PriceText,
  PriceButton,
  PriceList
} from "./styles";

const Price = () => {
  return (
    <Container>
      <Top>
        <Title>Join our community</Title>
        <Subtitle>30-day, hassle-free money back guarantee</Subtitle>
        <Text>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </Text>
      </Top>
      <FooterL>
        <PriceList>
          <PriceTitle>Monthly Subscription</PriceTitle>
          <PriceSubtitle>
            $29<span>per month</span>
          </PriceSubtitle>
          <PriceText>Full access for less than $1 a day</PriceText>
        </PriceList>
        <PriceButton>Sign Up</PriceButton>
      </FooterL>
      <FooterR>
        <UsTitle>Why Us</UsTitle>
        <UsList>
          Tutorials by industry experts Peer & expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </UsList>
      </FooterR>
    </Container>
  );
};

export default Price;
