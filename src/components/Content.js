import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import axios from 'axios';

const Content = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://62bdc90cbac21839b60b2419.mockapi.io/comments').then((res) => {
            setData(res.data);
        })
    }, []);

    return (
        <div className='content'>
            <h1 className='content__title'>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h1>
            <p className='content__describe'>Mau tanya, akhir-akhir ini webcam sering nyla sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi internet.</p>

            <h2>Komentar</h2>
            {data.length > 0 &&
                data.map((item, idx) => {
                    return <Comment key={idx} data={item} />;
                }
            )}
        </div>
    );
}
 
export default Content;