const CardBody = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {props.children}
    </div>
  );
};

export default CardBody;
