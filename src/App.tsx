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

    const deletePerson = (id: string) => {
        dispatch({
            type: 'DEL',
            payload: { id}
        });
    }

    const handleOrderButton = () => {
        dispatch({
            type: 'ORDER'
        })
    }

    return (
        <div className="p-5">
            <input className="border-2" type="text" value={nameInput} onChange={handleInputChange}/>
            <button onClick={handleAddButton}>Adicionar</button>

            <hr />
            
            <button onClick={handleOrderButton}>Ordenar</button>
            <br />

            Lista de pessoas:
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        <button className='ml-2' onClick={() => deletePerson(item.id)}> Deletar </button>    
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App
