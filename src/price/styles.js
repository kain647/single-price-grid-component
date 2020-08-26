import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 350px);
  grid-template-rows: 250px 1fr;
  grid-template-areas:
    "top top"
    "footerL footerR";
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  border-radius: 5px;
  user-select: none;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1),
    0px 0px 6px 1px rgba(0, 0, 0, 0.4);
`;
export const Top = styled.div`
  display: flex;
  height: 250px;
  width: 700px;
  grid-area: top;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
`;
export const Title = styled.div`
  display: flex;
  color: #2ab2af;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: bold;
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 22px;
  color: #c0df34;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const Text = styled.div`
  display: flex;
  color: #98a6bd;
  line-height: 26px;
  margin-bottom: 20px;
`;
export const FooterL = styled.div`
  display: flex;
  grid-area: footerL;
  height: 250px;
  justify-content: center;
  align-items: center;
  background-color: #2ab2af;
  flex-direction: column;
`;
export const FooterR = styled.div`
  display: flex;
  grid-area: footerR;
  height: 250px;
  background-color: #32b7b4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UsTitle = styled.div`
  display: flex;
  color: #e5eff5;
  opacity: 0.7;
`;
export const UsList = styled.div`
  display: flex;
  padding: 40px;
  text-align: left;
  opacity: 0.7;
  color: #e5eff5;
`;
export const PriceTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #e5eff5;
  font-weight: bold;
  font-size: 18px;
`;
export const PriceSubtitle = styled.div`
  display: flex;
  color: #e5eff5;
  font-size: 32px;
  margin-bottom: 20px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-size: 14px;
    opacity: 0.7;
    font-weight: 400;
  }
`;
export const PriceText = styled.div`
  display: flex;
  font-weight: 400;
  margin-bottom: 20px;
  color: #e5eff5;
`;
export const PriceButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #c0df34;
  color: #e5eff5;
  height: 50px;
  width: 200px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: background-color ease-in-out 500ms;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.1),
    0px 3px 5px 3px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #a7c134;
  }
`;
export const PriceList = styled.div`
  display: flex;
  flex-direction: column;
`;
