import React, {useState, useEffect} from 'react';
import { useAuth } from '../../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import {Spinner} from "../"
import { BASE_URL } from '../../utils/fetchData';
import AdminNav from './AdminNav';

const AdminRoute = () => {
    const [ok, setOk] = useState(false);
    const {auth, setAuth} = useAuth();
    useEffect(() => {
        const authCheck = async () => {
            // const res = await axios.get("http://localhost:5000/api/v1/auth/admin-auth");
            const res = await axios.get(`${BASE_URL}/api/v1/auth/admin-auth`);
            if (res.data.ok) {
                setOk(true);
            }
            else{
                setOk(false);
            }
        }
        if (auth?.token) {
            authCheck();
        }
    } ,[auth?.token]);

  return ( 
    ok ? (
      <div className="min-h-screen bg-gray-900">
        <AdminNav />
        <main className="lg:ml-64 min-h-screen bg-gray-900">
          <Outlet />
        </main>
      </div>
    ) : <Spinner path=''/>
  ) 
}

export default AdminRoute;