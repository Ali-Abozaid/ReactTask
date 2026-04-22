import React from 'react';
import './ServicesSection.css';

const services = [
  { img: '/img/4 seasons .pdf 26.svg',                  label: 'CAMP CERVICES',                  first: true  },
  { img: '/img/37 1.svg',                  label: 'Logistics Services',             first: false },
  { img: '/img/32 1.svg',                  label: 'waste management Services',      first: false },
  { img: '/img/42 1.svg',                  label: 'Transportation Services',        first: false },
  { img: '/img/4 seasons .pdf 27.svg',     label: 'General Maintenance',           first: false },
  { img: '/img/12 1.svg',     label: 'Management Pest Control Serivces', first: false },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="services__inner">

        {/* ── Header ── */}
        <div className="services__header">
          <p className="services__eyebrow">TRY OUR DISTINGUISHED SERVICES</p>
          <h2 className="services__title">
            What We <span className="services__title-red">Offer</span>
          </h2>
          <p className="services__subtitle">
            Continuously improve the quality of our food, beverage. hospitality and retail outlets
            to ensure they deliver a highly innovative and contemporary service, meeting the diverse
            needs of our customers expectations and desires
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="services__grid">
          {services.map((svc) => (
            <div
              key={svc.label}
              className={`services__card${svc.first ? ' services__card--first' : ''}`}
            >
              {/* red ellipse only behind first card */}
              {svc.first && (
                <img
                  src="/img/Ellipse 3.svg"
                  alt=""
                  aria-hidden="true"
                  className="services__ellipse"
                />
              )}
              <div className="services__card-img-wrap">
                <img src={svc.img} alt={svc.label} className="services__card-img" />
              </div>
              <p className="services__card-label">{svc.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
