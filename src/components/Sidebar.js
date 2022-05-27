import React from 'react';

const Sidebar = () => {
    return (
        <aside className='sideBar'>
            <h3 className='sideBar__title'>Diskusi 5 teratas</h3>
            <div className='sideBar__topics'>
                <ul>
                    <li>
                        <div className='numberContainer'>
                            <div className='number'>1</div>
                        </div>
                        <a href='/#'>Bersihkan laptop dari butiran debu</a>
                    </li>
                    <li>
                        <div className='numberContainer'>
                            <div className='number'>2</div>
                        </div>
                        <a href='/#'>Cara akses website menggunakan koneksi openVPN</a>
                    </li>
                    <li>
                        <div className='numberContainer'>
                            <div className='number'>3</div>
                        </div>
                        <a href='/#'>Batas aman overclock PC rakitan</a>
                    </li>
                    <li>
                        <div className='numberContainer'>
                            <div className='number'>4</div>
                        </div>
                        <a href='/#'>Cara mengetahui akun Facebook di-hack melalui aplikasi</a>
                    </li>
                    <li>
                        <div className='numberContainer'>
                            <div className='number'>5</div>
                        </div>
                        <a href='/#'>Tutorial: langkah-langkah mencegah website untuk track user</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
 
export default Sidebar;