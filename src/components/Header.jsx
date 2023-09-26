import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;

  return location != "/login" && location != "/signUp" ? (
    <Section>
      <img src={"./public/assets/logo.svg"} alt="" />
      <div className="imges">
        <Link to={"/"}>
          <img
            style={
              location == "/"
                ? {
                    filter:
                      "invert(100%) sepia(99%) saturate(16%) hue-rotate(235deg) brightness(104%) contrast(100%)",
                  }
                : {}
            }
            className="imagesSize"
            src={"./public/assets/main.svg"}
            alt=""
          />
        </Link>

        <Link to={"/movies"}>
          <img
            style={
              location == "/movies"
                ? {
                    filter:
                      "invert(100%) sepia(99%) saturate(16%) hue-rotate(235deg) brightness(104%) contrast(100%)",
                  }
                : {}
            }
            src={"./public/assets/movie.svg"}
            alt=""
            className="imagesSize"
          />
        </Link>

        <Link to={"/tv-series"}>
          <img
            style={
              location == "/tv-series"
                ? {
                    filter:
                      "invert(100%) sepia(99%) saturate(16%) hue-rotate(235deg) brightness(104%) contrast(100%)",
                  }
                : {}
            }
            src={"./public/assets/shape.svg"}
            alt=""
            className="imagesSize"
          />
        </Link>

        <Link to={"/save-movies"}>
          <img
            style={
              location == "/save-movies"
                ? {
                    filter:
                      "invert(100%) sepia(99%) saturate(16%) hue-rotate(235deg) brightness(104%) contrast(100%)",
                  }
                : {}
            }
            src={"./public/assets/path.svg"}
            alt=""
            className="imagesSize"
          />
        </Link>
      </div>
      <img className="avatar" src={"./public/assets/image-avatar.png"} alt="" />
    </Section>
  ) : null;
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  background: var(--semi-dark-blue, #161d2f);
  padding: 16px 16px 16px 16px;

  .logo {
    width: 25px;
    height: 20px;
  }
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    border: 1px solid var(--Pure-White, #fff);
    cursor: pointer;
  }
  .imges {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 133.536px;
  }
  .imagesSize {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 719px;
    height: 72px;
    border-radius: 10px;
    margin-top: 23px;

    .imges {
      width: 172.92px;
      height: 20px;
    }
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 32px;
    }
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    width: 96px;
    height: 960px;
    padding: 35px 32px 30px 28px;
    margin-left: 32px;
    margin-top: 32px;
    .imges {
      flex-direction: column;
    }
    .avatar {
      width: 40px;
      height: 40px;
    }
    .imges {
      width: 20px;
      height: 200px;
      transform: translateY(-230px);
    }
  }
`;
