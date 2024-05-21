import Template from "../components/Template";
import { useState } from "react";
import axios from "axios";
import config from "../config";
import Swal from "sweetalert2";
function Contact() {
    const [contact ,setContact] = useState({});

    const hendleSave = async () =>{
        try{
            axios.post(config.api_path + "/contactInsert", contact).then(res => {
                if (res.data.message === 'success') {
                    Swal.fire({
                        title: 'ส่งข้อความสำเร็จ',
                        text: 'ขอบคุณที่ส่งข้อความหาเรา',
                        icon: 'success',
                        timer: 1000
                    })
                    setContact({
                        name: '',
                        head: '',
                        text: ''
                    })
                }
            }).catch(err =>{
                throw err.response.data
            })
        }catch(e){
            Swal.fire({
                title: "Error",
                text: e.message,
                icon: "error",
                timer: 2000
            })
        }
    }

    const check = () =>{
        if (!contact.name) {
            Swal.fire({
                title: 'กรอกข้อมูลไม่ครบ',
                text: 'โปรดกรอกชื่อผู้ส่ง',
                icon: 'warning',
                timer: 2000
            })
        }else if (!contact.head){
            Swal.fire({
                title: 'กรอกข้อมูลไม่ครบ',
                text: 'โปรดกรอกหัวข้อ',
                icon: 'warning',
                timer: 2000
            })
        }else if (!contact.text){
            Swal.fire({
                title: 'กรอกข้อมูลไม่ครบ',
                text: 'โปรดระบุข้อความ',
                icon: 'warning',
                timer: 2000
            })
        }else{
            hendleSave();
        }
    }

    return (
        <>
            <Template>
                <div className="container" >
                    <div class=" form-floating mb-3">
                        <input type="text" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })}  class="form-control" placeholder="name" />
                        <label >ชื่อผู้ส่ง</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input value={contact.head} onChange={e => setContact({ ...contact, head: e.target.value })} class="form-control"  placeholder="head" />
                        <label>หัวข้อ</label>
                    </div>
                    <div class="form-floating" >
                    <input value={contact.text} onChange={e => setContact({...contact, text: e.target.value})} class="form-control"  placeholder="head" />
                        <label>ข้อความ</label>
                    </div>
                    <div className="mt-3 text-center">
                        <button className="btn btn-warning btn-lg" onClick={check} >
                            <strong>SEND</strong>
                        </button>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default Contact;