import React from 'react';

const List = ({list}) => {
  return (
    <>
    {list.map((ele,i)=><h2 key={i}>{ele}</h2>)}
    </>
    );
};

export default List;