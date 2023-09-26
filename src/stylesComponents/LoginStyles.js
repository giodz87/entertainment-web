import { styled } from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  gap: 59px;
  @media (min-width: 768px) {
    gap: 72px;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 24px 24px 32px 24px;
  border-radius: 10px;
  background: var(--Semi-Dark-Blue, #161d2f);
  gap: 40px;
  h2 {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;

    /* Heading (L) */
    font-family: Outfit;
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.5px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
  }

  input {
    width: 279px;
    height: 37px;
    flex-shrink: 0;
    color: #5a698f;
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    background: var(--Semi-Dark-Blue, #161d2f);
    border: none;
    border-bottom: 1px solid #5a698f;
    padding: 16px 0 18px 16px;
    /* Body (M) */
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    outline: none;
  }
  .input-errors {
    display: flex;
    position: relative;
  }
  p {
    color: var(--Red, #fc4747);
    font-feature-settings: "clig" off, "liga" off;
    position: absolute;
    right: 0;
    top: 11px;
    /* Body (S) */
    font-family: Outfit;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .InputBox {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
  }
  .btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }

  button {
    width: 279px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--Red, #fc4747);
    color: var(--Pure-White, #fff);
    border: none;
    cursor: pointer;
    color: var(--Pure-White, #fff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    /* Body (M) */
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  button:hover {
    border-radius: 6px;
    background: var(--Pure-White, #fff);
    color: var(--Semi-Dark-Blue, #161d2f);
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    width: 100%;
    padding: 0 32px 0 32px;
    /* p */
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  a {
    color: var(--Red, #fc4747);
    font-feature-settings: "clig" off, "liga" off;

    /* Body (M) */
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  @media (min-width: 768px) {
    padding: 32px 32px 32px 32px;
    input {
      width: 336px;
    }
    button {
      width: 336px;
    }
    span {
      padding: 0 60px 0 60px;
    }
  }
`;
export { Box, Section };
