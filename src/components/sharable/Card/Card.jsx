import style from "./Card.module.css";
const Card = ({title,sub_title, children}) => {
  return (
    <fieldset className="c_card">
      <div className="text-center">
        {
          title ? <><h2 className={style.fs_title}>{title || ""}</h2>
          <br></br></>:""
        }

        {
          sub_title ? <h3 className={style.fs_subtitle}>{sub_title || ""}</h3>
        :""
        }
        <hr></hr>
      </div>
      {children}
    </fieldset>
  );
};

export default Card;
