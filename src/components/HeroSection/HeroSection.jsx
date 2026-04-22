import React from 'react';
import './HeroSection.css';

const galleryImages = [
  { src: '/img/43 2.svg',              alt: '4Seasons team at oil rig site'    },
  { src: '/img/DSC02191 1.svg',              alt: 'Chef plating food in kitchen'     },
  { src: '/img/DSC02325f-Recovered 1.svg',   alt: 'Chef smiling with dish'           },
  { src: '/img/DSC01971 1.svg',                    alt: 'Chef grilling and cooking'        },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__inner">

        {/* ── Heading ── */}
        <h1 className="hero__heading">
          <span className="hero__heading-italic">for catering, services</span>
          {' '}and{' '}
          <span className="hero__heading-bold">General Transportation</span>
          <br />
          and{' '}
          <span className="hero__heading-red">Real Estate Investment</span>
        </h1>

        {/* ── Description box ── */}
        <div className="hero__desc-box">
          <p className="hero__desc">
            <strong>4Seasons</strong> is proudly from Iraq, run full service catering company
            based under the sky of Iraq. It was founded in 2016 by a person who has a
            respective experiences in food service &amp; event management – that culminated
            into this wonderful entity. His leadership qualities and tenacity allowed to bring{' '}
            <strong>4Seasons</strong> Company to where it is today.
          </p>
        </div>

        {/* ── Photo grid ── */}
        <div className="hero__gallery">
          {galleryImages.map((img) => (
            <div className="hero__gallery-item" key={img.src}>
              <img src={img.src} alt={img.alt} className="hero__gallery-img" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
