export function Input({ label, placeholder }) {
    return (
        <div>
            <div>
                {label}
                <input
                    placeholder={placeholder}
                    className="border border-gray-400 rounded-md w-full p-2 box-border"
                />
            </div>
        </div>
    );
}
