import styled from 'styled-components';

export const LiveBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, #222529 0%, #353A3F 100%);
`

export const Header = styled.header`
  width: 100%;
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  > div {
    display: flex;
    align-items: center;
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
  }
`;

export const LiveContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 358px;
  grid-gap: 44px;
  max-width: 1200px;
  padding: 40px;
  margin: 0 auto;
  background: #fff;
`

export const LeftContent = styled.div``
