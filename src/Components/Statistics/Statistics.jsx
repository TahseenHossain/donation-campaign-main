import { useEffect, useState } from "react";
import { getDonated } from "../../Utility/LocalStorage";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const Statistics = () => {
    const [allCharities, setAllCharities] = useState([]);
    const [alreadyDonated, setAlreadyDonated] = useState([]);

    useEffect(() => {
        const storedDonated = getDonated();
        fetch("Donations.json")
            .then((res) => res.json())
            .then((data) => {
                setAllCharities(data);
                setAlreadyDonated(storedDonated);
            });
    }, []);

    const alreadyDonatedLength = alreadyDonated.length;
    const totalCharities = allCharities.length;
    const myDonation = ((alreadyDonatedLength / totalCharities) * 100).toFixed(2);
    const restDonation = (100 - myDonation).toFixed(2);

    const data = [
        { name: "Total Donation", value: parseFloat(restDonation), fill: '#FF444A' },
        { name: "Your Donation", value: parseFloat(myDonation), fill: '#00C49F' },
    ];

    return (
        <div className="flex justify-center">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={data}
                    outerRadius={150}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend className="w-96 h-3 gap-6">
                </Legend>
            </PieChart>
        </div>
    );
};

export default Statistics