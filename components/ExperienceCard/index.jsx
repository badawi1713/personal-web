import React from 'react';
import PropTypes from 'prop-types';

const ExperienceCard = ({ experience }) => {
    const { title, experienceTitle, subExperienceTitle, years, company, city, description } = experience
    return <div className='flex flex-col gap-4'>
        <h1 className='text-xl text-white font-bold'>{title || "Section Title"}</h1>
        <div className='shadow-md dark:bg-slate-800 p-8 rounded-md bg-white flex flex-col gap-4'>
            <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>{experienceTitle || "Title"} <br /> ({subExperienceTitle || "Sub Title"}) </h2>
            <div className='font-semibold text-base flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-4'>
                <p>{years || "Year Active"}</p>
                <span className='hidden md:block text-xl'>|</span>
                <p>{company || "Company Name"}, {city || "City"}</p>
            </div>
            <p className='text-base'>{
                description || "Experience description"
            }</p>
        </div>
    </div>
};

ExperienceCard.propTypes = {
    experience: PropTypes.object.isRequired
};

export default ExperienceCard;
