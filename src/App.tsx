import { usePeopleList } from './hooks/peopleList'
import { ChangeEvent, useState } from 'react';


const App = () => {

    const [list, dispatch] = usePeopleList();
    const [nameInput, setNameInput] = useState('');

    const handleAddButton = () => {
        if(nameInput) {
            dispatch({
                type: 'ADD',
                payload: {
                    name: nameInput
                }
            });
            setNameInput('');
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    return (
        <div className="p-5">
            <input className="border-2" type="text" value={nameInput} onChange={handleInputChange}/>
            <button onClick={handleAddButton}>Adicionar</button>

            Lista de pessoas:
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App
