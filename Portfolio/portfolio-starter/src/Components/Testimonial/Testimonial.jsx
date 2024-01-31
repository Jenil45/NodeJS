import React from 'react'
import './Testimonial.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import profilepic1 from '../../img/profile1.jpg'
import profilepic2 from '../../img/profile2.jpg'
import profilepic3 from '../../img/profile3.jpg'
import profilepic4 from '../../img/profile4.jpg'
import profilepic5 from '../../img/profile5.jpg'
import profilepic6 from '../../img/profile6.jpg'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonial = () => {

    const clients = [
        {
            img : profilepic1,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat voluptas recusandae fuga modi accusantium expedita impedit accusamus odit obcaecati neque vel officiis, numquam minus illum, reiciendis qui rerum amet!"
        },
        {
            img : profilepic2,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat voluptas recusandae fuga modi accusantium expedita impedit accusamus odit obcaecati neque vel officiis, numquam minus illum, reiciendis qui rerum amet!"
        },
        {
            img : profilepic3,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat voluptas recusandae fuga modi accusantium expedita impedit accusamus odit obcaecati neque vel officiis, numquam minus illum, reiciendis qui rerum amet!"
        },
        {
            img : profilepic4,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat voluptas recusandae fuga modi accusantium expedita impedit accusamus odit obcaecati neque vel officiis, numquam minus illum, reiciendis qui rerum amet!"
        },
        {
            img : profilepic5,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat voluptas recusandae fuga modi accusantium expedita impedit accusamus odit obcaecati neque vel officiis, numquam minus illum, reiciendis qui rerum amet!"
        },
        {
            img : profilepic6,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat voluptas recusandae fuga modi accusantium expedita impedit accusamus odit obcaecati neque vel officiis, numquam minus illum, reiciendis qui rerum amet!"
        }
    ]


  return (
    <div className="testimonial" id='Testimonial'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
        </div>

        {/* slider */}
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}
            
        }
        >

            {(clients.map((client , index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="under-testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            }))
        }
        </Swiper>


        <div className="blur t-blur1"></div>
        <div className="blur t-blur2"></div>
    </div>
  )
}

export default Testimonial
