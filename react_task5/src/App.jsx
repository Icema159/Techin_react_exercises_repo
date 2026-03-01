import { useState } from "react";
import './index.css'
import Card from './components/Cards'
import robots from "./robots"

function App() {
    const [search, setSearch] = useState("");
    const [robotList, setRobotList] = useState(robots);

    const filteredRobots = robotList.filter(robot =>
        robot.name.toLowerCase().includes(search.toLowerCase()) ||
        robot.email.toLowerCase().includes(search.toLowerCase()) ||
        robot.username.toLowerCase().includes(search.toLowerCase())

    );

    const toggleReserved = (id) => {
        const updated = robotList.map(robot =>
            robot.id === id
                ? { ...robot, reserved: !robot.reserved }
                : robot
        );
        setRobotList(updated);
    };


    return (
        <>
            <div className="flex justify-center mt-6">
                <input
                    className="border-2 p-2 rounded-3xl text-center bg-white"
                    type="text"
                    placeholder="Search robots"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap gap-6 justify-center p-8">
                {filteredRobots.map(robot => (
                    <Card
                        key={robot.id}
                        name={robot.name}
                        email={robot.email}
                        username={robot.username}
                        avatar={robot.avatar}
                        reserved={robot.reserved}
                        onToggle={() => toggleReserved(robot.id)}
                    />))}
            </div>
        </>
    )
}

export default App
