import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 100vh;
  background-color: #f7f8fc;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  background-color: #fff;
  border: 3px solid #dce7ff;
  border-radius: 3px;
  width: 1000px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: auto;
  }
`;

export const ImageContainer = styled.div`
  height: auto;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 100%;
  border-radius: 2px;
  position: absolute;
  display: block;
  opacity: 0.7;
`;

export const FormControl = styled.div`
  margin: 10px 0;
  width: 100%;

  .label {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 15px;
  width: 100%;

  a {
    margin-left: auto;
    text-decoration: none;
  }

  label {
    color: #7a7e8c;
    font-weight: normal;
  }
`;
