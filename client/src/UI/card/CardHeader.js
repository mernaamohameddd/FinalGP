const CardHeader = (props) => {
  return (
    <div className="flex items-center justify-center bg-white w-full">
      {props.children}
    </div>
  );
};

export default CardHeader;
