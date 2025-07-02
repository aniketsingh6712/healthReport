const DataTable = ({ data }) => (
    <table className="mt-4 w-full border border-collapse text-left">
        <thead>
            <tr className="bg-gray-200">
                <th className="p-2 border">Parameter</th>
                <th className="p-2 border">Value</th>
                <th className="p-2 border">Unit</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                    <td className="p-2 border">{row.parameter}</td>
                    <td className="p-2 border">{row.value}</td>
                    <td className="p-2 border">{row.unit}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DataTable;
