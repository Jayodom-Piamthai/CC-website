import Template from "../components/Template";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import Swal from "sweetalert2";
import * as dayjs from 'dayjs';
function ContactList() {
    
    const [contactList , setContactList] = useState([]);

    useEffect(() => {
        fatchData();
    }, []);

    const fatchData = async () =>{
        try{
            await axios.get(config.api_path + "/contactList").then(res =>{
                if (res.data.message === "success"){
                    setContactList(res.data.result);
                }
            }).catch(err => {
                throw err.response.data;
            });
        }catch(e){
            Swal.fire({
                title: "Error",
                text: e.message,
                icon: "error",
                timer: 2000
            })
        }
    } 

    return (
        <>
            <Template>
                <div className="row">
                {contactList.length > 0 ? contactList.map(item =>
                    <div className='col-4 mt-3'>
                        <div className="card ">
                            <div className="card-header h4 text-center">
                                ชื่อผู้ส่ง : {item.name}
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">หัวข้อ : {item.head}</h4>
                                <hr/>
                                <h5 className="card-text">ข้อความ : {item.text}</h5>
                            </div>
                            <div className="card-footer text-muted">
                                ส่งเมื่อ : {dayjs(item.createdAt).format('DD/MM/YYYY HH:mm')}
                            </div>
                        </div>
                    </div>
                ): ''}
                </div>
            </Template>
        </>
    )
}
export default ContactList;