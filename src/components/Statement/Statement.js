
import { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { QuizBuzz } from '../Layouts/Layouts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},];



const FlowCart = () => {
    const quizDataLoader = useContext(QuizBuzz);
    const data = (quizDataLoader.data)
    
    return (
        <div className='mt-28 border border-white-700 text-white'>
            <h1 className='text-3xl font-bold py-10'>Statement</h1>
            <div className='py-14 flex justify-center'>
             <ResponsiveContainer width="100%" height={400}>
                <BarChart width="100%" height={200} data={data}>
                    <XAxis dataKey="name" stroke="#000" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#F472B6" barSize={30} />
                </BarChart>
            </ResponsiveContainer>

            </div>
        </div>
    );
};

export default FlowCart;