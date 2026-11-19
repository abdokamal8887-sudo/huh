
function Contact() {
    return (
        <>
            <section className="contact" id="contact">

                <div className="contact-heading">

                    <span className="contact-label">GET IN TOUCH</span>

                    <h1>
                        Let's Build Something
                        <span className="contact-gradient"> Amazing</span>
                        Together
                    </h1>

                    <p>
                        Have a project in mind? Let's discuss how
                        we can turn your ideas into reality.
                    </p>

                </div>

                <div className="contact-container">

                    <div className="contact-info">

                        <h2>Contact Information</h2>

                        <p className="contact-description">
                            We're always ready to help you
                            build your next digital experience.
                        </p>

                        <div className="info-card">
                            <div className="info-icon">✉</div>
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@technova.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">☎</div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+20 100 000 0000</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">⌖</div>
                            <div>
                                <h3>Our Location</h3>
                                <p>Egypt</p>
                            </div>
                        </div>

                    </div>

                    <div className="contact-form">

                        <h2>Send Us A Message</h2>

                        <form action="#" method="post">

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Project subject"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="send-btn">
                                Send Message →
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            <footer className="footer">

                <div className="footer-content">

                    <div className="footer-brand">
                        <h2>✦ TechNova</h2>
                        <p>
                            Building the future through
                            technology and innovation.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#service">Services</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-links">
                        <h3>Our Services</h3>
                        <a href="#service">Web Development</a>
                        <a href="#service">UI/UX Design</a>
                        <a href="#service">AI Solutions</a>
                        <a href="#service">Cloud Computing</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 TechNova. All Rights Reserved.</p>
                    <p>Designed with passion ✦</p>
                </div>

            </footer>
        </>
    );
}

export default Contact;
