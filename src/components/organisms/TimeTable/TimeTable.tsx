
const TimeTable: React.FunctionComponent<TimeTableType> = (props) => {
    return (
        <>
            <h2>Time Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ticket</th>
                        <th>Startzeit</th>
                        <th>Endzeit</th>
                        <th>Differenz</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </>
    );
}

export default TimeTable;

type TimeTableType = {
    table: Array<TimeTable>
}

interface TimeTable {
    ticket: string,
    startzeit: Date,
    endzeit: Date,
    differenz: number
}