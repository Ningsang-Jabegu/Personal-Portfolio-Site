export default function Contact_Body() {
    return (
        <article className="contact active" data-page="contact">

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2254.1962723408155!2d85.34278966005192!3d27.67986995191101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQwJzQ5LjMiTiA4NcKwMjAnMzguNCJF!5e0!3m2!1sen!2snp!4v1703070341600!5m2!1sen!2snp" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>

                <form action="#" className="form" data-form>

                    <div class="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required
                            data-form-input />

                        <input type="email" name="email" className="form-input" placeholder="Email address" required
                            data-form-input />
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required
                        data-form-input></textarea>

                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>

                </form>

            </section>

        </article>
    )
}