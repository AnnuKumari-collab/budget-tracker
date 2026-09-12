// import { Card } from "./component/Card";
// import { ExpenseForm } from "./component/Expense-form";
// import { Navbar } from "./component/Navbar";

// function App() {
//   return (
    
//     <div className="min-h-screen w-full bg-gray-800">
      
//       <Navbar></Navbar>
//       <div className="max-w-6xl mx-auto px-4 rounded-xl">

//       <div className="flex  items-center justify-between ml-8 mr-8 mt-8 mb-8">
        
//         <Card type="Income" balance="$1,200"></Card>
//          <Card type="Expenses" balance="$800"></Card>
//           <Card type="Balance" balance="$400"></Card>
//       </div>
      
//       <ExpenseForm></ExpenseForm>
      
//       </div>
    
//     </div>
    
    
//   );
// }

// export default App;
import { Card } from "./component/Card";
import { ExpenseForm } from "./component/Expense-form";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-800">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 rounded-xl">
        
      
        <div className="flex flex-wrap gap-4 justify-center md:justify-between m-8">
          <Card type="Income" balance="$1,200" />
          <Card type="Expenses" balance="$800" />
          <Card type="Balance" balance="$400" />
        </div>
        
        
        <ExpenseForm />
      </div>
    </div>
  );
}

export default App;

