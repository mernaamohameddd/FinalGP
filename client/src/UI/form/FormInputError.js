const FormInputError = (props) => {
  return (
    <p className="bg-red-800 text-white font-bold rounded-lg min-w-[250px] p-2">
      {props.children}
    </p>
  );
};

export default FormInputError;
