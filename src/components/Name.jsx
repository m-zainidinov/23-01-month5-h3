import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, setNames } from '../redux/reducers/name';

const Name = () => {
    const names = useSelector( s => s.name.names);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const storedNames = localStorage.getItem('names');
        if (storedNames) {
            dispatch(setNames(JSON.parse(storedNames)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('names', JSON.stringify(names));
    }, [names])

    const handleAddName = () => {
        if (name.length > 0) {
          dispatch(addName(name));
          setName('');
        }
    };

    const handleClearStorage = () => {
        localStorage.clear();
        dispatch(setNames([]));
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder='Insert a name'
                onChange={ e => {
                    setName(e.target.value)
                }}
            />

            <button onClick={handleAddName}>Add</button>
            <br /><br />
            <button onClick={handleClearStorage}>Clear list</button>

            {
                names.map((item) => {
                    return <p>{item.name}</p>
                })
            }
        </div>
    );
}

export default Name