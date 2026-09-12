// import { Dropdown } from "./Dropdown";
// import { Input } from "./Input";

// export function ExpenseForm() {
//   return (
//     <div className="h-120 w-3xl bg-white border border-gray-600 rounded-xl p-8 ml-8 mr-8">
      
//       <div className="flex mb-6">
//         <div className="w-full bg-gray-100 border border-gray-400 rounded-md p-4 text-center font-semibold cursor-pointer hover:bg-gray-200">
//           Expense
//         </div>
//         <div className="w-full bg-gray-100 border border-gray-400 rounded-md p-4 text-center ml-4 font-semibold cursor-pointer hover:bg-gray-200">
//           Income
//         </div>
//       </div>

    
//       <div className="flex gap-4 mb-3">
//         <div className="w-full">
          
//           <Input label="Amount" placeholder="0" />
//         </div>
//         <div className="w-full">
//           <Input label="Amount" placeholder="0"/>
//         </div>
//       </div>
//       <div className="flex gap-4 mb-3">
//         <div className="w-full">
//           <Dropdown label={"Category"} option1={"Food"} option2={"Shopping"} option3={"Medicine"}/>
//         </div>
//          <div className="w-full">
//           <Dropdown label={"Category"} option1={"Salary"} option2={"Bonus"} option3={"others"}/>
//         </div>
//       </div>

    
//       <div className="w-full mb-6">
//         <Input label="Note(optional)" placeholder="Groceries, Rent" />
//       </div>


//       <button className="bg-gray-900 text-white font-semibold rounded-md px-2 py-4 w-full hover:bg-gray-600">
//         Add Transaction
//       </button>
//     </div>
//   );
// }
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";

export function ExpenseForm() {
  return (
    <div className="w-full max-w-4xl bg-white border border-gray-600 rounded-xl p-6 mx-auto">
      
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row mb-6 gap-4">
        <div className="flex-1 bg-gray-100 border border-gray-400 rounded-md p-4 text-center font-semibold cursor-pointer hover:bg-gray-200">
          Expense
        </div>
        <div className="flex-1 bg-gray-100 border border-gray-400 rounded-md p-4 text-center font-semibold cursor-pointer hover:bg-gray-200">
          Income
        </div>
      </div>

      {/* Amount Inputs */}
      <div className="flex flex-wrap gap-4 mb-3">
        <div className="flex-1 min-w-[200px]">
          <Input label="Amount" placeholder="0" />
        </div>
        <div className="flex-1 min-w-[200px]">
          <Input label="Amount" placeholder="0" />
        </div>
      </div>

      {/* Category Dropdowns */}
      <div className="flex flex-wrap gap-4 mb-3">
        <div className="flex-1 min-w-[200px]">
          <Dropdown label="Category" option1="Food" option2="Shopping" option3="Medicine" />
        </div>
        <div className="flex-1 min-w-[200px]">
          <Dropdown label="Category" option1="Salary" option2="Bonus" option3="Others" />
        </div>
      </div>

      {/* Note */}
      <div className="w-full mb-6">
        <Input label="Note (optional)" placeholder="Groceries, Rent" />
      </div>

      {/* Button */}
      <button className="bg-gray-900 text-white font-semibold rounded-md px-2 py-4 w-full hover:bg-gray-600">
        Add Transaction
      </button>
    </div>
  );
}
