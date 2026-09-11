export function Card({type,balance}) {
  return (
    <div className="h-24 w-40 bg-white border border-gray-600 rounded-md">
        <div className="p-3">
            <div className="text-gray-800  text-l font-semibold">{type}</div>
            <div className="text-gray-800 font-bold text-xl">{balance}</div>
        </div>
    </div>
  );
}