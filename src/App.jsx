import { Card } from "./component/Card";
import { ExpenseForm } from "./component/Expense-form";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    
    <div className="min-h-screen w-full bg-gray-800">
      
      <Navbar></Navbar>
      <div className="
    
      ml-87 mr-87 rounded-xl">
      
      <div className="flex  items-center justify-between ml-8 mr-8 mt-8 mb-8">
        
        <Card type="Income" balance="$1,200"></Card>
         <Card type="Expenses" balance="$800"></Card>
          <Card type="Balance" balance="$400"></Card>
      </div>
      
      <ExpenseForm></ExpenseForm>
      
      </div>
    
    </div>
    
    
  );
}

export default App;
