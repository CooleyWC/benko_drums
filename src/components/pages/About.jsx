import React from 'react';

function About() {
    return (
        <div className='bg-[#0B090A] min-h-screen'>
            <header className='flex justify-center'>
                <h1 className='text-5xl text-center py-8 mt-6 text-slate-300'>About Tom</h1>
            </header>
            <div className="relative min-h-screen bg-[#0B090A]">
                <div className="absolute inset-0 sm:bg-cover sm:bg-center bg-right-top"
                    style={{backgroundImage: "url('src/assets/images/chi-3.png')"}}
                >
                    <div className='absolute inset-0 bg-black opacity-75 sm:opacity-80'></div>
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-3 h-full pt-12 pb-10">
                    <div className='min-h-[100px]'>
                        <img className='object-cover w-full h-[400px] overflow-hidden p-5' src='src/assets/images/benko_headshot.png'/>
                    </div>
                    <div className='min-h-[100px] sm:col-span-2'>
                        <p className='px-9 py-4 first-letter:float-left first-letter:text-7xl first-letter:pr-2 first-letter:mt-[-5px] text-gray-200 text-lg first-letter:text-[#e5383b] leading-8'>Tom Benko resides in Chicago working as a drummer, composer, educator and curator. Tom performs with Blue Man Group Chicago at the Briar Street Theater as one of their drummers and is the Briar Street Theater Drum School Teacher helping develop new Blue Man specifically with their drumming abilities. As a freelancer, Tom holds down the drum chair for Kevin Presbrey, Greg Hyde, Sam Rae, and Taylor Rodgers and curates a bi-montly music series, Emanation, focused on diversity and eclecticism of Chicago's music scene. As a composer and clinician, Tom tours as a soloist performing original works for electro-acoustic drum kit and built percussion. </p> 
                        <p className='px-9 py-4 text-gray-200 text-lg leading-8'>As a soloist, Tom combines electrified hammered dulcimer, custom built instruments, hand held
                        percussion, live looping and drum kit to create an eclectic blend of sounds for his solo
                        material. Tom released his first solo EP, Rodina, March 29th, 2019.
                        Tom books and hosts a bi-monthly music series and collective called Emanation at Century
                        Mallet in the famous Deagon Music Building in the Ravenswood neighborhood on Chicago's
                        northside.
                        Tom is an Innovative Percussion Education artist, a Sabian Cymbals endorser, an Etymotic
                        Signature Artist, and a member of Percussive Arts Society.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
