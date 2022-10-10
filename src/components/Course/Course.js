import React from 'react';

const Course = ({courseInf,handleEnrolled}) => {
    return (
        <div className='flex flex-col basis-1/4 p-4 shadow-md rounded hover:shadow-2xl hover:-translate-y-2 cursor-pointer duration-300'>
          <img className='rounded-md' src="https://cdn.10minuteschool.com/lg/images/thumbnails/HSC_2023_Short_Syllabus_Crash_Course_Course_Thumbnail_1.91x1.jpg" alt="" />
          <div className='flex flex-col'>
            <strong className='mt-2 leading-5 text-left'>{courseInf.title.slice(0,45)}</strong>
            <span className='text-left mt-1'>{courseInf.first_name} {courseInf.last_name}</span>
            <span className='text-left'>Rate: {courseInf.rating}</span>
            <strong className='text-left'>${courseInf.price}</strong>
          </div>
          <button onClick={()=> handleEnrolled(courseInf)} className='bg-blue-400 hover:bg-blue-500 duration-200 rounded font-bold text-white py-2'>Enroll Now</button>
        </div>
    );
};

export default Course;