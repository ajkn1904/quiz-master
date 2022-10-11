import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {

 const data = useLoaderData();
 

    return (
      <div style={{ width: '100%' }}>
        <AreaChart width={700} height={360} data={data.data}
          margin={{
            top: 5, right: 0, left: 0, bottom: 5,
          }}
        >
           <CartesianGrid strokeDasharray="2 2" />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
          <XAxis dataKey='name' />
          <YAxis />
          <Legend />
          <Tooltip></Tooltip>
        </AreaChart>

      </div>
    );
  
}
export default Statistics;