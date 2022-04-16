import React from 'react';
import useData from '../../../hook/useData';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {
    const [datas, setDatas] = useData();
    return (
        <div className='container'>
            <div className="row">
                {
                    datas.slice(6,12).map(lunch => <Lunch key={lunch.id} lunch={lunch}></Lunch>)
                }
            </div>
        </div>
    );
};

export default Lunches;