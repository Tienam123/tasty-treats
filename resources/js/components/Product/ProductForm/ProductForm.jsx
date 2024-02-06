/* Default imports */

// Code...
import {useState} from 'react';
import style from './ProductForm.module.scss'

export const ProductForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <form>
            <div>
                {}
            </div>
            <div>
                <label>
                    <input type="text"/>
                </label>
                <label>
                    <select value={selectedOption}
                            onChange={handleChange}>
                        <option value="">40 min</option>
                        <option value="option1">Опция 1</option>
                        <option value="option2">Опция 2</option>
                        <option value="option3">Опция 3</option>
                    </select>
                    <select value={selectedOption}
                            onChange={handleChange}>
                        <option value="">Italian</option>
                        <option value="option1">Опция 1</option>
                        <option value="option2">Опция 2</option>
                        <option value="option3">Опция 3</option>
                    </select>
                    <select value={selectedOption}
                            onChange={handleChange}>
                        <option value="">Totato</option>
                        <option value="option1">Опция 1</option>
                        <option value="option2">Опция 2</option>
                        <option value="option3">Опция 3</option>
                    </select>
                </label>
            </div>
        </form>
    );
};

