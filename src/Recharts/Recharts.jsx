import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
const Recharts = () => {
  const mathData = [
    { id: 1, name: "Alice", mathScore: 10, banglaScore: 20, englishScore: 30 },
    { id: 2, name: "Bob", mathScore: 40, banglaScore: 50, englishScore: 60 },
    {
      id: 3,
      name: "Charlie",
      mathScore: 20,
      banglaScore: 80,
      englishScore: 90,
    },
    { id: 4, name: "Diana", mathScore: 100, banglaScore: 10, englishScore: 20 },
    { id: 5, name: "Eva", mathScore: 30, banglaScore: 40, englishScore: 50 },
    { id: 6, name: "Frank", mathScore: 60, banglaScore: 70, englishScore: 75 },
    { id: 7, name: "Grace", mathScore: 95, banglaScore: 90, englishScore: 29 },
    { id: 8, name: "Henry", mathScore: 88, banglaScore: 83, englishScore: 87 },
    { id: 9, name: "Ivy", mathScore: 82, banglaScore: 15, englishScore: 79 },
    { id: 10, name: "Jack", mathScore: 10, banglaScore: 84, englishScore: 89 },
  ];

  return (
    <div className="flex justify-center">
      <LineChart width={600} height={300} data={mathData}>
        <Line type="monotone" dataKey="mathScore" stroke="red"></Line>
        <Line type="monotone" dataKey="banglaScore" stroke="blue"></Line>
        <Line type="monotone" dataKey="englishScore" stroke="green"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Recharts;
