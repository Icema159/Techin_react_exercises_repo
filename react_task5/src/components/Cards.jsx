const Card = ({ name, email, username, avatar, reserved, onToggle }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 w-64 text-center border border-gray-100">
            <img
                src={avatar}
                alt={name}
                className="w-32 h-32 mx-auto mb-4 rounded"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm">{email}</p>
            <p className="text-gray-600 text-sm">{username}</p>
            <button
                onClick={onToggle}
                className={`p-2 m-2 rounded-2xl text-white ${reserved ? "bg-gray-500" : "bg-red-500 hover:bg-red-600"
                    }`}
            >
                {reserved ? "Reserved" : "Reserve"}
            </button>
        </div>
    );
};

export default Card