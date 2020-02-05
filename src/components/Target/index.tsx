import React, { SFC } from "react";
import css from "styled-jsx/css";
import { imgUrls } from "../../utils";
import user from "../../assets/user.png";
interface Props {
  avatar: string;
  place: string;
}

const Target: SFC<Props> = ({ avatar, place }) => {
  console.log("avatar", avatar);
  return (
    <div>
      {imgUrls.map((item, index) => (
        <div key={item} id={"tg" + index.toString()} className="wrap">
          <img src={item} className="img" alt=""></img>
          <div className="title">
            {avatar ? (
              <img src={avatar} alt="" className="avatar" />
            ) : (
              <img src={user} alt="" className="avatar" />
            )}
            我在<span className="place">{place}</span>
          </div>
        </div>
      ))}
      <style jsx>{style}</style>
    </div>
  );
};

export default Target;

const style = css`
  .wrap {
    position: relative;
  }
  .img {
    width: 100%;
  }
  .title {
    color: #eee;
    font-size: 2rem;
    position: absolute;
    top: 10%;
    left: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-right: 10px;
  }
  .error {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-right: 10px;
    background: #eeeed1;
  }
  .place {
    font-size: 1.5em;
    font-weight: 900;
    margin-left: 10px;
  }
`;
