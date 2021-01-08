import React, { useState, useEffect } from 'react';
import Card from '../components/Cards/Card';
import Span from '../components/Texts/Span';
import Input from '../components/Input/Input';
import Checkbox from '../components/Checkbox/Checkbox';
import HeaderTechs from '../components/Header/HeaderTechs';

//Functions
import { listTechs } from '../functions/Middleware';

//Styles
import '../sass/_sizes.scss';
import '../sass/_boxModel.scss';
import '../sass/listTechs.scss';

const Techs = (props) => {
    //State
    const [total, setTotal] = useState(0);
    const [listed, setList] = useState([]);
    const [liked, setLiked] = useState([]);
    const [properties, setProps] = useState([]);
    const [filterName, setFilter] = useState(null);
    const [filteredList, setFiltered] = useState([]);

    //Handlers
    const handleTotal = () => {
        if(filteredList.length === 0 && !filterName) setTotal(listed.length);
        let filtered = filteredList.length === 0
            ?   [listed.filter(item => item.tech.indexOf(filterName) !== -1).length]
            :   filteredList.map(filter => (
                    listed.filter(item => !filterName 
                        ?   filter === item.type
                        :   filter === item.type && item.tech.indexOf(filterName) !== -1)
                ).length),
            value = 0;
        if(filtered.length > 1) filtered.forEach(filter => value += filter)
        else if(filtered.length === 1) value = filtered[0]
        else value = filtered.length;
        if(value > 0 && !isNaN(value)) setTotal(value);
    };

    const handleLiked = (name_item) => {
        let finded = liked.filter(filter => filter === name_item);
        if(finded.length > 0) setLiked(liked => liked.filter(item => item !== name_item))
        else setLiked(liked => [...liked, name_item]);
    };

    const handleNameFilter = (value) => setFilter(value.length === 0 ? null : value);

    const returnCard = item => {
        return <Card item={ item } 
            isLiked={ liked.indexOf(item.tech) !== -1 }
            event={ e => handleLiked(item.tech) }/>
    };

    //Effect al renderizar
    useEffect(() => {
        const getList = async () => { 
            let techs = await listTechs();
            if(techs.length > 0) setProps(Object.keys(techs[0]));
            setList(techs); 
        };
        let favs = localStorage.getItem('favs');
        if(favs) setLiked(favs.split(','));
        getList();
    }, []);

    //Effect al actualizar listas
    useEffect(() => {
        if(listed.length > 0) handleTotal()
        else setTotal(0);
    }, [listed, filteredList, filterName]);

    //Effect al actualizar favoritos
    useEffect(() => {
        localStorage.setItem('favs', liked);
    }, [liked]);

    return(
        <div>
            <HeaderTechs techs={ liked } />
            <Span text='Filtrar por:' 
                fontSize={ 20 }
                display='block'
                align='center'
                className='m-2-top m-3-bottom'/> 
            <div className='flex justify-around'>
                <Input placeholder='Filtrar por nombre'
                    width='auto'
                    name='nameFilter'
                    value={ filterName }
                    changeEvent={ e => handleNameFilter(e.target.value) }/>
                <Checkbox text='Front-End'
                    event={ setFiltered } />
                <Checkbox text='Back-End'
                    event={ setFiltered } />
                <Checkbox text='Mobile'
                    event={ setFiltered } />
            </div>
            {   listed.length > 0
                    ?   <div className='listed'>
                            {   listed.map(item => {
                                    return (filteredList.length === 0)
                                        ? (filterName && item.tech.indexOf(filterName) !== -1 || !filterName)
                                            ? returnCard(item) : null
                                    :   filteredList.map(filter => (
                                            filter === item.type && 
                                            ((filterName && item.tech.indexOf(filterName) !== -1) ||
                                            !filterName)
                                                ? returnCard(item) : null
                                        ));
                                })
                            }
                        </div>
                    :   null }
            <Span fontSize={ 10 }
                fontWeight='bold'
                text={ `Cantidad total de tecnologías: ${total}`}
                display='block'
                align='center'
                className='p-em2'/>
        </div>
    );
};

export default Techs;