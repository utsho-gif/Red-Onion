import React from 'react';
import useData from '../../../hook/useData';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [datas, setDatas] = useData();
    return (
        <div className='container'>
            <div className="row">
                {
                    datas.slice(12,18).map(dinner => <Dinner key={dinner.id} dinner={dinner}></Dinner>)
                }
            </div>
        </div>
    );
};

export default Dinners;