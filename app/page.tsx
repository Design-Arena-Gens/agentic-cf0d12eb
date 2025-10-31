'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! We'll contact you soon.`)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const cars = [
    {
      id: 1,
      name: 'Honda City',
      year: 2019,
      km: '45,000 km',
      fuel: 'Petrol',
      price: '₹7,50,000',
      icon: '🚗'
    },
    {
      id: 2,
      name: 'Maruti Swift',
      year: 2020,
      km: '32,000 km',
      fuel: 'Petrol',
      price: '₹5,75,000',
      icon: '🚙'
    },
    {
      id: 3,
      name: 'Hyundai Creta',
      year: 2021,
      km: '28,000 km',
      fuel: 'Diesel',
      price: '₹12,50,000',
      icon: '🚐'
    },
    {
      id: 4,
      name: 'Toyota Innova',
      year: 2018,
      km: '65,000 km',
      fuel: 'Diesel',
      price: '₹14,25,000',
      icon: '🚌'
    },
    {
      id: 5,
      name: 'Tata Nexon',
      year: 2022,
      km: '15,000 km',
      fuel: 'Electric',
      price: '₹11,00,000',
      icon: '⚡'
    },
    {
      id: 6,
      name: 'Mahindra Scorpio',
      year: 2019,
      km: '52,000 km',
      fuel: 'Diesel',
      price: '₹10,75,000',
      icon: '🚙'
    }
  ]

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>🚗 Somu Cars</h1>
            </div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#inventory">Inventory</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <h2>Find Your Perfect Second-Hand Car</h2>
            <p>Quality pre-owned vehicles at unbeatable prices. Trusted by thousands of happy customers.</p>
            <a href="#inventory" className="cta-button">Browse Our Inventory</a>
          </div>
        </section>

        <section id="about" className="features">
          <div className="container">
            <h2>Why Choose Somu Cars?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Quality Assured</h3>
                <p>Every vehicle is thoroughly inspected and certified by our expert mechanics.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Best Prices</h3>
                <p>Competitive pricing with flexible financing options to suit your budget.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Free Service</h3>
                <p>Complimentary first service and warranty on all our vehicles.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Trusted Dealer</h3>
                <p>Over 15 years of experience in the second-hand car market.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="inventory" className="inventory">
          <div className="container">
            <h2>Featured Inventory</h2>
            <div className="cars-grid">
              {cars.map(car => (
                <div key={car.id} className="car-card">
                  <div className="car-image">
                    <span style={{ fontSize: '5rem' }}>{car.icon}</span>
                  </div>
                  <div className="car-details">
                    <h3>{car.name}</h3>
                    <p className="car-specs">
                      {car.year} • {car.km} • {car.fuel}
                    </p>
                    <div className="car-price">{car.price}</div>
                    <button className="view-button">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>

              <div className="contact-info">
                <div className="info-card">
                  <h3>📍 Visit Us</h3>
                  <p>
                    Somu Cars Showroom<br />
                    123 Main Road, Auto Nagar<br />
                    City - 500001<br />
                    India
                  </p>
                </div>
                <div className="info-card">
                  <h3>📞 Call Us</h3>
                  <p>
                    Sales: +91 98765 43210<br />
                    Service: +91 98765 43211<br />
                    Mon-Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
                <div className="info-card">
                  <h3>✉️ Email Us</h3>
                  <p>
                    sales@somucars.com<br />
                    service@somucars.com<br />
                    info@somucars.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Somu Cars. All rights reserved. Quality Second-Hand Cars You Can Trust.</p>
        </div>
      </footer>
    </>
  )
}
