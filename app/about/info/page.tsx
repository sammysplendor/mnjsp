import infoStyles from "./info.module.css";

export const metadata = {
  title: "Info",
  description: "Information page",
};

const Info = () => {
  return (
    <div className={infoStyles.title}>
      <h1>Information</h1>
    </div>
  );
};

export default Info;
