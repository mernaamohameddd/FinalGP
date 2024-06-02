const TextAreaInput = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label className="text-white font-bold">{props.label}</label>
      <textarea
        className="rounded-lg min-w-[250px] p-2"
        {...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextAreaInput;
