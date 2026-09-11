export function Dropdown({ label, option1, option2, option3 }) {
  return (
    <div>
      <div>
        {label}
        <select
          name={label}   
          className="border border-gray-400 rounded-md w-full p-2 box-border"
        >
          <option value={option1}>{option1}</option>
          <option value={option2}>{option2}</option>
          <option value={option3}>{option3}</option>
        </select>
      </div>
    </div>
  );
}
