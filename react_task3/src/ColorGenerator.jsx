import { useState } from "react";

// Hexadecimal color generator
const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
    }
    return "#" + color;
};

const ColorGenerator = () => {
    const generateColors = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(hexaColor());
        }
        setColors(arr);
    };

    const [colors, setColors] = useState([]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
            <div className="flex gap-4">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: color }}
                        className="w-40 h-40 flex items-center justify-center text-white font-semibold text-lg rounded"
                    >
                        {color}
                    </div>
                ))}
            </div>

            <button
                onClick={generateColors}
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                Generate Colors
            </button>
        </div>
    );
};

export default ColorGenerator;
