type initialProps = {
    firstName:string;
    lastName:string;
    bgAndTextStyle:string;
}
const InitialName = ({firstName, lastName, bgAndTextStyle}:initialProps) => {
  return (
    <div className={`${bgAndTextStyle} flex gap-3 items-center rounded-full p-1 size-8 justify-center uppercase font-bold shrink-0`}>
      {firstName.split("")[0]}
      {lastName.split("")[0]}
    </div>
  );
};

export default InitialName;
