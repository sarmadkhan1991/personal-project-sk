import React from 'react';
import './Contact.css';
import facebook from '../../images/Icons/Facebookicon.png';
import instagram from '../../images/Icons/Instagramicon.png';
import spotify from '../../images/Icons/Spotifyicon.png';
import youtube from '../../images/Icons/Youtubeicon.png';

function Contact () {
    return (
        <div>
            DM me on your preferred platform!
            <div className='social-media-links'>
            <div><a 
                    href='https://www.facebook.com/sirmudkhan1/' 
                    target='_blank'><img src={facebook} alt='facebook' className='icon-img'/></a></div>
            <div><a 
                    href='https://www.instagram.com/sir_mud/' 
                    target='_blank'><img src={instagram} alt='instagram' className='icon-img'/></a></div>
            <div><a 
                    href='https://open.spotify.com/artist/4fALR5pQiG870WtC8EL2ix' 
                    target='_blank'><img src={spotify} alt='spotify' className='icon-img'/></a></div>
            <div><a 
                    href='https://www.youtube.com/channel/UCTNy9R8gN5sb73KT16q0kAQ' 
                    target='_blank'><img src={youtube} alt='youtube' className='icon-img'/></a></div>
            </div>
        </div>
    )
}

export default Contact;