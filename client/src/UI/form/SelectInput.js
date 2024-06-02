const SelectInput = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label className="text-white font-bold">{props.label}</label>
      <select
        className="rounded-lg min-w-[250px] p-2"
        {...props.register(props.name, props.validation)}
      >
        {props.options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
