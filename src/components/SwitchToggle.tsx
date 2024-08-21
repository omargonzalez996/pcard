import classNames from "classnames";

interface props_interface {
  description: string | React.ReactNode;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchToggle = ({
  description,
  isSelected,
  setIsSelected,
}: props_interface) => {
  const toggle = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={(e) => toggle(e)}
      className={classNames(
        "w-16 h-8 bg-gray-500 rounded-full cursor-pointer transition-all duration-300"
      )}
    >
      <span
        className={classNames(
          "flex absolute left-0 translate-x-0 right-auto items-center justify-center h-8 w-8 text-slate-700 bg-slate-200 rounded-full shadow-md transform transition-transform duration-300",
          { "translate-x-8": isSelected }
        )}
      >
        <div>
          {typeof description === "string" ? (
            <span>{description}</span>
          ) : (
            description
          )}
        </div>
      </span>
    </div>
  );
};

export default SwitchToggle;
