import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from "moment"
import Alert from 'react-bootstrap/Alert';
import './index.css'
// import list from '../list';
import DairyAd from './DairyAd';
import Header from '../Header';

const Dairy = () => {
  
    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            console.log("data get");
            setData(res.data.data)

        } else {
            console.log("error")
        }
    }


    const dltUser = async (id) => {
        console.log(id)
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            getUserData()
            setShow(true)
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
         
        <>
          <Header/>
<button><a href='/dairyad'>Admin</a></button>
            {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    {/* User Delete */}
                </Alert> : ""
            }
            <div className="container1">
              
                <div className='text2'>
                    {
                        data.length > 0 ? data.map((el, i) => {
                          
                            return (
                               
                                <>
                                                         
               <div className='bodys'> 
                  
                                 <section className="Events">
          
                         
                                     
  <a className="Eimage" > <img id="ro" src={`/uploads/${el.userimg}`} height={160} width={249}/></a>
  
<div className='container'>

  <div className="discription">
         
              <p className="mytitle">{el.username}</p></div>
              <div className="add-img">
      <div className="dele">
          <button type="button" id='del'  onClick={() => dltUser(el.id)}>
          Add to Cart
              <span className="list"></span>
          </button>
      </div>
  </div>
      </div>
     
 </section>
 </div>                   </>
                            )
                        }) : ""
                    }
                   
                </div>
            </div>
        </>
    )
}

export default Dairy
