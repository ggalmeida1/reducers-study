import { usePeopleList } from './hooks/peopleList'



const App = () => {

    const [list, dispatch] = usePeopleList();

    return (
        <div className="p-5">
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App
