import { styled } from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  h2 {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
    padding-left: 16px;
  }
  @media (min-width: 768px) {
    h2 {
      padding: 0 25px 0 29px;
      font-size: 32px;
      letter-spacing: -0.5px;
    }
  }
`;
const Section = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 24px 0 61px 18px;
  width: 375px;

  .regSmall {
    width: 162px;
    height: 110px;
    border-radius: 8px;
  }
  .regMedium {
    display: none;
  }
  .regLarge {
    display: none;
  }
  .reiting {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
  }

  .iconMovie {
    width: 10px;
    height: 10px;
    opacity: 0.75;
  }
  .category {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  p {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    opacity: 0.75;
  }
  h4 {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 4px;
  }
  .save {
    position: absolute;
    margin-left: 120px;
    margin-top: 8px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 768px;
    gap: 20px;
    padding: 24px 0 61px 29px;
    .regSmall {
      display: none;
    }
    .regMedium {
      display: block;
      width: 220px;
      height: 140px;
      border-radius: 8px;
    }
    .save {
      margin-left: 180px;
    }
    p {
      font-size: 13px;
    }
    h4 {
      font-size: 18px;
    }
    .reiting {
      gap: 8px;
    }
    .iconMovie {
      width: 12px;
      height: 12px;
    }
  }
  @media (min-width: 1440px) {
    width: 1280px;
    gap: 40px;
    padding: 24px 0 61px 29px;

    .regMedium {
      display: block;
      width: 280px;
      height: 174px;

      border-radius: 8px;
    }

    .save {
      margin-left: 230px;
    }
    p {
      font-size: 15px;
    }
  }
`;
export { Box, Section };
